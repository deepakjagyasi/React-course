import React, {useState, useEffect} from 'react';
import './App.css';
import CountryList from './Components/CountryList';
import Search from './Components/Search';
import {response} from './response';
import 'h8k-components';

const title = "Country Filter";


function App() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [states, setStates] = useState([]);
    useEffect(()=>{
       setStates(response)
    }, [])

    useEffect(() => {
      if(searchTerm != "") {
        const results = states.filter(state =>
          state.toLowerCase().includes(searchTerm)
        );
        setStates(results);
      }
  }, [searchTerm]);


    function handleCallback(childData){
      console.log('teste', childData)
      this.setSearchTerm(childData)
    }
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
                <Search parentCallback = "{handleCallback}"/>
                <CountryList states={states} />
            </section>
        </div>
    );
}

export default App;
