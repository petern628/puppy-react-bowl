import React from 'react'
import fakePlayers from './components/fake';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <a>Player Name: {fakePlayers[0].name}</a>
        <a>{ }</a>
        <a>{ }</a>
      </ul>
    </nav>
  );
};

export default Navbar
