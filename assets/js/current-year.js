document.addEventListener("DOMContentLoaded", (event) => {
	const dayElement = document.querySelector(".day");
	const yearElements = document.querySelectorAll(".year");
	const meter = document.getElementById("meter");
	const textElement = document.getElementById("circle__text");

	let now = new Date();
	let start = new Date(now.getFullYear(), 0, 0);
	let diff = now - start;
	let oneDay = 1000 * 60 * 60 * 24;
	let dayOfYear = Math.floor(diff / oneDay);
	console.log("Día del año: " + dayOfYear);
	let currentYear = now.getFullYear();

	let end = new Date(currentYear + 1, 0, 0); // Primer día del siguiente año
	let totalDaysOfYear = Math.floor((end - start) / oneDay);
	console.log("Total de días en el año actual: " + totalDaysOfYear);
	dayElement.textContent = dayOfYear;
	yearElements.forEach((element) => {
		element.textContent = currentYear;
	});

	function setPercentage(percentage) {
		const circumference = Math.PI * parseFloat(meter.getAttribute("r")) * 2;
		const dashOffset = circumference * (1 - percentage / 100);
		meter.style.strokeDasharray = `${circumference}`;
		meter.style.strokeDashoffset = `${dashOffset}`;
		let percentageDayOfYear = Math.floor(
			(dayOfYear / totalDaysOfYear) * 100
		);
		textElement.textContent = percentageDayOfYear + "%";
	}

	setPercentage((dayOfYear / totalDaysOfYear) * 100);
});
