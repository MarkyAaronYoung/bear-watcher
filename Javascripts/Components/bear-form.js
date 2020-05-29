import utils from '../helpers/utils.js'

const bearForm = () => {
  let domString = `
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Fluid jumbotron</h1>
      <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
    <form>
      <div class="form-group">
       <label for="inputName">Name</label>
       <input type="name" class="form-control bear-name" id="bear-name" aria-describedby="emailHelp">
      </div>
     <div class="form-group">
      <label for="inputImgUrl">Image Url</label>
      <input type="imageUrl" class="form-control bear-img" id="bear-img">
     </div>
      <button type="submit" class="btn btn-primary">Submit</button>
   </form>`

utils.printToDom('#bearForm', domString);
}

{ export bearForm };
