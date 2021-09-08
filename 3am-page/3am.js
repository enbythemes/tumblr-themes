$(document).ready(function() {
 var $container = $(".grid");
 var filters = {};
 var $grid = $container.isotope({
   itemSelector: ".item", 
   percentPosition: true 
 });

$(".option-set a").click(function(e) {
   var $this = $(this); 
   var filterAttr = "data-filter-value";
   var filterValue = $this.attr(filterAttr);
   var $optionSet = $this.parents(".option-set");
   var group = $optionSet.attr("data-filter-group");
   var filterGroup = filters[group];
   if (!filterGroup) {
     filterGroup = filters[group] = [];
   }
   var $selectAll = $optionSet.find('a['+filterAttr+'=""]');
   var activeClass = "selected",
     exclClass = "exclusive";
 comboFiltering($this,filters,filterAttr,filterValue,$optionSet,group,$selectAll,activeClass,exclClass);
   var comboFilter = getComboFilter(filters);
   $grid.isotope({
     filter: comboFilter
   });
   $this.toggleClass(activeClass);
   e.preventDefault();
 });
});

// DARK MODE
window.addEventListener("DOMContentLoaded", function() {
const btn = document.querySelector(".lightswitch");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
document.body.classList.add("night");
}

btn.addEventListener("click", function () {
document.body.classList.toggle("night");

let theme = "light";
if (document.body.classList.contains("night")) {
theme = "dark";
}
localStorage.setItem("theme", theme);
});
});
