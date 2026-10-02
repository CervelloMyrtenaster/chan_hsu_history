(() => {
'use strict';

function startApplication() {
const dom = Object.fromEntries([
    'sidebar',
    'content',
    'monthList',
    'dashboard',
    'totalRecords',
    'activeDays',
    'mostActiveMonth',
    'averagePerDay',
    'heatmap',
    'year-filter',
    'dashboardBtn',
    'trend-chart',
    'wordcloud-canvas',
    'searchInput',
    'searchBtn',
    'prevDay',
    'nextDay',
    'randomBtn',
    'shareBtn',
    'theme-toggle',
    'homeBtn',
    'aboutBtn',
    'about-modal',
    'backToTopBtn',
    'quizBtn',
    'quiz-container',
    'quiz-setup-view',
    'quiz-game-view',
    'quiz-results-view',
    'quiz-progress',
    'quiz-score',
    'quiz-question',
    'quiz-options',
    'quiz-feedback',
    'final-score',
    'play-again-btn',
    'return-home-btn',
    'quiz-review-area',
    'clozeBtn',
    'cloze-container',
    'cloze-setup-view',
    'cloze-game-view',
    'cloze-results-view',
    'cloze-progress',
    'cloze-score',
    'cloze-question',
    'cloze-options',
    'cloze-feedback',
    'cloze-final-score',
    'cloze-play-again-btn',
    'cloze-return-home-btn',
    'cloze-review-area',
    'favoritesBtn'
].map(id => [id, document.getElementById(id)]));
const missingElements = Object.keys(dom).filter(id => !dom[id]);
if (missingElements.length || typeof records === 'undefined') {
    console.error('網站初始化失敗：缺少必要元素或 records 資料', missingElements);
    return;
}

// DOM 元素和狀態
const sidebar = dom['sidebar'];
const contentDiv = dom['content'];
const monthList = dom['monthList'];
const menuToggle = document.querySelector(".menu-toggle");
const dashboard = dom['dashboard'];

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

const FAVORITES_KEY = 'chan_hsu_favorites';
const viewState = { name: 'main', month: null, day: null, search: null, favoritesSort: 'added' };
const speechState = { speaking: false, paused: false, utterance: null };
const timers = { content: null, wordcloud: null, quiz: null, cloze: null, search: null };
const wordCloudCache = new Map();
let firstContentRender = true;
let pendingContentUpdate = null;
let resumeSearch = null;
let favoritesCache = null;
let trendChartInstance = null;
let uniqueYears = [];

function readStoredValue(key) {
    try { return localStorage.getItem(key); }
    catch (error) { console.warn('無法讀取本機儲存資料', error); return null; }
}
function writeStoredValue(key, value) {
    try { localStorage.setItem(key, value); return true; }
    catch (error) { console.warn('無法儲存資料；本次操作仍保留在記憶體中', error); return false; }
}
function getFavorites() {
    if (favoritesCache === null) {
        try {
            const stored = JSON.parse(readStoredValue(FAVORITES_KEY) || '[]');
            favoritesCache = Array.isArray(stored)
                ? stored.filter(id => typeof id === 'string' && /^\d{1,2}-\d{1,2}-\d+$/.test(id)) : [];
        } catch (error) {
            console.warn('收藏資料格式不正確，使用空收藏清單', error);
            favoritesCache = [];
        }
    }
    return [...favoritesCache];
}
function saveFavorites(favorites) {
    favoritesCache = [...favorites];
    writeStoredValue(FAVORITES_KEY, JSON.stringify(favoritesCache));
}
function toggleFavorite(recordId) {
    const favorites = getFavorites();
    const wasFavorite = favorites.includes(recordId);
    saveFavorites(wasFavorite ? favorites.filter(id => id !== recordId) : [...favorites, recordId]);
    return !wasFavorite;
}
function getRecordById(recordId) {
    const [month, day, index] = recordId.split('-');
    return getDayRecords(month, day)[index] || null;
}
function pruneInvalidFavorites() {
    const favorites = getFavorites();
    const validFavorites = favorites.filter(id => getRecordById(id));
    if (validFavorites.length !== favorites.length) saveFavorites(validFavorites);
}
function clearTimer(name) {
    clearTimeout(timers[name]);
    timers[name] = null;
}
function stopSpeech() {
    const previous = speechState.utterance;
    speechState.utterance = null;
    if (previous) previous.onstart = previous.onpause = previous.onresume = previous.onend = previous.onerror = null;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    speechState.speaking = false;
    speechState.paused = false;
    const button = document.getElementById('tts-button');
    if (button) button.textContent = '▶️ 朗讀';
}

// 統一管理主要畫面的顯示狀態
function showView(viewName) {
    stopSpeech();
    clearTimer('content');
    clearTimer('search');
    contentDiv.classList.remove('fade-out');
    if (viewName !== 'dashboard') clearTimer('wordcloud');
    if (viewName !== 'quiz') clearTimer('quiz');
    if (viewName !== 'cloze') clearTimer('cloze');
    viewState.name = viewName;
    dom['dashboardBtn'].textContent = viewName === 'dashboard' ? '返回記錄' : '統計儀表板';
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
function updateContentWithFade(content, callback) {
    clearTimer('content');
    resumeSearch = null;
    const replaceContent = () => {
        timers.content = null;
        pendingContentUpdate = null;
        contentDiv.replaceChildren(content);
        contentDiv.scrollTop = 0;
        contentDiv.classList.remove('fade-out');
        firstContentRender = false;
        if (callback) callback();
    };
    pendingContentUpdate = replaceContent;
    if (firstContentRender) {
        replaceContent();
    } else {
        contentDiv.classList.add('fade-out');
        timers.content = setTimeout(replaceContent, 200);
    }
}
const yearRegex = /^(\d{4})年/;
const dateRegex = /^\d{4}年\d{1,2}月\d{1,2}日\s*/;
function getRecordYear(record) {
    const match = String(record.label || '').match(yearRegex);
    return match ? match[1] : null;
}
function getDayRecords(month, day) {
    const list = records[month] && records[month][day];
    return Array.isArray(list) ? list : [];
}
function getAllRecords() {
    const result = [];
    for (const month of Object.keys(records)) {
        for (const day of Object.keys(records[month] || {})) {
            getDayRecords(month, day).forEach((record, index) => {
                result.push({ ...record, month, day, index, year: getRecordYear(record) });
            });
        }
    }
    return result;
}
let recordIndex = [];
let dayItems = [];
function recordsForYear(year) {
    return year === 'all' ? recordIndex : recordIndex.filter(record => record.year === String(year));
}
function groupRecordsByYear(list) {
    const groups = {};
    list.forEach((item, index) => {
        const year = getRecordYear(item) || '未知年份';
        (groups[year] ||= []).push({ item, index });
    });
    return groups;
}
function pushRoute(parameters = {}) {
    const query = new URLSearchParams(parameters).toString();
    window.history.pushState(parameters, '', location.pathname + (query ? '?' + query : ''));
}

// 圖片檢測正則式
const imgRe = /\.(jpe?g|png|gif|webp|bmp|svg)$/i;

// 統計計算函數
function calculateStats(selectedYear = 'all') {
    const selectedRecords = recordsForYear(selectedYear);
    const days = new Set();
    const monthCounts = {};
    selectedRecords.forEach(record => {
        days.add(record.month + '-' + record.day);
        monthCounts[record.month] = (monthCounts[record.month] || 0) + 1;
    });
    let mostActiveMonth = '-', maxCount = 0;
    for (const month of Object.keys(monthCounts)) {
        if (monthCounts[month] > maxCount) {
            maxCount = monthCounts[month];
            mostActiveMonth = month;
        }
    }
    return { totalRecords: selectedRecords.length, activeDays: days.size, mostActiveMonth,
        averagePerDay: days.size ? (selectedRecords.length / days.size).toFixed(1) : 0 };
}

// 更新統計儀表板
function updateDashboard(selectedYear = 'all') {
    const stats = calculateStats(selectedYear);
    dom['totalRecords'].textContent = stats.totalRecords;
    dom['activeDays'].textContent = stats.activeDays;
    dom['mostActiveMonth'].textContent = stats.mostActiveMonth;
    dom['averagePerDay'].textContent = stats.averagePerDay;
}

// 創建熱力圖
function createHeatmap(selectedYear = 'all') {
    const heatmapContainer = dom['heatmap'];
    heatmapContainer.innerHTML = '';

    // 如果選擇所有年份 則顯示最新的那一年
    const targetYear = (selectedYear === 'all' && uniqueYears.length > 0)
        ? Math.max(...uniqueYears.map(Number))
        : Number(selectedYear);

    if (!targetYear) {
      heatmapContainer.innerHTML = '<p style="text-align: center;">無資料顯示</p>';
      return;
    }

    const dailyCounts = {};
    recordsForYear(String(targetYear)).forEach(record => {
        const key = record.month + '-' + record.day;
        dailyCounts[key] = (dailyCounts[key] || 0) + 1;
    });

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

        if (count > 0) dayElement.style.cursor = 'pointer';

        heatmapContainer.appendChild(dayElement);
    }
}

// 顯示/隱藏統計儀表板
function toggleDashboard() {
    if (viewState.name === 'dashboard') {
        showView('main');
        // Complete a cancelled fade or continue the existing search without
        // changing the route or resetting an already completed page.
        if (pendingContentUpdate) pendingContentUpdate();
        else if (resumeSearch) resumeSearch();
        return;
    }
    showView('dashboard');
    populateYearFilter();
    if (!trendChartInstance) createTrendChart();
    refreshDashboard(dom['year-filter'].value);
}

// 建立左側月份/日期清單(只列出有資料的日期)
function buildMonthList() {
    monthList.innerHTML = "";
    for (let m = 1; m <= 12; m++) {
        const mStr = String(m);
        const monthItem = document.createElement("li");
        monthItem.className = "month-item";
        monthItem.dataset.month = mStr;
        const monthButton = document.createElement('button');
        monthButton.type = 'button';
        monthButton.className = 'date-navigation-button';
        monthButton.textContent = m + "月";
        monthButton.setAttribute('aria-expanded', 'false');
        monthItem.appendChild(monthButton);

        // 挑出此月份有實際內容(length>0)的日期
        const daysObj = records[mStr] || {};
        const daysWithData = Object.keys(daysObj).filter(d => Array.isArray(daysObj[d]) && daysObj[d].length > 0)
                          .sort((a,b)=> Number(a) - Number(b));
        if (daysWithData.length === 0) {
            continue;
        }

        const dayList = document.createElement("ul");
        dayList.id = `month-days-${m}`;
        dayList.inert = true;
        monthButton.setAttribute('aria-controls', dayList.id);

        daysWithData.forEach(d => {
            const dayItem = document.createElement("li");
            dayItem.className = "day-item";
            const dayButton = document.createElement('button');
            dayButton.type = 'button';
            dayButton.className = 'date-navigation-button';
            dayButton.textContent = d + "日";
            dayButton.setAttribute('aria-label', `${m}月${d}日記錄`);
            dayItem.appendChild(dayButton);
            dayItem.dataset.month = mStr;
            dayItem.dataset.day = String(d);
            dayItem.classList.add("day-item");

            dayList.appendChild(dayItem);
        });

        monthItem.appendChild(dayList);
        monthList.appendChild(monthItem);
    }
    dayItems = Array.from(monthList.querySelectorAll('.day-item'));
}

function appendHighlightedText(element, text, keyword = '') {
    const value = String(text || '');
    if (!keyword) { element.textContent = value; return; }
    const safeKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(safeKeyword, 'gi');
    let start = 0;
    for (const match of value.matchAll(regex)) {
        element.appendChild(document.createTextNode(value.slice(start, match.index)));
        const mark = document.createElement('mark');
        mark.textContent = match[0];
        element.appendChild(mark);
        start = match.index + match[0].length;
    }
    element.appendChild(document.createTextNode(value.slice(start)));
}
function createRecordContent(item, keyword = '') {
    const wrapper = document.createElement('div');
    wrapper.className = 'record-content';
    if (item.type === 'text') {
        // Existing text records may contain intentional HTML; keep this legacy format.
        const paragraph = document.createElement('p');
        paragraph.innerHTML = item.content || '';
        wrapper.appendChild(paragraph);
    } else if (item.type === 'link') {
        const url = item.content || '', label = item.label || url;
        if (imgRe.test(url)) {
            const image = document.createElement('img');
            image.src = url;
            image.alt = item.label || '';
            wrapper.appendChild(image);
            if (label) {
                const caption = document.createElement('p');
                appendHighlightedText(caption, label, keyword);
                wrapper.appendChild(caption);
            }
        } else {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.rel = 'noopener';
            appendHighlightedText(link, label, keyword);
            wrapper.appendChild(link);
        }
    }
    return wrapper;
}

function updateFavoriteButton(button, isFavorite) {
    button.textContent = isFavorite ? '❤️' : '🤍';
    button.setAttribute('aria-pressed', String(isFavorite));
    button.title = isFavorite ? '取消收藏' : '收藏這筆記錄';
}
function createRecordElement(item, recordId, context = 'default', keyword = '', favorites = new Set(getFavorites())) {
    const mainDiv = document.createElement("div");
    mainDiv.className = "record";

    const contentWrapper = createRecordContent(item, keyword);

    if (context === 'favorites' && recordId) {
        const [month, day] = recordId.split('-').map(Number);
        const linkContainer = document.createElement('div');
        linkContainer.className = 'view-original-link';
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = `查看 ${month}月${day}日 全部記錄 →`;
        link.dataset.month = month;
        link.dataset.day = day;
        link.dataset.navigateDate = 'true';

        linkContainer.appendChild(link);
        contentWrapper.appendChild(linkContainer);
    }

    const favButton = document.createElement('button');
    favButton.type = 'button';
    favButton.className = 'favorite-btn';
    favButton.dataset.recordId = recordId;
    favButton.setAttribute('aria-label', '收藏記錄：' + (item.label || item.content || '未命名記錄'));
    updateFavoriteButton(favButton, favorites.has(recordId));

    mainDiv.appendChild(contentWrapper);
    if (recordId) {
        mainDiv.appendChild(favButton);
    }
    return mainDiv;
}

// 顯示記錄(日期頁面)
function createDatePage(month, day) {
    const list = getDayRecords(month, day);
    const groups = groupRecordsByYear(list);
    const favorites = new Set(getFavorites());
    const page = document.createElement('div');
    const header = document.createElement('div');
    header.className = 'page-header';
    const title = document.createElement('h2');
    title.textContent = month + '月' + day + '日 展旭記錄';
    header.appendChild(title);
    if (list.length) {
        const button = document.createElement('button');
        button.type = 'button'; button.id = 'tts-button'; button.title = '朗讀本頁內容';
        button.textContent = '▶️ 朗讀'; header.appendChild(button);
    }
    page.appendChild(header);
    if (Object.keys(groups).length > 1) {
        const timeline = document.createElement('div');
        timeline.className = 'timeline-view-container';
        const track = document.createElement('div'); track.className = 'timeline-track';
        Object.keys(groups).sort((a, b) => a - b).forEach(year => {
            const card = document.createElement('div'); card.className = 'timeline-year-card';
            const heading = document.createElement('h3'); heading.textContent = year + '年'; card.appendChild(heading);
            groups[year].forEach(({ item, index }) => card.appendChild(createRecordElement(item, month + '-' + day + '-' + index, 'default', '', favorites)));
            track.appendChild(card);
        });
        timeline.appendChild(track); page.appendChild(timeline);
    } else if (list.length) {
        list.forEach((item, index) => page.appendChild(createRecordElement(item, month + '-' + day + '-' + index, 'default', '', favorites)));
    } else {
        const message = document.createElement('p'); message.textContent = '此日期尚無記錄'; page.appendChild(message);
    }
    const wiki = document.createElement('div'); wiki.className = 'external-link-section'; wiki.style.marginTop = '30px';
    const heading = document.createElement('h3'); heading.textContent = '看看真實世界的這一天';
    const paragraph = document.createElement('p'), link = document.createElement('a');
    link.href = 'https://zh.wikipedia.org/wiki/' + month + '月' + day + '日';
    link.target = '_blank'; link.rel = 'noopener';
    link.textContent = '點擊查看維基百科上「' + month + '月' + day + '日」發生的大事';
    paragraph.appendChild(link); wiki.append(heading, paragraph); page.appendChild(wiki);
    return page;
}
function showRecords(month, day, skipPush = false) {
    showView('main');
    viewState.month = String(month); viewState.day = String(day); viewState.search = null;
    updateContentWithFade(createDatePage(viewState.month, viewState.day));
    if (!skipPush) pushRoute({ month: viewState.month, day: viewState.day });
    highlightSidebar(viewState.month, viewState.day);
    sidebar.classList.remove('open');
}

// 搜尋功能 結果中的日期可點回到該日
function createSearchResult(record, keyword, favorites) {
    const item = document.createElement('div'); item.className = 'search-result-item';
    const link = document.createElement('a'); link.href = '#'; link.className = 'search-result-date';
    link.textContent = record.month + '月' + record.day + '日';
    link.dataset.navigateDate = 'true'; link.dataset.month = record.month; link.dataset.day = record.day;
    item.append(link, createRecordElement(record, record.month + '-' + record.day + '-' + record.index, 'default', keyword, favorites));
    return item;
}
function createSearchPage(keyword) {
    const container = document.createElement('div');
    const title = document.createElement('h2'); title.textContent = '搜尋結果：「' + keyword + '」';
    container.appendChild(title);
    const lower = keyword.toLowerCase(), favorites = new Set(getFavorites());
    const matches = recordIndex.filter(record => String(record.label || '').toLowerCase().includes(lower) || String(record.content || '').toLowerCase().includes(lower));
    // Small searches keep their original rendering behavior. Large searches
    // retain every result, but yield between batches instead of blocking input.
    const batchSize = 50;
    let nextIndex = 0;
    function appendBatch() {
        const fragment = document.createDocumentFragment();
        const started = performance.now();
        let count = 0;
        do {
            fragment.appendChild(createSearchResult(matches[nextIndex++], keyword, favorites));
            count++;
        } while (nextIndex < matches.length && count < batchSize && performance.now() - started < 8);
        container.appendChild(fragment);
    }
    // At most 50 records are constructed before the first search results appear.
    if (matches.length) appendBatch();
    if (!matches.length) {
        const message = document.createElement('p'); message.textContent = '查無符合的記錄'; container.appendChild(message);
    }
    if (nextIndex < matches.length) container.setAttribute('aria-busy', 'true');
    function appendRemaining() {
        if (!container.isConnected || viewState.name !== 'main' || viewState.search !== keyword) return;
        appendBatch();
        if (nextIndex < matches.length) timers.search = setTimeout(appendRemaining, 0);
        else { timers.search = null; resumeSearch = null; container.removeAttribute('aria-busy'); }
    }
    function startRemaining() {
        if (nextIndex < matches.length) {
            resumeSearch = startRemaining;
            timers.search = setTimeout(appendRemaining, 0);
        }
    }
    return { container, startRemaining };
}
function searchRecords(keyword, skipPush = false) {
    const value = String(keyword || '').trim();
    if (!value) return;
    showView('main');
    viewState.month = viewState.day = null; viewState.search = value;
    const { container, startRemaining } = createSearchPage(value);
    updateContentWithFade(container, startRemaining);
    if (!skipPush) pushRoute({ search: value });
    sidebar.classList.remove('open');
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

// 分享功能
async function shareCurrentView() {
    let shareUrl;
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('view') === 'favorites') {
        shareUrl = `${location.origin}${location.pathname}?view=favorites`;
    } else if (viewState.search) {
        shareUrl = `${location.origin}${location.pathname}?search=${encodeURIComponent(viewState.search)}`;
    } else if (viewState.month && viewState.day) {
        shareUrl = `${location.origin}${location.pathname}?month=${encodeURIComponent(viewState.month)}&day=${encodeURIComponent(viewState.day)}`;
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
function clearSidebarSelection() {
    monthList.querySelectorAll('.day-item button[aria-current]').forEach(button => {
        button.removeAttribute('aria-current');
    });
    const prev = monthList.querySelectorAll(".day-item.selected");
    prev.forEach(n => {
        n.classList.remove("selected");
    });
}
function highlightSidebar(monthStr, dayStr) {
    clearSidebarSelection();
    const selector = `.day-item[data-month="${monthStr}"][data-day="${dayStr}"]`;
    const now = monthList.querySelector(selector);
    if (now) {
        now.classList.add("selected");
        now.querySelector('button').setAttribute('aria-current', 'date');
    }
}

// 切換日期的通用函數
function switchDay(direction) {
    if (!dayItems.length) return;
    const selected = monthList.querySelector('.day-item.selected');
    let nextIndex;
    if (selected) nextIndex = dayItems.indexOf(selected) + direction;
    else {
        if (!viewState.month || !viewState.day) return;
        const current = Number(viewState.month) * 100 + Number(viewState.day);
        const ordered = direction === 1 ? dayItems : [...dayItems].reverse();
        const target = ordered.find(item => {
            const date = Number(item.dataset.month) * 100 + Number(item.dataset.day);
            return direction === 1 ? date > current : date < current;
        });
        nextIndex = dayItems.indexOf(target);
    }
    if (nextIndex < 0 || nextIndex >= dayItems.length) return;
    const next = dayItems[nextIndex];
    next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showRecords(next.dataset.month, next.dataset.day);
}

// 繪製年度趨勢圖
function createTrendChart() {
    if (typeof Chart !== 'function') { console.warn('趨勢圖元件未載入'); return; }
    try {
        if (trendChartInstance) {
            trendChartInstance.destroy();
        }
        const yearData = {};

        recordIndex.forEach(record => {
            if (!record.year) return;
            if (!yearData[record.year]) yearData[record.year] = Array(12).fill(0);
            yearData[record.year][Number(record.month) - 1]++;
        });

        const colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe'];
        const datasets = Object.keys(yearData).sort().map((year, index) => ({
            label: `${year}年`,
            data: yearData[year],
            backgroundColor: colors[index % colors.length],
            borderColor: colors[index % colors.length],
            tension: 0.1,
            fill: false,
        }));

        const ctx = dom['trend-chart'].getContext('2d');
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
    } catch (error) { trendChartInstance = null; console.warn('無法建立趨勢圖', error); }
}

// 填充年份篩選器的選項
function populateYearFilter() {
    const yearFilter = dom['year-filter'];
    if (yearFilter.options.length > 1) return;

    const years = new Set(recordIndex.map(record => record.year).filter(Boolean));
    uniqueYears = Array.from(years).sort((a, b) => b - a);

    yearFilter.innerHTML = '<option value="all">所有年份</option>';
    uniqueYears.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = `${year}年`;
        yearFilter.appendChild(option);
    });
}

// 關鍵字詞雲功能

// 1. 中文分詞輔助函數 使用n-gram方法
function extractChineseWords(text) {
    const words = [];
    const chineseRegex = /[\u4e00-\u9fa5]+/g;
    const chineseTexts = text.match(chineseRegex) || [];

    chineseTexts.forEach(chunk => {
        for (let len = 5; len >= 2; len--) {
            for (let i = 0; i <= chunk.length - len; i++) {
                words.push(chunk.substring(i, i + len));
            }
        }

    });

    return words;
}

// 2. 英文單詞提取
function extractEnglishWords(text) {
    const englishRegex = /[a-zA-Z]+/g;
    return text.match(englishRegex) || [];
}

// 3. 擴充的停用詞列表
function getStopWords() {
    return new Set([
        // 原有的停用詞
        '的', '我', '你', '他', '她', '它', '了', '是', '也', '在', '一個',
        '也罷', '一下', '一些', '什麼', '今天', '這個', '自己', '就是',
        '我們', '他們', '她們', '一個', '一樣', '不過', '不知', '不是',
        '不行', '不要', '而且', '但是', '因為', '所以', '如果', '可是',
        '還有', '還是', '或是', '其次', '然後', '然而', '無論', '也許',
        '以及', '以免', '以致', '以致於', '以至於', '以求', '以便', '以來',
        '以後', '以上', '以下', '以前', '已', '已經', '用', '有的', '於是',
        '沒有',
        'a', 'an', 'the', 'and', 'but', 'or', 'in', 'on', 'at', 'to',
        'for', 'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through',
        'during', 'before', 'after', 'above', 'below', 'between', 'under',

        // 新增常見無意義詞
        '可以', '可能', '應該', '必須', '需要', '想要', '希望', '覺得',
        '感覺', '認為', '知道', '看到', '聽到', '發現', '變成', '成為',
        '開始', '繼續', '結束', '進行', '使用', '透過', '經過', '通過',
        '非常', '很多', '許多', '一些', '一點', '有點', '比較', '更加',
        '特別', '尤其', '主要', '基本', '完全', '絕對', '真的', '實在',
        '確實', '的確', '果然', '居然', '竟然', '突然', '忽然', '當然',
        '自然', '原來', '本來', '依然', '仍然', '依舊', '還是', '或者',
        '即使', '雖然', '儘管', '即便', '縱使', '哪怕', '除非', '只要',
        '一直', '一向', '一再', '再次', '重新', '重複', '反覆', '多次',
        '幾次', '每次', '各種', '各個', '各位', '大家', '彼此', '互相',
        '分別', '另外', '其他', '其它', '別的', '某些', '某個', '這些',
        '那些', '這樣', '那樣', '如此', '這麼', '那麼', '怎麼', '怎樣',
        '為何', '為什麼', '哪裡', '何處', '何時', '什麼時候', '多少',

        // 標點和單字
        '、', '，', '。', '！', '？', '：', '；', '「', '」', '『', '』',
        '（', '）', '《', '》', '【', '】', '〈', '〉', '…', '—', '～',
        '之', '與', '及', '或', '等', '對', '向', '從', '把', '被', '給',
        '讓', '叫', '要', '會', '能', '該', '將', '再', '又', '才', '都',
        '只', '就', '更', '最', '過', '來', '去', '得', '著', '了', '嗎',
        '呢', '吧', '啊', '呀', '哦', '喔', '唷', '欸', '誒', '耶', '囉',

        // 時間相關
        '今天', '明天', '昨天', '前天', '後天', '現在', '剛才', '等等',
        '上午', '下午', '中午', '晚上', '早上', '半夜', '凌晨',
        '今年', '明年', '去年', '前年', '年初', '年底', '年中',
        '這週', '下週', '上週', '本週', '週末', '平日',
        '這月', '下月', '上月', '月初', '月底', '月中',

        // 數字和量詞
        '一', '二', '三', '四', '五', '六', '七', '八', '九', '十',
        '個', '位', '名', '次', '回', '遍', '趟', '番', '場', '件',
        '條', '張', '隻', '匹', '頭', '座', '棟', '層', '間', '家',
        '台', '輛', '艘', '架', '枝', '支', '根', '株', '棵', '顆',
        '粒', '滴', '片', '塊', '團', '堆', '群', '批', '套', '副',

        // 程度副詞
        '太', '挺', '蠻', '頗', '相當', '十分', '格外', '分外', '異常',
    ]);
}

// 4. 詞頻過濾器 過濾掉過於常見或罕見的詞
function filterByFrequency(wordCounts, minFreq, maxFreqRatio) {
    const totalWords = Object.values(wordCounts).reduce((sum, count) => sum + count, 0);
    const maxFreq = totalWords * maxFreqRatio;

    const filtered = {};
    for (const [word, count] of Object.entries(wordCounts)) {
        if (count >= minFreq && count <= maxFreq) {
            filtered[word] = count;
        }
    }
    return filtered;
}

// 5. 詞雲生成函數
function buildWordCloudList(selectedYear) {
    const allCleanText = recordsForYear(selectedYear).map(record => String(record.label || '').replace(dateRegex, '').trim()).join(' ');

    if (!allCleanText.trim()) {
        return { list: [], message: '沒有足夠的資料來產生詞雲' };
    }

    const stopWords = getStopWords();
    const wordCounts = {};

    // 提取中文詞組
    const chineseWords = extractChineseWords(allCleanText);
    chineseWords.forEach(word => {
        if (!stopWords.has(word) && word.length >= 2) {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
        }
    });

    // 提取英文單詞
    const englishWords = extractEnglishWords(allCleanText);
    englishWords.forEach(word => {
        const lowerWord = word.toLowerCase();
        if (!stopWords.has(lowerWord) && lowerWord.length >= 3) {
            wordCounts[lowerWord] = (wordCounts[lowerWord] || 0) + 1;
        }
    });

    // 過濾詞頻
    const filteredWords = filterByFrequency(wordCounts, 2, 0.2);

    const finalWordCounts = filteredWords;

    // 權重加成
    const enhancedWords = {};
    const sortedWordsForBoosting = Object.keys(finalWordCounts).sort((a, b) => b.length - a.length);
    for (const word of sortedWordsForBoosting) {
        let boost = 1;
        if (word.length >= 3 && /^[\u4e00-\u9fa5]+$/.test(word)) {
            boost = 1.5;
        }
        enhancedWords[word] = filteredWords[word] * boost;
    }

    // 轉換為列表並排序
    const list = Object.entries(enhancedWords)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 150);
    if (list.length === 0) {
        return { list: [], message: '沒有足夠的關鍵字來產生詞雲' };
    }

    return { list, message: '' };
}
function getWordCloudList(selectedYear) {
    // Data is static during this page visit. Cache only the final 150 words,
    // not the large intermediate n-gram arrays or rendered DOM.
    const key = String(selectedYear);
    if (!wordCloudCache.has(key)) wordCloudCache.set(key, buildWordCloudList(selectedYear));
    return wordCloudCache.get(key);
}
function showWordCloudMessage(message) {
    const paragraph = document.createElement('p'); paragraph.className = 'loading-text'; paragraph.textContent = message;
    dom['wordcloud-canvas'].replaceChildren(paragraph);
}
function createWordCloud(selectedYear = 'all') {
    clearTimer('wordcloud');
    const canvas = dom['wordcloud-canvas'];
    if (typeof WordCloud !== 'function') { canvas.textContent = '詞雲元件無法載入'; return; }
    showWordCloudMessage('正在分析語錄文字，請稍候...');

    timers.wordcloud = setTimeout(() => {
        timers.wordcloud = null;
        if (viewState.name !== 'dashboard') return;
        try {
            const { list, message } = getWordCloudList(selectedYear);
            if (!list.length) { showWordCloudMessage(message); return; }
            WordCloud(canvas, {
                // The library receives its own pairs, keeping cached data immutable.
                list: list.map(([word, weight]) => [word, weight]),
                gridSize: Math.round(16 * canvas.offsetWidth / 1024),
                weightFactor: function(size) {
                    return Math.pow(size, 0.7) * 6;
                },
                fontFamily: 'Arial, "Microsoft JhengHei", "PingFang TC", sans-serif',
                color: function() {
                    const colors = [
                        '#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6',
                        '#1abc9c', '#e67e22', '#34495e', '#16a085', '#c0392b'
                    ];
                    return colors[Math.floor(Math.random() * colors.length)];
                },
                backgroundColor: 'transparent',
                rotateRatio: 0.3,
                rotationSteps: 2,
                minSize: 12,
                drawOutOfBound: false,
                shrinkToFit: true,
                click: function(item) {
                    // 點擊詞彙時觸發搜尋
                    dom['searchInput'].value = item[0];
                    searchRecords(item[0]);
                }
            });
        } catch (error) { canvas.textContent = '詞雲暫時無法產生'; console.warn('詞雲產生失敗', error); }
    }, 100);
}

// 刷新整個儀表板的總控制函數
function refreshDashboard(selectedYear) {
    updateDashboard(selectedYear);
    createHeatmap(selectedYear);
    createWordCloud(selectedYear);
}

function bindNavigationEvents() {
    monthList.addEventListener('click', event => {
        const day = event.target.closest('.day-item');
        if (day && monthList.contains(day)) { showRecords(day.dataset.month, day.dataset.day); return; }
        const month = event.target.closest('.month-item');
        if (!month || !monthList.contains(month)) return;
        const list = month.querySelector('ul'), button = month.querySelector('.date-navigation-button');
        const open = list.classList.toggle('open'); list.inert = !open;
        button.setAttribute('aria-expanded', String(open));
    });
    const heatmap = dom['heatmap'];
    heatmap.addEventListener('click', event => {
        const day = event.target.closest('.heatmap-day');
        if (day && Number(day.dataset.count) > 0) showRecords(day.dataset.month, day.dataset.day);
    });
    [['mouseover', true], ['mouseout', false]].forEach(([eventName, hovering]) => {
        heatmap.addEventListener(eventName, event => {
            const day = event.target.closest('.heatmap-day');
            if (!day || Number(day.dataset.count) <= 0 || day.contains(event.relatedTarget)) return;
            day.style.transform = hovering ? 'scale(1.3)' : 'scale(1)';
            day.style.zIndex = hovering ? '10' : '1';
            day.style.boxShadow = hovering ? '0 0 5px rgba(0,0,0,0.3)' : 'none';
        });
    });
    // 事件監聽器設定
    const submitSearch = () => searchRecords(dom['searchInput'].value);
    dom['searchBtn'].addEventListener('click', submitSearch);
    dom['searchInput'].addEventListener('keydown', event => {
        if (event.key === 'Enter') { event.preventDefault(); submitSearch(); }
    });

    dom['dashboardBtn'].addEventListener("click", toggleDashboard);
    dom['prevDay'].addEventListener("click", function () {switchDay(-1);});
    dom['nextDay'].addEventListener("click", function () {switchDay(1);});
    dom['randomBtn'].addEventListener("click", randomRecord);
    dom['shareBtn'].addEventListener("click", shareCurrentView);

    dom['year-filter'].addEventListener('change', (e) => {
        refreshDashboard(e.target.value);
    });

    if (menuToggle) {
        menuToggle.addEventListener("click", () => sidebar.classList.toggle("open"));
        const mobileMenu = window.matchMedia('(max-width: 768px)');
        const syncMenuAccessibility = () => {
            const isOpen = sidebar.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            // 滑出畫面外的手機選單不應留在鍵盤與輔助工具的導覽順序內。
            const isHidden = mobileMenu.matches && !isOpen;
            if (isHidden && sidebar.contains(document.activeElement)) menuToggle.focus();
            sidebar.inert = isHidden;
        };
        new MutationObserver(syncMenuAccessibility).observe(sidebar, {
            attributes: true, attributeFilter: ['class']
        });
        mobileMenu.addEventListener('change', syncMenuAccessibility);
        syncMenuAccessibility();
    }

    // 點擊選單外部區域以關閉選單
    document.addEventListener("click", function(event) {
        const isMenuOpen = sidebar.classList.contains("open");
        const isClickInsideMenu = sidebar.contains(event.target);
        const isClickOnToggle = menuToggle && menuToggle.contains(event.target);
        if (isMenuOpen && !isClickInsideMenu && !isClickOnToggle) {
            sidebar.classList.remove("open");
        }
    });

    // 主題切換
    dom['theme-toggle'].addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            this.textContent = "淺色模式";
            writeStoredValue('theme', 'dark');
        } else {
            this.textContent = "深色模式";
            writeStoredValue('theme', 'light');
        }
    });

    // 點擊標題回到首頁
    dom['homeBtn'].addEventListener("click", () => {

        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        showRecords(month, day, true);

        sidebar.classList.remove("open");

        document.querySelectorAll("#monthList ul.open").forEach(ul => {
            ul.classList.remove("open");
            ul.inert = true;
            ul.parentElement.querySelector('button').setAttribute('aria-expanded', 'false');
        });
        pushRoute();
    });

}

