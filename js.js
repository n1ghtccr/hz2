const DB_URL = "https://hz123532-7e5b.restdb.io/rest/products";
const API_KEY = "6b03099ccb1c245ec3625fc6";

window.addEventListener("load", async () => {
  await getProducts();
  renderProducts();
});

const productsList = document.getElementById("products");

let products = [];

function renderProducts() {
  products.forEach(({ name }) => {
    const el = document.createElement("li");
    el.innerText = name;
    productsList.appendChild(el);
  });
}

async function getProducts() {
  try {
    const res = await fetch(DB_URL, {
      method: "GET",
      headers: {
        "x-apikey": API_KEY,
      },
    });
    const data = await res.json();
    products = data;
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
