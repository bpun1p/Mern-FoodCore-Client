import React, { useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [isPopUp, setPopUp] = useState(false);

  const togglePopUp = () => {
    setPopUp(!isPopUp);
  };

  return (
    <div className="header">
      <svg className="header__logo" data-testid="header-logo" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 95 118.75">
        <path className="fork" d="M82.538,19.052c-0.724-0.418-1.649-0.17-2.067,0.555l-9.174,15.889c-0.469,0.813-1.508,1.09-2.318,0.623   c-0.813-0.471-1.092-1.51-0.623-2.32l9.174-15.889c0.461-0.799,0.188-1.82-0.611-2.281c-0.799-0.463-1.821-0.189-2.282,0.609   l-9.174,15.891c-0.468,0.811-1.507,1.09-2.318,0.621c-0.813-0.469-1.09-1.508-0.622-2.32l9.174-15.889   c0.461-0.799,0.188-1.82-0.611-2.281s-1.821-0.188-2.282,0.611l-9.174,15.889c-0.468,0.811-1.505,1.092-2.319,0.621   c-0.812-0.469-1.09-1.508-0.622-2.318l9.174-15.891c0.418-0.723,0.17-1.648-0.554-2.066c-0.723-0.418-1.648-0.17-2.066,0.555   L51.605,29.81c-2.657,4.604-1.749,10.273,1.852,13.85L29.828,79.735c-0.927,1.605,1.655,4.832,2.962,5.588   c1.307,0.754,5.392,1.377,6.319-0.229l19.428-38.502c4.898,1.33,10.263-0.719,12.92-5.32L83.092,21.12   C83.51,20.396,83.263,19.472,82.538,19.052z" />
        <path className="knife" d="M38.109,63.44l4.128-6.302l-1.113-1.929L30.695,37.147L15.609,11.017c-13.116,7.574,11.02,52.563,11.02,52.563l8.671-5.006   L38.109,63.44z" />
        <path className="knife-handle" d="M49.29,69.354l-3.622,7.178l4.553,7.886c0.93,1.607,2.985,2.16,4.594,1.232c1.609-0.93,2.16-2.986,1.23-4.596L49.29,69.354   z" />
        <text x="" y="110" fill="#fff" fontSize="20px" fontWeight="bold" fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">FoodCore</text>
      </svg>
      {!isPopUp
        ? (
          <button type="button" data-testid="nav-btn" className="header__nav-btn" onClick={togglePopUp}>
            <svg id="nav-cover-icon" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125">
              <path className="top" d="M71.9 30H28.1a3.5 3.5 0 000 7h43.8a3.5 3.5 0 000-7z" />
              <path className="middle" d="M71.9 46.5H28.1a3.5 3.5 0 100 7h43.8a3.5 3.5 0 000-7z" />
              <path className="bottom" d="M75.4 66.5a3.5 3.5 0 00-3.5-3.5H28.1a3.5 3.5 0 100 7h43.8a3.5 3.5 0 003.5-3.5z" />
            </svg>
          </button>
        )
        : <Navigation data-testid="navigation" togglePopUp={togglePopUp} />}
    </div>
  );
}