function showToday(skipPush = true) {
    const today = new Date();
    showRecords(today.getMonth() + 1, today.getDate(), skipPush);
}
function restoreRoute(initial = false) {
    const params = new URLSearchParams(location.search);
    const month = params.get('month'), day = params.get('day'), search = params.get('search');
    if (params.get('view') === 'favorites') showFavoritesPage(true);
    else if (search) {
        dom['searchInput'].value = search;
        searchRecords(search, true);
    } else if (/^(?:[1-9]|1[0-2])$/.test(month || '') && /^(?:[1-9]|[12][0-9]|3[01])$/.test(day || '') && (!initial || getDayRecords(month, day).length > 0)) {
        showRecords(month, day, true);
    } else showToday();
}
function initializeApplication() {
    bindNavigationEvents();
    bindAccessibilityEvents();
    bindGameEvents();
    bindRecordEvents();
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js', { scope: './', updateViaCache: 'none' })
            .then(registration => console.log('ServiceWorker 註冊成功, scope: ', registration.scope))
            .catch(error => console.warn('ServiceWorker 註冊失敗: ', error));
    }
    pruneInvalidFavorites();
    if (readStoredValue('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        dom['theme-toggle'].textContent = '淺色模式';
    }
    recordIndex = getAllRecords();
    prepareQuizData();
    buildMonthList();
    restoreRoute(true);
}
window.addEventListener('popstate', () => restoreRoute());
window.addEventListener('storage', event => {
    if (event.key === FAVORITES_KEY || event.key === null) favoritesCache = null;
});

