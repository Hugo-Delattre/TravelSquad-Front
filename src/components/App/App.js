import './App.scss';
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Countries from '../Pages/Countries';
import Home from '../Pages/Home';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/countries' element={<Countries/>}/>
      </Routes>

      
      
    </div>
  );
}

export default App;



// REACT-ROUTER MEMO
// --------- BASICS -> Setup ---------
// 1) npm i react-router-dom
// 2) Add BrowserRouter to index.js (import + wrap autour de <App />)
// 3) Add Routes to App.js (import + ajout au JSX <Routes> <Routes> </Routes>
// 4) On ajoute path='url' et son element={nomComposant(s)} à chaque Route
// 5) Add Link to nav (équivalent des <a> en html), où le href devient un to -> <nav><ul><li><Link to='url'></li></ul></nav. Contrairement au <a>, le Link prend en charge le SPA
// 5.2) On utilisera NavLink au lieu de Link pour pouvoir changer le style selon sur quel élément de la nav on est, plus d'infos sur mon Notion

// --------- INTERMEDIAIRE -> Routes dynamiques, 404, Nested routes ---------
// 6) Routes dynamiques -> on met une path 'url/:id' dans un  <Route>, puis dans le composant où ça nous mène on va utiliser le custom hook useParams -> 'const { id } = useParams()' puis on utilise le id pour un find pour récup data de cette page par exemple.
// 7) Gérer la 404 -> <Route path='*' element={<NotFound />}
// 8) Nested Routes -> au lieu d'avoir 3 routes (/books, books/:id et books/new) on peut faire une route parent <Route path='/book'> ... </Route> et à l'intérieur en enfant on met des routes cf <Route path=':id' element={..}> <Route path='new' element={...}>, avec un enfant <Route index element={..}> pour cibler quand l'url est celle du parent cf /book
// 8.2 Nested Routes part2 -> on peut donner un element au parent des routes imbriquées (e.g. navbar) qui va alors être rendu sur tous les enfants.Bien penser dans ce cas à ajouter un <Outlet /> dans le composant parent pour que le contenu enfant soit aussi affiché. Faisable aussi sans le path et juste element si on veut un layout commun sans path commune.
// 8.3 et 8.4 sur mon Notion