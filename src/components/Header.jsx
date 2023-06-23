// import React from 'react';
import { GAME_STATE, getSeconds } from '../custom/utils';
import PropTypes from "prop-types";

const Header = ({ timeLeft, gameState, endGame }) => (
  <header className="navbar">
    {gameState === GAME_STATE.PLAYING && (
      <>
        <section className="navbar-center text-error">{getSeconds(timeLeft)} Seconds Left</section>
        <section className="navbar-center">
          <button className="btn btn-default" onClick={endGame}>
            End Game
          </button>
        </section>
      </>
    )}
  </header>
);

Header.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  gameState: PropTypes.string.isRequired,
  endGame: PropTypes.func.isRequired,
}

export default Header;
