//const gridSize = 256;
const grid = document.querySelector(".grid");
const gridWidth = 1024;
let sizeOfSize = 16;

let initialize = () => {
  //console.log(`Making new sketchpad | side:${sizeOfSize}`);
  grid.style.cssText = `width:${gridWidth}px;`;
  const boxSize = gridWidth / sizeOfSize - 2; // Accounts for border pixels
  makeGrid(sizeOfSize ** 2, boxSize);
  addHover();
};

// Generate the boxes
let makeGrid = (squares, boxSize) => { 
  //console.log(squares, boxSize);
  if (squares === 0) {
    return;
  };
  const gridBox = document.createElement("div");
  gridBox.classList.add("skbox");
  gridBox.style.cssText = `width: ${boxSize}px; height: ${boxSize}px;`;
  grid.appendChild(gridBox);
  makeGrid(squares - 1, boxSize);
};

// Add Hover Listener
let addHover = () => {
  const gridBoxes = document.querySelectorAll(".skbox");
  gridBoxes.forEach((gridBox) => {
    //console.log(gridBox);
    gridBox.addEventListener("mouseover", () => {
      //console.log("hovered");
      gridBox.classList.add("drawn");
    });
  });
};

// Add Clear Listener
const addClear = () => {
  const clearButton = document.querySelector(".clear-button");
  clearButton.addEventListener("click", clearBoxes);
};

const clearBoxes = () => {
  const gridBoxes = document.querySelectorAll(".skbox");
  gridBoxes.forEach((gridBox) => {
    gridBox.classList.remove("drawn");
  });
  promptSize();
};

// prompt size

const promptSize = () => {
  sizeOfSize = prompt(
    "How big do you want your sketchpad? (Squares per side, 1-94 only)"
  );
  console.log(sizeOfSize);
  if (sizeOfSize === null) sizeOfSize = 64;
  // Clear grid
  while(grid.hasChildNodes()){
    grid.removeChild(grid.firstChild);
  }
  initialize();
};

let main = () => {
  initialize();
  addClear();
};

main();
