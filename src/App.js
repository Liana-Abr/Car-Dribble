import './App.css';
import First from "./components/first/first";
import React from "react"
import Second from "./components/second/second";
import Third from "./components/third/third";
import {BiSearch} from "react-icons/bi";
import {FaMicrophone,FaCarAlt,FaFan} from "react-icons/fa";
import {TbCircles} from "react-icons/tb";
import {GiCarSeat} from "react-icons/gi";
import {AiTwotoneSound} from "react-icons/ai";
import {IoMusicalNotesSharp} from "react-icons/io5";
import {BsPhone} from "react-icons/bs";
import {MdOutlineAir} from "react-icons/md";

function App() {
  return (
    <div className="App">
        <header>
            <p className="text-header">Casan <span>.</span></p>
        </header>
        <First/>
        <Second/>
        <Third/>
        <hr className="hr-line"/>
        <div className="down-panel">

            <div className="down-panel-icon"><TbCircles className="icon-down-panel"/></div>
            <div className="down-panel-icon"><GiCarSeat className="icon-down-panel"/></div>
            <div className="down-panel-icon"><FaCarAlt className="icon-down-panel"/></div>
            <div className="down-panel-icon"><MdOutlineAir className="icon-down-panel"/></div>
            <div className="down-panel-icon"><FaFan className="icon-down-panel"/></div>
            <div className="down-panel-icon"><IoMusicalNotesSharp className="icon-down-panel"/></div>
            <div className="down-panel-icon"><AiTwotoneSound className="icon-down-panel"/></div>
            <div className="down-panel-icon"><BsPhone className="icon-down-panel"/></div>
            <div className="search">
                <BiSearch className="icon-search"/>
                <input className="search-input" placeholder="Search"/>
                <FaMicrophone className="icon-search"/>
            </div>

        </div>
    </div>
  );
}

export default App;
