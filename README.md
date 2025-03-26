# FE-Testing - NOTE

> https://ithelp.ithome.com.tw/articles/10320016

## 軟體測試週期
軟體測試週期（life cycle）通常分為三種：Alpha、Beta、Gamma
### Alpha(α) 階段
Alpha(α) 階段通常是由內部進行，此階段通常使用「白箱」方法，列出特定場景，測試軟體的可靠度（Reliability）。
### Beta(β) 階段
Beta(β) 階段則是將軟體開放給最終用戶（end user）進行測試。其中，又分成封閉測試（Closed Beta）及公開測試（Open Beta)，封測階段僅開放給少數人，簽訂保密協議，以測試軟體的功能；公開測試則開放給大量人，以順便達到壓力測試。
### Gamma(γ) 階段
有的認為 Gamma 在於測試「軟體的可能存在的缺陷」進行測試，亦有人認為 Gamma 階段即是最終產品的候選版本（Release Candidate, RC）的測試。

## 開發期 v.s. 完成期
亦有將上述週期再區分為「開發期」、「完成期」。在完成期，又可細分為 Release to Manufacturing(RTM)、General availability(GA)、Gold 。具體差別在於 RTM 是指「可以釋出給製造」；GA 則是指「產品正式供使用者使用、正式公開了」；Gold 則代表最終極的版本。

## 黑箱（Black-box Testing）/白箱（White-box Testing)
黑箱僅需要顧及「功能面」是否完整，比如「具備購物功能的網站」可以正確地完成購物功能；白箱則需關注「資料流程面」、「控制流程面」比如在購物網站上故意輸入極大值，當庫存數量小於極大值，要正確顯示商品已完售的字樣，此即為「控制流程面」；而在購物的數量上輸入特殊符號，UI 介面要立即檔錯並防止錯誤字元送入後端，此即為「資料流程面」。

## 測試類別
測試分成三個類別。
### 金字塔最底層的單元測試（Unit Test）
旨在確保程式撰寫邏輯正確性，撰寫成本最低、範疇最小，且高度隔離（isolated）
### 金字塔中間的服務測試（Service Test）
是泛指所有應用程式 API、資料邏輯、整合其他服務的邏輯，在此處測試複雜度較高，需確保完整業務（商業）邏輯正確
### 最頂層的使用者介面測試（UI Test）
則是站在使用者角度，條列式使用者的 use case 進行畫面測試。

## 常見的前端測試
### 驗收測試（Acceptance Testing)
軟體開發中提到的 UAT 階段（User Acceptance Testing) 會做的測試，即軟體測試週期 Beta 階段中會做的「邀請最終使用者」」去操作產品，確保功能、資料流都如預期。
### 效能測試（Performance Testing）
在確認網頁前端的效能是否如預期，而此處的「效能」可能由團隊自行定義「速度」、「穩定度」，或是可以參照網站核心效能治標（Core Web Vitals）去設定。
### 視覺回歸測試（Visual Regression Testing)
在檢驗畫面與設計稿的準確度，通常透過截圖（screenshots）並可搭配線上工具（例如: percy）來進行比對。
### 無障礙測試 （Accessibility Testing）
在於確保網站可以讓所有使用者（包含有身體上特殊需求的使用者）都可以有良好的訪問性。
跨瀏覽器測試（Cross-browser Testing）
在確保產品在不同瀏覽器上的表現都如預期。


### 單元測試 (Unit)
對程式的最小單位進行測試。測試程式的最小單位(例如: 一個函式)。輸入值與輸出值是否如預期。
* Jest, Mocha
### 整合測試 (Integration)
針對多個單元測試之間的交互進行測試。
* 測試替身
### 端對端(End to End)(E2E)
使用自動化測試的框架，以黑盒的方式模擬外部使用者使用應用程式，全面性的排查出整合問題、使用者體驗及其他應用程式的錯誤。
* Cypress, Selenium, Nightwatch, TestCafe, Puppeteer, Playwright
### 前端效能測試（Performance Testing）
使用者在瀏覽器上使用網站所感受到的網站加載速度、請求/反應時間及整個使用者體驗。
* Lighthouse Chrome
- #### LCP（Largest Contentful Paint）
    LCP 是指「網站內容中『最大可見元素』的加載時間」。
    其關注的是加載速度（loading time）。
    * Google 設定的標準是 LCP < 2.5s 才是好的用戶體驗。
- #### FID（First Input Display）
    FID 是指「進入網站後的第一個互動（ex.點擊、下拉選單等）的延遲時間。
    其關注的是互動性（Interactivity）。
    * Google 設定的標準是 FID < 0.1s 才是好的用戶體驗。
- #### CLS（Cumulative Layout Shift）
    CLS 是指「網站累計版面配置的轉移」，其計算公式是移動範圍所佔比例 * 影響範圍所佔比例。
    其關注的是視覺穩定性（Visual Stability)。
    * Google 設定的標準是 CLS < 0.1s 才是好的用戶體驗。
- #### INP（Interaction to Next Paint）
    Google 於 2023.05 提出的新指標，預計將於 2024.03 取代 FID，成為 Google Web Vitals 的新指標之一。鑑於 FID 僅取得「第一次互動的延遲時間」作為判斷，似乎無法衡量到整個網站的互動延遲時間。因此 INP 要衡量的是網站中的所有互動的輸入延遲、處理延遲、顯示延遲，亦即計算延遲時間至「下一個畫面顯示為止」。
### 視覺回歸測試（Visual Regression Testing）
在開發應用程式上，為確保每次更動 feature 後的介面，與前次視圖上的差異是否如預期。
透過「截圖（screenshot）」保留畫面，並透過工具來比較。
*  BackstopJS、Puppeteer、Chromatic、Percy
*  Cypress Plugin Snapshots
*  Percy

流程如下
- 建立基準線（Baseline）: 即截圖當前穩定版本的視圖，作為比較標準。
- 開始執行測試：對於異動版本進行截圖。
- 比較結果：使用工具，比較前兩步驟產生的視圖的差異。
- 產生測試報告：測試報告中，會標出差異的部分。

### 網頁無障礙測試（Accessibilty Testing）
網頁無障礙測試（Accessibilty Testing），又稱親和性測試、可訪問性測試。
a11y 就是 accessibilty（A 到 y 之間有 11 個字母）。
*  cypress-axe


***

> https://ithelp.ithome.com.tw/users/20130284/ironman/3612

### 靜態檢查 (Static)
幫助捕捉錯字或是型別錯誤。
* ESLint, Prettier
### 單元測試 (Unit)
驗證單一功能或可獨立的部分，是否符合預期的結果。
* Jest, Mocha
### 整合測試 (Integration)
驗證一系列相關的功能，是否和諧運作無誤。
### 端對端(End to End)(E2E)
直接模擬使用者的操作，驗證功能符合預期的行為。
有時又稱為功能測試 (Functional testing)。