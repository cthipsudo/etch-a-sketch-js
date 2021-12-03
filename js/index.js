const gridSize = 256;
const grid = document.querySelector('.grid');
let count = 0;

// Generate the boxes
let makeGrid = (size) => {
  if(size===0) return;
  const gridBox = document.createElement('div');
  gridBox.classList.add('skbox');
  grid.appendChild(gridBox);
  makeGrid(size-1);
}

// Add Hover Listener
let addHover = () => {
  const gridBoxes = document.querySelectorAll('.skbox');
  gridBoxes.forEach(gridBox => {
    //console.log(gridBox);
    gridBox.addEventListener('mouseover', ()=> {
      console.log('hovered');
      gridBox.classList.add('drawn');
    });
  });
}



let main = () => {
  makeGrid(256);
  addHover();
}

main();