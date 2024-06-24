const names = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "LundPakduAbhishek",
  "Vihaan",
  "Arjun",
  "Sai",
  "Reyansh",
  "Ayaan",
  "Krishna",
  "Ishaan",
  "Shaurya",
  "Atharv",
  "Aarush",
  "Kabir",
  "Rudra",
  "Dhruv",
  "Aaditya",
  "Arnav",
  "Yuvraj",
  "Aryan",
  "Advait",
  "Armaan",
  "Anay",
  "Parth",
  "Ahaan",
  "Veer",
  "Ansh",
  "Shivansh",
  "Ryaan",
  "Arush",
  "Om",
  "Shreyansh",
  "Laksh",
  "Dev",
  "Kian",
  "Arin",
  "Samarth",
  "Krish",
  "Aarush",
  "Yash",
  "Aayush",
  "Moksh",
  "Darsh",
  "Ritvik",
  "Mann",
  "Atharva",
  "Saiyaan",
  "Avi",
  "Nirvaan",
  "Jai",
  "Aarohi",
  "Aditi",
  "Ananya",
  "Anika",
  "Anvi",
  "Avni",
  "Diya",
  "Ira",
  "Ishita",
  "Jiya",
  "Kavya",
  "Kiara",
  "Mishka",
  "Myra",
  "Naira",
  "Navya",
  "Pari",
  "Riya",
  "Saanvi",
  "Sara",
  "Shanaya",
  "Shreya",
  "Tara",
  "Trisha",
  "Vanya",
  "Zara",
  "Sia",
  "Meera",
  "Radhika",
  "Tanya",
];
function print(usernames) {
  var container = "";
  usernames.forEach(function (name) {
    container += `<h3 class="text-xl text-zinc-600 tracking-tight px-4 py-2">${name}</h3>`;
  });
  document.querySelector(".scroller").innerHTML = container;
}
print(names);

var input = document.querySelector("input");
//jab bhi input m type ho hume pata chale
//
input.addEventListener("input", function () {
  var ans = names.filter(function (name) {
    return name.toLowerCase().startsWith(input.value.toLowerCase());
  });
  print(ans);
});

//filter aur foreach mein ye difference hai ki ,filter main kuch na kuch return hoga, true ya false
