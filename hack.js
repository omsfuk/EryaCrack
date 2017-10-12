var element = document.createElement("div")
element.id = "crackBtn"
element.style.height = "50px";
element.style.width = "50px";
element.style['border-radius'] = "25px";
element.style['background-color'] = "#d1c4e9";
element.style['line-height'] = "50px";
element.style['text-align'] = "center"
element.style['position'] = "fixed"
element.style['left'] = "100px"
element.style['top'] = "100px"
element.style['box-shadow'] = "0px 0px 20px #311b92"
element.innerHTML = "破解"

element.onclick = function () {
	console.log(frames)
	window.MoocPlayer.prototype.pauseMovie = function() {
		this.player.pauseMovie();
		document.moocPlayer = this;
		alert(document.moocPlayer)
		return this;
	};
}

document.getElementsByTagName("body")[0].appendChild(element)
