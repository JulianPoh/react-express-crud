var React = require('react');

class Edit extends React.Component {
  render() {
    return (
      <div>
        <h2>GOTTA GRIND EM ALL!</h2>
        <h3>Select a Pokemon to delete</h3>
        <form method="POST" action="/pokemon/:id">
        <input type="text" name="id" placeholder="Pokemon ID"/>
        <input type="submit" value="Delete"/>
        </form>
      </div>
    );
  }
}

module.exports = Edit;