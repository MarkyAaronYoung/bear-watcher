import utils from '../helpers/Utils.js';
import bearData from '../helpers/data/bearData.js';

const createBearCard = (object) => {
  object = bearData.getBears();
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
  utils.printToDom('#bearCards', domString);
  $('#nameInput').val('');
  $('#bear-img').val('');
}

export default { createBearCard };
