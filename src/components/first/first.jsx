import React from 'react';
import '../first/first.css';
import {TbPlayerSkipBack,TbPlayerSkipForward,TbPlayerPause} from 'react-icons/tb';
import { FaMap, FaMosque,FaCoffee,FaRestroom } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import { MdHotel,MdLocalParking,MdLocalGroceryStore,MdCarRepair} from "react-icons/md";



const First = () => {
    return (
        <div className="first-block">
            <div className="music-player">
                <img className="img-song" src="https://pic.lyricshub.ru/img/r/_/9/c/kk5zp0c9_r.jpg"  alt="song-img"/>
                <div className="song">
                    <p className="song-title">Impermanence</p>
                    <p className="song-authors">Architects,Winston McCall</p>
                </div>
                <hr className="hr-line-song"/>
                <div className="player-buttons">
                    <button className="player-btn"> <TbPlayerSkipBack/> </button>
                    <button className="player-btn"> <TbPlayerPause/> </button>
                    <button className="player-btn"> <TbPlayerSkipForward/> </button>
                </div>


            </div>
            <div className="btn-container">
                <button className="btn">
                    <FaMap className="icon"/>
                    <p className="icon-text">Stations</p>
                </button>
                <button className="btn">
                    <IoMdRestaurant className="icon"/>
                    <p className="icon-text">Restaurants</p>
                </button>
                <button className="btn">
                    <FaMosque className="icon"/>
                    <p className="icon-text">Mosque</p>
                </button>
                <button className="btn">
                    <FaCoffee className="icon"/>
                    <p className="icon-text">Coffee</p>
                </button>
                <button className="btn">
                    <MdHotel className="icon"/>
                    <p className="icon-text">Hotels</p>
                </button>
                <button className="btn">
                    <MdLocalParking className="icon"/>
                    <p className="icon-text">Parking</p>
                </button>
                <button className="btn">
                    <MdLocalGroceryStore className="icon"/>
                    <p className="icon-text">Grocery</p>
                </button>
                <button className="btn">
                    <FaRestroom className="icon"/>
                    <p className="icon-text">Rest Area</p>
                </button>
                <button className="btn">
                    <MdCarRepair className="icon"/>
                    <p className="icon-text">Repair</p>
                </button>
            </div>


        </div>
    );
};

export default First;
