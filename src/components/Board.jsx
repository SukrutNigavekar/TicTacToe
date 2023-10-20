import React, {useState} from 'react';
import Square from './Square';

export default function Board() {
    const[state,setState ] = useState(Array(9).fill(null));
    const[Xturn,setXturn] = useState(true);

    const checkWinner = ()=>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let logic of winnerLogic){
            const   [a,b,c] = logic;
            if(state[a] !== null && state[a]===state[b] && state[b]===state[c]){
                return state[a];
            }
        }
        return false;
    };

    const isWinner = checkWinner();

    function HandleClick(index){
        if(state[index]!== null){
            return;
        }
        const copyState =[...state];
        copyState[index] = Xturn ? 'X' : 'O';
        setState(copyState);
        setXturn(!Xturn);
    }
    const handleReset = ()=>{
        setState(Array(9).fill(null));
    }

  return (
    <div className='board-container'>
        <h1 style={{textAlign:"center"}}>Tic Tac Toe Game</h1>
    {isWinner ? (
        <>{isWinner} won the game <button onClick={handleReset}>Play again</button></>
    ):(
        <>
        <h4 className='heading'>{Xturn ? "X" : "O"} turn to play</h4>
        <div className='board-row'>
        <Square onClick={()=>{
            HandleClick(0)
        }} value={state[0]} />
        <Square
        onClick={()=>{
            HandleClick(1)
        }}
        value={state[1]} />
        <Square
            onClick={()=>{
                HandleClick(2)
            }}
        value={state[2]} />
      </div>
      <div className='board-row'>
      <Square 
        onClick={()=>{
            HandleClick(3)
        }}
      value={state[3]} />
      <Square onClick={()=>{
            HandleClick(4)
        }} value={state[4]} />
      <Square onClick={()=>{
            HandleClick(5)
        }} value={state[5]} />
      </div>
      <div className='board-row'>
      <Square onClick={()=>{
            HandleClick(6)
        }} value={state[6]} />
      <Square onClick={()=>{
            HandleClick(7)
        }} value={state[7]} />
      <Square onClick={()=>{
            HandleClick(8)
        }} value={state[8]} />
      </div>
        </>
    )} 
    </div>
  )
}
