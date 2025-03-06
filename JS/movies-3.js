const cardsDiv_3 = document.getElementById("cards-3");
const left_3 = document.getElementById("left-arrow-3");
const right_3 = document.getElementById("right-arrow-3");

const show_Other_data = [
  {
    title: "Go Ahead, Brother",
    release_year: 2024,
    description:
      "A Polish crime thriller series about a former elite police officer turned security guard who faces financial trouble and uncovers a risky opportunity.",
    image: "../images/show1.webp",
  },
  {
    title: "DAN DA DAN",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/show2.webp",
  },
  {
    title: "Don’t Come Home",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/show3.webp",
  },
  {
    title: "Murder Mindfully",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/show4.webp",
  },
  {
    title: "Hellbound",
    release_year: 2021,
    description:
      "A dark fantasy series exploring a world where supernatural beings condemn individuals to hell in public displays.",
    image: "../images/show5.webp",
  },
  {
    title: "The Law According to Lidia Poët",
    release_year: 2023,
    description:
      "An Italian historical drama about Italy's first female lawyer fighting for her place in the legal world.",
    image: "../images/show6.webp",
  },
  {
    title: "Children of the Church Steps",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/show7.webp",
  },
  {
    title: "Deceitful Love",
    release_year: 2024,
    description: "A drama centered on romantic entanglements and betrayals.",
    image: "../images/show8.webp",
  },
  {
    title: "Dragon Ball DAIMA",
    release_year: 2024,
    description:
      "A new series in the Dragon Ball universe, featuring adventures with characters rejuvenated to child forms.",
    image: "../images/show9.webp",
  },
];

function get_data(data) {
  cardsDiv_3.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card-3";
    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">`;
    cardsDiv_3.appendChild(card);
  });
}

get_data(show_Other_data);

right_3.addEventListener("click", () => {
  cardsDiv_3.style.scrollBehavior = "smooth";
  cardsDiv_3.scrollLeft += 900;
});

left_3.addEventListener("click", () => {
  cardsDiv_3.style.scrollBehavior = "smooth";
  cardsDiv_3.scrollLeft -= 900;
});
