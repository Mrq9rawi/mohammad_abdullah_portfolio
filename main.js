const contactLink = document.querySelector(".contact-link");
const contactDiv = document.querySelector(".contact");
const contactContent = document.querySelector(".contact .content");
const crossMark = document.querySelector(".cross-mark");
const burgerIcon = document.querySelector(".burger-icon");
const burgerIconDiv1 = document.querySelector(".div1");
const burgerIconDiv2 = document.querySelector(".div2");
const burgerIconDiv3 = document.querySelector(".div3");
const navLinks = document.querySelector("header nav .links")

contactLink.addEventListener("click", () => {
	if (contactDiv.classList.contains("inactive")) {
		contactDiv.classList.remove("inactive");
		contactDiv.classList.add("active");
		contactDiv.style.width = "300px";
		setTimeout(() => {
			contactContent.style.right = "25px";
		}, 1500);
	} else {
		contactDiv.classList.remove("active");
		contactContent.style.right = "-400px";
		setTimeout(() => {
			contactDiv.style.width = "0%";
		}, 1000);
		contactDiv.classList.add("inactive");
	}
}
);

crossMark.addEventListener("click", () => {
	contactDiv.classList.remove("active");
	contactContent.style.right = "-400px";
	setTimeout(() => {
		contactDiv.style.width = "0%";
	}, 1000); contactDiv.classList.add("inactive");
}
);

burgerIcon.addEventListener("click", () => {
	if (burgerIcon.classList.contains("inactive")) {
		burgerIcon.classList.remove("inactive");
		burgerIcon.classList.add("active");
		burgerIconDiv1.style.cssText = "animation: burger-div-1-active 1s ease-out forwards";
		burgerIconDiv2.style.cssText = "animation: burger-div-2-active 1s ease-out forwards";
		burgerIconDiv3.style.cssText = "animation: burger-div-3-active 1s ease-out forwards";
		navLinks.style.cssText ="height: 88.4px;";
	} else {
		burgerIcon.classList.remove("active");
		burgerIcon.classList.add("inactive");
		burgerIconDiv1.style.cssText = "animation: burger-div-1-inactive 1s ease-out forwards";
		burgerIconDiv2.style.cssText = "animation: burger-div-2-inactive 1s ease-out forwards";
		burgerIconDiv3.style.cssText = "animation: burger-div-3-inactive .75s ease-out forwards";
		navLinks.style.cssText ="height: 0px;"

	}
});