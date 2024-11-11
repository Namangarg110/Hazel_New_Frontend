import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../CSS_Code/SaintGeoegeSchoolCSS.css"
import { FaUsers } from "react-icons/fa";

function SaintGeoegeSchool(){
    const Navigator = useNavigate();

    function OneStepBackHandler(){
        Navigator(-1)
    }

    return (
        <div className="SaintGeoegeSchoolParentDiv">
            <div className="LeftArrowIcon-ScheduleText LeftLogo-Text">
                    <div onClick={OneStepBackHandler} className="LeftArrowIcon">
                        <FiArrowLeft size={38} style={{ cursor: 'pointer' }} />
                    </div>
                    <h1>Schedule Appointment</h1>
                </div>

            <div>
                <div className="Student-Tile-Parent-Div">
                    <div className="student-tile">
                        <div className="student-avatar">
                            <span className="avatar-initials FaUsersIcon">
                                <FaUsers />
                            </span>
                        </div>
                        <div className="student-info">
                            <h3>Saint George Primary School</h3>
                            <p>22 students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaintGeoegeSchool;