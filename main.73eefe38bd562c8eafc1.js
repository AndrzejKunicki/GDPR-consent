(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{IpkT:function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("4owi"),n("lmye"),n("D/wG"),n("JBxO"),n("JjHl"),n("FdtR"),n("WoWj"),n("IpkT");var o={list:document.querySelector(".list"),form:document.querySelector("#form"),modal:document.querySelector(".backdrop"),body:document.querySelector("body"),content:document.querySelector(".content")};o.form.addEventListener("submit",(function(e){e.preventDefault();var t={decision:"",listPartners:[]},n=e.submitter.name;if(t.decision=n,"Accept"===n){var i=document.querySelectorAll("[checked=true]");Array.from(i).map((function(e){t.listPartners.push(e.defaultValue)}))}var r=JSON.stringify(t)+"; max-age=86400";document.cookie=r,o.modal.classList.add("is-hidden"),o.body.classList.remove("modal__open"),o.content.classList.remove("blur")})),o.form.addEventListener("click",(function(e){if("INPUT"!==e.target.nodeName)return;e.target.setAttribute("checked","true")}));function i(e){var t=e.vendors;Object.values(t).map((function(e){var t=e.name,n=e.policyUrl,i=e.id;o.list.insertAdjacentHTML("afterbegin",'<li>\n        <label class="label">\n        <input type="checkbox" id='+i+' name="input" value="'+t+'">\n        <div class="input-item">\n            <h2>'+t+'</h2>\n            <a href="'+n+'">'+n+"</a>\n        </div>\n          </label>\n        </li>")})),o.modal.classList.remove("is-hidden"),o.body.classList.add("modal__open"),o.content.classList.add("blur")}document.cookie||fetch("https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json").then((function(e){return e.json()})).then(i)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.73eefe38bd562c8eafc1.js.map