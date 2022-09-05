import React from 'react';
import '../third/third.css';
import { SiSpeedtest } from "react-icons/si";
import {AiFillThunderbolt} from "react-icons/ai";
import {BsLightbulbFill} from "react-icons/bs";

const Third = () => {
    return (
        <div className="third-block">
            <div className="block-text">
                <p className="name" >Tesla Model S</p>
                <p className="prnds">P R N <span className="third-block-span">D</span> S</p>

            </div>
            <hr className="hr-line"/>
            <div className="main">
                <p className="drive">Drive</p>
                <p className="sub-drive">All locked on Drive</p>
                <button className="open-btn">Open</button>
                <img src="https://www.pngall.com/wp-content/uploads/11/Tesla-PNG-HD-Image.png" className="tesla-img" />
                <div className="panel">
                    <SiSpeedtest className="icon-panel"/>
                    <AiFillThunderbolt className="icon-panel"/>
                    <BsLightbulbFill className="icon-panel"/>

                </div>

            </div>



        </div>
    );
};

export default Third;
