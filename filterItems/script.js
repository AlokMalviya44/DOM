const products = [
  {
    image:
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
    productName: "Wireless Earbuds",
    popularity: 8,
    rating: 4.5,
    price: 29.99,
    description:
      "High-quality wireless earbuds with noise-cancelling feature and long battery life.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510766315117-0f791eb90af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsdWV0aG9vdGglMjBzcGVha2VyfGVufDB8fDB8fHww",
    productName: "Bluetooth Speaker",
    popularity: 7,
    rating: 4.3,
    price: 49.99,
    description:
      "Portable Bluetooth speaker with powerful sound, waterproof design, and long battery life.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
    productName: "Laptop",
    popularity: 10,
    rating: 4.8,
    price: 999.99,
    description:
      "High-performance laptop with latest processor, high-resolution display, and sleek design.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563297007-0686b7003af7?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    productName: "Gaming Mouse",
    popularity: 6,
    rating: 4.2,
    price: 39.99,
    description:
      "Ergonomic gaming mouse with customizable buttons, high DPI, and RGB lighting.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612181819081-950d35f4d826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVsZWN0cmljJTIwdG9vdGhicnVzaHxlbnwwfHwwfHx8MA%3D%3D",
    productName: "Electric Toothbrush",
    popularity: 8,
    rating: 4.6,
    price: 69.99,
    description:
      "Electric toothbrush with multiple cleaning modes, timer, and rechargeable battery.",
  },
];

function print(pro) {
  var container = "";
  products.forEach(function (product) {
    container += `<div class="card bg-white w-60 rounded-md">
                    <div class="w-full rounded-md overflow-hidden h-32">
                        <img class="overflow-hidden" src="${product.image}" alt="">
                    </div>
                    <h3 class="text-xl font-medium ml-3 mt-2">${product.productName}</h3>
                    <p class="font-medium ml-3 mt-2">Popularity : ${product.popularity}</p>
                    <p class="font-medium ml-3">Rating : ${product.rating}</p>
                    <p class="font-medium ml-3">Price : ${product.price}</p>
                    <p class="mt-2 ml-3 leading-tight">${product.description}</p>
                    <button class="px-4 py-2 text-sm font-semibold bg-indigo-700 rounded-xl m-3 ">Add to cart</button>
                </div>`;
  });
  document.querySelector(".cards").innerHTML = container;
}
print(products);
var select = document.querySelector("select");
select.addEventListener("change", function () {
  if (select.value === "Popularity") {
    var newpr = products.sort(function (a, b) {
      return b.popularity - a.popularity;
      
    });
  } else {
    var newpr = products.sort(function (a, b) {
      return b.rating - a.rating;
      
    });
  }
  print(newpr);
});
