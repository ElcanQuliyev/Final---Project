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

// get_data(data)
// get_data(tv_shows);

function get_data(data) {
  slideshow_container.innerHTML = "";
  data.forEach((item) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
      <img src=${item.image}>
    `;
    slideshow_container.appendChild(slide);
  });
}

movies.addEventListener("change", () => {
  switch (movies.value) {
    case "lang-1":
      get_data(m_other_data);
      break;

    case "lang-2":
      get_data(show_English_data);
      break;

    case "lang-3":
      get_data(show_Other_data);
      break;

    default:
      console.log("Error");
      break;
  }
});