const aboutBtn = dom['aboutBtn'];
const aboutModal = dom['about-modal'];
const closeBtn = document.querySelector('.close-button');
let aboutReturnFocus = null;
let aboutBackground = [];
function closeAboutModal() {
    aboutModal.classList.remove('show');
    aboutBackground.forEach(({ element, wasInert }) => { element.inert = wasInert; });
    aboutBackground = [];
    if (aboutReturnFocus && !aboutReturnFocus.closest('[inert]')) aboutReturnFocus.focus();
    else if (menuToggle) menuToggle.focus();
}
function bindAccessibilityEvents() {
    aboutBtn.addEventListener('click', () => {
        aboutReturnFocus = document.activeElement;
        aboutModal.classList.add('show');
        aboutBackground = Array.from(document.body.children)
            .filter(element => element !== aboutModal && element.tagName !== 'SCRIPT')
            .map(element => ({ element, wasInert: element.inert }));
        aboutBackground.forEach(({ element }) => { element.inert = true; });
        closeBtn.focus();
    });
    closeBtn.addEventListener('click', closeAboutModal);
    window.addEventListener('click', (event) => {
        if (event.target == aboutModal) {
            closeAboutModal();
        }
    });

    // 鍵盤快捷鍵功能
    document.addEventListener('keydown', (event) => {
        if (aboutModal.classList.contains('show')) {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeAboutModal();
            } else if (event.key === 'Tab') {
                const focusable = Array.from(aboutModal.querySelectorAll('button, a[href]'));
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
            return;
        }
        // 當焦點在輸入框時 不觸發快捷鍵 避免干擾打字
        if (document.activeElement.matches('input, textarea, select, [contenteditable="true"]')) {
            return;
        }

        switch (event.key) {
            case 'ArrowLeft': // 左箭頭
                event.preventDefault();
                dom['prevDay'].click();
                break;
            case 'ArrowRight': // 右箭頭
                event.preventDefault();
                dom['nextDay'].click();
                break;
            case 'Escape': // Esc鍵
                if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
                break;
            case '/': // 斜線鍵
                event.preventDefault();
                dom['searchInput'].focus(); // 直接跳到搜尋框
                break;
        }
    });

    // 回到頂部按鈕功能
    const backToTopBtn = dom['backToTopBtn'];
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
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
    });

}

