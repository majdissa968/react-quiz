import React from 'react';const Score = (props) => (    <div>      <p>Your Score</p>      <p>{props.nominator}/ {props.denominator}</p>    </div>)export default Score;