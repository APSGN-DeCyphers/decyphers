// Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
});

navLink.forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}));


AOS.init();


// particles.js config

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 200,
			"density": {
				"enable": true,
				"value_area": 1200
			}
		},
		"color": {
			"value": ["#ffffff", "#8c52ff"]
		},

		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#fff"
			},
			"polygon": {
				"nb_sides": 5
			}
		},
		"opacity": {
			"value": 0.2,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 2,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 140,
			"color": "#ffffff",
			"opacity": 0.3,
			"width": 1
		},
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": false
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 140,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});

// Typing Effect

const textToType = document.querySelector(".typed-text");
const cursorC = document.querySelector(".cursor");

const textArray = ["INNOVATION", "TECHNOLOGY", "EXPLORATION", "THE FUTURE"];
let textArrayIndex = 0;
let character = 0;

function type() {
	if (character < textArray[textArrayIndex].length) {
		if (!cursorC.classList.contains("typing")) cursorC.classList.add("typing");
		textToType.textContent += textArray[textArrayIndex].charAt(character);
		character++;
		setTimeout(type, 200);
	}
	else {
		cursorC.classList.remove("typing");
		setTimeout(erase, 1000);
	}
}

function erase() {
	if (character > 0) {
		if (!cursorC.classList.contains("typing")) cursorC.classList.add("typing");
		textToType.textContent = textArray[textArrayIndex].substring(0, character - 1);
		character--;
		setTimeout(erase, 100);
	}
	else {
		cursorC.classList.remove("typing");
		textArrayIndex++;
		if (textArrayIndex >= textArray.length) textArrayIndex = 0;
		setTimeout(type, 1200);
	}
}

document.addEventListener("DOMContentLoaded", function() {
	if (textArray.length && textToType && cursorC) {
		setTimeout(type, 2000);
	}
});


// Loading screen

document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		document.querySelector('.loading-screen').style.display = 'none';
	}, 200);
});

// Cursor handling

if (/Android|webOS|iPhone|iPad|iPod|Blackberry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	cursorC.style.display = 'none';
}
