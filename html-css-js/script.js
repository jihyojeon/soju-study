function openModal() {
  document.getElementById("addItemModal").style.display = "block";
}

function closeModal() {
  document.getElementById("name").value = null;
  document.getElementById("image").value = null;
  document.getElementById("content").value = null;

  document.getElementById("addItemModal").style.display = "none";
}

function addItem() {
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  closeModal();
  showItemInList({ name, image, content });
}

function showItemInList({ name, image, content }) {
  const list = document.getElementById("list");
  const newItemInTheList = document.createElement("li");
  newItemInTheList.innerText = name;
  list.appendChild(newItemInTheList);

  const cardList = document.getElementById("card-list");
  const newItem = document.createElement("div");
  newItem.className = "god";
  newItem.innerHTML = `
  <img src=${image} alt="${name}" />
  <h1>${name}</h1>
  <p>
    ${content}
  </p>
  `;
  cardList.appendChild(newItem);
}
