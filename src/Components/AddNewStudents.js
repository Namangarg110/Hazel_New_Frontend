import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS_Code/AddNewStudentsCSS.css"
import { FiArrowLeft } from "react-icons/fi";

function AddNewStudents(){

    const Navigator = useNavigate();

    function OneStepBackHandler(){
        Navigator(-1)
    }

    const [selectedOptions, setSelectedOptions] = useState({
        Intake: true,
        FollowUp: false,
    });

    const handleCheckboxChange = (option) => {
        setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [option]: !prevOptions[option],
        }));
    };

    const [selected, setSelected] = useState('earliest'); // default selection

    const handleClick = (button) => {
        setSelected(button);
    };
    
    return (
        <div className="AddNewStudent-ParentDiv">
            <div>
                <div className="LeftArrowAndNewStudentText">
                    <div onClick={OneStepBackHandler} className="LeftArrowIcon">
                        <FiArrowLeft size={38} style={{ cursor: 'pointer' }} />
                    </div>
                    <h1>New Students</h1>
                </div>


                <div className="ThreeSideBySideBoxContent">

                    {/* LeftSideContent Box */}
                    <div className="LeftSideContentParentDiv">
                        <h2>Personal information</h2>
                        <div>
                            <div className="SingleDiv-LabelWithInputTag">
                                <label className="LabelText" htmlFor="first">First Name</label>
                                <input
                                    type="text"
                                    className="InputTag-TypeText"
                                />
                            </div>

                            <div className="SingleDiv-LabelWithInputTag">
                                <label className="LabelText" htmlFor="last">Last Name</label>
                                <input
                                    type="text"
                                    className="InputTag-TypeText"
                                />
                            </div>

                            <div className="SingleDiv-LabelWithInputTag">
                                <label className="LabelText" htmlFor="first">Gender</label>
                                <select className="InputTag-TypeText">
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="SingleDiv-LabelWithInputTag">
                                <label className="LabelText" htmlFor="first">Date of Birth</label>
                                <input
                                    type="date"
                                    className="InputTag-TypeText"
                                />
                            </div>

                            <div className="SingleDiv-LabelWithInputTag">
                                <label className="LabelText" htmlFor="first">State</label>
                                <select className="InputTag-TypeText">
                                    <option value="">Select</option>
                                    <option value="male">Haryana</option>
                                    <option value="female">Kerala</option>
                                    <option value="other">Goa</option>
                                </select>
                            </div>

                            <div className="SingleDiv-LabelWithInputTag">
                                <label className="LabelText" htmlFor="first">Gender</label>
                                <select className="InputTag-TypeText">
                                    <option value="">Select</option>
                                    <option value="male">School-1</option>
                                    <option value="female">School-2</option>
                                    <option value="other">School-3</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* SecondBox Middle Box */}
                    <div className="MiddleSideContentParentDiv">
                        <h2>Preference</h2>

                        <div className="checkbox-group">
                            <label className="checkbox-label">Availability</label>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="morning"
                                    name="morning"
                                />
                                <label htmlFor="morning">Morning</label>
                            </div>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="noon"
                                    name="noon"
                                />
                                <label htmlFor="noon">Noon</label>
                            </div>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="afternoon"
                                    name="afternoon"
                                />
                                <label htmlFor="afternoon">Afternoon</label>
                            </div>
                        </div>

                        <div className="checkbox-group">
                            <label className="checkbox-label">Location</label>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="morning"
                                    name="morning"
                                />
                                <label htmlFor="morning">Onsite</label>
                            </div>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="noon"
                                    name="noon"
                                />
                                <label htmlFor="noon">Onine</label>
                            </div>

                        </div>

                        <div className="checkbox-group">
                            <label className="checkbox-label">Languages</label>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="morning"
                                    name="morning"
                                />
                                <label htmlFor="morning">English</label>
                            </div>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="noon"
                                    name="noon"
                                />
                                <label htmlFor="noon">Spnish</label>
                            </div>

                        </div>

                        <div className="checkbox-group">
                            <label className="checkbox-label">Therapist gender</label>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="morning"
                                    name="morning"
                                />
                                <label htmlFor="morning">Female</label>
                            </div>
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id="noon"
                                    name="noon"
                                />
                                <label htmlFor="noon">Male</label>
                            </div>
                        </div>

                        <div className="checkbox-group">
                            <label className="checkbox-label">Insurance company</label>
                            <select className="InputTag-TypeText">
                                <option value="">Select</option>
                                <option value="male">Company-1</option>
                                <option value="female">Company-2</option>
                                <option value="other">Company-3</option>
                            </select>
                        </div>

                        <div className="checkbox-group">
                            <label className="checkbox-label">Insurance company</label>
                            <input
                                type="text"
                                className="InputTag-TypeText"
                            />
                        </div>

                    </div>

                    {/* Third Content Box */}
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

                </div>
            </div>
        </div>
    )
}

export default AddNewStudents;