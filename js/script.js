for (var i = 0; i < document.getElementsByClassName('sliderNum').length; i++) {
	document.getElementsByClassName('sliderNum')[i].addEventListener("click", () => {
		document.getElementsByClassName('sld')[0].classList.add('is-open')
		document.getElementsByClassName('content')[0].classList.add('blur')
		document.body.style.overflowY = "hidden"
	})
}
for (var i = 0; i < document.getElementsByClassName('close').length; i++) {
	document.getElementsByClassName('closeoverlay')[i].addEventListener("click", () => {
		for (var j = 0; j < document.getElementsByClassName('modal').length; j++) {
			document.getElementsByClassName('modal')[j].classList.remove('is-open');
		}
		document.getElementsByClassName('content')[0].classList.remove('blur')
		document.body.style.overflowY = "auto"
	});
	document.getElementsByClassName('apply')[i].addEventListener("click", () => {
		for (var j = 0; j < document.getElementsByClassName('modal').length; j++) {
			document.getElementsByClassName('modal')[j].classList.remove('is-open');
		}
		document.getElementsByClassName('content')[0].classList.remove('blur')
		document.body.style.overflowY = "auto"
	});
	document.getElementsByClassName('close')[i].addEventListener("click", () => {
		for (var j = 0; j < document.getElementsByClassName('modal').length; j++) {
			document.getElementsByClassName('modal')[j].classList.remove('is-open');
		}
		document.getElementsByClassName('content')[0].classList.remove('blur')
		document.body.style.overflowY = "auto"
	});
}
for (var i = 0; i < document.getElementsByClassName('sliderImg').length; i++) {
	document.getElementsByClassName('sliderImg')[i].addEventListener("click", () => {
		document.getElementsByClassName('light')[0].classList.add('is-open');
		document.getElementsByClassName('content')[0].classList.add('blur')
		document.body.style.overflowY = "hidden"
	})
}
for (var i = 0; i < document.getElementsByClassName('sliderRound').length; i++) {
	document.getElementsByClassName('sliderRound')[i].addEventListener("click", () => {
		document.getElementsByClassName('round')[0].classList.add('is-open');
		document.getElementsByClassName('content')[0].classList.add('blur')
		document.body.style.overflow = "hidden"
	})
}
for (var i = 0; i < document.getElementsByClassName("ctlg-but").length; i++) {
	document.getElementsByClassName('ctlg-but')[i].addEventListener("click", function () {
		for (var j = 0; j < document.getElementsByClassName("ctlg-but").length; j++)
			document.getElementsByClassName('ctlg-but')[j].classList.remove('active');
		this.classList.add('active')
	})
}
for (var i = 0; i < document.getElementsByClassName("ctrl-but").length; i++) {
	document.getElementsByClassName('ctrl-but')[i].addEventListener("click", function () {
		for (var j = 0; j < document.getElementsByClassName("ctrl-but").length; j++)
			document.getElementsByClassName('ctrl-but')[j].classList.remove('active');
		this.classList.add('active')
	})
}
for (var i = 0; i < document.getElementsByClassName("dd-button").length; i++) {
	document.getElementsByClassName('dd-button')[i].addEventListener("click", function () {
		for (var j = 0; j < document.getElementsByClassName("dd-button").length; j++)
			document.getElementsByClassName('dd-button')[j].classList.remove('active');
		this.classList.add('active')
		document.getElementById("dropdown").checked = false;
	})
}
document.getElementsByClassName('container')[0].addEventListener("click", () => {
	if (document.getElementById("dropdown").checked)
		document.getElementById("dropdown").checked = true;
	else document.getElementById("dropdown").checked = false;
})
var inputRange = document.getElementsByClassName("range-slider")[0]
inputRange.addEventListener('input', function () {
	console.log(this.value)
	if (this.value > 0) {
		inputRange.classList.add('blue');
	}
	if (this.value > 25) {
		inputRange.classList.add('yellow');
	}
	if (this.value > 70) {
		inputRange.classList.add('purple');
	}
	if (this.value < 25) {
		inputRange.classList.remove('yellow');
	}
	if (this.value < 70) {
		inputRange.classList.remove('purple');
	}
})
var r1 = document.getElementById("r1"),
	r2 = document.getElementById("r2"),
	t = document.getElementById("t"),
	tp = document.getElementById("tooltip")
document.getElementsByClassName("rs-block")[1].addEventListener("click", function (e) {
	let elpos = e.target.getBoundingClientRect(),
		cX = elpos.width / 2,
		cY = elpos.height / 2,
		eX = e.pageX - elpos.left,
		eY = e.pageY - elpos.top
	if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend') {
		eX = e.touches[0].pageX - elpos.left
		eY = e.touches[0].pageY - elpos.top
	}
	angle = Math.atan2(cX - eX, cY - eY) * (180 / Math.PI)
	console.log(cX, cY, eX, eY, angle);
	var ang = 450 - angle
	var toolt = Math.floor((ang - 315) / 8.75)
	if (toolt > 0) {
		tp.innerHTML = "+" + toolt
		tp.style.marginLeft = -55 + "px"
	} else {
		tp.innerHTML = toolt
		tp.style.marginLeft = -25 + "px"
	}
	t.style.transform = "rotate(" + ang + "deg)"
	if (ang < 490) {
		r1.style.opacity = 1
		r1.style.transform = "rotate(" + ang + "deg)"
		r2.style.opacity = 0
	} else {
		ang = 270 - angle
		r2.style.opacity = 1
		r2.style.transform = "rotate(" + ang + "deg)"
		r1.style.opacity = 0
	}
})