const dropItems = document.querySelectorAll(".dropItem");

console.log(dragItem, dropItems);

function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
  ev.target.classList.add("active");
}

function dropHandler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData("image");
  ev.target.appendChild(document.getElementById(data));
  ev.target.classList.remove("active");

  console.log(data);
}

dropItems.forEach((dropItem) => {
  dropItem.addEventListener("dragover", dragoverHandler);
  dropItem.addEventListener("dragleave", (e) => {
    e.target.classList.remove("active");
  });
  dropItem.addEventListener("drop", dropHandler);
  dropItem.addEventListener("dragstart", (ev) => {
    console.log();
    const dragItem = document.querySelector(".dragItem");
    dropItem.prepend(dragItem);
    ev.dataTransfer.setData("image", ev.target.id);
    ev.target.classList.remove("active");
    console.log(ev.target);
  });
});
