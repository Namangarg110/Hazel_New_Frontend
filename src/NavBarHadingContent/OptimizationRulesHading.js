import React from "react";
import NavBar from "../Core/NavBar";
import "../CSS_Code/OptimizationRulesHadingCSS.css"
import { BsThreeDots } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";

function OptimizationRulesHading(){

    const criteria = [
        { id: 1, title: 'State', description: 'Therapist is licensed to practice in the state where the student resides' },
        { id: 2, title: 'Language', description: 'Therapist speaks the language that the student requires' },
        { id: 3, title: 'Availability', description: 'Therapist is available at the time of the appointment' },
        { id: 4, title: 'Appointment type', description: 'Therapist performs the visit type that the student requires' },
    ];


    const flexibleMatchingCriteria = [
        {
            id: 1,
            title: 'Therapist gender',
            description: 'Student prefers a certain gender of the therapist'
        },
        {
            id: 2,
            title: 'Therapist age',
            description: 'Patient prefers a certain age of the therapist'
        },
        {
            id: 3,
            title: 'Student availability',
            description: 'Student prefers a certain time of the appointment'
        }
    ];


    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="Section-Content-One">

                    <div className="StrictText-AddCriteriaBtn">
                        <h2 className="String-Matching-Criteria">Strict matching criteria</h2>
                        <button className="add-criteria-btn">Add criteria</button>
                    </div>

                    <div className="criteria-grid">
                        {criteria.map((item) => (
                        <div className="criterion-card" key={item.id}>

                            <div className="criterion-header">
                                <span className="StrictTextParentDiv">Strict criterion {item.id}</span>
                                <BsThreeDots className="ThreeDots-MenuDosts"/>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                    </div>
                    
                </div>

                {/* Second Line Second Content */}
                <div className="SecondContentFlexible">

                    <div className="FlexibleText-AddCriteriaBtn">
                        <h2 className="String-Matching-Criteria">Flexible matching criteria</h2>
                        <button className="add-criteria-btn">Add criteria</button>
                    </div>

                    <div className="criteria-grid">
                        {flexibleMatchingCriteria.map((item) => (
                        <div className="criterion-card" key={item.id}>

                            <div className="criterion-header">
                                <span className="StrictTextParentDiv">Flexible criterion {item.id}</span>
                                <BsThreeDots className="ThreeDots-MenuDosts"/>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                    </div>
                </div>


                {/* Three Line Content */}
                <div className="OptimizationRuleParentDiv">
                    
                    <div className="OptimizationRuletext-AddRulesBtn">
                        <h1 className="String-Matching-Criteria OptimizationRuless-Text">Optimization rules</h1>
                        <button className="add-criteria-btn">Add rule</button>
                    </div>


                    <div className="OneTwoThreeBoxes">

                        {/* First Box */}
                        <div className="BoxContent">
                            <div className="criterion-header">
                                <span className="Rules">Rule 1</span>
                                <BsThreeDots className="ThreeDots-MenuDosts"/>
                            </div>

                            <h3 className="Target-utlization">Target utilization rates</h3>

                            <div className="Texts-Percentage-Div">

                                <div className="Text-Percentage">
                                    <p>Intake therapist</p>
                                    <h2>61%</h2>
                                </div>

                                <div className="Text-Percentage">
                                    <p>Follow-up therapist</p>
                                    <h2>62%</h2>
                                </div>

                                <div className="Text-Percentage">
                                    <p>Hybrid therapist</p>
                                    <h2>60%</h2>
                                </div>

                            </div>
                        </div>

                        {/* Second Box */}
                        <div className="BoxContent">
                            <div className="criterion-header">
                                <span className="Rules">Rule 2</span>
                                <BsThreeDots className="ThreeDots-MenuDosts"/>
                            </div>

                            <h3 className="Target-utlization">Avarage time between time appointments</h3>

                            <div className="Texts-Percentage-Div">

                                <div className="Text-Percentage">
                                    <p>Intake therapist</p>
                                    <h2>20 min</h2>
                                </div>

                                <div className="Text-Percentage">
                                    <p>Follow-up appointment</p>
                                    <h2>10 min</h2>
                                </div>

                            </div>
                        </div>


                        {/* Third Box */}
                        <div className="BoxContent">
                            <div className="criterion-header">
                                <span className="Rules">Rule 3</span>
                                <BsThreeDots className="ThreeDots-MenuDosts"/>
                            </div>

                            <h3 className="Target-utlization">Therapists licensed in multiple states</h3>

                            <div className="Texts-Percentage-Div">

                                <div className="Bullet-Text">
                                    <TbPointFilled />
                                    <p>Rank multi-state therapists lower</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="FourFiveSixBoxes">

                        {/* Four Box */}
                        <div className="BoxsContent">
                            <div className="criterion-header">
                                <span className="Rules">Rule 4</span>
                                <BsThreeDots className="ThreeDots-MenuDosts"/>
                            </div>

                            <h3 className="Target-utlization">Uninsured students</h3>

                            <div className="Texts-Percentage-Div">

                                <div className="Bullet-Text">
                                    <TbPointFilled />
                                    <p>Assign to low-utilization therapists</p>
                                </div>
                                <span>Weight: 60%</span>

                                <div className="Bullet-Text">
                                    <TbPointFilled />
                                    <p>Assign to non-credentialed therapists</p>
                                </div>
                                <span>Weight: 40%</span>

                            </div>
                        </div>

                        {/* Five Box */}
                        <div className="BoxsContent">
                            <div className="criterion-header">
                                <span className="Rules">Rule 5</span>
                                <BsThreeDots className="ThreeDots-MenuDosts"/>
                            </div>

                            <h3 className="Target-utlization">Multilingual therapists</h3>

                            <div className="Texts-Percentage-Div">

                                <div className="Bullet-Text">
                                    <TbPointFilled />
                                    <p>Rank multilingual therapists lower</p>
                                </div>

                            </div>
                        </div>


                        {/* Six Box */}
                        <div className="BoxsContent">
                            <div className="criterion-header">
                                <span className="Rules">Rule 6</span>
                                <BsThreeDots className="ThreeDots-MenuDosts"/>
                            </div>

                            <h3 className="Target-utlization">Hybrid therapists</h3>

                            <div className="Texts-Percentage-Div">

                                <div className="Bullet-Text">
                                    <TbPointFilled />
                                    <p>Rank hybrid therapists lower</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OptimizationRulesHading;