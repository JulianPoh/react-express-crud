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


// app.get('/:id', (request, response) => {
//   jsonfile.readFile(FILE, (err, obj) => {
//     let inputId = request.params.id;
//     let pokemon = obj.pokemon.find((currentPokemon) => {
//       return currentPokemon.id === parseInt(inputId, 10);
//     });
//     if (pokemon === undefined) {
//       response.status(404);
//       response.send("not found");
//     } else {
//       response.render(view);
//     }
//   });
// });

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
    response.send(obj);
    jsonfile.writeFile(FILE, obj);
  })
});


//edit Pokemon


app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
