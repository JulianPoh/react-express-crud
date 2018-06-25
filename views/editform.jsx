var React = require('react');

class Edit extends React.Component {
  render() {
    return (
      <div>
        <h2>GOTTA CHANGE EM ALL!</h2>
        <h3>EDIT POKEMON</h3>
        <form method="POST" action="/id">
        <input type="text" name="id" placeholder="Update Pokemon ID"/>
        <p></p>
        <input type="text" name="num" placeholder="Update Pokemon Number"/>
        <p></p>
        <input type="text" name="name" placeholder="Update Pokemon Name"/>
        <p></p>
        <input type="text" name="img" placeholder="Update Pokemon Image"/>
        <p></p>
        <input type="text" name="height" placeholder="Update Pokemon Height"/>
        <p></p>
        <input type="text" name="weight" placeholder="Update Pokemon Weight"/>
        <p></p>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

module.exports = Edit;