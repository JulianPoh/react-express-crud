const express = require('express');
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser');
const FILE = 'pokedex.json';

// Init express app
const app = express();

//<<REACT ENGINE>>
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))


//View Pokemon
app.get('/', (request, response) => {
    jsonfile.readFile('pokedex.json', (err, obj) => {
        const pokemon = obj.pokemon;
        const props = {
            getpkm : pokemon
        };
        response.render('getpkm', props)
    });
});


//Intercept /pokemon/new with a form
app.get('/pokemon/new', (request, response) => {
  response.render('newform');
});
// add new pokemon
app.post('/pokemon', (request, response) => {
  console.log('Created New Pokemon')
  let data = request.body;
  let id = parseInt(data['id']);
  data['id'] = id;
  jsonfile.readFile(FILE, (err, obj) => {
    obj.pokemon.push(data);
    console.log(data);
    response.send("New Pokemon Added!");
    jsonfile.writeFile(FILE, obj);
  })
});



//edit Pokemon Form
app.get('/:id/edit', (request, response) => {
  let index = parseInt(request.params.id);
  response.render('editform');
})
//edit Pokemon
app.put('/:id/edit', (request, response) => {
  let editPokemon = request.body;
  let id = parseInt(editPokemon['id']);
  editPokemon['id'] = id;
  jsonfile.readFile(FILE, (err, obj) => {
    let pkm = obj.pokemon;
    let pokemonReplace = pkm.find((currentPokemon) => {
      return currentPokemon.id === editPokemon.id
    })
  let indexToReplace = pkm.indexOf(pokemonReplace);
  pkm.splice(indexToReplace, 1, editPokemon);
  response.send("Pokemon Data Updated!");
})

//Delete Pokemon Form
app.get('/:id/delete', (request, response) => {
  let index = parseInt(request.params.id);
  response.render('deleteform');
})
//Delete Pokemon
app.delete('/:id/delete', (request, response) => {
  let pokeId = parseInt(request.params.id);
  let deletePokemon = obj.pokemon[poke];
  obj.pokemon.splice(poke, 1);
  response.send("Pokemon Deleted!");
  jsonfile.writeFile(FILE, obj);
})

})
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'))