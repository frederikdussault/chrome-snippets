selectorString = ".ad-bigbox, .ad_bigbox"
document.querySelectorAll(selectorString).forEach(el => {
    el.setAttribute("style","border:1px solid red")
})