import utils from '../helpers/Utils.js';
import bearData from '../helpers/data/bearData.js';

// function that creates a bear card
const createBearCard = (object) => {
  // create an object that accepts a new bear 
  object = bearData.getBears();
  console.log(object);
  let domString = '';
  for (let i = 0; i < object.length; i++) {
    domString += `
    <div class="card" style="width: 18rem;">
      <img class="bear-img-top" src="${object[i].imageUrl}" alt="${object[i].name}">
      <div class="card-body">
        <h3 class="card-title">${object[i].name}</h3>
      </div>
    </div>`
  }
  // function to print bearCards to DOM
  utils.printToDom('#bearCards', domString);
  $('#bear-name').val();
  $('#bear-img').val();
}

export default { createBearCard };