// 展旭歷史王

// 1. DOM 元素
const quizBtn = dom['quizBtn'];
const quizContainer = dom['quiz-container'];
const quizSetupView = dom['quiz-setup-view'];
const quizGameView = dom['quiz-game-view'];
const quizResultsView = dom['quiz-results-view'];
const quizProgress = dom['quiz-progress'];
const quizScoreEl = dom['quiz-score'];
const quizQuestionEl = dom['quiz-question'];
const quizOptionsEl = dom['quiz-options'];
const quizFeedbackEl = dom['quiz-feedback'];
const finalScoreEl = dom['final-score'];
const playAgainBtn = dom['play-again-btn'];
const returnHomeBtn = dom['return-home-btn'];
const quizReviewArea = dom['quiz-review-area'];

// 2. 測驗狀態變數
const quizState = { records: [], questions: [], index: 0, score: 0, total: config.quiz.totalQuestions };

// 3. 準備資料 將巢狀的 records 物件扁平化 方便隨機抽樣
function prepareQuizData() {
    quizState.records = recordIndex.filter(record => record.year && String(record.label || '').length >= config.quiz.minLabelLength);
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
    shuffleArray(quizState.records);
    quizState.questions = [];
    const usedLabels = new Set();
    const availableDates = [...new Set(quizState.records.map(record => `${record.year}年${record.month}月${record.day}日`))];
    if (availableDates.length < 4) return;

    for (let i = 0; i < quizState.records.length && quizState.questions.length < quizState.total; i++) {
        const questionRecord = quizState.records[i];
        if (usedLabels.has(questionRecord.label)) continue;

        usedLabels.add(questionRecord.label);

        const correctAnswer = `${questionRecord.year}年${questionRecord.month}月${questionRecord.day}日`;
        const options = new Set([correctAnswer]);

        let attempts = 0;
        while (options.size < 4 && attempts++ < 1000) {
            const randomRecord = quizState.records[Math.floor(Math.random() * quizState.records.length)];
            const distractor = `${randomRecord.year}年${randomRecord.month}月${randomRecord.day}日`;
            options.add(distractor);
        }

        if (options.size < 4) {
            const remaining = availableDates.filter(date => !options.has(date));
            shuffleArray(remaining);
            remaining.forEach(date => { if (options.size < 4) options.add(date); });
        }
        const shuffledOptions = Array.from(options);
        shuffleArray(shuffledOptions);

        const cleanQuestion = questionRecord.label.replace(dateRegex, '').trim();
        quizState.questions.push({
            question: cleanQuestion,
            options: shuffledOptions,
            answer: correctAnswer,
            userAnswer: null
        });
    }
}

