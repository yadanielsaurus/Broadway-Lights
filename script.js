const musicals = {
  hamilton: {
    title: "Hamilton",
    creator: "Lin-Manuel Miranda",
    synopsis:
      "Hamilton tells the story of American Founding Father Alexander Hamilton through hip-hop, jazz, and R&B.",
    poster: "images/hamilton.jpg",
  },
  phantom: {
    title: "The Phantom of the Opera",
    creator: "Andrew Lloyd Webber",
    synopsis:
      "A haunting love story between a masked phantom and a young soprano in a Paris opera house.",
    poster: "images/phantom.jpg",
  },
  lesmis: {
    title: "Les Misérables",
    creator: "Claude-Michel Schönberg & Alain Boublil",
    synopsis:
      "Set in 19th-century France, it tells the story of redemption, revolution, and the endurance of the human spirit.",
    poster: "images/lesmis.jpg",
  },
  tick: {
    title: "Tick, Tick... Boom!",
    creator: "Jonathan Larson",
    synopsis:
      "An autobiographical musical by Jonathan Larson about a young composer struggling with doubt and ambition as he approaches his 30th birthday.",
    poster: "images/ticktickboom.jpg",
  },
  rent: {
    title: "Rent",
    creator: "Jonathan Larson",
    synopsis:
      "A rock musical following a group of young artists in New York City struggling with love, loss, and creativity during the HIV/AIDS crisis.",
    poster: "images/rent.jpg",
  },
  intothewoods: {
    title: "Into the Woods",
    creator: "James Lapine & Stephen Sondheim",
    synopsis:
      "A Baker and his Wife go into the woods to break a curse, meeting fairy tale characters like Cinderella, Jack, and Little Red Riding Hood. In the second act, they face the consequences of their wishes.",
    poster: "images/intothewoods.jpg",
  },
  westsidestory: {
    title: "West Side Story",
    creator: "Leonard Bernstein & Stephen Sondheim",
    synopsis:
      "A modern retelling of Romeo and Juliet set in New York City, where two young lovers are caught between rival street gangs, the Jets and the Sharks.",
    poster: "images/westsidestory.jpg",
  },
  spiderman: {
    title: "Spider-Man: Turn Off the Dark",
    creator: "Julie Taymor, Bono & The Edge",
    synopsis:
      "A rock musical based on the Marvel Comics hero Spider-Man, featuring music and lyrics by U2’s Bono and The Edge, and known for its ambitious aerial stunts.",
    poster: "images/spiderman.jpg",
  },
  wicked: {
    title: "Wicked",
    creator: "Stephen Schwartz & Winnie Holzman",
    synopsis:
      "The untold story of the witches of Oz, exploring the unlikely friendship between Elphaba (the Wicked Witch of the West) and Glinda (the Good Witch).",
    poster: "images/wicked.jpg",
  },
  chicago: {
    title: "Chicago",
    creator: "John Kander & Fred Ebb",
    synopsis:
      "Set in 1920s Chicago, the musical tells the story of Roxie Hart and Velma Kelly — two rival murderesses who compete for fame, fortune, and acquittal.",
    poster: "images/chicago.jpg",
  },
  sweeneytodd: {
    title: "Sweeney Todd: The Demon Barber of Fleet Street",
    creator: "Stephen Sondheim & Hugh Wheeler",
    synopsis:
      "A dark and witty musical thriller about a vengeful barber and his accomplice Mrs. Lovett, who turn his victims into meat pies in Victorian London.",
    poster: "images/sweeneytodd.jpg",
  },
  grease: {
    title: "Grease",
    creator: "Jim Jacobs & Warren Casey",
    synopsis:
      "A high-energy rock 'n' roll musical set in the 1950s that follows the love story of Danny and Sandy amid the fun, friendships, and teenage rebellion at Rydell High.",
    poster: "images/grease.jpg",
  },
};

const modal = document.getElementById("modal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalCreator = document.getElementById("modalCreator");
const modalSynopsis = document.getElementById("modalSynopsis");
const closeBtn = document.getElementById("closeBtn");

function showInfo(id) {
  const musical = musicals[id];
  if (!musical) return;

  modalPoster.src = musical.poster;
  modalTitle.textContent = musical.title;
  modalCreator.textContent = "By " + musical.creator;
  modalSynopsis.textContent = musical.synopsis;
  modal.style.display = "flex"; 
}

function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});