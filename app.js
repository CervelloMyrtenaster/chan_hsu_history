  /* ------------- DOM 與狀態 ------------- */
  const sidebar = document.getElementById("sidebar");
  const contentDiv = document.getElementById("content");
  const monthList = document.getElementById("monthList");
  const menuToggle = document.querySelector(".menu-toggle");

  let currentMonth = null;   // string or null
  let currentDay = null;     // string or null
  let currentSearch = null;  // string or null

  /* 圖片偵測正規式 */
  const imgRe = /\.(jpe?g|png|gif|webp|bmp|svg)$/i;

  /* ------------- 建立左側月份/日期清單（只列出有資料的日期） ------------- */
  function buildMonthList() {
    monthList.innerHTML = "";
    for (let m = 1; m <= 12; m++) {
      const mStr = String(m);
      const monthItem = document.createElement("li");
      monthItem.className = "month-item";
      monthItem.textContent = m + "月";

      // 挑出此月份有實際內容（length>0）的日期
      const daysObj = records[mStr] || {};
      const daysWithData = Object.keys(daysObj).filter(d => Array.isArray(daysObj[d]) && daysObj[d].length > 0)
                        .sort((a,b)=> Number(a) - Number(b));

      if (daysWithData.length === 0) {
        // 如果你希望即使沒有資料也顯示月份，改成 append 即可；目前我選擇跳過沒有資料的月份
        continue;
      }

      const dayList = document.createElement("ul");
      dayList.style.display = "none";

      daysWithData.forEach(d => {
        const dayItem = document.createElement("li");
        dayItem.className = "day-item";
        dayItem.textContent = d + "日";
        dayItem.dataset.month = mStr;
        dayItem.dataset.day = String(d);
        dayItem.classList.add("day-item");
        dayItem.addEventListener("click", (e) => {
          e.stopPropagation();
          // 先清掉舊的選取
          document.querySelectorAll(".day-item.selected").forEach(el => el.classList.remove("selected"));
          // 標記目前這天
          dayItem.classList.add("selected");
          showRecords(m, d);
        });
        dayList.appendChild(dayItem);
      });

      monthItem.addEventListener("click", () => {
        dayList.style.display = dayList.style.display === "block" ? "none" : "block";
      });

      monthItem.appendChild(dayList);
      monthList.appendChild(monthItem);
    }
  }

  /* ------------- 顯示紀錄（日期頁面） ------------- */
  function showRecords(month, day, skipPush = false) {
    const monthStr = String(month);
    const dayStr = String(day);

    // 更新狀態
    currentMonth = monthStr;
    currentDay = dayStr;
    currentSearch = null;

    contentDiv.innerHTML = `<h2>${monthStr}月${dayStr}日 展旭紀錄</h2>`;

    const monthObj = records[monthStr];
    const list = (monthObj && Array.isArray(monthObj[dayStr])) ? monthObj[dayStr] : null;

    if (!list || list.length === 0) {
      contentDiv.innerHTML += "<p>此日期尚無紀錄。</p>";
    } else {
      list.forEach(item => {
        const div = document.createElement("div");
        div.className = "record";

        if (item.type === "text") {
          const p = document.createElement("p");
          p.textContent = item.content;
          div.appendChild(p);
        } else if (item.type === "link") {
          const url = item.content || "";
          const label = item.label || url;

          // 若為圖片直連，直接顯示圖片
          if (imgRe.test(url)) {
            const img = document.createElement("img");
            img.src = url;
            img.alt = label;
            div.appendChild(img);
            if (label) {
              const cap = document.createElement("p");
              cap.textContent = label;
              div.appendChild(cap);
            }
          } else {
            // 一般連結，使用 <a> 並用 textContent 以避免 raw HTML 注入
            const a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener";
            a.textContent = label;
            div.appendChild(a);
          }
        }
        contentDiv.appendChild(div);
      });
    }

    // 更新網址（絕對 URL）
    if (!skipPush) {
      const params = new URLSearchParams();
      params.set("month", monthStr);
      params.set("day", dayStr);
      const newUrl = `${location.origin}${location.pathname}?${params.toString()}`;
      window.history.pushState({ month: monthStr, day: dayStr }, "", newUrl);
    }

    // highlight sidebar（把之前的 .active 移掉並加上新的）
    highlightSidebar(monthStr, dayStr);

    // 手機版收合選單
    sidebar.classList.remove("open");
  }

  /* ------------- 搜尋功能（結果中的日期可點回到該日） ------------- */
  function searchRecords(keyword, skipPush = false) {
    const kw = String(keyword || "").trim();
    if (!kw) return;

    currentMonth = null;
    currentDay = null;
    currentSearch = kw;

    contentDiv.innerHTML = `<h2>搜尋結果：「${kw}」</h2>`;
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
            const div = document.createElement("div");
            div.className = "record";

            // 可點的日期連結，點擊會跳到該日期並更新 URL
            const dateLink = document.createElement("a");
            dateLink.href = "#";
            dateLink.textContent = `${m}月${d}日`;
            dateLink.addEventListener("click", (e) => {
              e.preventDefault();
              showRecords(m, d);
            });
            div.appendChild(dateLink);
            div.appendChild(document.createElement("br"));

            if (item.type === "text") {
              const p = document.createElement("p");
              p.textContent = item.content;
              div.appendChild(p);
            } else if (item.type === "link") {
              const url = item.content;
              const lab = item.label || url;
              if (imgRe.test(url)) {
                const img = document.createElement("img");
                img.src = url;
                img.alt = lab;
                div.appendChild(img);
                const cap = document.createElement("p");
                cap.textContent = lab;
                div.appendChild(cap);
              } else {
                const a = document.createElement("a");
                a.href = url;
                a.target = "_blank";
                a.rel = "noopener";
                a.textContent = lab;
                div.appendChild(a);
              }
            }
            contentDiv.appendChild(div);
          }
        });
      }
    }

    if (!found) contentDiv.innerHTML += "<p>查無符合的紀錄。</p>";

    // 更新網址（絕對 URL）
    if (!skipPush) {
      const params = new URLSearchParams();
      params.set("search", kw);
      const newUrl = `${location.origin}${location.pathname}?${params.toString()}`;
      window.history.pushState({ search: kw }, "", newUrl);
    }

    sidebar.classList.remove("open");
  }

  /* ------------- 隨機功能（只在有資料的日期中挑） ------------- */
  function randomRecord() {
    const monthsWithData = Object.keys(records).filter(m => {
      return Object.keys(records[m] || {}).some(d => Array.isArray(records[m][d]) && records[m][d].length > 0);
    });
    if (monthsWithData.length === 0) return alert("尚無任何紀錄可隨機顯示。");

    const randMonth = monthsWithData[Math.floor(Math.random() * monthsWithData.length)];
    const daysWithData = Object.keys(records[randMonth]).filter(d => Array.isArray(records[randMonth][d]) && records[randMonth][d].length > 0);
    const randDay = daysWithData[Math.floor(Math.random() * daysWithData.length)];
    showRecords(randMonth, randDay);
  }

  /* ------------- 分享功能（會分享絕對網址） ------------- */
  async function shareCurrentView() {
    let shareUrl;
    if (currentSearch) {
      shareUrl = `${location.origin}${location.pathname}?search=${encodeURIComponent(currentSearch)}`;
    } else if (currentMonth && currentDay) {
      shareUrl = `${location.origin}${location.pathname}?month=${encodeURIComponent(currentMonth)}&day=${encodeURIComponent(currentDay)}`;
    } else {
      shareUrl = window.location.href;
    }

    const shareText = "快來看看歷史上的展旭紀錄！";

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

  /* ------------- sidebar highlight ------------- */
  function highlightSidebar(monthStr, dayStr) {
    // 清除舊的 selected
    const prev = monthList.querySelectorAll(".day-item.selected");
    prev.forEach(n => n.classList.remove("selected"));
    // 找到目前的 day-item
    const selector = `.day-item[data-month="${monthStr}"][data-day="${dayStr}"]`;
    const now = monthList.querySelector(selector);
    if (now) now.classList.add("selected");
  }

  /* ------------- 綁定 UI 事件 ------------- */
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
  document.getElementById("randomBtn").addEventListener("click", randomRecord);
  document.getElementById("shareBtn").addEventListener("click", shareCurrentView);
  menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));

   /* ------------- 點擊選單外部區域以關閉選單 ------------- */
  document.addEventListener("click", function(event) {
    // 檢查：選單是否為開啟狀態
    const isMenuOpen = sidebar.classList.contains("open");
    // 檢查：點擊的目標是否在 sidebar 內部
    const isClickInsideMenu = sidebar.contains(event.target);
    // 檢查：點擊的目標是否為選單的開關按鈕本身
    const isClickOnToggle = menuToggle.contains(event.target);
    // 如果選單是開啟的，且點擊點不在選單內，也不在開關按鈕上
    if (isMenuOpen && !isClickInsideMenu && !isClickOnToggle) {
      // 就關閉選單
      sidebar.classList.remove("open");
    }
  });

  /* ------------- onload 與 popstate（歷史紀錄/分享網址支援） ------------- */
  window.onload = () => {
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
      // 顯示今天（若該日有資料）
      const today = new Date();
      const m = String(today.getMonth() + 1);
      const d = String(today.getDate());
      if (records[m] && Array.isArray(records[m][d]) && records[m][d].length > 0) {
        showRecords(m, d, true);
      } else {
        contentDiv.innerHTML = "<p>請於選單中選擇日期以查看展旭紀錄</p>";
      }
    }
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
      // event.state 為 null：以目前 location.search 做判斷（支援書籤/外部直接開啟 URL）
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
        contentDiv.innerHTML = "<p>請於選單中選擇日期以查看展旭紀錄</p>";
        currentMonth = null; currentDay = null; currentSearch = null;
      }
    }
  };

  document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    // 切換按鈕文字
    if (document.body.classList.contains("dark-mode")) {
      this.textContent = "Light Mode";
    } else {
      this.textContent = "Dark Mode";
    }
  });

  // 點擊標題回到首頁
  document.getElementById("homeBtn").addEventListener("click", () => {
    // 清空狀態
    currentMonth = null;
    currentDay = null;
    currentSearch = null;
    // 顯示首頁或今天的展旭
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    if (records[month] && records[month][day]) {
      showRecords(month, day, true); // 顯示今天的紀錄
    } else {
      contentDiv.innerHTML = "<p>請於選單中選擇日期以查看展旭紀錄</p>";
    }
    // 收合選單
    sidebar.classList.remove("open");
    // 收合所有展開的日期清單
    document.querySelectorAll("#monthList ul").forEach(ul => {
      ul.style.display = "none";
    });
    // 更新網址為首頁
    window.history.pushState({}, "", window.location.pathname);
  });
  
  // 切換日期的通用函數
  function switchDay(direction) {
    const days = Array.from(document.querySelectorAll('.day-item'));
    const selected = document.querySelector('.day-item.selected');
    if (!selected) return;
    let index = days.indexOf(selected);
    if (index === -1) return;
    let newIndex = index + direction;
    // 防呆：避免超出範圍
    if (newIndex < 0 || newIndex >= days.length) return;
    // 取消原本選中
    selected.classList.remove('selected');
    // 設定新選中
    const newDay = days[newIndex];
    newDay.classList.add('selected');
    newDay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // 觸發點擊事件 (載入內容)
    newDay.click();
  }
  // 綁定前一日 / 後一日按鈕
  document.getElementById("prevDay").addEventListener("click", function () {
    switchDay(-1);
  });
  document.getElementById("nextDay").addEventListener("click", function () {
    switchDay(1);
  });