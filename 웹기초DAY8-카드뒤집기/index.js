// const flip = (location) => {
//   console.log(location);
// }
const cardArray = [
  {
    name: "pKaChu",
    img: "./images/pKaChu.jpg",
    id: null,
    done: false,
  },
  {
    name: "pKaChu",
    img: "./images/pKaChu.jpg",
    id: null,
    done: false,
  },
  {
    name: "chiCoRiTa",
    img: "./images/chiCoRiTa.jpg",
    id: null,
    done: false,
  },
  {
    name: "chiCoRiTa",
    img: "./images/chiCoRiTa.jpg",
    id: null,
    done: false,
  },
  {
    name: "ddoDoGas",
    img: "./images/ddoDoGas.jpg",
    id: null,
    done: false,
  },
  {
    name: "ddoDoGas",
    img: "./images/ddoDoGas.jpg",
    id: null,
    done: false,
  },
  {
    name: "maZaYong",
    img: "./images/maZaYong.jpg",
    id: null,
    done: false,
  },
  {
    name: "maZaYong",
    img: "./images/maZaYong.jpg",
    id: null,
    done: false,
  },
  {
    name: "jamManBo",
    img: "./images/jamManBo.jpg",
    id: null,
    done: false,
  },
  {
    name: "jamManBo",
    img: "./images/jamManBo.jpg",
    id: null,
    done: false,
  },
  {
    name: "eSangHae",
    img: "./images/eSangHae.jpg",
    id: null,
    done: false,
  },
  {
    name: "eSangHae",
    img: "./images/eSangHae.jpg",
    id: null,
    done: false,
  },
];

const gameDOM = [];

const setIDtoCardArray = () => {
  cardArray[0].id = "0-0"
  cardArray[1].id = "0-1"
  cardArray[2].id = "0-2"
  cardArray[3].id = "0-3"
  cardArray[4].id = "1-0"
  cardArray[5].id = "1-1"
  cardArray[6].id = "1-2"
  cardArray[7].id = "1-3"
  cardArray[8].id = "2-0"
  cardArray[9].id = "2-1"
  cardArray[10].id = "2-2"
  cardArray[11].id = "2-3";
};

let clickFirst = -1;
let clickSecond = -1;
let clickCount = 0;

const getGameDOM = () => {
  const rows = document.querySelectorAll(".container .row");
  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column");
  }
};

const createBoard = () => {
  for (let i = 0; i < gameDOM.length; i++) {
    for (let j = 0; j < gameDOM[i].length; j++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./images/questionMark.jpg");
      gameDOM[i][j].appendChild(card);
    }
  }
};

const setClickHistory = (location) => {
  if (clickFirst === -1) {
    clickFirst = location;
  } else {
    clickSecond = location;
  }
}

const backFlip = () => {
  const parsedIdFirst = cardArray[clickFirst].id.split("-");
  const parsedIdSecond = cardArray[clickSecond].id.split("-");
  setTimeout(() => {
    gameDOM[parsedIdFirst[0]][parsedIdFirst[1]].querySelector("img").src =
      "./images/questionMark.jpg";
    gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src =
      "./images/questionMark.jpg";
  }, 500)
}

const isCorrect = () => {
  if (cardArray[clickFirst].name === cardArray[clickSecond].name) {
    cardArray[clickFirst].done = true;
    cardArray[clickSecond].done = true;
  } else {
    backFlip();
  }
}

const flip = (location) => {
  if (!cardArray[location].done) {
    setClickHistory(location);
    const parsedId = cardArray[location].id.split("-");
    gameDOM[parsedId[0]][parsedId[1]].querySelector("img").src =
      cardArray[location].img;

    clickCount++;
    if (clickCount === 2) {
      clickCount = 0;
      isCorrect();
    }

    if (clickFirst !== -1 && clickSecond !== -1) {
      clickFirst = -1;
      clickSecond = -1;
    }
  }
}

getGameDOM();
cardArray.sort(() => 0.5 - Math.random());
setIDtoCardArray();
createBoard();