// 6. 顯示當前問題
function renderAnswerOptions(container, options) {
    container.replaceChildren();
    options.forEach(option => {
        const button = document.createElement('button'); button.type = 'button';
        button.className = 'quiz-option-btn'; button.textContent = option; container.appendChild(button);
    });
}
function showAnswerFeedback(container, feedback, selectedButton, question) {
    const buttons = container.querySelectorAll('button');
    buttons.forEach(button => { button.disabled = true; });
    const correct = selectedButton.textContent === question.answer;
    selectedButton.classList.add(correct ? 'correct' : 'incorrect');
    feedback.textContent = correct ? '答對了！' : '答錯了！正確答案是：' + question.answer;
    feedback.style.color = correct ? '#28a745' : '#dc3545';
    if (!correct) buttons.forEach(button => { if (button.textContent === question.answer) button.classList.add('correct'); });
    return correct;
}
function displayQuizQuestion() {
    if (quizState.index >= quizState.questions.length) {
        endQuiz();
        return;
    }
    const currentQuestion = quizState.questions[quizState.index];
    quizProgress.textContent = `第 ${quizState.index + 1} / ${quizState.total} 題`;
    quizScoreEl.textContent = `分數: ${quizState.score}`;
    quizQuestionEl.textContent = currentQuestion.question;
    quizFeedbackEl.textContent = '';

    renderAnswerOptions(quizOptionsEl, currentQuestion.options);
}

