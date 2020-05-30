import bearData from '../helpers/data/bearData.js'
import utils from '../helpers/utils.js'

const createBearForm = () => {
  
  let domString = `
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Bear Watcher</h1>
      <p class="lead">Track Your Bear Below!</p>
    </div>
    <form>
      <div class="form-group">
       <label for="inputName">Bear Name</label>
       <input type="name" class="form-control bear-name" id="bear-name" aria-describedby="emailHelp">
      </div>
     <div class="form-group">
      <label for="inputImgUrl">Bear Image</label>
      <input type="imageUrl" class="form-control bear-img" id="bear-img">
     </div>
      <button type="submit" id="addBearButton" class="btn btn-primary">Submit</button>
   </form>
   `;

utils.printToDom('#bearForm', domString);

$('#addBearButton').click(bearData.addBear);
}

export default { createBearForm };
