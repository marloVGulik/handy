var hoverableElements = document.getElementsByClassName("hoverElement");
console.log(`Amount of difficult to reach hover elements: ${hoverableElements.length}`);
for(var i = 0; i < hoverableElements.length; i++) {
    hoverableElements[i].onmouseover = function() {
        document.getElementsByClassName(this.id)[0].style.display = "block";
    }
    hoverableElements[i].onmouseleave = function() {
        document.getElementsByClassName(this.id)[0].style.display = "none";
    }
    console.log(`Added function to element: ${hoverableElements[i].id}`)
}