// 7. 選擇答案的邏輯
function selectQuizAnswer(e) {
    const selectedButton = e.target;
    const selectedAnswer = selectedButton.textContent;
    const currentQuestion = quizState.questions[quizState.index];

    currentQuestion.userAnswer = selectedAnswer;

    if (showAnswerFeedback(quizOptionsEl, quizFeedbackEl, selectedButton, currentQuestion)) quizState.score++;

    quizState.index++;
    timers.quiz = setTimeout(() => { timers.quiz = null; displayQuizQuestion(); }, 2000);
}

// 8. 顯示題目回顧的函數
function renderClozeText(element, text, answer, replacement) {
    element.replaceChildren();
    const index = text.indexOf(answer);
    if (index < 0) { element.textContent = text; return; }
    const blank = document.createElement('span'); blank.className = 'cloze-blank'; blank.textContent = replacement;
    element.append(document.createTextNode(text.slice(0, index)), blank, document.createTextNode(text.slice(index + answer.length)));
}
function renderGameReview(container, questions, cloze) {
    const heading = document.createElement('h3'); heading.textContent = '題目回顧';
    container.replaceChildren(heading);
    questions.forEach((question, index) => {
        const item = document.createElement('div'); item.className = 'review-item';
        const title = document.createElement('div'); title.className = 'review-question';
        const text = (index + 1) + '. ' + (cloze ? question.fullQuestion : question.question);
        if (cloze) renderClozeText(title, text, question.answer, '[' + question.answer + ']');
        else title.textContent = text;
        const answers = document.createElement('div'); answers.className = 'review-answer';
        const correct = question.userAnswer === question.answer;
        const response = document.createElement('p'); response.className = 'user-answer ' + (correct ? 'correct' : 'incorrect');
        response.textContent = (correct ? '✓' : '✗') + ' 您的答案：' + question.userAnswer;
        answers.appendChild(response);
        if (!correct) { const expected = document.createElement('p'); expected.textContent = '正確答案：' + question.answer; answers.appendChild(expected); }
        item.append(title, answers); container.appendChild(item);
    });
}
function displayQuizReview() { renderGameReview(quizReviewArea, quizState.questions, false); }

