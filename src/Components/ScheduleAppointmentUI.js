import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import "../CSS_Code/ScheduleAppointmentUICSS.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function ScheduleAppointmentUI(){

    const [selectedOptions, setSelectedOptions] = useState({
        Intake: false,
        FollowUp: false,
    });

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [option]: !prevOptions[option],
        }));
    };

    const Navigator = useNavigate();

    function OneStepBackHandler(){
        Navigator(-1)
    }

    const [selected, setSelected] = useState('earliest'); // default selection

    const handleClick = (button) => {
        setSelected(button);
    };

    return (
        <div className="ScheduleAppointmentTopParentDiv">
            <div>
                <div className="LeftArrowIcon-ScheduleText LeftLogo-Text">
                    <div onClick={OneStepBackHandler} className="LeftArrowIcon">
                        <FiArrowLeft size={38} style={{ cursor: 'pointer' }} />
                    </div>
                    <h1>Schedule Appointment</h1>
                </div>

                <div className="ThreeContentBoxesParentDiv">

                    {/* 1st Box Left Side */}
                    <div className="LeftSide-ContentBox">

                        <div className="UserDetail-Image-Text">
                            <div className="Image-Name-Gender-Years">
                                <div class="avatar">
                                    <span>EJ</span>
                                </div>
                                <div className="Name-Gender-year">
                                    <h4>Emily Johnson</h4>
                                    <p>Female - 14 years old</p>
                                </div>
                            </div>
                            <div>
                                <button className="ChangeBtn">Change</button>
                            </div>
                        </div>

                       <div className="SingleLine"></div>

                       <div>
                            <div className="LightColor-DarkColor-Content">
                                <p className="LightColor">Availability</p>
                                <p className="DarkColorBlack">Afternoon</p>
                                <div className="SingleLineTwo"></div>
                            </div>

                            <div className="LightColor-DarkColor-Content">
                                <p className="LightColor">Location</p>
                                <p className="DarkColorBlack">Onsite</p>
                                <div className="SingleLineTwo"></div>
                            </div>

                            <div className="LightColor-DarkColor-Content">
                                <p className="LightColor">School</p>
                                <p className="DarkColorBlack">St. George Primy School</p>
                                <div className="SingleLineTwo"></div>
                            </div>

                            <div className="LightColor-DarkColor-Content">
                                <p className="LightColor">School hours of operations</p>
                                <p className="DarkColorBlack">8:30-16:30</p>
                                <div className="SingleLineTwo"></div>
                            </div>

                            <div className="LightColor-DarkColor-Content">
                                <p className="LightColor">State</p>
                                <p className="DarkColorBlack">CA</p>
                                <div className="SingleLineTwo"></div>
                            </div>

                            <div><h2>Preferences</h2></div>
                            <div className="SingleLineTwo"></div>

                            <div className="LightColor-DarkColor-Content">
                                <p className="LightColor">Languages</p>
                                <p className="DarkColorBlack">English</p>
                                <div className="SingleLineTwo"></div>
                            </div>

                            <div className="LightColor-DarkColor-Content">
                                <p className="LightColor">Therapist Gender</p>
                                <p className="DarkColorBlack">Male</p>
                                <div className="SingleLineTwo"></div>
                            </div>

                            <div><h2>Insurance</h2></div>
                            <div className="SingleLineTwo"></div>

                            <div className="LightColor-DarkColor-Content">
                                <p className="LightColor">Insurance company</p>
                                <p className="DarkColorBlack">Insure name</p>
                                <div className="SingleLineTwo"></div>
                            </div>

                            <div className="LightColor-DarkColor-Content">
                                <p className="LightColor">Insurance number</p>
                                <p className="DarkColorBlack">12345678910</p>
                                <div className="SingleLineTwo"></div>
                            </div>
                       </div>

                    </div>


                    {/* 2nd Box Middle */}
                    <div className="SecondBoxMiddleBox">
                        <h2>Appointment details</h2>
                        <p>Appointment type</p>

                        <div className="checkbox-group">
                            <label className="checkbox-option">
                            <input
                                type="checkbox"
                                checked={selectedOptions.Intake}
                                onChange={() => handleCheckboxChange('Intake')}
                            />
                            <span className="custom-checkbox purple"></span>
                            Intake
                            </label>
                            <label className="checkbox-option">
                            <input
                                type="checkbox"
                                checked={selectedOptions.FollowUp}
                                onChange={() => handleCheckboxChange('FollowUp')}
                            />
                            <span className="custom-checkbox teal"></span>
                            Follow-up consultation
                            </label>
                        </div>

                        <div className="toggle-container">
                            <button
                                className={`toggle-btn ${selected === 'earliest' ? 'active' : ''}`}
                                onClick={() => handleClick('earliest')}
                            >
                                Earliest available
                            </button>
                            <button
                                className={`toggle-btn PeriodBtn ${selected === 'period' ? 'active' : ''}`}
                                onClick={() => handleClick('period')}
                            >
                                Period
                            </button>
                        </div>

                        {
                            selected === "earliest" ?
                            (
                                <div>
                                    <button onClick={() => Navigator('/earliestAvailable')} className="StartBtn-EarLiest">Start</button>
                                </div>
                            ) :
                            (
                                <div></div>
                            )
                        }

                        {
                            selected === "period" ?
                            (
                                <div>
                                    <div className="TwoInputTag-DatePicker">
                                        <div>
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
                                    <p>Number of appointment</p>
                                    <select
                                        id="custom-select"
                                        className="custom-select"
                                    >
                                        <option value="" disabled>Select an option</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </select>
                                    <p>Rucurring</p>

                                    <div>
                                        <div className="RadioInputTag">
                                            <input
                                                type="radio"
                                                className="RadioBtns"
                                                id="radioNo"
                                                name="frequency"
                                                
                                            />
                                            <label className="LabelText-RadioBtn" htmlFor="radioNo">No</label>
                                        </div>

                                        <div className="RadioInputTag">
                                            <input
                                                type="radio"
                                                className="RadioBtns"
                                                id="radioEveryWeek"
                                                name="frequency"
                                            />
                                            <label className="LabelText-RadioBtn" htmlFor="radioEveryWeek">Every Week</label>
                                        </div>

                                        <div className="RadioInputTag">
                                            <input
                                                type="radio"
                                                className="RadioBtns"
                                                id="radioEveryTwoWeeks"
                                                name="frequency"
                                            />
                                            <label className="LabelText-RadioBtn" htmlFor="radioEveryTwoWeeks">Every Two Weeks</label>
                                        </div>

                                        <div className="RadioInputTag">
                                            <input
                                                type="radio"
                                                className="RadioBtns"
                                                id="radioEveryMonth"
                                                name="frequency"
                                            />
                                            <label className="LabelText-RadioBtn" htmlFor="radioEveryMonth">Every Month</label>
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
                                        <button onClick={() => Navigator('/earliestAvailable')} className="StartBtn-EarLiest">Start</button>
                                    </div>
                                    
                                </div>
                            ) :
                            (
                                <div></div>
                            )
                        }
                    </div>


                    {/* 3rd Box Right Side */}
                    <div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default ScheduleAppointmentUI;