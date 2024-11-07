const movies = document.getElementById("movies");
const m_Other = document.getElementById("m-Other");
const show_English = document.getElementById("show-English");
const show_Other = document.getElementById("show-Other");
const slideshow_container = document.getElementById("slideshow-container");

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

const show_English_data = [
  {
    title: "Beauty in Black",
    release_year: 2024,
    description:
      "A drama series about Kimmie, struggling to survive after being forced out of her home, and Mallory, who runs a successful company. Their lives intertwine in unexpected ways.",
    image: "Image available but not provided here.",
  },
  {
    title: "Territory",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
  {
    title: "The Diplomat",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
  {
    title: "This Is the Zodiac Speaking",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
  {
    title: "The Lincoln Lawyer",
    release_year: 2022,
    description:
      "A legal drama series following Mickey Haller, a defense attorney who works out of his Lincoln Town Car.",
    image: "Image available but not provided here.",
  },
  {
    title: "The Manhattan Alien Abduction",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
  {
    title: "Nobody Wants This",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
  {
    title: "Outer Banks",
    release_year: 2020,
    description:
      "An adventure series about a group of teens called 'Pogues' on a treasure hunt that takes them through dangerous waters.",
    image: "Image available but not provided here.",
  },
  {
    title: "Monsters",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
];

const show_Other_data = [
  {
    title: "Go Ahead, Brother",
    release_year: 2024,
    description:
      "A Polish crime thriller series about a former elite police officer turned security guard who faces financial trouble and uncovers a risky opportunity.",
    image: "Image not provided.",
  },
  {
    title: "DAN DA DAN",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
  {
    title: "Don’t Come Home",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
  {
    title: "Murder Mindfully",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
  {
    title: "Hellbound",
    release_year: 2021,
    description:
      "A dark fantasy series exploring a world where supernatural beings condemn individuals to hell in public displays.",
    image: "Image not provided.",
  },
  {
    title: "The Law According to Lidia Poët",
    release_year: 2023,
    description:
      "An Italian historical drama about Italy's first female lawyer fighting for her place in the legal world.",
    image: "Image not provided.",
  },
  {
    title: "Children of the Church Steps",
    release_year: "Not Yet Confirmed",
    description: "No information currently available.",
    image: "Not available.",
  },
  {
    title: "Deceitful Love",
    release_year: 2024,
    description: "A drama centered on romantic entanglements and betrayals.",
    image: "Image not provided.",
  },
  {
    title: "Dragon Ball DAIMA",
    release_year: 2024,
    description:
      "A new series in the Dragon Ball universe, featuring adventures with characters rejuvenated to child forms.",
    image: "Image not provided.",
  },
];


// get_data(data)
// get_data(tv_shows);
function get_data(m_other_data) {
  m_other_data.forEach((movies) => {
    const m_img = movies.photo;
    const slide = document.createElement("div");
    card.className = "slide";
    card.innerHTML = `
        <img src='${m_img}' alt=${title}>
        `;
    slideshow_container.appendChild(slide);
    return slideshow_container;
  });
}

movies.addEventListener("click", () => {
  movies.addEventListener("change", () => {
    if (movies.value === "lang-1") {
      get_data(m_other_data);
    } else if (movies.value === "lang-2") {
      get_data(show_English);
    } else {
      get_data(show_Other);
    }
  });
});