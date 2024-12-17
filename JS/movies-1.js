const cardsDiv_1 = document.getElementById("cards-1");

const m_other_data = [
  {
    title: "Family Pack",
    release_year: "2022",
    description:
      "A Kannada comedy about an unlucky man who encounters the spirit of a deceased doctor who helps him transform his life.",
    image: "../images/1.webp",
  },
  {
    title: "Do Patti",
    release_year: "2024",
    description:
      "A Bollywood thriller about twin sisters navigating dark secrets and domestic violence, featuring a mix of drama and judicial themes.",
    image: "../images/2.webp",
  },
  {
    title: "Let Go",
    release_year: "Not Yet Confirmed",
    description:
      "Expected to explore themes of personal transformation and relationships.",
    image: "../images/3.webp",
  },
  {
    title: "Justice",
    release_year: "Not Yet Confirmed",
    description:
      "A crime drama likely focused on legal and moral dilemmas surrounding justice.",
    image: "../images/4.webp",
  },
  {
    title: "The Shadow Strays",
    release_year: "Not Yet Confirmed",
    description:
      "Expected to be a mystery or thriller, exploring the darker side of secrets and betrayals.",
    image: "../images/5.webp",
  },
  {
    title: "Meiyazhagan",
    release_year: "Not Yet Confirmed",
    description:
      "A Tamil film likely centered around family dynamics and cultural themes.",
    image: "../images/6.webp",
  },
  {
    title: "Uprising",
    release_year: "Not Yet Confirmed",
    description:
      "Potentially a historical or social drama about resistance or revolution.",
    image: "../images/7.webp",
  },
  {
    title: "Outside",
    release_year: "Not Yet Confirmed",
    description:
      "Anticipated to be a thriller or mystery that deals with boundaries between society and isolation.",
    image: "../images/8.webp",
  },
  {
    title: "The Platform 2",
    release_year: "2023",
    description:
      "A continuation of the psychological thriller, exploring the ethics and horrors within a futuristic prison.",
    image: "../images/9.webp",
  },
];

function get_data(data) {
  cardsDiv_1.innerHTML = "";
  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card-1";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">`;
    cardsDiv_1.appendChild(card);
  });
}

// Initialize with data
get_data(m_other_data);
