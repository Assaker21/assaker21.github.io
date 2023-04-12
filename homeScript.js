let items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
	let item = items[i];
	item.classList.remove("inactive");
}

let blocks = document.querySelectorAll("div.block");
let topLeft, topRight, bottomLeft, bottomRight;
let positions = ["top-right", "top-left", "bottom-right", "bottom-left"];

for (let i = 0; i < blocks.length; i++) {
	let block = blocks[i];
	let index = Math.floor(Math.random() * positions.length);
	block.classList.add(positions[index]);
	positions.splice(index, 1);
}

updatePositions();

for (let i = 0; i < blocks.length; i++) {
	let block = blocks[i];
	block.addEventListener("mouseover", function () {
		if (!topRight) {
			block.classList.remove("bottom-right");
			block.classList.remove("bottom-left");
			block.classList.remove("top-left");
			block.classList.add("top-right");
		} else if (!topLeft) {
			block.classList.remove("bottom-right");
			block.classList.remove("bottom-left");
			block.classList.remove("top-right");
			block.classList.add("top-left");
		} else if (!bottomRight) {
			block.classList.remove("top-right");
			block.classList.remove("bottom-left");
			block.classList.remove("top-left");
			block.classList.add("bottom-right");
		} else if (!bottomLeft) {
			block.classList.remove("bottom-right");
			block.classList.remove("top-left");
			block.classList.remove("top-right");
			block.classList.add("bottom-left");
		}
		updatePositions();
	});
}

function updatePositions() {
	topRight = bottomRight = topLeft = bottomLeft = false;

	for (let i = 0; i < blocks.length; i++) {
		let block = blocks[i];
		if (block.classList.contains("top-right")) {
			topRight = true;
		} else if (block.classList.contains("top-left")) {
			topLeft = true;
		} else if (block.classList.contains("bottom-right")) {
			bottomRight = true;
		} else if (block.classList.contains("bottom-left")) {
			bottomLeft = true;
		}
	}
}
