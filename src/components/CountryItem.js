import React, { useState, Fragment } from 'react'
import Modal from 'react-modal'

const CountryList = ({ country }) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }

    
    
    return (
        <Fragment>
        <div id="country" onClick={openModal}>
            <img src={country.flag} id="flag" alt="flag" />
            <div className="country-details">
                <div id="name">{country.name}{' '}</div>
                <div id="population">Population: {country.population.toLocaleString()}</div>
            </div>
        </div>
        <Modal 
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Country Modal"
            ariaHideApp={false}
        >
            <h1>{country.name}</h1>
            <ul>
                <li>Population: {country.population.toLocaleString()}</li>
                <li>Region: {country.region}</li>
                <li>Capital: {country.capital}</li>
                <li>Alternate spellings: {country.altSpellings.toString()}</li>
                <li>Currencies:</li>
                <ul>
                    
                    {country.currencies.map(item => (
                        <Fragment key={item.code}>
                            <li>Symbol: {item.symbol}</li>
                            <li>Code: {item.code}</li>
                            <li>Name: {item.name}</li>
                        </Fragment>
                        
                       
                    ))}
                </ul>
                    <li>Domain: {country.topLevelDomain.toString()}</li>
                {/* <li>Currencies: {country.currencies}</li> */}
            </ul>
        </Modal>
        </Fragment>
    )
}

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default CountryList

