"use strict";

onload = function getSize()
{
    let w = this.document.documentElement.clientWidth;
    let h = this.document.documentElement.clientHeight;
    this.document.getElementById('wh').innerHTML = "<h1> Width: " + w + "<br />" +"Height" + h + "</h1>"
    window.addEventListener('resize',getSize);
}
