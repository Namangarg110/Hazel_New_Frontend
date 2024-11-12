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

            <div className="TwoBoxes-ContentInScheduleAppointments">
                <div className="Student-Tile-Parent-Div">
                    <div className="SaintGeorge-tile">
                        <div className="SaintGeorge-avatar">
                            <span className="avatar-initials FaUsersIcon">
                                <FaUsers />
                            </span>
                        </div>
                        <div className="SaintGeorge-info">
                            <h3>Saint George Primary School</h3>
                            <p>22 students</p>
                        </div>
                    </div>
                </div>

                <div className="Appountment-Details-SaintGeoege">
                    <h2>Appointment details</h2>
                    <div>
                        <p>Dates</p>
                        <div className="TwoInputTag-DatePicker">
                            <div className="TwoDatesInputTag">
                                <input
                                    type="date"
                                    id="date"
                                    className="date-input"
                                />
                            </div>
                            <div>
                                <input
                                    type="date"
                                    id="date"
                                    className="date-input"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ToggleBtn-AllAppointmentBookedText">
                            <label class="switch">
                                <input type="checkbox"/>
                                <span class="slider"></span>
                            </label>
                            <p>All appointments are booked with the same therapist</p>
                        </div>

                    <div>
                        <button onClick={() => Navigator('/periodUI')} className="StartBtn-EarLiest">Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaintGeoegeSchool;