var React = require('react');

class View extends React.Component {
  render() {
        const listPokemon = this.props.all_pokemon.map((pokemon), {
            return (
                <li>
                    <p>name: {pokemon.name}</p>
                    <p>id: {pokemon.id}</p>
                    <p><img src={pokemon.img} /></p>
                </li>
            );
        });

    return (
        <html>
            <body>
                <ul>
                    {listPokemon}
                </ul>

            </body>
        </html>
    );

  }
}

module.exports = View;