"use strict";var theme={init:function(){
	theme.menu()
   },
   
    menu:()=>{document.querySelectorAll(".dropdown-menu a.dropdown-toggle").forEach((function(e){e.addEventListener("click",(function(e){if(!this.nextElementSibling.classList.contains("show")){this.closest(".dropdown-menu").querySelectorAll(".show").forEach((function(e){e.classList.remove("show")}))}this.nextElementSibling.classList.toggle("show");const t=this.closest("li.nav-item.dropdown.show");t&&t.addEventListener("hidden.bs.dropdown",(function(e){document.querySelectorAll(".dropdown-submenu .show").forEach((function(e){e.classList.remove("show")}))})),e.stopPropagation()}))}))}
 }
theme.init();

var navbar=document.querySelector(".navbar");
const navOffCanvasBtn=document.querySelectorAll(".offcanvas-nav-btn"),navOffCanvas=document.querySelector(".navbar:not(.navbar-clone) .offcanvas-nav");
let bsOffCanvas;
function toggleOffCanvas(){bsOffCanvas&&bsOffCanvas._isShown?bsOffCanvas.hide():bsOffCanvas&&bsOffCanvas.show()}navOffCanvas&&(bsOffCanvas=new bootstrap.Offcanvas(navOffCanvas,{scroll:!0}),navOffCanvasBtn.forEach((e=>{e.addEventListener("click",(e=>{toggleOffCanvas()}))})));

function header_up_down(){var element=document.getElementById("header-toggler");if (element.classList.contains("header-up")){element.classList.remove('header-up');element.classList.add('header-down');document.getElementById("header").style.display=`none`}else{element.classList.remove('header-down');element.classList.add('header-up');document.getElementById("header").style.display=`block`}}function changeDemo($newDevice){var element=document.getElementById("demo_frame");if(element.className !=$newDevice){while (element.classList.length>0){element.classList.remove(element.classList.item(0))}element.classList.add($newDevice)}}function styleIframe(iframe){var css=`