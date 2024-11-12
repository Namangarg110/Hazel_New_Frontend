import React from "react";
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
                    <div onClick={OneStepBackHandler} className="LeftArrowIcon">
                        <FiArrowLeft size={38} style={{ cursor: 'pointer' }} />
                    </div>
                    <h1>Period 11/1</h1>
                </div>
        </div>
    )
}

export default PeriodNavBar;