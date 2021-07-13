import React from 'react';

function CountryList(props) {
  return (
    <section>
      <ul className="card country-list" data-testid="countryList">
        {props.states.map(state1 => (
          <li key="state1" className="pa-10 pl-20">{state1}</li>  
        ))}
      </ul>
    </section>
  );
}

export default CountryList;
