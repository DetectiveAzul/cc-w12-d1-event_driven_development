document.addEventListener('DOMContentLoaded', () => {
  console.log('I\'m on index html');
  const form = document.querySelector('#reading-form');
  form.addEventListener('submit', handleForm);
});

//Handle methods
function handleForm(event) {
  event.preventDefault();
  const reading = createReading(this);

  if (!isValidForm(reading)) {
    console.warn("Author and Book cannot be empty");
    return ;
  }

  const readingDiv = createReadingDiv();
  addReading(reading, readingDiv);
  this.reset();
};


//HELPERS METHODS
function isValidForm(reading) {
  return (reading['title'] && reading['author']);
}

function createReading(details) {
  return {
    title: details.book_title.value,
    author: details.author_name.value,
    cathegory: details.category.value,
    genre: details.select.value
  };
}

function createReadingDiv() {
  //Get the parent container for all the readings
  const allTheReadings = document.querySelector('#reading-list-container');
  //Create a div for the book
  const readingDiv = document.createElement('fieldset');
  //Add the book div as a child for the parent container
  allTheReadings.appendChild(readingDiv);
  //return the new div for the reading
  return readingDiv;
}

function addReading(reading, readingDiv) {
  for (let key in reading) {
    let line = document.createElement('p');
    line.textContent = `${key}: ${reading[key]}`
    readingDiv.appendChild(line);
  };

}