// 9. 結束歷史王
function endQuiz() {
    quizGameView.style.display = 'none';
    quizResultsView.style.display = 'block';
    finalScoreEl.textContent = `${quizState.score} / ${quizState.total}`;
    displayQuizReview();
}

// 10. 開始歷史王
function startQuiz() {
    clearTimer('quiz');
    generateQuizQuestions();
    if (quizState.questions.length < quizState.total) {
        alert(`符合條件的題目不足 ${quizState.total} 題，無法開始遊戲！\n（目前只找到 ${quizState.questions.length} 題）`);
        showQuizSetup(); // 返回設定畫面
        return;
    }
    quizSetupView.style.display = 'none';
    quizGameView.style.display = 'block';
    quizResultsView.style.display = 'none';
    quizState.index = 0;
    quizState.score = 0;
    displayQuizQuestion();
}

// 11. 顯示設定畫面的函數
function showQuizSetup() {
    clearTimer('quiz');
    showView('quiz');
    quizSetupView.style.display = 'block';
    quizGameView.style.display = 'none';
    quizResultsView.style.display = 'none';
}

// 展旭克漏字

// 1. DOM 元素
const clozeBtn = dom['clozeBtn'];
const clozeContainer = dom['cloze-container'];
const clozeSetupView = dom['cloze-setup-view'];
const clozeGameView = dom['cloze-game-view'];
const clozeResultsView = dom['cloze-results-view'];
const clozeProgress = dom['cloze-progress'];
const clozeScoreEl = dom['cloze-score'];
const clozeQuestionEl = dom['cloze-question'];
const clozeOptionsEl = dom['cloze-options'];
const clozeFeedbackEl = dom['cloze-feedback'];
const clozeFinalScoreEl = dom['cloze-final-score'];
const clozePlayAgainBtn = dom['cloze-play-again-btn'];
const clozeReturnHomeBtn = dom['cloze-return-home-btn'];
const clozeReviewArea = dom['cloze-review-area'];

// 2. 遊戲狀態變數
const clozeState = { records: [], words: [], questions: [], index: 0, score: 0, total: config.cloze.totalQuestions };

// 3. 準備克漏字資料和詞彙庫
function prepareClozeData() {
    if (clozeState.records.length > 0) return;
    const wordSet = new Set();
    const splitRegex = /[\s,.;。，；、()（）]/g;
    quizState.records.forEach(record => {
        const cleanLabel = record.label.replace(dateRegex, '').trim();
        if (cleanLabel.length >= config.cloze.minLabelLength) {
            clozeState.records.push({ ...record, cleanLabel });
            const words = cleanLabel.split(splitRegex);
            words.forEach(word => {
                if (word.length >= config.cloze.keywordMinLength && word.length <= config.cloze.keywordMaxLength) {
                    wordSet.add(word);
                }
            });
        }
    });
    clozeState.words = Array.from(wordSet);
}

// 4. 產生克漏字問題
function generateClozeQuestions() {
    shuffleArray(clozeState.records);
    clozeState.questions = [];
    const splitRegex = /[\s,.;。，；、()（）]/g

    for (let i = 0; i < clozeState.records.length && clozeState.questions.length < clozeState.total; i++) {
        const record = clozeState.records[i];
        const words = record.cleanLabel.split(splitRegex).filter(w => w.length >= config.cloze.keywordMinLength && w.length <= config.cloze.keywordMaxLength);
        if (words.length === 0) continue;

        shuffleArray(words);
        const answer = words[0];
        const questionText = record.cleanLabel;
        const options = new Set([answer]);

        let attempts = 0;
        while(options.size < 4 && clozeState.words.length > 3 && attempts++ < 1000) {
            const randomWord = clozeState.words[Math.floor(Math.random() * clozeState.words.length)];
            options.add(randomWord);
        }

        if (options.size < 4 && clozeState.words.length > 3) {
            const remaining = clozeState.words.filter(word => !options.has(word));
            shuffleArray(remaining);
            remaining.forEach(word => { if (options.size < 4) options.add(word); });
        }
        const shuffledOptions = Array.from(options);
        shuffleArray(shuffledOptions);

        clozeState.questions.push({
            question: questionText,
            fullQuestion: record.cleanLabel,
            options: shuffledOptions,
            answer: answer,
            userAnswer: null
        });
    }
}

// 5. 顯示克漏字問題
function displayClozeQuestion() {
    if (clozeState.index >= clozeState.questions.length) {
        endClozeTest();
        return;
    }

    const currentQuestion = clozeState.questions[clozeState.index];
    clozeProgress.textContent = `第 ${clozeState.index + 1} / ${clozeState.total} 題`;
    clozeScoreEl.textContent = `分數: ${clozeState.score}`;
    renderClozeText(clozeQuestionEl, currentQuestion.question, currentQuestion.answer, '[ ___ ]');
    clozeFeedbackEl.textContent = '';

    renderAnswerOptions(clozeOptionsEl, currentQuestion.options);
}

// 6. 選擇克漏字答案的邏輯
function selectClozeAnswer(e) {
    const selectedButton = e.target;
    const selectedAnswer = selectedButton.textContent;
    const currentQuestion = clozeState.questions[clozeState.index];

    currentQuestion.userAnswer = selectedAnswer;

    if (showAnswerFeedback(clozeOptionsEl, clozeFeedbackEl, selectedButton, currentQuestion)) clozeState.score++;

    renderClozeText(clozeQuestionEl, currentQuestion.question, currentQuestion.answer, currentQuestion.answer);
    clozeState.index++;
    timers.cloze = setTimeout(() => { timers.cloze = null; displayClozeQuestion(); }, 2000);
}

// 7. 顯示題目回顧的函數
function displayClozeReview() { renderGameReview(clozeReviewArea, clozeState.questions, true); }

// 8. 結束克漏字
function endClozeTest() {
    clozeGameView.style.display = 'none';
    clozeResultsView.style.display = 'block';
    clozeFinalScoreEl.textContent = `${clozeState.score} / ${clozeState.total}`;
    displayClozeReview();
}

