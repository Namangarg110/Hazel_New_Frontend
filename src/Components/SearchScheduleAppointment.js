import React, { useState } from "react";
import NavBar from '../Core/NavBar';
import { FaPlusCircle, FaSearch } from 'react-icons/fa';
import "../CSS_Code/SearchScheduleAppointmentCSS.css";
import { useNavigate } from "react-router-dom";

function SearchScheduleAppointment() {
    const Navigator = useNavigate()
    const [searchText, setSearchText] = useState("");

    // Sample student data
    const student = {
        name: "Emily Johnson",
        gender: "Female",
        age: "14 years old"
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
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                {/* Conditionally render student tile if search text is not empty */}
                {searchText !== "" ? (
                    <div className="Student-Tile-Parent-Div">
                        <div onClick={() => Navigator("/scheduleAppointmentUI")} className="student-tile">
                            <div className="student-avatar">
                                <span className="avatar-initials">{student.name.split(" ").map(n => n[0]).join("")}</span>
                            </div>
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.gender} · {student.age}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="placeholder-container">
                        <div className="placeholder-icon">
                            <FaSearch size={50} color="#b0b3b8" />
                        </div>
                        <h2 className="placeholder-heading">Search for student or school</h2>
                        <p className="placeholder-subtext">
                            Or add new student to schedule appointments
                        </p>
                        <a href="" className="add-student-link">Add new student</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchScheduleAppointment;
