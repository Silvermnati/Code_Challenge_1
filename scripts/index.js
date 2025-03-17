const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "tonkotsu.jpg",
  },
];

// displaying ramens in the ramens menu

const displayRamen = () => {
  let section = document.getElementById("ramen-menu");

  ramens.forEach((ramen) => {
    section.innerHTML = `
    <div id="ramen-detail">
      <img
        src="https://i.pinimg.com/736x/96/a6/bc/96a6bc6d0e04a922c5629b50d3a0bf08.jpg"
        alt="portrait"
      />
    </div>
  `;
  });

  console.log("this is my section", section);
 
};

const handleClick= () => {
  // get the details of the ramen and display it in the ramen-detail section
};

const createNewRamen = () => {
  name = document.getElementById("name").value;
  restaurant = document.getElementById("restaurant").value = document.getElementById("image").value;
  image = document.getElementById("image").value;
  rating = document.getElementById("rating").value;
  comment = document.getElementById("comment").value;

  const newRamen = {
    id: ramens.length + 1,
    name: name,
    restaurant: restaurant,
    image: image,
    rating: rating,
    comment: comment,
  }

  ramens.push(newRamen);

  onload(() => {
    displayRamen();
  })
};
const ramenDetails = document.getElementById("ramen-detail");


ramenDetails.addEventListener(`click`, () => {
handleClick();
});

displayRamen();
