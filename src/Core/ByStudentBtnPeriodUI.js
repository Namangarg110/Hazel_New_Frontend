import React from "react";
import "../CSS_Code/ByStudentBtnPeriodUICSS.css"
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useState } from "react";
import PersonImage from "../Assests/PhotoOne.jpg"
import { useRef } from "react";
import { CiShare1 } from "react-icons/ci";
import { useEffect } from "react";
import { FaCalendarDays } from "react-icons/fa6";

function ByStudentBtnPeriodUI (){

    const [selected, setSelected] = useState('Schedule');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const popupRef = useRef(null);
    const handleToggle = (button) => {
        setSelected(button);
    };

    // Toggle pop-up visibility
    const handleIconClick = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    return (
        <div className="TwoContentBoxes-SelectByStudent">
            <div className="FirstBox">
                {/* First Box */}
                <div className="ImageText-NameAndYear">
                    <div className="ImageText"><p>EJ</p></div>
                    <div className="Ptag-PTag">
                        <p>Emily Johnson</p>
                        <p>Female-14 Year old</p>
                    </div>
                </div>

                {/* Toogle Button */}
            
                <div className="toggle-container">
                    <button
                        className={`toggle-button ${selected === 'Schedule' ? 'active' : ''}`}
                        onClick={() => handleToggle('Schedule')}
                    >
                        Schedule
                    </button>
                    <button
                        className={`toggle-button ${selected === 'Details' ? 'active' : ''}`}
                        onClick={() => handleToggle('Details')}
                    >
                        Details
                    </button>
                </div>

                {
                    selected === "Schedule" ?
                    (
                        <div className="AfterScheduleButtonClick">
                            <div>
                                <h3>8 appointments</h3>
                                <p>1 provider</p>
                            </div>

                            <div className="BestMatch-Icon">
                                <p>Best Match</p>
                                <IoIosInformationCircleOutline />
                            </div>

                            <div>
                                <div className="MiddleBox-Perpule-Box">
                                    <div className="Image-ContentText">
                                        <img src={PersonImage} className="ManPhoto" />
                                        <div className="Douglas-Therapist-Text">
                                        <h5>Douglas Adams</h5>
                                        <p className="Therapist-Text">Therapist</p>
                                        </div>
                                    </div>
                                    <div className="OneNumber">
                                        <p>1</p>
                                    </div>
                                </div>
                            </div>

                            <h4>Alternative therapist</h4>

                            <div className="WithOut-backgroundColor">
                                <div className="Image-ContentText">
                                    <img src={PersonImage} className="ManPhoto" />
                                    <div className="Douglas-Therapist-Text">
                                    <p className="text">Kevin Baker</p>
                                    <p className="Therapist-Text">Therapist</p>
                                    </div>
                                </div>
                                <div className="Two-Icons">
                                    <div onClick={handleIconClick} className="info-icon">
                                    <IoIosInformationCircleOutline className="Icons" />
                                    </div>
                                    {isPopupVisible && (
                                    <div className="popup-One" ref={popupRef}>
                                        <div className="popup-content">
                                        <div className="section">
                                            <h3 className="section-title-Matching">Matching criteria</h3> <hr/>
                                            <p><strong>Availability:</strong> <br/> Morning</p> <hr/>
                                            <p><strong>Location:</strong> <br/> Onsite</p> <hr/>
                                            <p><strong>School hours of operations:</strong> <br/> 8:30-16:30</p> <hr/>
                                            <p><strong>Languages:</strong> <br/> English</p> <hr/>
                                            <p><strong>Therapist gender:</strong> <br/> Male</p> <hr/>
                                            <p><strong>State:</strong> <br/> CA</p> <hr/>
                                        </div>
                                        <div className="section">
                                            <h3 className="section-title-Optimization">Optimization rules</h3> <hr/>
                                            <p><strong>Therapist utilization rate:</strong> <br/> 78% (Overloaded)</p> <hr/>
                                            <p><strong>Average time between visits:</strong> <br/> 22 min ↑</p> <hr/>
                                            <p><strong>Multi-state license:</strong> <br/> Yes (CA, GA, TX)</p> <hr/>
                                            <p><strong>Multilingual:</strong> <br/> Yes (English, Spanish)</p> <hr/>
                                            <p><strong>Hybrid:</strong> <br/> No (Intake)</p> <hr/>
                                        </div>
                                        </div>
                                    </div>
                                    )}
                                    <div>
                                    <CiShare1 className="Icons" />
                                    </div>
                                </div>
                            </div>

                            <div className="WithOut-backgroundColor">
                                <div className="Image-ContentText">
                                    <img src={PersonImage} className="ManPhoto" />
                                    <div className="Douglas-Therapist-Text">
                                    <p className="text">Kevin Baker</p>
                                    <p className="Therapist-Text">Therapist</p>
                                    </div>
                                </div>
                                <div className="Two-Icons">
                                    <div onClick={handleIconClick} className="info-icon">
                                    <IoIosInformationCircleOutline className="Icons" />
                                    </div>
                                    {isPopupVisible && (
                                    <div className="popup-One" ref={popupRef}>
                                        <div className="popup-content">
                                        <div className="section">
                                            <h3 className="section-title-Matching">Matching criteria</h3> <hr/>
                                            <p><strong>Availability:</strong> <br/> Morning</p> <hr/>
                                            <p><strong>Location:</strong> <br/> Onsite</p> <hr/>
                                            <p><strong>School hours of operations:</strong> <br/> 8:30-16:30</p> <hr/>
                                            <p><strong>Languages:</strong> <br/> English</p> <hr/>
                                            <p><strong>Therapist gender:</strong> <br/> Male</p> <hr/>
                                            <p><strong>State:</strong> <br/> CA</p> <hr/>
                                        </div>
                                        <div className="section">
                                            <h3 className="section-title-Optimization">Optimization rules</h3> <hr/>
                                            <p><strong>Therapist utilization rate:</strong> <br/> 78% (Overloaded)</p> <hr/>
                                            <p><strong>Average time between visits:</strong> <br/> 22 min ↑</p> <hr/>
                                            <p><strong>Multi-state license:</strong> <br/> Yes (CA, GA, TX)</p> <hr/>
                                            <p><strong>Multilingual:</strong> <br/> Yes (English, Spanish)</p> <hr/>
                                            <p><strong>Hybrid:</strong> <br/> No (Intake)</p> <hr/>
                                        </div>
                                        </div>
                                    </div>
                                    )}
                                    <div>
                                    <CiShare1 className="Icons" />
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    ) :
                    (
                        <div></div>
                    )
                }

                {
                    selected === "Details" ?
                    (
                        <div>
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
                    ) :
                    (
                        <div></div>
                    )
                }
                
            </div>


            {/* Second Box */}
            <div className="secodnBox-SelectByStudent">
                <div className="Single-PersonImage-NameTimeText">
                    <div>
                        <img
                            src={PersonImage}
                            className="PersonImage"
                        />
                    </div>

                    <div className="Name-Address-time-Text">
                        <h3>Aaron Carten</h3>
                        <p>Therapist</p>
                    </div>
                </div>


                <div>
                    <h3>October</h3>

                    <div className="Calendar-texts">
                        <div className="CalendarIcon">
                            <FaCalendarDays />
                        </div>

                        <div className="TwoPTags">
                            <p>Tue, October 22,2024</p>
                            <p>15:00-16:00</p>
                        </div>
                    </div>

                    <div className="Calendar-texts">
                        <div className="CalendarIcon">
                            <FaCalendarDays />
                        </div>

                        <div className="TwoPTags">
                            <p>Tue, October 22,2024</p>
                            <p>15:00-16:00</p>
                        </div>
                    </div>

                    <h3>November</h3>

                    <div className="Calendar-texts">
                        <div className="CalendarIcon">
                            <FaCalendarDays />
                        </div>

                        <div className="TwoPTags">
                            <p>Fri, November 22,2024</p>
                            <p>15:00-16:00</p>
                        </div>
                    </div>

                    <div className="Calendar-texts">
                        <div className="CalendarIcon">
                            <FaCalendarDays />
                        </div>

                        <div className="TwoPTags">
                            <p>Mon, November 22,2024</p>
                            <p>15:00-16:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ByStudentBtnPeriodUI