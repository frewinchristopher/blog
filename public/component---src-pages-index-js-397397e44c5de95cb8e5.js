(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("Wbzz");var c=function(e){var t,n;function a(){var t;return(t=e.call(this)||this).state={activeModeText:"Dark"},t.handleInputChange=t.handleInputChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.handleInputChange=function(e){e.target.checked?(document.body.classList.remove("dark-mode"),document.body.classList.add("light-mode"),this.setState({activeModeText:"Light"})):(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode"),this.setState({activeModeText:"Dark"}))},o.render=function(){var e=this.state.activeModeText;return r.a.createElement("div",{className:"switch-container"},r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onChange:this.handleInputChange}),r.a.createElement("span",{className:"slider round"})),r.a.createElement("span",{className:"switch-text"},r.a.createElement("b",null,e," mode active")))},a}(r.a.Component),l=n("6Gk8"),s=n("Bl7J"),i=n("vrFN"),d=n("p3AD"),u=n("bb4b"),m=n.n(u);n.d(t,"pageQuery",(function(){return h}));var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges;return r.a.createElement(s.a,{location:this.props.location,title:t},r.a.createElement(m.a,{className:"dark-mode"}),r.a.createElement(i.a,{title:"Chris' Full Stack Blog - All posts"}),r.a.createElement(c,null),r.a.createElement(l.a,null),n.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return r.a.createElement("article",{key:t.fields.slug},r.a.createElement("header",null,r.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},r.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),r.a.createElement("small",null,t.frontmatter.date)),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})))},a}(r.a.Component),h=(t.default=p,"2785444898")},bb4b:function(e,t,n){"use strict";n("Tze0"),n("V+eJ"),n("bWfx"),n("0l/t"),n("KKXr");var a=n("q1tI"),r=n("8+s/"),o=n("17x9");function c(e){return e.split(/\s+/)}function l(e){return e.children?a.Children.only(e.children):null}l.displayName="BodyClassName",l.cache=[],l.propTypes={className:o.string.isRequired},e.exports=r((function(e){return e.map((function(e){return e.className})).filter((function(e,t,n){return n.indexOf(e)===t})).join(" ")}),(function(e){var t=c(document.body.className).filter((function(e){return-1===l.cache.indexOf(e)})),n=c(e);l.cache=n,document.body.className=t.concat(n).join(" ").trim()}))(l)}}]);
//# sourceMappingURL=component---src-pages-index-js-397397e44c5de95cb8e5.js.map