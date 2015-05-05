## 前端訓練網站 001 - 玉峰汽車音響
**** Windows Sublime Text 3 實作串接 Google Doc 小型資料庫 ****

#訓練項目
- erb 樣板語言
- sass 撰寫(含compass)
- JQ運用(原生JS暫無)
- Animation 效果
- icon-font
- Rwd

目前想到的大概就是這樣，有需要再新增了

 ********

##網頁目的
該網站製作起因，因為親家需要一個能夠展示庫存平台的網頁，但沒有認識相關能幫忙進銷存的商家，為了現階段能清點庫存產品並展示，所以先建立該網站應急。

##網頁架構
目前考慮使用 Bootstrap ，因考慮到 RWD 的便利性，在手機上瀏覽性能較優，所以採用!!

 ********

##連結API

google API：

> https://docs.google.com/spreadsheets/d/1_Nsxtzn61BLfV77IG1NtrrWMkHS0ULU4jIu7zluhhE4/pubhtml

__轉 Json 的話，在網址後加上 ` /values?alt=json `__

formResponse：

> https://docs.google.com/forms/d/1qdM3WNiLNIYceZmwUWRYM61frcWUX0Rd0wD6ukEWae8/formResponse

entry：

> entry.1580568801
> entry.1594658695
> entry.629126977


##參考UI
####[psd2html](http://www.psd2html.com/?utm_source=cssawards.net&utm_medium=banner&utm_campaign=responsive)
####[Margo](http://graygrids.com/demos/themes/margo/)



##參考資料
####Fire.app 官方網站
- [使用 Template Helper](http://fireapp.kkbox.com/doc/tw/tutorial_3.html)
- [Layout 的基本用法](http://fireapp.kkbox.com/doc/tw/tutorial_4.html)
- [WFU - 利用 Google 表單[試算表]當小型資料庫 (1)製作資料庫__更新](http://www.wfublog.com/2013/02/google-spreadsheet-as-micro-database-update-1.html)