let productos = [];
const submit = document.getElementById("submit");
class Producto {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

submit.addEventListener("click", () => {
  title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let price = document.getElementById("price").value;
  let thumbnail = document.getElementById("thumbnail").value;
  let code = document.getElementById("code").value;
  let stock = document.getElementById("stock").value;

  if (
    title != undefined ||
    description != undefined ||
    price != undefined ||
    code != undefined ||
    stock != undefined
  ) {
    console.log("pasa");
    productos.push(
      new Producto(title, description, price, thumbnail, code, stock)
    );
  }
  for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
  }
});

productos.push(
  new Producto(
    "Lorem",
    "ipsum dolor sit amet",
    "consectetur adipiscing elit",
    100,
    "https://picsum.photos/200/300",
    1,
    10
  )
);
productos.push(
  new Producto(
    "Lorem",
    "ipsum dolor sit amet",
    "consectetur adipiscing elit",
    100,
    "https://picsum.photos/200/300",
    1,
    10
  )
);

for (let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}
