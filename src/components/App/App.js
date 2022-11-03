import React, { useState, useEffect } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from '../../routes/Home/Home';
import SelectedView from '../../routes/SelectedView';
import { getAllData } from '../../utilities/utilities'
import { ProgressSpinner } from '../SpinLogo/SpinLogo';
import Status404 from '../../errorHandling/Status404';
import InternalServerError from '../../errorHandling/InternalServerError';
import AppContext from '../AppContext';




function App() {
const [article, setArticle] = useState('')
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);
const [search, setSearch] = useState([])






const globals = {
  data: data,
  setData: setData,


  article: article,
  setArticle: setArticle,

  search: search,
  setSearch: setSearch,
}


useEffect(() => {
    setLoading(true);
    getAllData('home').then(res => {
    globals.setData(res.results)
  })
  setLoading(false);
}, []);

console.log(`hello world`)
 

  return (
    <AppContext.Provider value={globals}>
    <main className="app-container">
      {loading && <ProgressSpinner/>}
      
      <Switch>
        <Route exact path="/selected/:id" render={ ({match}) => <SelectedView id={match.params.title} setData={setData}/> } />
        <Route exact path="/" render={()=>(<Home data={data} setSearch={setSearch}/> ) }/>
        <Route component={Status404} />
        <Route component={InternalServerError} />
      </Switch>
    </main>
    </AppContext.Provider>
  );
}

export default App;
