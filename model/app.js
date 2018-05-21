document.addEventListener('DOMContentLoaded', () => {
  console.log('I\'m on index html');
  const form = document.querySelector('#reading-form');
  form.addEventListener('submit', handleForm);
});

function handleForm(event) {
  event.preventDefault();
  //Console.log
  console.log("You have submitted the form");
  //Get the values for creating a Reading object
  const reading = {
    title: this.book_title.value,
    author: this.author_name.value,
    cathegory: this.category.value,
    genre: this.select.value
  };
  console.table(reading);
  //Get the parent container for all the readings
  const allTheReadings = document.querySelector('#reading-list-container');
  console.dir(allTheReadings);
  //Create a div for the book
  const readingDiv = document.createElement('fieldset');
  console.dir(readingDiv);
  //Add the book div as a child for the parent container
  allTheReadings.appendChild(readingDiv);
  //Transform the book onto html elements
  for (let key in reading) {
    let line = document.createElement('p');
    line.textContent = `${key}: ${reading.key}`
    readingDiv.appendChild(line);
  };

  console.log(readingDiv);
  //Reset the form
  this.reset();
};
