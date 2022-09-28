import React from "react";

class App extends React.Component {

  render() {
    return(
      <div>
        <h1 class="text-center">Hello Dojo!</h1>
        <h2 class="text-center">Things I need to do:</h2>
        <div class="container">
          <div class="row">
            <div class="mx-auto">
              <ul class="list-group">
                <li class="text-center list-group-item">List</li>
                <li class="text-center list-group-item list-group-item-light">Learn React</li>
                <li class="text-center list-group-item list-group-item-light">Climb Mt Everest</li>
                <li class="text-center list-group-item list-group-item-light">Run a marathon</li>
                <li class="text-center list-group-item list-group-item-light">Feed the dogs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default App;

