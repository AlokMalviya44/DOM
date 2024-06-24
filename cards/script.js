var arr = [
  {
    name: "Akshat Soni",
    desc: "He is a student of Lnct computer science engineering.",
    image:
      "https://images.unsplash.com/photo-1619300026534-8e8a76941138?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Strangers",
  },
  {
    name: "Akash Sharma",
    desc: "He is a student of tit and his branch is Civil engineering.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Friends",
  },
  {
    name: "Billy Parker",
    desc: "He is a student of Harward university",
    image:
      "https://images.unsplash.com/photo-1484517186945-df8151a1a871?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "Strangers",
  },
];

function print() {
  var container = "";
  arr.forEach(function (person, index) {
    container += `<div class="card w-56 rounded-md h-60 bg-gray-700 p-4">
    <div class="img w-12 h-12 rounded-full overflow-hidden bg-red-400">
        <img src="${person.image}" alt="">
    </div>
    <h2 class="text-xl font-semibold mt-3">${person.name}</h2>
    <p class="text-xs mt-5">${person.desc}</p>
    <button id="${index}" class="btn text-xs font-semibold px-3 py-2 ${
      person.status === "Strangers"
        ? "bg-blue-700"
        : person.status === "Request Sent"
        ? "bg-yellow-600"
        : "bg-red-600"
    } rounded-lg mt-5">${
      person.status === "Strangers"
        ? "Add friend"
        : person.status === "Request Sent"
        ? "Request Sent"
        : "Remove Friend"
    }</button>
</div>`;
  });
  document.querySelector(".cards").innerHTML = container;
}

print();

document.querySelector(".cards").addEventListener("click", function (e) {
  if (arr[e.target.id].status === "Strangers") {
    arr[e.target.id].status = "Request Sent";

    let rnnum = Math.floor(Math.random() * 10);

    setTimeout(function () {
      arr[e.target.id].status = "Friends";
      print();
    }, rnnum * 1000);
  } else {
    arr[e.target.id].status = "Strangers";
  }
  print();
});
