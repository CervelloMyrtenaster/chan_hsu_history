  // DOM 元素和狀態
  const sidebar = document.getElementById("sidebar");
  const contentDiv = document.getElementById("content");
  const monthList = document.getElementById("monthList");
  const menuToggle = document.querySelector(".menu-toggle");
  const dashboard = document.getElementById("dashboard");

  const config = {
    quiz: {
        totalQuestions: 5,
        minLabelLength: 20
    },
    cloze: {
        totalQuestions: 5,
        minLabelLength: 20,
        keywordMinLength: 3,
        keywordMaxLength: 16
    }
  };

  let currentMonth = null;
  let currentDay = null;
  let currentSearch = null;
  let showingDashboard = false;
  let isSpeaking = false;
  let isPaused = false;
  let uniqueYears = [];
  let trendChartInstance = null;

  // 統一管理主要畫面的顯示狀態
  function showView(viewName) {
      window.speechSynthesis.cancel();
      contentDiv.style.display = 'none';
      sidebar.style.display = 'none';
      dashboard.classList.remove('active');
      quizContainer.classList.remove('active');
      clozeContainer.classList.remove('active');

      if (viewName === 'main') {
          contentDiv.style.display = '';
          sidebar.style.display = '';
      } else if (viewName === 'dashboard') {
          sidebar.style.display = '';
          dashboard.classList.add('active');
      } else if (viewName === 'quiz') {
          quizContainer.classList.add('active');
      } else if (viewName === 'cloze') {
          clozeContainer.classList.add('active');
      }
  }

  // 帶有淡入淡出效果的內容更新函數
  function updateContentWithFade(newHTML, callback) {
      contentDiv.classList.add('fade-out');
      setTimeout(() => {
          contentDiv.innerHTML = newHTML;
          contentDiv.scrollTop = 0;
          contentDiv.classList.remove('fade-out');
          if (callback) {
            callback();
          }
      }, 200);
  }

  // 圖片檢測正則式
  const imgRe = /\.(jpe?g|png|gif|webp|bmp|svg)$/i;

  // 統計計算函數
  function calculateStats(selectedYear = 'all') {
      let totalRecords = 0, activeDays = 0, maxCount = 0;
      let mostActiveMonth = '-';
      let monthCounts = {};
      const yearRegex = /^(\d{4})年/;

      for (const m in records) {
          for (const d in records[m]) {              
              if (Array.isArray(records[m][d]) && records[m][d].length > 0) {
                  let dayHasValidRecord = false;                 
                  records[m][d].forEach(record => {
                      let yearMatch = record.label.match(yearRegex);
                      let recordYear = yearMatch ? yearMatch[1] : null;
                      if (selectedYear === 'all' || selectedYear === recordYear) {
                          totalRecords++;                          
                          monthCounts[m] = (monthCounts[m] || 0) + 1;
                          dayHasValidRecord = true;
                      }
                  });
                  if (dayHasValidRecord) {
                        activeDays++;
                  }
              }
          }
      }

      for (const m in monthCounts) {
          if (monthCounts[m] > maxCount) {
              maxCount = monthCounts[m];
              mostActiveMonth = m;
          }
      }

      return {
          totalRecords,
          activeDays,
          mostActiveMonth,
          averagePerDay: activeDays > 0 ? (totalRecords / activeDays).toFixed(1) : 0
      };
  }

  // 更新統計儀表板
  function updateDashboard(selectedYear = 'all') {
      const stats = calculateStats(selectedYear);
      document.getElementById('totalRecords').textContent = stats.totalRecords;
      document.getElementById('activeDays').textContent = stats.activeDays;
      document.getElementById('mostActiveMonth').textContent = stats.mostActiveMonth;
      document.getElementById('averagePerDay').textContent = stats.averagePerDay;
  }

  // 創建熱力圖
  function createHeatmap(selectedYear = 'all') {
      const heatmapContainer = document.getElementById('heatmap');
      heatmapContainer.innerHTML = '';

      // 如果選擇所有年份 則顯示最新的那一年
      const targetYear = (selectedYear === 'all' && uniqueYears.length > 0) 
          ? Math.max(...uniqueYears.map(Number)) 
          : Number(selectedYear);

      if (!targetYear) {
        heatmapContainer.innerHTML = '<p style="text-align: center;">無資料顯示</p>';
        return;
      }

      // 計算每日記錄數量
      const dailyCounts = {};
      const yearRegex = /^(\d{4})年/;

      for (const m in records) {
          for (const d in records[m]) {
              if (Array.isArray(records[m][d]) && records[m][d].length > 0) {
                  let dayCount = 0;
                  records[m][d].forEach(record => {
                      const yearMatch = record.label.match(yearRegex);
                      const recordYear = yearMatch ? yearMatch[1] : null;
                      if (String(targetYear) === recordYear) {
                          dayCount++;
                      }
                  });
                  if (dayCount > 0) {
                      const key = `${m}-${d}`;
                      dailyCounts[key] = dayCount;
                  }
              }
          }
      }

      // 找出最大值用於計算等級
      const maxCount = Math.max(1, ...Object.values(dailyCounts));
      const startDate = new Date(targetYear, 0, 1);
      const dayOffset = startDate.getDay();

      for (let i = 0; i < dayOffset; i++) {
          const placeholder = document.createElement('div');
          placeholder.className = 'heatmap-day';
          placeholder.style.background = 'none';
          heatmapContainer.appendChild(placeholder);
      }

      // 創建一年的格子
      for (let i = 0; i < 366; i++) {
          const currentDate = new Date(targetYear, 0, i + 1);
          if (currentDate.getFullYear() !== targetYear) continue;

          const month = currentDate.getMonth() + 1;
          const dayOfMonth = currentDate.getDate();
          const key = `${month}-${dayOfMonth}`;
          const count = dailyCounts[key] || 0;

          let level = 0;
          if (count > 0) {
              level = Math.min(4, Math.ceil((count / maxCount) * 4));
          }

          const dayElement = document.createElement('div');
          dayElement.className = `heatmap-day level-${level}`;
          dayElement.title = `${targetYear}/${month}/${dayOfMonth}：${count}筆記錄`;
          dayElement.dataset.month = month;
          dayElement.dataset.day = dayOfMonth;
          dayElement.dataset.count = count;

          // 添加點擊事件
          if (count > 0) {
              dayElement.style.cursor = 'pointer';
              dayElement.addEventListener('click', () => {
                  showRecords(month, dayOfMonth);
              });
              dayElement.addEventListener('mouseenter', (e) => {
                  e.target.style.transform = 'scale(1.3)';
                  e.target.style.zIndex = '10';
                  e.target.style.boxShadow = '0 0 5px rgba(0,0,0,0.3)';
              });
              dayElement.addEventListener('mouseleave', (e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.zIndex = '1';
                  e.target.style.boxShadow = 'none';
              });
          }

          heatmapContainer.appendChild(dayElement);
      }
  }
  
  // 顯示/隱藏統計儀表板
  function toggleDashboard() {
      showingDashboard = !showingDashboard;
      if (showingDashboard) {
          showView('dashboard');
          populateYearFilter();
          if (!trendChartInstance) createTrendChart();          
          const selectedYear = document.getElementById('year-filter').value;
          refreshDashboard(selectedYear);          
          document.getElementById('dashboardBtn').textContent = '返回記錄';
      } else {
          showView('main');
          document.getElementById('dashboardBtn').textContent = '統計儀表板';
      }
  }

  // 建立左側月份/日期清單(只列出有資料的日期)
  function buildMonthList() {
    monthList.innerHTML = "";
    for (let m = 1; m <= 12; m++) {
      const mStr = String(m);
      const monthItem = document.createElement("li");
      monthItem.className = "month-item";
      monthItem.textContent = m + "月";

      // 挑出此月份有實際內容(length>0)的日期
      const daysObj = records[mStr] || {};
      const daysWithData = Object.keys(daysObj).filter(d => Array.isArray(daysObj[d]) && daysObj[d].length > 0)
                        .sort((a,b)=> Number(a) - Number(b));

      if (daysWithData.length === 0) {
        continue;
      }

      const dayList = document.createElement("ul");

      daysWithData.forEach(d => {
        const dayItem = document.createElement("li");
        dayItem.className = "day-item";
        dayItem.textContent = d + "日";
        dayItem.dataset.month = mStr;
        dayItem.dataset.day = String(d);
        dayItem.classList.add("day-item");
        dayItem.addEventListener("click", (e) => {
          e.stopPropagation();
          document.querySelectorAll(".day-item.selected").forEach(el => el.classList.remove("selected"));
          dayItem.classList.add("selected");
          showRecords(m, d);
        });
        dayList.appendChild(dayItem);
      });

      monthItem.addEventListener("click", () => {
        dayList.classList.toggle("open");
      });

      monthItem.appendChild(dayList);
      monthList.appendChild(monthItem);
    }
  }

  function createRecordElement(item) {
      const div = document.createElement("div");
      div.className = "record";

      if (item.type === "text") {
        const p = document.createElement("p");
        p.innerHTML = item.content;
        div.appendChild(p);
      } else if (item.type === "link") {
        const url = item.content || "";
        const label = item.label || url;

        // 若為圖片直連，直接顯示圖片
        if (imgRe.test(url)) {
          const img = document.createElement("img");
          img.src = url;
          img.alt = item.label;
          div.appendChild(img);
          if (label) {
            const cap = document.createElement("p");
            cap.innerHTML = label;
            div.appendChild(cap);
          }
        } else {
          // 一般連結，使用 <a> 並用 textContent 以避免 raw HTML 注入
          const a = document.createElement("a");
          a.href = url;
          a.target = "_blank";
          a.rel = "noopener";
          a.innerHTML = label;
          div.appendChild(a);
        }
      }
      return div;
  }

  // 顯示記錄(日期頁面)
  function showRecords(month, day, skipPush = false) {
    window.speechSynthesis.cancel();
    showView('main');
    const monthStr = String(month);
    const dayStr = String(day);

    // 隱藏儀表板
    if (showingDashboard) {
        showingDashboard = false;
        dashboard.classList.remove('active');
        document.getElementById('dashboardBtn').textContent = '統計儀表板';
    }

    // 更新狀態
    currentMonth = monthStr;
    currentDay = dayStr;
    currentSearch = null;

    const monthObj = records[monthStr];
    const list = (monthObj && Array.isArray(monthObj[dayStr])) ? monthObj[dayStr] : null;

    let pageHeaderHTML = `
      <div class="page-header">
        <h2>${monthStr}月${dayStr}日 展旭記錄</h2>
    `;
    if (list && list.length > 0) {
        pageHeaderHTML += `<button id="tts-button" title="朗讀本頁內容">▶️ 朗讀</button>`;
    }
    pageHeaderHTML += `</div>`;

    let newContentHTML = pageHeaderHTML;

    if (!list || list.length === 0) {
      newContentHTML += "<p>此日期尚無記錄</p>";
    } else {
      list.forEach(item => {
        newContentHTML += createRecordElement(item).outerHTML;
      });
    }

    const wikiLinkContainer = document.createElement('div');
    wikiLinkContainer.style.marginTop = '30px';
    wikiLinkContainer.className = 'external-link-section';
    wikiLinkContainer.innerHTML = `
      <h3>看看真實世界的這一天</h3>
      <p>
        <a href="https://zh.wikipedia.org/wiki/${month}月${day}日" target="_blank" rel="noopener">
          點擊查看維基百科上「${month}月${day}日」發生的大事
        </a>
      </p>
    `;

    newContentHTML += wikiLinkContainer.outerHTML;

    updateContentWithFade(newContentHTML, () => {
        const ttsButton = document.getElementById('tts-button');
        if (ttsButton) {
            ttsButton.addEventListener('click', handleTTSClick);
        }
    });

    // 更新網址(絕對 URL)
    if (!skipPush) {
      const params = new URLSearchParams();
      params.set("month", monthStr);
      params.set("day", dayStr);
      const newUrl = `${location.origin}${location.pathname}?${params.toString()}`;
      window.history.pushState({ month: monthStr, day: dayStr }, "", newUrl);
    }
    
    highlightSidebar(monthStr, dayStr);
    sidebar.classList.remove("open");
  }

  function highlightText(text, keyword) {
    if (!keyword || !text) {
        return text;
    }
    const safeKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(safeKeyword, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
}

  // 搜尋功能(結果中的日期可點回到該日) 
  function searchRecords(keyword, skipPush = false) {
    window.speechSynthesis.cancel();
    showView('main');
    
    const kw = String(keyword || "").trim();
    if (!kw) return;

    // 隱藏儀表板
    if (showingDashboard) {
        showingDashboard = false;
        dashboard.classList.remove('active');
        document.getElementById('dashboardBtn').textContent = '統計儀表板';
    }

    currentMonth = null;
    currentDay = null;
    currentSearch = kw;

    let newContentHTML = `<h2>搜尋結果：「${kw}」</h2>`;
    let found = false;
    const lower = kw.toLowerCase();

    for (let m in records) {
      for (let d in records[m]) {
        const arr = records[m][d];
        if (!Array.isArray(arr) || arr.length === 0) continue;

        arr.forEach(item => {
          const label = item.label || "";
          const content = item.content || "";
          if ((label && label.toLowerCase().includes(lower)) || (content && content.toLowerCase().includes(lower))) {
            found = true;

            const resultContainer = document.createElement("div");
            resultContainer.className = "record";

            // 可點的日期連結，點擊會跳到該日期並更新 URL
            const dateLink = document.createElement("a");
            dateLink.href = "#";
            dateLink.style.fontWeight = "bold";
            dateLink.textContent = `${m}月${d}日`;
            dateLink.addEventListener("click", (e) => {
              e.preventDefault();
              showRecords(m, d);
            });

            // 建立一個新的 item 物件，其 label 經過高亮處理
            const highlightedItem = {
                ...item,
                label: highlightText(item.label, kw) 
            };
            const recordElement = createRecordElement(highlightedItem);

            resultContainer.appendChild(dateLink);
            resultContainer.appendChild(document.createElement("br"));
            while (recordElement.firstChild) {
                resultContainer.appendChild(recordElement.firstChild);
            }
            newContentHTML += resultContainer.outerHTML;
          }
        });
      }
    }

    if (!found) newContentHTML += "<p>查無符合的記錄</p>";

    updateContentWithFade(newContentHTML);

    // 更新網址(絕對 URL)
    if (!skipPush) {
      const params = new URLSearchParams();
      params.set("search", kw);
      const newUrl = `${location.origin}${location.pathname}?${params.toString()}`;
      window.history.pushState({ search: kw }, "", newUrl);
    }

    sidebar.classList.remove("open");
  }

  // 隨機功能(只在有資料的日期中挑)
  function randomRecord() {
    const monthsWithData = Object.keys(records).filter(m => {
      return Object.keys(records[m] || {}).some(d => Array.isArray(records[m][d]) && records[m][d].length > 0);
    });
    if (monthsWithData.length === 0) return alert("尚無任何記錄可隨機顯示");

    const randMonth = monthsWithData[Math.floor(Math.random() * monthsWithData.length)];
    const daysWithData = Object.keys(records[randMonth]).filter(d => Array.isArray(records[randMonth][d]) && records[randMonth][d].length > 0);
    const randDay = daysWithData[Math.floor(Math.random() * daysWithData.length)];
    showRecords(randMonth, randDay);
  }

  // 分享功能(會分享絕對網址)
  async function shareCurrentView() {
    let shareUrl;
    if (currentSearch) {
      shareUrl = `${location.origin}${location.pathname}?search=${encodeURIComponent(currentSearch)}`;
    } else if (currentMonth && currentDay) {
      shareUrl = `${location.origin}${location.pathname}?month=${encodeURIComponent(currentMonth)}&day=${encodeURIComponent(currentDay)}`;
    } else {
      shareUrl = window.location.href;
    }

    const shareText = "快來看看歷史上的展旭記錄！";

    if (navigator.share) {
      try {
        await navigator.share({ title: "歷史上的展旭", text: shareText, url: shareUrl });
      } catch (err) {
        console.log("分享取消或失敗：", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("分享連結已複製到剪貼簿！");
      } catch (e) {
        alert("無法複製連結，請手動複製：" + shareUrl);
      }
    }
  }

  // sidebar highlight
  function highlightSidebar(monthStr, dayStr) {
    const prev = monthList.querySelectorAll(".day-item.selected");
    prev.forEach(n => n.classList.remove("selected"));
    const selector = `.day-item[data-month="${monthStr}"][data-day="${dayStr}"]`;
    const now = monthList.querySelector(selector);
    if (now) now.classList.add("selected");
  }

  // 切換日期的通用函數
  function switchDay(direction) {
    const days = Array.from(document.querySelectorAll('.day-item'));
    if (days.length === 0) return; // 如果完全沒有記錄，直接返回

    const selected = document.querySelector('.day-item.selected');
    let newIndex = -1;

    if (selected) {
      // 情況一：目前有選取的日期
      const currentIndex = days.indexOf(selected);
      if (currentIndex === -1) return;
      newIndex = currentIndex + direction;

    } else {
      // 情況二：目前沒有選取的日期，根據 currentMonth 和 currentDay 尋找下一個目標
      if (!currentMonth || !currentDay) return;
      const currentDateValue = parseInt(currentMonth) * 100 + parseInt(currentDay);

      if (direction === 1) {
        // 尋找後一日
        for (let i = 0; i < days.length; i++) {
          const dayValue = parseInt(days[i].dataset.month) * 100 + parseInt(days[i].dataset.day);
          if (dayValue > currentDateValue) {
            newIndex = i;
            break;
          }
        }
      } else {
        // 尋找前一日
        for (let i = days.length - 1; i >= 0; i--) {
          const dayValue = parseInt(days[i].dataset.month) * 100 + parseInt(days[i].dataset.day);
          if (dayValue < currentDateValue) {
            newIndex = i;
            break;
          }
        }
      }
    }

    // 檢查計算出的 newIndex 是否在有效範圍內
    if (newIndex < 0 || newIndex >= days.length) {
      return;
    }

    // 移除舊的 selected class
    if (selected) {
      selected.classList.remove('selected');
    }

    // 取得新的目標日期元素，並觸發點擊
    const newDay = days[newIndex];
    newDay.classList.add('selected');
    newDay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    newDay.click();
  }

  // 繪製年度趨勢圖
  function createTrendChart() {
      if (trendChartInstance) {
          trendChartInstance.destroy();
      }
      const yearRegex = /^(\d{4})年/;
      const yearData = {};

      // 準備資料
      for (const m in records) {
          for (const d in records[m]) {
              if (Array.isArray(records[m][d]) && records[m][d].length > 0) {
                  records[m][d].forEach(record => {
                      const yearMatch = record.label.match(yearRegex);
                      const year = yearMatch ? yearMatch[1] : null;
                      if (year) {
                          if (!yearData[year]) {
                              yearData[year] = Array(12).fill(0);
                          }
                          yearData[year][parseInt(m) - 1] += 1;
                      }
                  });
              }
          }
      }
      
      const colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe'];
      const datasets = Object.keys(yearData).sort().map((year, index) => ({
          label: `${year}年`,
          data: yearData[year],
          backgroundColor: colors[index % colors.length],
          borderColor: colors[index % colors.length],
          tension: 0.1,
          fill: false,
      }));

      const ctx = document.getElementById('trend-chart').getContext('2d');
      trendChartInstance = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
              datasets: datasets
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                  legend: {
                      position: 'top',
                  },
                  title: {
                      display: true,
                      text: '每月記錄數趨勢'
                  }
              }
          }
      });
  }

  // 填充年份篩選器的選項
  function populateYearFilter() {
      const yearFilter = document.getElementById('year-filter');
      if (yearFilter.options.length > 1) return;

      const yearRegex = /^(\d{4})年/;
      const years = new Set();
      allRecordsFlat.forEach(record => {
          const yearMatch = record.label.match(yearRegex);
          if (yearMatch) years.add(yearMatch[1]);
      });
      
      uniqueYears = Array.from(years).sort((a, b) => b - a);

      yearFilter.innerHTML = '<option value="all">所有年份</option>';
      uniqueYears.forEach(year => {
          const option = document.createElement('option');
          option.value = year;
          option.textContent = `${year}年`;
          yearFilter.appendChild(option);
      });
  }

  // 刷新整個儀表板的總控制函數
  function refreshDashboard(selectedYear) {
      wordCloudCreated = false; 
      updateDashboard(selectedYear);
      createHeatmap(selectedYear);
      createWordCloud(selectedYear);
  }

  // 事件監聽器設定
  document.getElementById("searchBtn").addEventListener("click", () => {
    const kw = document.getElementById("searchInput").value.trim();
    if (kw) searchRecords(kw);
  });

  document.getElementById("searchInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const kw = document.getElementById("searchInput").value.trim();
      if (kw) searchRecords(kw);
    }
  });

  document.getElementById("dashboardBtn").addEventListener("click", toggleDashboard);
  document.getElementById("prevDay").addEventListener("click", function () {switchDay(-1);});
  document.getElementById("nextDay").addEventListener("click", function () {switchDay(1);});
  document.getElementById("randomBtn").addEventListener("click", randomRecord);
  document.getElementById("shareBtn").addEventListener("click", shareCurrentView);

  document.getElementById('year-filter').addEventListener('change', (e) => {
      refreshDashboard(e.target.value);
  });

  if (menuToggle) {
      menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));
  }

  // 點擊選單外部區域以關閉選單
  document.addEventListener("click", function(event) {
    const isMenuOpen = sidebar.classList.contains("open");
    const isClickInsideMenu = sidebar.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);
    if (isMenuOpen && !isClickInsideMenu && !isClickOnToggle) {
      sidebar.classList.remove("open");
    }
  });

  // 主題切換
  document.getElementById("theme-toggle").addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
          this.textContent = "淺色模式";
          localStorage.setItem('theme', 'dark');
      } else {
          this.textContent = "深色模式";
          localStorage.setItem('theme', 'light');
      }
  });

  // 點擊標題回到首頁
  document.getElementById("homeBtn").addEventListener("click", () => {
      if (showingDashboard) {
          showingDashboard = false;
          dashboard.classList.remove('active');
          document.getElementById('dashboardBtn').textContent = '統計儀表板';
      }

      const today = new Date();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      showRecords(month, day);
      
      sidebar.classList.remove("open");
      
      document.querySelectorAll("#monthList ul.open").forEach(ul => {
          ul.classList.remove("open");
      });
      window.history.pushState({}, "", window.location.pathname);
  });

  // onload 與 popstate (歷史紀錄/分享網址支援)
  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById("theme-toggle").textContent = "淺色模式";
    }

    buildMonthList();

    const urlParams = new URLSearchParams(window.location.search);
    const monthParam = urlParams.get("month");
    const dayParam = urlParams.get("day");
    const searchParam = urlParams.get("search");

    if (searchParam) {
      document.getElementById("searchInput").value = searchParam;
      searchRecords(searchParam, true);
    } else if (monthParam && dayParam && records[monthParam] && records[monthParam][dayParam] && records[monthParam][dayParam].length > 0) {
      showRecords(monthParam, dayParam, true);
    } else {
      // 顯示今天
      const today = new Date();
      const m = String(today.getMonth() + 1);
      const d = String(today.getDate());
      showRecords(m, d, true);
    }

    // 頁面載入在背景預先準備好所有遊戲資料
    setTimeout(() => {
        flattenRecords();
        prepareClozeData();
    }, 500);
  };

  window.onpopstate = (event) => {
    if (event.state) {
      if (event.state.search) {
        document.getElementById("searchInput").value = event.state.search;
        searchRecords(event.state.search, true);
      } else if (event.state.month && event.state.day) {
        showRecords(event.state.month, event.state.day, true);
      }
    } else {
      // event.state 為 null：以目前 location.search 做判斷(支援書籤/外部直接開啟URL)
      const urlParams = new URLSearchParams(window.location.search);
      const monthParam = urlParams.get("month");
      const dayParam = urlParams.get("day");
      const searchParam = urlParams.get("search");

      if (searchParam) {
        document.getElementById("searchInput").value = searchParam;
        searchRecords(searchParam, true);
      } else if (monthParam && dayParam && records[monthParam] && records[monthParam][dayParam] && records[monthParam][dayParam].length > 0) {
        showRecords(monthParam, dayParam, true);
      } else {
        contentDiv.innerHTML = "<p>請於選單中選擇日期以查看展旭記錄</p>";
        currentMonth = null; currentDay = null; currentSearch = null;
      }
    }
  };

  const aboutBtn = document.getElementById('aboutBtn');
  const aboutModal = document.getElementById('about-modal');
  const closeBtn = document.querySelector('.close-button');
  aboutBtn.addEventListener('click', () => {
    aboutModal.classList.add('show');
  });
  closeBtn.addEventListener('click', () => {
    aboutModal.classList.remove('show');
  });
  window.addEventListener('click', (event) => {
    if (event.target == aboutModal) {
      aboutModal.classList.remove('show');
    }
  });

  // --- 鍵盤快捷鍵功能 ---
  document.addEventListener('keydown', (event) => {
    // 當焦點在輸入框時，不觸發快捷鍵，避免干擾打字
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
      return;
    }

    switch (event.key) {
      case 'ArrowLeft': // 左箭頭
        event.preventDefault();
        document.getElementById('prevDay').click();
        break;
      case 'ArrowRight': // 右箭頭
        event.preventDefault();
        document.getElementById('nextDay').click();
        break;
      case 'Escape': // Esc 鍵
        if (aboutModal.classList.contains('show')) {
          aboutModal.classList.remove('show');
        }
        else if (sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
        }
        break;
      case '/': // 斜線鍵
        event.preventDefault(); 
        document.getElementById('searchInput').focus(); // 直接跳到搜尋框
        break;
    }
  });

  // --- 回到頂部按鈕功能 ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  contentDiv.addEventListener('scroll', () => {
    if (contentDiv.scrollTop > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  backToTopBtn.addEventListener('click', () => {
    contentDiv.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // --- 展旭小測驗 ---

  // 1. DOM 元素
  const quizBtn = document.getElementById('quizBtn');
  const quizContainer = document.getElementById('quiz-container');
  const quizGameView = document.getElementById('quiz-game-view');
  const quizResultsView = document.getElementById('quiz-results-view');
  const quizProgress = document.getElementById('quiz-progress');
  const quizScoreEl = document.getElementById('quiz-score');
  const quizQuestionEl = document.getElementById('quiz-question');
  const quizOptionsEl = document.getElementById('quiz-options');
  const quizFeedbackEl = document.getElementById('quiz-feedback');
  const finalScoreEl = document.getElementById('final-score');
  const playAgainBtn = document.getElementById('play-again-btn');
  const returnHomeBtn = document.getElementById('return-home-btn');

  // 2. 測驗狀態變數
  let allRecordsFlat = [];
  let quizQuestions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  const TOTAL_QUESTIONS = config.quiz.totalQuestions;

  // 3. 準備資料 將巢狀的 records 物件扁平化 方便隨機抽樣
  function flattenRecords() {
      if (allRecordsFlat.length > 0) return;
      const yearRegex = /^(\d{4})年/
      for (const m in records) {
          for (const d in records[m]) {
              if (records[m][d].length > 0) {
                  records[m][d].forEach(record => {
                      if (record.label && record.label.length >= config.quiz.minLabelLength) {
                          const yearMatch = record.label.match(yearRegex);
                          if (yearMatch) {
                              allRecordsFlat.push({ 
                                  year: yearMatch[1],
                                  month: m, 
                                  day: d, 
                                  ...record
                              });
                          }
                      }
                  });
              }
          }
      }
  }

  // 4. 輔助函數 洗牌演算法
  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  // 5. 產生測驗問題
  function generateQuizQuestions() {
      shuffleArray(allRecordsFlat);
      quizQuestions = [];
      const usedLabels = new Set();
      const dateRegex = /^\d{4}年\d{1,2}月\d{1,2}日\s*/;

      for (let i = 0; i < allRecordsFlat.length && quizQuestions.length < TOTAL_QUESTIONS; i++) {
          const questionRecord = allRecordsFlat[i];
          if (usedLabels.has(questionRecord.label)) continue;

          usedLabels.add(questionRecord.label);

          const correctAnswer = `${questionRecord.year}年${questionRecord.month}月${questionRecord.day}日`;
          const options = new Set([correctAnswer]);
          
          while (options.size < 4) {
              const randomRecord = allRecordsFlat[Math.floor(Math.random() * allRecordsFlat.length)];
              const distractor = `${randomRecord.year}年${randomRecord.month}月${randomRecord.day}日`;
              options.add(distractor);
          }
          
          const shuffledOptions = Array.from(options);
          shuffleArray(shuffledOptions);
          
          const cleanQuestion = questionRecord.label.replace(dateRegex, '').trim();
          quizQuestions.push({
              question: cleanQuestion,
              options: shuffledOptions,
              answer: correctAnswer
          });
      }
  }

  // 6. 顯示當前問題
  function displayQuestion() {
      if (currentQuestionIndex >= quizQuestions.length) {
          endQuiz();
          return;
      }
      
      const currentQuestion = quizQuestions[currentQuestionIndex];
      quizProgress.textContent = `第 ${currentQuestionIndex + 1} / ${TOTAL_QUESTIONS} 題`;
      quizScoreEl.textContent = `分數: ${score}`;
      quizQuestionEl.textContent = currentQuestion.question;
      quizOptionsEl.innerHTML = '';
      quizFeedbackEl.textContent = '';
      
      currentQuestion.options.forEach(option => {
          const button = document.createElement('button');
          button.className = 'quiz-option-btn';
          button.textContent = option;
          button.addEventListener('click', selectAnswer);
          quizOptionsEl.appendChild(button);
      });
  }

  // 7. 選擇答案的邏輯
  function selectAnswer(e) {
      const selectedButton = e.target;
      const selectedAnswer = selectedButton.textContent;
      const currentQuestion = quizQuestions[currentQuestionIndex];
      
      const allButtons = quizOptionsEl.querySelectorAll('button');
      allButtons.forEach(btn => btn.disabled = true);
      
      if (selectedAnswer === currentQuestion.answer) {
          score++;
          selectedButton.classList.add('correct');
          quizFeedbackEl.textContent = '答對了！';
          quizFeedbackEl.style.color = '#28a745';
      } else {
          selectedButton.classList.add('incorrect');
          quizFeedbackEl.textContent = `答錯了！正確答案是：${currentQuestion.answer}`;
          quizFeedbackEl.style.color = '#dc3545';
          allButtons.forEach(btn => {
              if (btn.textContent === currentQuestion.answer) {
                  btn.classList.add('correct');
              }
          });
      }
      
      currentQuestionIndex++;
      setTimeout(displayQuestion, 2000);
  }

  // 8. 結束測驗
  function endQuiz() {
      quizGameView.style.display = 'none';
      quizResultsView.style.display = 'block';
      finalScoreEl.textContent = `${score}`;
  }

  // 9. 開始測驗
  function startQuiz() {
      generateQuizQuestions();
      if (quizQuestions.length < TOTAL_QUESTIONS) {
          alert(`符合條件的題目不足 ${TOTAL_QUESTIONS} 題，無法開始遊戲！\n（目前只找到 ${quizQuestions.length} 題）`);
          return;
      }
      showView('quiz');      
      quizGameView.style.display = 'block';
      quizResultsView.style.display = 'none';      
      currentQuestionIndex = 0;
      score = 0;
      displayQuestion();
  }

  // 10. 返回主頁
  function returnToMain() {
      showView('main');
  }

  // 11. 綁定事件監聽器
  quizBtn.addEventListener('click', () => {
      startQuiz();
  });
  playAgainBtn.addEventListener('click', startQuiz);
  returnHomeBtn.addEventListener('click', returnToMain);


  // --- 展旭克漏字功能 ---

  // 1. DOM 元素
  const clozeBtn = document.getElementById('clozeBtn');
  const clozeContainer = document.getElementById('cloze-container');
  const clozeGameView = document.getElementById('cloze-game-view');
  const clozeResultsView = document.getElementById('cloze-results-view');
  const clozeProgress = document.getElementById('cloze-progress');
  const clozeScoreEl = document.getElementById('cloze-score');
  const clozeQuestionEl = document.getElementById('cloze-question');
  const clozeOptionsEl = document.getElementById('cloze-options');
  const clozeFeedbackEl = document.getElementById('cloze-feedback');
  const clozeFinalScoreEl = document.getElementById('cloze-final-score');
  const clozePlayAgainBtn = document.getElementById('cloze-play-again-btn');
  const clozeReturnHomeBtn = document.getElementById('cloze-return-home-btn');

  // 2. 遊戲狀態變數
  let allClozeRecords = [];
  let masterWordList = [];
  let clozeQuestions = [];
  let currentClozeIndex = 0;
  let clozeScore = 0;
  const CLOZE_TOTAL_QUESTIONS = config.cloze.totalQuestions;

  // 3. 準備克漏字資料和詞彙庫
  function prepareClozeData() {
      if (allClozeRecords.length > 0) return;
      const wordSet = new Set();
      const dateRegex = /^\d{4}年\d{1,2}月\d{1,2}日\s*/;
      const splitRegex = /[\s,.;。，；、()（）]/g; 
      allRecordsFlat.forEach(record => {
          const cleanLabel = record.label.replace(dateRegex, '').trim();
          if (cleanLabel.length >= config.cloze.minLabelLength) {
              allClozeRecords.push({ ...record, cleanLabel });
              const words = cleanLabel.split(splitRegex);
              words.forEach(word => {
                  if (word.length >= config.cloze.keywordMinLength && word.length <= config.cloze.keywordMaxLength) {
                      wordSet.add(word);
                  }
              });
          }
      });
      masterWordList = Array.from(wordSet);
  }

  // 4. 產生克漏字問題
  function generateClozeQuestions() {
      shuffleArray(allClozeRecords);
      clozeQuestions = [];
      const splitRegex = /[\s,.;。，；、()（）]/g
      
      for (let i = 0; i < allClozeRecords.length && clozeQuestions.length < CLOZE_TOTAL_QUESTIONS; i++) {
          const record = allClozeRecords[i];
          const words = record.cleanLabel.split(splitRegex).filter(w => w.length >= config.cloze.keywordMinLength && w.length <= config.cloze.keywordMaxLength);
          if (words.length === 0) continue;

          shuffleArray(words);
          const answer = words[0];
          const questionText = record.cleanLabel.replace(answer, '<span class="cloze-blank">[ ___ ]</span>');
          const options = new Set([answer]);

          while(options.size < 4 && masterWordList.length > 3) {
              const randomWord = masterWordList[Math.floor(Math.random() * masterWordList.length)];
              options.add(randomWord);
          }
          
          const shuffledOptions = Array.from(options);
          shuffleArray(shuffledOptions);
          
          clozeQuestions.push({
              question: questionText,
              options: shuffledOptions,
              answer: answer
          });
      }
  }

  // 5. 顯示克漏字問題
  function displayClozeQuestion() {
      if (currentClozeIndex >= clozeQuestions.length) {
          endClozeTest();
          return;
      }
      
      const currentQuestion = clozeQuestions[currentClozeIndex];
      clozeProgress.textContent = `第 ${currentClozeIndex + 1} / ${CLOZE_TOTAL_QUESTIONS} 題`;
      clozeScoreEl.textContent = `分數: ${clozeScore}`;
      clozeQuestionEl.innerHTML = currentQuestion.question;
      clozeOptionsEl.innerHTML = '';
      clozeFeedbackEl.textContent = '';
      
      currentQuestion.options.forEach(option => {
          const button = document.createElement('button');
          button.className = 'quiz-option-btn';
          button.textContent = option;
          button.addEventListener('click', selectClozeAnswer);
          clozeOptionsEl.appendChild(button);
      });
  }

  // 6. 選擇克漏字答案的邏輯
  function selectClozeAnswer(e) {
      const selectedButton = e.target;
      const selectedAnswer = selectedButton.textContent;
      const currentQuestion = clozeQuestions[currentClozeIndex];
      
      const allButtons = clozeOptionsEl.querySelectorAll('button');
      allButtons.forEach(btn => btn.disabled = true);
      
      if (selectedAnswer === currentQuestion.answer) {
          clozeScore++;
          selectedButton.classList.add('correct');
          clozeFeedbackEl.textContent = '答對了！';
          clozeFeedbackEl.style.color = '#28a745';
      } else {
          selectedButton.classList.add('incorrect');
          clozeFeedbackEl.textContent = `答錯了！正確答案是：${currentQuestion.answer}`;
          clozeFeedbackEl.style.color = '#dc3545';
          allButtons.forEach(btn => {
              if (btn.textContent === currentQuestion.answer) {
                  btn.classList.add('correct');
              }
          });
      }
      
      clozeQuestionEl.innerHTML = currentQuestion.question.replace('<span class="cloze-blank">[ ___ ]</span>', `<span class="cloze-blank">${currentQuestion.answer}</span>`);
      
      currentClozeIndex++;
      setTimeout(displayClozeQuestion, 2500);
  }

  // 7. 結束克漏字測驗
  function endClozeTest() {
      clozeGameView.style.display = 'none';
      clozeResultsView.style.display = 'block';
      clozeFinalScoreEl.textContent = `${clozeScore}`;
  }

  // 8. 開始克漏字測驗
  function startClozeTest() {
      generateClozeQuestions();
      if (clozeQuestions.length < CLOZE_TOTAL_QUESTIONS) {
          alert(`符合條件的題目不足 ${CLOZE_TOTAL_QUESTIONS} 題，無法開始遊戲！\n（目前只找到 ${clozeQuestions.length} 題）`);
          return;
      }
      showView('cloze');      
      clozeGameView.style.display = 'block';
      clozeResultsView.style.display = 'none';      
      currentClozeIndex = 0;
      clozeScore = 0;
      displayClozeQuestion();
  }

  // 9. 綁定事件監聽器
  clozeBtn.addEventListener('click', () => {
      startClozeTest();
  });
  clozePlayAgainBtn.addEventListener('click', startClozeTest);
  clozeReturnHomeBtn.addEventListener('click', returnToMain);


  // --- 關鍵字詞雲功能 ---
  let wordCloudCreated = false;
  function createWordCloud(selectedYear = 'all') {
      const canvas = document.getElementById('wordcloud-canvas');
      canvas.innerHTML = '<p class="loading-text">正在分析語錄文字，請稍候...</p>';

      setTimeout(() => {
          let allCleanText = '';
          const dateRegex = /^\d{4}年\d{1,2}月\d{1,2}日\s*/;
          const yearRegex = /^(\d{4})年/;

          // 收集所有文字
          for (const m in records) {
              for (const d in records[m]) {
                  if (Array.isArray(records[m][d]) && records[m][d].length > 0) {
                      records[m][d].forEach(record => {
                          const yearMatch = record.label.match(yearRegex);
                          const recordYear = yearMatch ? yearMatch[1] : null;
                          if (selectedYear === 'all' || selectedYear === recordYear) {                              
                              if (record.label) {
                                  allCleanText += record.label.replace(dateRegex, '').trim() + ' ';
                              }                              
                          }
                      });
                  }
              }
          }      

          const stopWords = new Set([
              '的', '我', '你', '他', '她', '它', '了', '是', '也', '在', '一個', 
              '也罷', '一下', '一些', '什麼', '今天', '這個', '自己', '就是', 
              '我們', '他們', '她們', '一個', '一樣', '不過', '不知', '不是', 
              '不行', '不要', '而且', '但是', '因為', '所以', '如果', '可是',
              '還有', '還是', '或是', '其次', '然後', '然而', '無論', '也許', 
              '以及', '以免', '以致', '以致于', '以至於', '以求', '以便', '以來',
              '以後', '以上', '以下', '以前', '已', '已經', '用', '有的', '於是',
              'a', 'an', 'the', 'and', 'but', 'or', 'in', 'on', 'at', 'to', 
              'for', 'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through',
              'during', 'before', 'after', 'above', 'below', 'between', 'under'
          ]);

          const wordCounts = {};
          const words = allCleanText.split(/[^a-zA-Z0-9\u4e00-\u9fa5]+/);

          words.forEach(word => {
              const lowerWord = word.toLowerCase();
              if (lowerWord && !stopWords.has(lowerWord) && isNaN(lowerWord) && lowerWord.length >= 2) {
                  wordCounts[lowerWord] = (wordCounts[lowerWord] || 0) + 1;
              }
          });

          const list = Object.entries(wordCounts)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 50);
          if (list.length === 0) {
              canvas.innerHTML = '<p class="loading-text">沒有足夠的關鍵字來產生詞雲</p>';
              return;
          }

          WordCloud(canvas, {
              list: list,
              gridSize: Math.round(16 * canvas.offsetWidth / 1024),
              weightFactor: 8,
              fontFamily: 'Arial, "Microsoft JhengHei", sans-serif',
              color: 'random-dark',
              backgroundColor: 'transparent',
              rotateRatio: 0.5,
              rotationSteps: 2,
              minSize: 10,
              click: function(item) {
                  // 點擊詞彙時觸發搜尋
                  document.getElementById('searchInput').value = item[0];
                  searchRecords(item[0]);
              }
          });
          wordCloudCreated = true;
      }, 100);
  }

  // 語音朗讀功能的核心處理函數
  function handleTTSClick() {
      if (!('speechSynthesis' in window)) {
          alert('抱歉，您的瀏覽器不支援語音朗讀功能');
          return;
      }
      const ttsButton = document.getElementById('tts-button');
      // --- 控制邏輯 ---
      if (isSpeaking && !isPaused) {
          window.speechSynthesis.pause();
          isPaused = true;
          ttsButton.textContent = '▶️ 繼續';
      } else if (isSpeaking && isPaused) {
          window.speechSynthesis.resume();
          isPaused = false;
          ttsButton.textContent = '⏸️ 暫停';
      } else {
          // 1. 收集要朗讀的文字
          const dateRegex = /^\d{4}年\d{1,2}月\d{1,2}日\s*/;
          let textToSpeak = '';
          const recordsToRead = document.querySelectorAll('#content .record');
          recordsToRead.forEach(recordEl => {
              const label = recordEl.textContent.trim();
              if (label) {
                  textToSpeak += label.replace(dateRegex, '').trim() + '。 ';
              }
          });
          if (!textToSpeak) {
              alert('本頁沒有可朗讀的文字內容');
              return;
          }
          // 2. 建立語音請求物件
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          utterance.lang = 'zh-TW';
          utterance.rate = 1;
          utterance.pitch = 1;
          // 3. 綁定事件
          utterance.onstart = () => {
              isSpeaking = true;
              isPaused = false;
              ttsButton.textContent = '⏸️ 暫停';
          };
          utterance.onpause = () => {
              isPaused = true;
              ttsButton.textContent = '▶️ 繼續';
          };          
          utterance.onresume = () => {
              isPaused = false;
              ttsButton.textContent = '⏸️ 暫停';
          };
          utterance.onend = () => {
              isSpeaking = false;
              isPaused = false;
              ttsButton.textContent = '▶️ 朗讀';
          };          
          // 4. 開始朗讀
          window.speechSynthesis.speak(utterance);
      }
  }