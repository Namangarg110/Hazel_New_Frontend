import { FiArrowLeft } from "react-icons/fi";
import "../CSS_Code/EarliestAvailableCSS.css";
import { useNavigate } from "react-router-dom";
import photoOne from "../Assests/PhotoOne.jpg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import React, { useState, useRef, useEffect } from "react";

function EarliestAvailable() {
  const Navigator = useNavigate();

  function OneStepBackHandler() {
    Navigator(-1);
  }

  // PopUp Side Code
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);

  // Toggle pop-up visibility
  const handleIconClick = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // Hide pop-up when clicking outside
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
    <div>
      <div className="EarliestAppointmentTopParentDiv">
        <div className="LeftArrowIcon-ScheduleTexts">
          <div className="Icon-TwoText-UpAndDown">
            <div onClick={OneStepBackHandler} className="LeftArrowIcon">
              <FiArrowLeft size={38} style={{ cursor: "pointer" }} />
            </div>
            <div className="Earliest-IntakeAppointment-Text">
              <h1>Earliest Available</h1>
              <p>Intake appointment</p>
            </div>
          </div>
          <div>
            <button className="book-appointment-Button">
              Book appointment
            </button>
          </div>
        </div>

        <div className="ThreeBTnContentBoxes">
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

              <div>
                <h2>Preferences</h2>
              </div>
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

              <div>
                <h2>Insurance</h2>
              </div>
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

          {/* 2nd Content Box */}

          <div className="MiddleBox-Earliest-Avaiblity">
            <div className="Text-toText">
              <h2>1 appointment</h2>
              <p>1 therapist</p>
            </div>

            <div className="BestMatch-Icon">
              <p>Best Match</p>
              <IoIosInformationCircleOutline />
            </div>

            <div className="MiddleBox-Perpule-Box">
              <div className="Image-ContentText">
                <img src={photoOne} className="ManPhoto" />
                <div className="Douglas-Therapist-Text">
                  <h5>Douglas Adams</h5>
                  <p className="Therapist-Text">Therapist</p>
                </div>
              </div>
              <div className="OneNumber">
                <p>1</p>
              </div>
            </div>
            <h4>Alternative therapist</h4>

            <div className="WithOut-backgroundColor">
              <div className="Image-ContentText">
                <img src={photoOne} className="ManPhoto" />
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
                <img src={photoOne} className="ManPhoto" />
                <div className="Douglas-Therapist-Text">
                  <p className="text">Isabella Davis</p>
                  <p className="Therapist-Text">Therapist</p>
                </div>
              </div>
              <div className="Two-Icons">
                <div onClick={handleIconClick} className="info-icon">
                  <IoIosInformationCircleOutline className="Icons" />
                </div>
                {isPopupVisible && (
                  <div className="popup-Two" ref={popupRef}>
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
                        <p><strong>Hybrid:</strong> <br/> Yes (Intake)</p> <hr/>
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

          {/* 3rd Content Box */}

          <div className="ThirdBoxRightSide">
            <div className="SelectAppointment-InputTag">
              <h1 className="SelectAppointmentText">Select appointment</h1>
              <input type="date" id="date" className="date-input" />
            </div>

            <div className="WithOut-backgroundColor WithOutBackground-RightSideBox">
              <div className="Image-ContentText">
                <img src={photoOne} className="ManPhoto" />
                <div className="Douglas-Therapist-Text">
                  <p className="text text-RightSideBox">Douglas Adams</p>
                  <p className="Therapist-Text">Therapist</p>
                </div>
              </div>
            </div>

            <div className="time-display-container">
              <div className="Wednesday-October-Date">
                <h2>Wed, October 9, 2024</h2>
              </div>

              <div className="time-display">
                <div className="time-option selected">
                  <div className="time-icon">
                    <FaCalendarAlt aria-label="calendar" />
                  </div>
                  <div className="time-text">2:45 pm</div>
                  <input
                    type="radio"
                    className="radio-button"
                    name="radiobtn"
                  />
                  {/* <div className="radio-button selected"></div> */}
                </div>

                <div className="date-header">Thu, October 11, 2024</div>

                <div className="time-option">
                  <div className="time-icon">
                    <FaCalendarAlt aria-label="calendar" />
                  </div>
                  <div className="time-text">1:15 pm</div>
                  <input
                    type="radio"
                    className="radio-button"
                    name="radiobtn"
                  />
                  {/* <div className="radio-button"></div> */}
                </div>

                <div className="time-option">
                  <div className="time-icon">
                    <FaCalendarAlt aria-label="calendar" />
                  </div>
                  <div className="time-text">4:00 pm</div>
                  <input
                    type="radio"
                    className="radio-button"
                    name="radiobtn"
                  />
                  {/* <div className="radio-button"></div> */}
                </div>
              </div>
            </div>
            <button className="preview-button">
                <p>Preview in Calendar</p>
                <span className="icon">&#x1F5D8;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarliestAvailable;