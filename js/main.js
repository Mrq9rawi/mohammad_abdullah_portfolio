const contactLink = document.querySelector(".contact-link");
const burgerIcon = document.querySelector(".burger-icon");
const burgerIconDiv1 = document.querySelector(".div1");
const burgerIconDiv2 = document.querySelector(".div2");
const burgerIconDiv3 = document.querySelector(".div3");
const navLinks = document.querySelector("header nav .links");

contactLink.addEventListener("click", () => {
	const alertDiv = document.createElement("div");
	alertDiv.setAttribute("id", "alert");

	const overlayDiv = document.createElement("div");
	overlayDiv.classList.add("overlay");
	overlayDiv.addEventListener("click", deleteAlert);

	const contentDiv = document.createElement("div");
	contentDiv.classList.add("content");

	const crossMarkDiv = document.createElement("div");
	crossMarkDiv.classList.add("cross-mark");
	crossMarkDiv.addEventListener("click", deleteAlert);

	const emailP = document.createElement("p");
	emailP.classList.add("text");
	emailP.innerHTML = `
	Email:
	<a href="mailto:moh.abdullah02@gmail.com">moh.abdullah02@gmail.com</a>
	`;

	const phoneP = document.createElement("p");
	phoneP.classList.add("text");
	phoneP.innerHTML = `
	</p>
	<p>Phone: <a href="tel:+1 (647) 575-6094">+16475756094</a></p>
	`;

	document.body.appendChild(alertDiv);
	alertDiv.appendChild(overlayDiv);
	alertDiv.appendChild(contentDiv);
	contentDiv.appendChild(crossMarkDiv);
	contentDiv.appendChild(emailP);
	contentDiv.appendChild(phoneP);

	function deleteAlert() {
		overlayDiv.classList.add("remove");
		contentDiv.classList.add("remove");
		setTimeout(() => {
			alertDiv.remove();
		}, 300);
	}
}
);

burgerIcon.addEventListener("click", () => {
	if (burgerIcon.classList.contains("inactive")) {
		burgerIcon.classList.remove("inactive");
		burgerIcon.classList.add("active");
		burgerIconDiv1.style.cssText = "animation: burger-div-1-active 1s ease-out forwards";
		burgerIconDiv2.style.cssText = "animation: burger-div-2-active 1s ease-out forwards";
		burgerIconDiv3.style.cssText = "animation: burger-div-3-active 1s ease-out forwards";
		navLinks.style.cssText = "height: 88.4px;";
	} else {
		burgerIcon.classList.remove("active");
		burgerIcon.classList.add("inactive");
		burgerIconDiv1.style.cssText = "animation: burger-div-1-inactive 1s ease-out forwards";
		burgerIconDiv2.style.cssText = "animation: burger-div-2-inactive 1s ease-out forwards";
		burgerIconDiv3.style.cssText = "animation: burger-div-3-inactive .75s ease-out forwards";
		navLinks.style.cssText = "height: 0px;";

	}
});

// back to top
const bactToTopButton = document.querySelector('.back-to-top');

bactToTopButton.addEventListener("click", backToTop);

function backToTop() {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});
}

// my name Animation
const myName = document.querySelector('main .landing .container .text-content h1 .name');
let myNameLetters = ["M", "o", "h", "a", "m", "m", "a", "d", " ", "A", "b", "d", "u", "l", "l", "a", "h"];
let letterIndex = 0;
setTimeout(() => {
	myName.textContent = "";
	myName.style.visibility = "visible";
}, 200);

const writeMyName = setInterval(() => {
	if (letterIndex == myNameLetters.length - 1) {
		window.clearInterval(writeMyName);
	}
	myName.textContent += myNameLetters[letterIndex];
	letterIndex++;
}, 200);

// about me age
const ageSpan = document.querySelector(".about-me .age");
const currentAge = new Date().getFullYear() - 2002;



ageSpan.textContent = currentAge;