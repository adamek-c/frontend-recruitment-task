const popup = document.querySelector("#popup");
const resetBtn = document.querySelector(".resetbtn");
const displayCount = document.querySelector("#count");

const count = localStorage.getItem("counter") || 0;
let counter = parseInt(count);

const handleOpenPopup = () => {
	const btnShow = document.querySelector(".btn-btn");
	const number = 5;

	btnShow.addEventListener("click", () => {
		popup.classList.add("show");
		counter++;
		localStorage.setItem("counter", counter);

		displayCount.innerHTML = counter;

		if (counter > number) resetBtn.style.display = "block";
	});
};

const handleClosePopup = () => {
	const btnClose = document.querySelector(".btn-close");

	btnClose.addEventListener("click", () => {
		popup.classList.remove("show");
	});
};

const handleClosePopuOut = () => {
	const popupContainer = document.querySelector(".popup__container");

	document.addEventListener("click", (e) => {
		e.preventDefault();

		if (e.target == popupContainer) {
			popup.classList.remove("show");
		}
		return;
	});
};

const handleResetCounter = () => {
	resetBtn.addEventListener("click", () => {
		counter = 0;
		localStorage.setItem("counter", counter);
		resetBtn.style.display = "none";
		popup.classList.remove("show");
	});
};

handleOpenPopup();
handleClosePopup();
handleClosePopuOut();
handleResetCounter();
