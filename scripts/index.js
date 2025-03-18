const ramens = [
  { img: "./images/image copy 2.png", name: "Tonokotsu Ramen" },
  { img: "./images/image copy 3.png", name: "Shio Ramen" },
  { img: "./images/image copy 5.png", name: "solitos Ramen" },
  { img: "./images/image copy.png", name: "Miso Ramen" },
  { img: "./images/image.png", name: "Shoyu Ramen" },
];

// displaying ramens in the ramens menu

const displayRamen = () => {
  let section = document.getElementById("ramen-menu");

  ramens.forEach((ramen) => {
    let img = document.createElement("img");
    img.src = ramen.img;
    img.alt = ramen.name;
    img.style.cursor = "pointer";

    img.addEventListener("click", () => showRamenDetails(ramen));
    section.appendChild(img);
  });

  console.log(" my section", section);
};

const handleClick = () => {
  // get the details of the ramen and display it in the ramen-detail section
  console.log(" clicked");
  
};

const showRamenDetails = (ramen) => {
  // get the details of the ramen and display it in the ramen-detail section
  let section = document.getElementById("ramen-detail");  
  section.innerHTML = "";
  let img = document.createElement("img");
  img.src = ramen.img;
  img.alt = ramen.name;
  section.appendChild(img);

};

const createNewRamen = () => {
  name = document.getElementById("new-name").value;
  restaurant = document.getElementById("new-restaurant").value;
  image = document.getElementById("new-image").value;
  rating = document.getElementById("new-rating").value;
  comment = document.getElementById("new-comment").value;

  let newRamen = {
    // id: ramens.length + 1,
    name: name,
    restaurant: restaurant,
    image: image,
    rating: rating,
    comment: comment,
  };

  ramens.push(newRamen);

  onload(() => {
    displayRamen();
  });
};
const ramenDetails = document.getElementById("ramen-detail");

const form = document.getElementById("new-ramen");

ramenDetails.addEventListener(`click`, () => {
  handleClick();
});

displayRamen();
