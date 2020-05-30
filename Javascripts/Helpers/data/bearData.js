import river from '../../components/river.js';

const bears = [];

const addBear = (e) => {
  e.preventDefault();
  let newBear = {
      // name: document.querySelector('#').value,
      // imageUrl: document.querySelector('#').value,
      name: $('#nameInput').val(),
      imageUrl: $('#bear-img').val(),
  }
  bears.push(newBear);
  river.createBearCard();
};

const getBears = () => {
  return bears;
};

export default { addBear, getBears };
