document.addEventListener("DOMContentLoaded", () => {
	const meter = document.getElementById("meter-2");
	const textElement = document.getElementById("circle__text-2");
	const ageSelect = document.getElementById("ageSelected");
	const deathAgeSelect = document.getElementById("deathAgeSelected");

	ageSelect.addEventListener("change", () => {
		actualizarPorcentajeDeVida();
	});

	deathAgeSelect.addEventListener("change", () => {
		if (parseInt(deathAgeSelect.value) < parseInt(ageSelect.value)) {
			alert("Death age cannot be less than current age.");
			deathAgeSelect.value = ageSelect.value; // Restaurar a la edad actual si se elige una edad máxima inválida
		}
		actualizarPorcentajeDeVida();
	});

	function calcularPorcentajeDeVida(edadActual, edadMaxima) {
		const porcentaje = (edadActual / edadMaxima) * 100;
		return Math.min(100, Math.max(0, porcentaje));
	}

	function actualizarPorcentajeDeVida() {
		const edadActual = parseInt(ageSelect.value);
		const edadMaxima = parseInt(deathAgeSelect.value);
		const porcentaje = calcularPorcentajeDeVida(edadActual, edadMaxima);

		// Calculamos la circunferencia del círculo
		const r = parseFloat(meter.getAttribute("r"));
		const circumference = 2 * Math.PI * r;

		// Calculamos el desplazamiento de la barra de progreso
		const dashOffset = circumference * (1 - porcentaje / 100);

		// Establecemos los valores de la barra de progreso
		meter.style.strokeDasharray = `${circumference}`;
		meter.style.strokeDashoffset = `${dashOffset}`;

		// Actualizamos el texto con el porcentaje
		textElement.textContent = Math.floor(porcentaje) + "%";
	}
	actualizarPorcentajeDeVida();
});
