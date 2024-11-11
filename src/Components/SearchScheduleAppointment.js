import React, { useState, useEffect } from "react";
import NavBar from '../Core/NavBar';
import { FaPlusCircle, FaSearch, FaTimes } from 'react-icons/fa';
import "../CSS_Code/SearchScheduleAppointmentCSS.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchScheduleAppointment() {
    const Navigator = useNavigate();
    const [searchText, setSearchText] = useState("");
    const [showTiles, setShowTiles] = useState(false);  // State to control tile visibility
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

    const handleInputClick = () => {
        setShowTiles(true);  // Show tiles when input is clicked
    };

    const handleClearSearch = () => {
        setSearchText("");
        setShowTiles(false);  // Hide tiles when cross icon is clicked
    };

    return (
        <div>
            <NavBar />
            <div>
                <div className="ScheduleText-MultipleText">
                    <h1>Schedule Appointment</h1>
                    <div className="PlusIcon-MultipleText">
                        <FaPlusCircle color="#6554e3" />
                        <h4 className="Multiple-Search-Text">Multiple Select</h4>
                    </div>
                </div>

                <div className="search-container">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search school or student by name..."
                        className="search-input"
                        value={searchText}
                        onClick={handleInputClick}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText && (
                        <FaTimes className="clear-icon" onClick={handleClearSearch} />
                    )}
                </div>

                {/* Conditionally render student tiles if showTiles is true */}
                {showTiles && searchText !== "" ? (
                    <div>
                        {
                            FetchData.map((student, index) => (
                                <div key={index} className="Student-Tile-Parent-Div">
                                    <div onClick={() => Navigator("/scheduleAppointmentUI")} className="student-tile">
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
                            ))
                        }
                    </div>
                ) : (
                    <div className="placeholder-container">
                        <div className="placeholder-icon">
                            <FaSearch size={50} color="#b0b3b8" />
                        </div>
                        <h2 className="placeholder-heading">Search for student or school</h2>
                        <p className="placeholder-subtext">
                            Or add a new student to schedule appointments
                        </p>
                        <a className="add-student-link" onClick={() => Navigator('/addNewStudents')}>Add new student</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchScheduleAppointment;
