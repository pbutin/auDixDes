import { useEffect, useState } from 'react';

import './App.css';
import getGamesAndDate from './SheetApiHelper';


function App() {
  const [allGames, setAllGames] = useState([]);
  const [error, setError] = useState();
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");


  
  const onChangeHandler = event => {
    const value = event.target.value;
    setSearch(value);
  };

  useEffect(() => {
    const filtered = allGames.filter(game => game.nom.toLowerCase().includes(search));
    setGames(filtered);
  }, [search]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getGamesAndDate();

        console.log(res.data);


        let games = res.data.valueRanges[0].values;
        
        games = games.map(function (i, key) {
          return {
            "nom": i[0],
            "categorie": i[1],
            "age": i[2],
            "description": i[3],
            "nbJoueurs" : i[4],
            "image": i[5]
          }
        });
        
        games.shift();

        setAllGames(games);
        setGames(games);

      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  if (games[0]) {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Aux Dix Dès
          </p>
          <p>Les jeux :</p>
          
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={search}
          />
          <div className='gameCards'>
            {
              games.map(game =>
                <div className='gameCard'>
                  <img src={game.image} alt="Non disponible"></img>
                  <div className='text'>
                    <p className='nom'>{game.nom}</p>
                    <p className='description'>{game.description}</p>
                    <div className='ligne'>
                      <p className='categorie'>{game.categorie}</p>
                      <p className='age'>{game.age}</p>
                      <p className='nbjoueurs'>{game.nbJoueurs}</p>
                      <p className=''></p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </header>

      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Aux dis dès
        </p>
      </header>
      <p>pas de jeu trouvé</p>

    </div>)
}

export default App;
