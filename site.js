import { AddObject, GetCart, GetProducts, products } from "./products.js";

function RenderPage() {
  RenderAvailable();
  RenderYourCart();
}
function CreateItemCardElement(title, discription, price, quantity, img) {
  const titleElement = document.createElement("div");
  titleElement.textContent = title;
  titleElement.classList.add("card-title");
  const descriptionElement = document.createElement("div");
  descriptionElement.textContent = discription;
  descriptionElement.classList.add("card-description");
  const pricelement = document.createElement("div");
  pricelement.textContent = price;
  pricelement.classList.add("card-price");
  const quantityElement = document.createElement("div");
  quantityElement.textContent = quantity;
  quantityElement.classList.add("card-quantity");
  const cardContentElement = document.createElement("div");
  cardContentElement.classList.add("card-content");
  cardContentElement.appendChild(titleElement);
  cardContentElement.appendChild(descriptionElement);
  cardContentElement.appendChild(pricelement);
  cardContentElement.appendChild(quantityElement);
  const itemcardElement = document.createElement("div");
  itemcardElement.classList.add("card");
  const pictureElement = document.createElement("div");
  pictureElement.classList.add("card-img");
  pictureElement.style = `background-image: url('${img}')`;
  itemcardElement.appendChild(pictureElement);
  itemcardElement.appendChild(cardContentElement);
  itemcardElement.draggable = true;
  return itemcardElement;
}
function RenderAvailable() {
  const itemList = GetProducts();
  const productList = document.getElementById("products-container");
  productList.replaceChildren();
  const header = document.createElement("h2");
  header.textContent = "Available Products";
  productList.appendChild(header);
  itemList.forEach((item) => {
    const cardElement = CreateItemCardElement(
      item.title,
      item.description,
      item.price,
      item.quantity,
      item.image
    );
    cardElement.id = item.title;
    cardElement.addEventListener("dragstart",(e) => {
      e.dataTransfer.setData("text", e.target.id)
    });
    productList.appendChild(cardElement);
  });
}
function RenderYourCart() {
  var total = 0;
  const itemList = GetCart();
  const List = document.getElementById("cartList");
  List.replaceChildren();
  List.addEventListener("drop", (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  });
  List.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  itemList.forEach((item) => {
    const cardElement = CreateItemCardElement(
      item.title,
      item.description,
      item.price,
      item.quantity,
      item.image
    );
    List.appendChild(cardElement);
    total += item.price * item.quantity;
  });
  const TotalElement = document.getElementById("amount");
  TotalElement.textContent = total;
}

// main program
RenderPage();

