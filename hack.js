// 污染MoocPlayer原型
window.MoocPlayer.prototype.pauseMovie = function() {
    this.player.playMovie();
    document.moocPlayer = this;
    console.log("转换pauseMovie为playMovie")
    return this;
};


// 重定向pauseMovie事件
var playBtn = document.createElement("div")
playBtn.id = "crackBtn"
playBtn.style.height = "50px";
playBtn.style.width = "50px";
playBtn.style['border-radius'] = "25px";
playBtn.style['background-color'] = "#d1c4e9";
playBtn.style['line-height'] = "50px";
playBtn.style['text-align'] = "center"
playBtn.style['position'] = "fixed"
playBtn.style['left'] = "100px"
playBtn.style['top'] = "100px"
playBtn.style['box-shadow'] = "0px 0px 20px #311b92"
playBtn.innerHTML = "破解"


playBtn.onclick = function () {
    if (document.moocPlayer != undefined) {
        document.moocPlayer.playMovie();
    } else {
        alert("破解失败！请刷新页面后重新点击此按钮")
    }
}

document.getElementsByTagName("body")[0].appendChild(playBtn)
