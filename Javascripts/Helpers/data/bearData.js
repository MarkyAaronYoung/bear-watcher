const bears = [];

const addBear = (e) => {
  e.preventDefault();
  let newBear = {
      name: document.querySelector('#').value,
      imageUrl: document.querySelector('#').value,
  }
  bears.push(newBear);
};

const getBears = () => {
  return bears;
};

export default { addBear, getBears };
