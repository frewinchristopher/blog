(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{142:function(e,t,n){"use strict";n.r(t);n(76),n(77),n(34);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=(n(150),n(154)),s=n.n(u),c=n(165),l=n.n(c),d=n(149),f=function(e){function t(){var t;return(t=e.call(this)||this).state={aListItems:[]},t}r()(t,e);var n=t.prototype;return n.render=function(){return o.a.createElement("div",null,o.a.createElement(s.a,{title:"SEC Filings"}),o.a.createElement("h1",null,"SEC Filings"),o.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-1)})},"My Raspberry Pi is currently running and saving a list of various SEC filings from companies across the S&P500. Here's the list it's built so far:"),o.a.createElement("ul",null,this.state.aListItems))},n.componentDidMount=function(){var e=this;l.a.get("https://chrisfrew.in/sec-filings-api").then(function(t){var n=[];console.log(t),t.data.forEach(function(a,r){n.push(o.a.createElement("li",null,"oItem")),r===t.data.length&&e.setState({aListItems:n})})}).catch(function(t){e.setState({aListItems:[o.a.createElement("li",null,"Coming soon :)")]}),console.log(t)})},t}(o.a.Component);t.default=f},147:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},149:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c});var a=n(155),r=n.n(a),i=n(156),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var u=new r.a(o.a);var s=u.rhythm,c=u.scale},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(146),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(147),l=n.n(c);n.d(t,"PageRenderer",function(){return l.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(49),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-sec-filings-index-js-db728a7dcd55a4715570.js.map