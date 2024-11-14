import React from "react";
import PeriodNavBar from "../Core/PeriodNavBar";
import { FaUsers } from "react-icons/fa";
import "../CSS_Code/PeriodUICSS.css"
import { useState } from "react";
import { LuDot } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { useEffect } from "react";
import axios from "axios";
import AllSideToggleBtnPeriodUI from "../Core/AllSideToggleBtnPeriodUI"
import ByStudentBtnPeriodUI from "../Core/ByStudentBtnPeriodUI"

function PeriodUI (){

    const [selected, setSelected] = useState('All');
    const [FetchData, SetFetchedData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const hazelStudentLogInToken = localStorage.getItem("hazelStudentLogInToken");
            try {
                const response = await axios.get(
                    `http://localhost:4000/api/v1/studGetData/studentDataGet`,
                    {
                        headers: {
                            Authorization: hazelStudentLogInToken,
                        },
                    }
                );

                const data = response.data.data;
                SetFetchedData(data);
            } catch (error) {
                console.log(error.response);
            }
        };
        getData();
    }, []);

    const handleToggle = (button) => {
        setSelected(button);
    };

    return (
        <div className="ContainerData-ProviderUI">
            <PeriodNavBar/>

            <div className="ThreeBoxesLineByLine-xAxis">
                <div className="SaintGeorge-ToggleBox">

                    <div className="IconAvatar-Text">
                        <div className="Avtar-FaUsericon">
                            <span className="avatar-initials FaUsersIcon">
                                <FaUsers />
                            </span>
                        </div>
                        <div className="SaintGeorge-Text-h3-pTag">
                            <h3>Saint George Primary School</h3>
                            <p>22 students</p>
                        </div>
                    </div>

                    <div className="toggle-container">
                        <button
                            className={`toggle-button ${selected === 'All' ? 'active' : ''}`}
                            onClick={() => handleToggle('All')}
                        >
                            All
                        </button>
                        <button
                            className={`toggle-button ${selected === 'by Student' ? 'active' : ''}`}
                            onClick={() => handleToggle('by Student')}
                        >
                            by Student
                        </button>
                        <button
                            className={`toggle-button ${selected === 'By Provider' ? 'active' : ''}`}
                            onClick={() => handleToggle('By Provider')}
                        >
                            By Provider
                        </button>
                    </div>

                    {/* Select All Toggle Button */}
                    {
                        selected === "All" ? 
                        (
                            <div>
                                <h2>160 appointments</h2>
                                <p>22 students<LuDot />8 providers</p>
                            </div> 
                        ) : 
                        (
                            <div></div>
                        )
                    }


                    {/* Select by-Student Toggle Button */}
                    {
                        selected === "by Student" ?
                        (
                            <div>
                                <div className="search-container">
                                    <span className="search-icon"><IoSearch /></span>
                                    <input type="text" placeholder="Search..." className="search-input-text" />
                                </div>

                                {FetchData.map((student, index) => (
                                    <div key={index} className="Students-Tile-Parent-Div">
                                        <div className="students-tile">
                                            <div className="student-avatar">
                                                <span className="avatar-initials">
                                                    {student.Student_Name.split(" ").map(n => n[0]).join("")}
                                                </span>
                                            </div>
                                            <div className="student-info">
                                                <h3>{student.Student_Name}</h3>
                                                <p>{student.accountType} · {student.Student_Email}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        ) :
                        (
                            <div></div>
                        )
                    }
                        
                </div>

                {/* Second Box */}
                <div>
                    {
                        selected === "All" ?
                        (
                            <div>
                                <AllSideToggleBtnPeriodUI/>
                            </div>
                        ) :
                        (
                            <div></div>
                        )
                    }
                </div>

                {/* Third Box */}
                <div>
                    {
                        selected === "by Student" ?
                        (
                            <div><ByStudentBtnPeriodUI/></div>
                        ) :
                        (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default PeriodUI