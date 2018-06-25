var React = require('react');

class Edit extends React.Component {
  render() {
    return (
      <div>
        <h3>EDIT POKEMON</h3>
        <form method="POST" action="/pokemon?_method=PUT">
        <input type="text" name="id" placeholder="New Pokemon ID"/>
        <p></p>
        <input type="text" name="num" placeholder="New Pokemon Number"/>
        <p></p>
        <input type="text" name="name" placeholder="New Pokemon Name"/>
        <p></p>
        <input type="text" name="img" placeholder="New Pokemon Image"/>
        <p></p>
        <input type="text" name="height" placeholder="Pokemon Height"/>
        <p></p>
        <input type="text" name="weight" placeholder="Pokemon Weight"/>
        <p></p>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

module.exports = Edit;