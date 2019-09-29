(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,a,t){},18:function(e,a,t){},35:function(e,a,t){e.exports=t.p+"static/media/logo.21297307.gif"},36:function(e,a,t){e.exports=t(63)},63:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),c=(t(18),t(5)),s=t(6),o=t(8),m=t(7),i=t(9),u=(t(14),t(32)),d=t(3),p=t(13);function b(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark navCol"},l.a.createElement(d.b,{className:"navbar-brand",to:"/"},"Sudoku"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(d.b,{className:"nav-link",to:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"#"},"More")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"#"},"About")))))}var h=t(35),E=t.n(h),g=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={selected:"easy"},t.handleChange=function(e){var a=e.target.value;t.setState({selected:a})},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bg"},l.a.createElement(b,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"})),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"button"},l.a.createElement("div",{class:"input-group"},l.a.createElement("select",{class:"custom-select",onClick:this.handleChange},l.a.createElement("option",{selected:!0,value:"easy"},"Easy"),l.a.createElement("option",{value:"intermediate"},"Intermediate"),l.a.createElement("option",{value:"hard"},"Hard"),l.a.createElement("option",{value:"expert"},"Expert")),l.a.createElement("div",{class:"input-group-append"},l.a.createElement(d.b,{id:"startBtn",to:"/new-game/".concat(this.state.selected)},l.a.createElement("button",{class:"btn btn-warning btm-md"},"Start Game"))))))))}}]),a}(l.a.Component),v=t(16),f=t.n(v),N=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).makeTable=function(){for(var e=[],a=t.state.grid,n=0;n<a.length;n++){for(var r=[],c=0;c<a.length;c++)0!==a[n][c]&&"string"!==typeof a[n][c]?r.push(l.a.createElement("td",{className:"exists"},l.a.createElement("input",{name:[n,c],class:"input",value:a[n][c],onChange:t.handleChange,disabled:!0}))):r.push(l.a.createElement("td",null,l.a.createElement("input",{name:[n,c],class:"input",type:"number",pattern:"\\d*",maxlength:"1",min:"1",max:"9",onChange:t.handleChange,required:!0})));e.push(l.a.createElement("tr",null,r))}return e},t.handleChange=function(e){var a=t.state.grid,n=Number(e.target.name[0]),l=Number(e.target.name[2]);a[n][l]=e.target.value,t.setState({grid:a})},t.handleSubmit=function(e){e.preventDefault(),document.querySelector("#exampleModal").classList.add("show"),document.querySelector("#exampleModal").style.display="block";var a=t.state.grid;f.a.post("/check",{grid:a}).then((function(e){t.setState({response:e.data.data}),console.log(t.state)}))},t.closeModal=function(){document.querySelector("#exampleModal").classList.remove("show"),document.querySelector("#exampleModal").style.display="none"},t.state={grid:[],level:e.level,response:"",popup:""},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.state.level;f.a.get("/api/new-game/".concat(a)).then((function(a){var t=a.data.data;e.setState({grid:t})}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},this.state.response[0]),l.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:this.closeModal},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement(d.b,{to:this.state.response[2]},l.a.createElement("button",{type:"button",className:"btn btn-warning btn-md button"},this.state.response[1])))))),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("table",null,this.makeTable()),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("button",{id:"checkBtn",className:"btn btn-warning btn-md button",type:"submit"},"Check"))))}}]),a}(l.a.Component),y=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={level:t.props.match.params.handle},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bg"},l.a.createElement(b,null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement(N,{level:this.state.level}))))}}]),a}(l.a.Component),w=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={username:"",password:""},t.handleSubmit=function(e){e.preventDefault();var a={inputEmail:t.state.username,inputPassword:t.state.password};f.a.post("/login",a).then((function(e){document.cookie="sudo=".concat(e.data.token),console.log(e.data)})).catch((function(e){console.log(e)}))},t.handleChange=function(e){"inputEmail"===e.target.name?t.setState({username:e.target.value}):t.setState({password:e.target.value})},t}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bg form-place"},l.a.createElement("form",{className:"form-signin",onSubmit:this.handleSubmit},l.a.createElement("img",{className:"mb-4",src:"/docs/4.3/assets/brand/bootstrap-solid.svg",alt:"",width:"72",height:"72"}),l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please sign in"),l.a.createElement("label",{for:"inputEmail",className:"sr-only"},"Email address"),l.a.createElement("input",{name:"inputEmail",onChange:this.handleChange,type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:"",autofocus:""}),l.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),l.a.createElement("input",{name:"inputPassword",onChange:this.handleChange,type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:""}),l.a.createElement("div",{className:"checkbox mb-3"},l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me"),l.a.createElement("p",null,"Dont have an account?",l.a.createElement(d.b,{to:"/signup"},"Create account"))),l.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign in")))}}]),a}(l.a.Component),j=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"bg form-place"},l.a.createElement("form",{className:"form-signin",method:"POST",action:"/signup"},l.a.createElement("img",{className:"mb-4",src:"/docs/4.3/assets/brand/bootstrap-solid.svg",alt:"",width:"72",height:"72"}),l.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Signup"),l.a.createElement("label",{for:"inputName",className:"sr-only"},"Name"),l.a.createElement("input",{name:"inputName",type:"text",id:"inputName",className:"form-control",placeholder:"Enter Name",required:"",autofocus:""}),l.a.createElement("label",{for:"inputEmail",className:"sr-only"},"Email address"),l.a.createElement("input",{name:"inputEmail",type:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",required:"",autofocus:""}),l.a.createElement("label",{for:"inputPassword",className:"sr-only"},"Password"),l.a.createElement("input",{name:"inputPassword",type:"password",id:"inputPassword",className:"form-control",placeholder:"Password",required:""}),l.a.createElement("label",{for:"confirmPassword",className:"sr-only"},"Confirm Password"),l.a.createElement("input",{name:"confirmPassword",type:"password",id:"inputPassword",className:"form-control",placeholder:"Confirm Password",required:""}),l.a.createElement("button",{className:"btn btn-lg btn-primary btn-block",type:"submit"},"Sign up")))}}]),a}(l.a.Component),O={isAuthenticated:!0,authenticate:function(){this.isAuthenticated=!0},signout:function(){this.isAuthenticated=!1},getAuth:function(){return this.isAuthenticated}},k=function(e){var a=e.component,t=Object(u.a)(e,["component"]);return l.a.createElement(p.b,Object.assign({},t,{render:function(e){return O.getAuth()?l.a.createElement(a,e):l.a.createElement(p.a,{to:{pathname:"/login"}})}}))},C=function(e){return l.a.createElement(d.a,null,l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/signup",component:j}),l.a.createElement(p.b,{exact:!0,path:"/login",component:w}),l.a.createElement(k,{exact:!0,path:"/",component:g}),l.a.createElement(k,{path:"/new-game/:handle",component:y})))},x=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(C,null))}}]),a}(n.Component);Object(r.render)(l.a.createElement(x,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3dccdff6.chunk.js.map