import river from '../../components/river.js';

// need an empty array to add new bears into
const bears = [];

// function to add new bears into our array/river
const addBear = (e) => {
  e.preventDefault();
  let newBear = {
      // name: document.querySelector('#').value,
      // imageUrl: document.querySelector('#').value,
      name: $('#bear-name').val(),
      imageUrl: $('#bear-img').val(),
  }
  console.log(newBear);
  bears.push(newBear);
  river.createBearCard();
};

const getBears = () => {
  return bears;
};

export default { addBear, getBears };
