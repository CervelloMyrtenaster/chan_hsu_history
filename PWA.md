# PWA 維護與發布

本站部署在 `https://cervellomyrtenaster.github.io/chan_hsu_history/`。Service Worker、manifest scope 與資源 URL 保持相對於專案目錄；manifest 的 `id` 刻意保留既有安裝識別 `/chan_hsu_history/index.html`。

## 快取與更新

- 核心版本包括 HTML、CSS、app.js、data.js、manifest 與 192/512 圖示。全部成功下載並通過 MIME 檢查才能安裝。
- HTML、CSS、JS 與資料使用已安裝版本，不逐檔背景更新。日期與搜尋網址使用相同 HTML，地址列參數交給 app.js 還原。
- Chart.js 4.5.1 與 WordCloud 1.2.2 獨立快取；CDN 失敗不阻止核心安裝。缺少套件時既有介面保留降級處理。
- manifest 網路優先，失敗後使用本專案快取。大型 maskable 圖示與 Apple 圖示只在請求時快取，不強制預下載。
- 新 Worker 等舊頁面全部關閉後自然啟用。沒有強制接管或自動重載；若更新仍在等待，關閉本站所有分頁及已安裝視窗後再開啟。
- activate 只清理 `chan-hsu-history-` 前綴的舊快取，不清除其他專案。

## 每次發布

1. HTML、CSS、JS、資料或圖示變更時，更新 `service-worker.js` 的 `RELEASE`，不要重用已發布的版本號。
2. 套件升級時，同步修改 index.html 與 Worker 的固定版本 URL。
3. 執行 `node --test tests/service-worker.test.cjs`、`node --check service-worker.js` 與 `node --check app.js`。測試只使用 Node 內建功能，不需安裝套件。
4. 一起發布該版本的所有檔案；確認 GitHub Pages 部署完成、必要檔案回傳 200 與正確 Content-Type。快取版本號不能取代部署完整性檢查。
5. 驗證新版本安裝、等待、關閉所有舊分頁後啟用，以及其他專案快取仍存在。

## 手動驗證

- 初次連線開啟後，在瀏覽器 Application 面板確認核心快取包含 data.js；新 Worker 第一次安裝不會立即接管目前頁面。
- 重新開啟本站後切成離線，重新載入首頁、`?month=10&day=2`、`?search=奶茶` 與 `?view=favorites`。
- 確認日期、搜尋、收藏、測驗及有快取套件時的圖表／詞雲可用；外部照片與連結仍需要網路。
- 模擬 CDN 失敗，確認核心仍能安裝；模擬核心檔案 404／500，確認新版安裝失敗、舊版本保留。
- 在兩個本站分頁開啟時發布新版，確認舊頁面不會突然重載，新版本自然等待。
- 測試 Android／桌面安裝、iOS 加入主畫面及橫向版面；確認應用識別未改變。

圖示目前保留原設計。maskable 圖示實際為 2475×2475，宣告已更正；未重新繪製或縮圖，仍需在裝置上確認遮罩裁切。
