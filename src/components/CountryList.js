import React from 'react';
import CountryItem  from '../components/CountryItem';

const CountryList = ({ list }) => {

    return (
        <div className="country-container">
            {list.map((item) => {
                return <CountryItem key={item.name} country={item}/>
            })}
        </div>
    )
}

export default CountryList;