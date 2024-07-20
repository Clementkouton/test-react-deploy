import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// Compteur 
  //State (etat, données)
  const [compteur, setCompteur] = useState(0);

  //comportement
  const handleClickplus = () => {
    setCompteur (compteur + 1);

  };
  const handleClickmoins = () => {
    setCompteur (compteur - 1); 

  };

// gestion de liste

  //state
  const [fruits, setFruits] = useState([
    { id: 1, name: "Mangue"},
    { id: 2, name: "Banane"},
    { id: 3, name: "Avocat"},
    { id: 4, name: "Manioc"},
    { id: 5, name: "Banane"},
    { id: 6, name: "Papagne"},
    { id: 7, name: "Poulet"},
    { id: 8, name: "Poisson"},
    { id: 9, name: "Viande"},

  ]);


  //Comportement 
  const handleDelete = (id) => { 
    console.log(id)

  // Pour supprimer, il faut:
  // 1 Copier le state
  const fruitsCopier = [...fruits];

  // 2 Manipuler le state
  const fruitsCopierUpdated = fruitsCopier.filter((fruit) => fruit.id !== id);

  // 3 Modifier le state avec setter
    setFruits(fruitsCopierUpdated);
  }; 

  const [nouveauFruit, setnouveauFruit] = useState("");
  
//Gestion de formulaire

  const handleSubmit = (event) => {
    event.preventDefault(); //Pour eviter le rechargement de la page
    //alert("Formulaire");

  //Copier le State
  const fruitsCopier = [...fruits];

  //Manipuler de la copier du state
  const id = new Date().getTime();
  const name = nouveauFruit; 
  fruitsCopier.push({ id, name});

  //Modifier le state du Setter
  setFruits(fruitsCopier);
  setnouveauFruit("");

  };

  const handleChange = (event) => {
    setnouveauFruit(event.target.value);
  };

  //Affichage
  return (
    <>
      <h1>Je suis un compteur de nombre</h1>

      <h3>Le nombre actuel est <h2>{compteur} </h2></h3>
      <button type="button" onClick={handleClickmoins} className='bouton2'>-</button>
      <button type="button" onClick={handleClickplus} className='bouton1'>+</button>

      <h1 className='liste'>Voici la liste des produits choisi du Dac</h1>
      <ul className='ulliste'>
        {fruits.map((fruit) => (
            <li key={fruit.id} className='ulliste'> 
              {fruit.name}{" "}
              <button className='delete' onClick={() => handleDelete(fruit.id) }>x</button>
            </li>
        ))}
      </ul>

      <form action="sudmit" onSubmit={handleSubmit}>
        <input className='input' value={nouveauFruit} type="text" onChange={handleChange}  placeholder="Ajouter un produit"  />
        <button className='sudmit' type="submit">Ajouter <strong>+</strong></button>
      </form>
    </>
  );

}



export default App
