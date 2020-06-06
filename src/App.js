import React, { useState, useEffect } from 'react';
import './styles.css';
import Search from './components/Search';
import CountryList from './components/CountryList';

const App = () => {

    const [query, setQuery] = useState('');
    const [list, setList] = useState([]);

    // const list = ['tree', 'horse', 'cat', 'dog', 'hook'];
    

    useEffect(() => {
      async function fetchData(){
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        res
          .json()
          .then(data => setList(data))
          .catch(err => console.log(err.message))
      }
      fetchData();
    }, [])

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }

    const filteredList = list.filter(country => country.name.toLowerCase().startsWith(query.toLowerCase()));
    
    return (
      <div>
      
        <Search query={query} handleQuery={handleQuery} />
        <CountryList list={filteredList} />
      </div>
    )
}

export default App;
