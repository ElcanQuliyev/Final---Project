const cardsDiv_2 = document.getElementById("cards-2");

const show_English_data = [
  {
    title: "Beauty in Black",
    release_year: 2024,
    description:
      "A drama series about Kimmie, struggling to survive after being forced out of her home, and Mallory, who runs a successful company. Their lives intertwine in unexpected ways.",
    image: "../images/tv1.webp",
  },
  {
    title: "Territory",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/tv2.webp",
  },
  {
    title: "The Diplomat",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/tv3.webp",
  },
  {
    title: "This Is the Zodiac Speaking",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/tv4.webp",
  },
  {
    title: "The Lincoln Lawyer",
    release_year: 2022,
    description:
      "A legal drama series following Mickey Haller, a defense attorney who works out of his Lincoln Town Car.",
    image: "../images/tv5.webp",
  },
  {
    title: "The Manhattan Alien Abduction",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/tv6.webp",
  },
  {
    title: "Nobody Wants This",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/tv7.webp",
  },
  {
    title: "Outer Banks",
    release_year: 2020,
    description:
      "An adventure series about a group of teens called 'Pogues' on a treasure hunt that takes them through dangerous waters.",
    image: "../images/tv8.webp",
  },
  {
    title: "Monsters",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "../images/tv9.webp",
  },
];


function get_data(data){
    cardsDiv_2.innerHTML = "";
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card-2";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">`;
      cardsDiv_2.appendChild(card);
    });
}

get_data(show_English_data);