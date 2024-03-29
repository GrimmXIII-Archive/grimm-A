import React, {useState, useEffect} from "react";
import { animated } from "react-spring";
import { Link } from "wouter";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { useCookies } from "react-cookie";



export default function Home() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  
  
  const [game, setGame] = useState()
  
  function Uno() {
    setGame("https://uno-online-grimm.herokuapp.com/")
  }
  
  function Tetris() {
    setGame("https://among-sussy-baka.glitch.me/")
  }
  
  function Tfe() {
    setGame("https://2048-grimm-forked.glitch.me/")
  }
  
  function Galaga() {
    setGame("https://veiled-rhetorical-rover.glitch.me/")
  }
  
  function Battle() {
    setGame("https://maddening-broad-agustinia.glitch.me/")
  }
  
  function Word() {
    setGame("https://glistening-military-carpenter.glitch.me/")
  }
  
  function badTime() {
    setGame("https://global-gabby-plough.glitch.me/")
  }
  
  function Cookie() {
    setGame("https://leeward-frequent-arithmetic.glitch.me/")
  }
  
  function Cookie2() {
    setGame("https://local-boiling-organ.glitch.me/")
  }
  
  function Checkers() {
    setGame("https://puffy-nonstop-ragdoll.glitch.me/")
  }
  
  
  function background() {
    setCookie("CookieClicker", 'CookieClicker', { path:"/" })
    window.location.replace('/')
  }
  
  return (
    <>
      <iframe 
        style={{ position:"relative", top:"28px" }}
        src={game}   
        height="710"
        width="1300">
      </iframe>
      
      
      <table className="items">
        <tr>
          <th><div className="spot1"></div></th>
          <th><div className="spot2"><br/>&nbsp;&nbsp;Games</div></th>
        </tr>
        <tr>
          <th><div className="main">
            <table style={{ padding:"10px" }}>
              <tr>
                <th><button onClick={Uno}> <img width="100px" src="https://cdn.glitch.global/5f3cd715-e8f8-44c2-a4e0-ff126136c2ff/ezgif-2-9df2361689.gif?v=1652074141480"/><br/>Uno</button></th>
                <th><button onClick={Tetris}> <img width="100px" src="https://cdn.glitch.global/5f3cd715-e8f8-44c2-a4e0-ff126136c2ff/ezgif-2-2ce6b222b1.gif?v=1652074654266"/><br/>Tetris</button></th>
                <th><button onClick={Tfe}> <img width="100px" src="https://cdn.glitch.global/5f3cd715-e8f8-44c2-a4e0-ff126136c2ff/ezgif-1-8270fa6dd9.gif?v=1652073816852"/><br/>2048</button></th>
              </tr>
              <tr>
                <th><button onClick={Galaga}> <img width="100px" src="https://cdn.glitch.global/5f3cd715-e8f8-44c2-a4e0-ff126136c2ff/ezgif-1-f1475a158e.gif?v=1652072413434"/><br/>Galaga</button></th>
                <th><button onClick={Battle}> <img width="100px" src="https://cdn.glitch.global/5f3cd715-e8f8-44c2-a4e0-ff126136c2ff/ezgif-1-4f1db292c0.gif?v=1652069905752"/><br/>Battleship</button></th>
                <th><button onClick={Word}> <img width="100px" src="https://cdn.glitch.global/5f3cd715-e8f8-44c2-a4e0-ff126136c2ff/ezgif-1-4b8317d90b.gif?v=1652071471670"/><br/>Wordle</button></th>
              </tr>              
              <tr>
                <th><button onClick={badTime}> <img width="100px" src="https://cdn.glitch.global/020e4c35-e18f-4e25-b020-427fd438bc72/ezgif-2-d856915ea3.gif?v=1661272947490"/><br/>Bad Time Sim</button></th>
                <th><button onClick={Cookie}> <img width="100px" src="https://cdn.glitch.me/020e4c35-e18f-4e25-b020-427fd438bc72/ezgif-2-f64dc54913.gif?v=1661359036141"/><br/>Cookie Clicker</button></th>
                <th><button onClick={Checkers}>Checkers</button></th>
              </tr>
              <tr>
                <th><button onClick={Cookie2}>New Cookie Clicker!</button></th>
              </tr>
            </table>
            <button onClick={background} style={{border:"10px solid black", padding:'10px', color:'black', backgroundColor:'#ff6700', borderRadius:"10px"}}>
              Run Cookie Clicker in the Background
            </button>
            </div>
          </th>
          <th><div className="corner"></div></th>
        </tr>
      </table>
      <RemoveScrollBar/>
    </>
  );
}
