import './App.css';
import '../node_modules/bulma/css/bulma.min.css';
import Header from './Composants/Header/Header';
import Card from './Composants/Card/Card';
import { useState } from 'react';


function App() {
    
  const[monState,setMonstate]=useState([
    {tache: 'promener le chien',txt:'Une fois a 8h,une fois a 19h'},
    {tache: 'Apprendre react', txt:'pendant les vacances'},
    {tache: 'faire une app web',txt:'apprendre react et laravel'},
  ])

  const [tache,setTache]=useState();
  const [txt,setTxt]=useState();

  function creationCarte(e){
    e.preventDefault();
    const nvTab=[...monState,{tache: tache,txt: txt}]
    setMonstate(nvTab);
    setTache('');
    setTxt('');

  }

  function supprCarte(index){
    const tabNettoyage=[...monState];

    // console.log(tabNettoyage.filter(item=>tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])));
    setMonstate(tabNettoyage.filter(item=>tabNettoyage.indexOf(item) !== tabNettoyage.indexOf(tabNettoyage[index])));
  }





  return (
    <div>
      <Header />
      <div className="container px-3">
        <h2 className="title mt-5">Rentrez vos taches a faire</h2>

        <form onSubmit={creationCarte}>
          <div className="field">
            <div className="control">
              <label htmlFor="tache" className="label">
                Tache
              </label>
              <input
                value={tache}
                type="text"
                id="tache"
                placeholder="Une tache a faire"
                className="input"
                onChange={(e) => setTache(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label htmlFor="txt" className="label">
                Contenu de la tache{" "}
              </label>
              <textarea
                value={txt}
                id="txt"
                className="textarea"
                type="text"
                placeholder="une tache a faire"
                onChange={(e) => setTxt(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="control">
            <button className="button is-link">creer une tache</button>
          </div>
        </form>

        {monState.map((item, index) => {
          return (
            <Card
              key={index}
              index={index}
              tache={item.tache}
              txt={item.txt}
              supprCarte={supprCarte}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
