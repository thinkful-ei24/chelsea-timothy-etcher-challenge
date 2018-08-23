// permanently apply 'active' class to grid cell when user hovers over cell
// when user clicks 'clear grid' button, grid should clear all cells using createAndPlaceRows function


//apply listener to every 'cell' class 
// every time user hovers over cell, listener is applied

// Add Event Listeners here:

const activateCell = event => {
  const activatedCell = $(event.target);
  activatedCell.addClass('active');
}

const clearGrid = () => {
  createAndPlaceRows(8);
  $('.cell').hover(activateCell);
}

// When DOM is ready:
$(() => {
  createAndPlaceRows(8);
  

  // Bind your event listeners here:
  $('.cell').hover(activateCell);
  $('button').click(clearGrid);

});







// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
