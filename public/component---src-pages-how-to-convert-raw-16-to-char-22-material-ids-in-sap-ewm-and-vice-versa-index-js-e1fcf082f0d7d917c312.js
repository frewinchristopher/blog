(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontmatter",function(){return u});var n=a(7),o=a.n(n),i=a(173),M=a.n(i),s=a(174),l=a(0),r=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return l.createElement("div",null,l.createElement("h1",null,"How to Convert RAW16 to CHAR22 Material IDs in SAP EWM (and vice-versa)"),l.createElement("p",{className:"jsPostsDate"},"09 September, 2018"),l.createElement("p",null,"So, in SAP EWM, there are a few formats that material IDs, MATID are stored (similar to material numbers, MATNR, in ERP systems). Some of the two most popular formats are the ",l.createElement("code",null,"RAW16")," format, as is used many EWM monitor functions usually, in the export structure that is often named simply ",l.createElement("code",null,"et_data"),", for example in the EWM monitor function module ",l.createElement("code",null,"/SCWM/HUITM_OVERVIEW_MON"),", of type ",l.createElement("code",null,"/scwm/tt_huitm_mon"),", in which it's line type ",l.createElement("code",null,"/SCWM/S_HUITM_MON")," uses the ",l.createElement("code",null,"RAW16")," type ",l.createElement("code",null,"/SCWM/DE_MATID"),". Then there is the larger ",l.createElement("code",null,"CHAR22")," format, which is used as the type for the key field of MATID in the database table ",l.createElement("code",null,"/SAPAPO/MARM"),"."),l.createElement("p",null,"I'll admit, this is nearly a copy of the post by John Kristensen at ",l.createElement("a",{href:"https://sap.sd/matid"},"https://sap.sd/matid"),", and I give him 99% of the credit, ",l.createElement("em",null,"however,")," for your benefit, I've provided **complete copy-paste-able code examples** so you can see exactly how the function works:"),l.createElement(s.a,{sLanguage:"abap",sCode:"DATA: lv_matid_16 TYPE /SCWM/DE_MATID, \" used in EWM monitor fields like \nlv_matid_22 TYPE /SAPAPO/MATID. \" used in database table key field as in database table /SAPAPO/MARM\n\nCALL FUNCTION '/SCMB/MDL_GUID_CONVERT'\n  EXPORTING\n    IV_GUID16       = lv_matid_16\n  IMPORTING\n    EV_GUID22       = lv_matid_22."}),l.createElement("p",null,"...and, the nice thing about this function is that it can do the conversion the other way around (note the change in the name of the input and output parameters):"),l.createElement(s.a,{sLanguage:"abap",sCode:"CALL FUNCTION '/SCMB/MDL_GUID_CONVERT'\nEXPORTING\n  IV_GUID22       = lv_matid_22\nIMPORTING\n  EV_GUID16       = lv_matid_16."}),l.createElement("p",null,"And that's it!"),l.createElement("p",null,"I know in starting this blog I originally stated I would be adding a lot more about SAPUI5 and EWM and other neat ERP programs. While I ",l.createElement("em",null,"have")," written some posts on ERP-sided programs, I've yet to touch SAPUI5 or EWM. I promise I'll get to it at some point!"),l.createElement("p",null,"Cheers! ",l.createElement(M.a,{text:":beer:"})),l.createElement("p",null,"Chris"))},t}(l.Component),u={title:"How to Convert RAW16 to CHAR22 Material IDs in SAP EWM (and vice-versa)",date:"2018-09-09",draft:!1};t.default=r},174:function(e,t,a){"use strict";a(159);var n=a(7),o=a.n(n),i=a(48),M=a.n(i),s=a(0),l=a.n(s),r=(a(4),a(194)),u=a(195),m=a.n(u),I=a(203),c=a(204),C=(a(209),a(182)),d={padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},E=function(e){function t(){var t;return(t=e.call(this)||this).state={bCopied:!1},t.notify=t.notify.bind(M()(M()(t))),t}o()(t,e);var a=t.prototype;return a.notify=function(){c.toast.info("Code copied to clipboard!",{className:"custom-toast",position:c.toast.POSITION.BOTTOM_CENTER})},a.render=function(){return l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(m.a,{language:this.props.sLanguage,style:I.monokaiSublime,customStyle:d},this.props.sCode),l.a.createElement(r.CopyToClipboard,{text:this.props.sCode,onCopy:this.notify},l.a.createElement("a",{className:"copyButton"},l.a.createElement("span",null,l.a.createElement("img",{width:"25px",style:{marginBottom:"0px"},src:C})))),l.a.createElement(c.ToastContainer,{autoClose:2e3,hideProgressBar:!0,pauseOnHover:!1,closeButton:!1}))},t}(l.a.Component);t.a=E},182:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgogIDxnPgogICAgPGc+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik00ODAuNywxMUgxMzAuNGMtMTEuMywwLTIwLjQsOS4xLTIwLjQsMjAuNHY2MC4zSDMxLjVjLTExLjMsMC0yMC40LDkuMS0yMC40LDIwLjR2MzY4LjVjMCwxMS4zLDkuMSwyMC40LDIwLjQsMjAuNCAgICAgaDM1MC4zYzExLjMsMCwyMC40LTkuMSwyMC40LTIwLjR2LTYwLjNoNzguNWMxMS4zLDAsMjAuNC05LjEsMjAuNC0yMC40VjMxLjRDNTAxLjEsMjAuMSw0OTEuOSwxMSw0ODAuNywxMXogTTM2MS4zLDQ2MC4ySDUxLjkgICAgIFYxMzIuNWgzMDkuNFY0NjAuMnogTTQ2MC4yLDM3OS41aC01OC4xVjExMi4xYzAtMTEuMy05LjEtMjAuNC0yMC40LTIwLjRoLTIzMVY1MS44aDMwOS40VjM3OS41eiIgZmlsbD0iIzIzMjQxZiIvPgogICAgICAgIDxwYXRoIGQ9Im0xMjcuOCwyNDIuNmgxNTcuN2MxMS4zLDAgMjAuNC05LjEgMjAuNC0yMC40IDAtMTEuMy05LjEtMjAuNC0yMC40LTIwLjRoLTE1Ny43Yy0xMS4zLDAtMjAuNCw5LjEtMjAuNCwyMC40IDAsMTEuMyA5LjEsMjAuNCAyMC40LDIwLjR6IiBmaWxsPSIjMjMyNDFmIi8+CiAgICAgICAgPHBhdGggZD0ibTEyNy44LDM5MC45aDE1Ny43YzExLjMsMCAyMC40LTkuMSAyMC40LTIwLjQgMC0xMS4zLTkuMS0yMC40LTIwLjQtMjAuNGgtMTU3LjdjLTExLjMsMC0yMC40LDkuMS0yMC40LDIwLjQgMCwxMS4yIDkuMSwyMC40IDIwLjQsMjAuNHoiIGZpbGw9IiMyMzI0MWYiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-how-to-convert-raw-16-to-char-22-material-ids-in-sap-ewm-and-vice-versa-index-js-e1fcf082f0d7d917c312.js.map