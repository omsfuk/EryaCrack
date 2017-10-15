// 污染MoocPlayer原型

(function hackit() {
    if (window.MoocPlayer == undefined) {
        setTimeout(hackit, 200);
        return ;
    }
    window.MoocPlayer.prototype.pauseMovie = function() {
        this.player.playMovie();
        document.moocPlayer = this;
        return this;
    };
})();
/**
// 重定向pauseMovie事件
var playBtn = document.createElement("div")
playBtn.id = "playBtn"
playBtn.style.height = "50px";
playBtn.style.width = "50px";
playBtn.style['border-radius'] = "25px";
playBtn.style['background-color'] = "#d1c4e9";
playBtn.style['line-height'] = "50px";
playBtn.style['text-align'] = "center"
playBtn.style['position'] = "fixed"
playBtn.style['left'] = "600px"
playBtn.style['top'] = "100px"
playBtn.style['box-shadow'] = "0px 0px 20px #311b92"
playBtn.innerHTML = "Play!"


playBtn.onclick = function () {
    if (document.moocPlayer != undefined) {
        document.moocPlayer.playMovie();
    } else {
        alert("破解失败！请刷新页面后重新点击此按钮")
    }
}

document.getElementsByTagName("body")[0].appendChild(playBtn)


var pauseBtn = document.createElement("div")
pauseBtn.id = "pauseBtn"
pauseBtn.style.height = "50px";
pauseBtn.style.width = "50px";
pauseBtn.style['border-radius'] = "25px"
pauseBtn.style['background-color'] = "#455ede";
pauseBtn.style['line-height'] = "50px";
pauseBtn.style['text-align'] = "center"
pauseBtn.style['position'] = "fixed"
pauseBtn.style['left'] = "600px"
pauseBtn.style['top'] = "200px"
pauseBtn.style['box-shadow'] = "0px 0px 20px #2a36b1"
pauseBtn.innerHTML = "Pause"


pauseBtn.onclick = function () {
    if (document.moocPlayer != undefined) {
        document.moocPlayer.pauseMovie();
    } else {
        alert("破解失败！请刷新页面后重新点击此按钮")
    }
}

document.getElementsByTagName("body")[0].appendChild(pauseBtn)
*/
