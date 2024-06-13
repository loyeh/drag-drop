const dropItems = document.querySelectorAll(".dropItem");
const dragItem = document.getElementById("dragItem");

console.log(dragItem, dropItems);

dragItem.addEventListener("dragstart", dragStart);
dragItem.addEventListener("dragend", dragEnd);

dropItems.forEach((dropItem) => {
  dropItem.addEventListener("dragover", dragOver);
  dropItem.addEventListener("dragenter", dragEnter);
  dropItem.addEventListener("dragleave", dragLeave);
  dropItem.addEventListener("drop", dragDrop);
});

let isDragged = false;

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "image dragItem ";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " active";
}

function dragLeave() {
  this.className = "dropItem";
}

function dragDrop() {
  this.className = "dropItem";
  this.append(dragItem);
}