// 9. 開始克漏字
function startClozeTest() {
    clearTimer('cloze');
    generateClozeQuestions();
    if (clozeState.questions.length < clozeState.total) {
        alert(`符合條件的題目不足 ${clozeState.total} 題，無法開始遊戲！\n（目前只找到 ${clozeState.questions.length} 題）`);
        return;
    }
    clozeSetupView.style.display = 'none';
    clozeGameView.style.display = 'block';
    clozeResultsView.style.display = 'none';
    clozeState.index = 0;
    clozeState.score = 0;
    displayClozeQuestion();
}

// 10. 顯示設定畫面的函數
function showClozeSetup() {
    clearTimer('cloze');
    showView('cloze');
    clozeSetupView.style.display = 'block';
    clozeGameView.style.display = 'none';
    clozeResultsView.style.display = 'none';
}

function bindGameEvents() {
    quizBtn.addEventListener('click', showQuizSetup);
    clozeBtn.addEventListener('click', () => { prepareClozeData(); showClozeSetup(); });
    quizSetupView.addEventListener('click', event => {
        const button = event.target.closest('.game-option-btn'); if (!button) return;
        quizState.total = Number(button.dataset.count); startQuiz();
    });
    clozeSetupView.addEventListener('click', event => {
        const button = event.target.closest('.game-option-btn'); if (!button) return;
        clozeState.total = Number(button.dataset.count); startClozeTest();
    });
    [[quizOptionsEl, selectQuizAnswer], [clozeOptionsEl, selectClozeAnswer]].forEach(([container, handler]) => {
        container.addEventListener('click', event => {
            const button = event.target.closest('.quiz-option-btn');
            if (button && container.contains(button) && !button.disabled) handler({ target: button });
        });
    });
    playAgainBtn.addEventListener('click', showQuizSetup);
    clozePlayAgainBtn.addEventListener('click', showClozeSetup);
    returnHomeBtn.addEventListener('click', () => dom['homeBtn'].click());
    clozeReturnHomeBtn.addEventListener('click', () => dom['homeBtn'].click());
}

// 語音朗讀功能的核心處理函數
function handleTTSClick() {
    if (!('speechSynthesis' in window)) {
        alert('抱歉，您的瀏覽器不支援語音朗讀功能');
        return;
    }
    const ttsButton = document.getElementById('tts-button');
    if (!ttsButton) return;
    // 控制邏輯
    if (speechState.speaking && !speechState.paused) {
        window.speechSynthesis.pause();
        speechState.paused = true;
        ttsButton.textContent = '▶️ 繼續';
    } else if (speechState.speaking && speechState.paused) {
        window.speechSynthesis.resume();
        speechState.paused = false;
        ttsButton.textContent = '⏸️ 暫停';
    } else {
        // 1. 收集要朗讀的文字
            let textToSpeak = '';
        const recordsToRead = document.querySelectorAll('#content .record-content');
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
        speechState.utterance = utterance;
        utterance.lang = 'zh-TW';
        utterance.rate = 1;
        utterance.pitch = 1;
        // 3. 綁定事件
        utterance.onstart = () => {
            speechState.speaking = true;
            speechState.paused = false;
            ttsButton.textContent = '⏸️ 暫停';
        };
        utterance.onpause = () => {
            speechState.paused = true;
            ttsButton.textContent = '▶️ 繼續';
        };
        utterance.onresume = () => {
            speechState.paused = false;
            ttsButton.textContent = '⏸️ 暫停';
        };
        utterance.onend = () => {
            speechState.utterance = null;
            speechState.speaking = false;
            speechState.paused = false;
            ttsButton.textContent = '▶️ 朗讀';
        };
        utterance.onerror = () => { if (speechState.utterance === utterance) stopSpeech(); };
        // 4. 開始朗讀
        try { window.speechSynthesis.speak(utterance); }
        catch (error) { stopSpeech(); console.warn('語音朗讀失敗', error); }
    }
}

// 收藏功能
function createFavoritesPage() {
    const favorites = getFavorites();

    // --- 排序邏輯 ---
    if (viewState.favoritesSort === 'date') {
        favorites.sort((a, b) => {
            const [aMonth, aDay] = a.split('-').map(Number);
            const [bMonth, bDay] = b.split('-').map(Number);
            if (aMonth !== bMonth) {
                return aMonth - bMonth;
            }
            return aDay - bDay;
        });
    }

    const favoriteIds = new Set(favorites);
    const container = document.createElement('div');

    const pageHeader = document.createElement('div');
    pageHeader.className = 'page-header';

    const title = document.createElement('h2');
    title.textContent = `我的收藏 ${favorites.length} 筆`;

    const controls = document.createElement('div');
    controls.className = 'favorites-controls';

    const sortDateBtn = document.createElement('button');
    sortDateBtn.className = `sort-button ${viewState.favoritesSort === 'date' ? 'active' : ''}`;
    sortDateBtn.dataset.sort = 'date';
    sortDateBtn.textContent = '按日期排序';

    const sortAddedBtn = document.createElement('button');
    sortAddedBtn.className = `sort-button ${viewState.favoritesSort === 'added' ? 'active' : ''}`;
    sortAddedBtn.dataset.sort = 'added';
    sortAddedBtn.textContent = '按收藏順序';

    controls.appendChild(sortDateBtn);
    controls.appendChild(sortAddedBtn);
    pageHeader.appendChild(title);
    pageHeader.appendChild(controls);
    container.appendChild(pageHeader);

    if (favorites.length === 0) {
        const emptyMsg = document.createElement('p');
        emptyMsg.textContent = '您尚未收藏任何記錄，點擊記錄右側的 ❤️ 來收藏您喜歡的內容吧！';
        container.appendChild(emptyMsg);
    } else {
        favorites.forEach(recordId => {
            const item = getRecordById(recordId);
            if (item) {
                const recordElement = createRecordElement(item, recordId, 'favorites', '', favoriteIds);
                container.appendChild(recordElement);
            }
        });
    }

    return container;
}
function showFavoritesPage(skipPush = false) {
    showView('main');
    viewState.month = viewState.day = viewState.search = null;
    updateContentWithFade(createFavoritesPage());
    if (!skipPush) pushRoute({ view: 'favorites' });

    clearSidebarSelection();

    sidebar.classList.remove("open");
}

// 綁定主按鈕
const favoritesBtn = dom['favoritesBtn'];

function bindRecordEvents() {
    favoritesBtn.addEventListener('click', () => showFavoritesPage(false));
    contentDiv.addEventListener('click', event => {
        const button = event.target.closest('.favorite-btn');
        if (button && contentDiv.contains(button)) {
            updateFavoriteButton(button, toggleFavorite(button.dataset.recordId));
            return;
        }
        const dateLink = event.target.closest('[data-navigate-date]');
        if (dateLink && contentDiv.contains(dateLink)) {
            event.preventDefault();
            showRecords(dateLink.dataset.month, dateLink.dataset.day);
            return;
        }
        const sortButton = event.target.closest('.sort-button');
        if (sortButton && contentDiv.contains(sortButton) && viewState.favoritesSort !== sortButton.dataset.sort) {
            viewState.favoritesSort = sortButton.dataset.sort;
            showFavoritesPage(true);
        }
        if (event.target.closest('#tts-button')) handleTTSClick();
    });
}

initializeApplication();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startApplication, { once: true });
else startApplication();
})();
