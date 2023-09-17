const js = "#f0db4f";

document.addEventListener("DOMContentLoaded", () => {
	const canvas = document.getElementById('canvas');

	const ctx = canvas.getContext("2d");

	ctx.fillStyle = js;
	ctx.fillRect(0, 0, 30, 70);
}, false);
