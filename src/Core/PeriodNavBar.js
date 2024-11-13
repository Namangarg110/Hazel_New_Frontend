import React from "react";
import "../CSS_Code/PeriodNavBarCSS.css"
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function PeriodNavBar(){

    const Navigator = useNavigate();

    function OneStepBackHandler(){
        Navigator(-1)
    }
    return (
        <div>
            <div className="LeftArrowIcon-ScheduleText LeftLogo-Text">

                <div className="ProviderNavBarDiv">
                    <div onClick={OneStepBackHandler} className="LeftArrowIcon">
                        <FiArrowLeft size={38} style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="PeriodDatetext-TimeText">
                        <h1>Period 11/1-11/30 2024</h1>
                        <p>2 times a week - Tue, Thu</p>
                    </div>
                </div>

                <div className="BookOneSixtyText-BookOneSixtyButton">
                    <span>Book 160 appointments for students with 8 providers</span>
                    <button className="book-OneSixty-appointment-Button">Book 160 appointments</button>
                </div>

            </div>
        </div>
    )
}

export default PeriodNavBar;