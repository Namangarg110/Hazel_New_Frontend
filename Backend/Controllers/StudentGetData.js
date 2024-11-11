const StudentModel = require("../Model/StudentModel");

exports.studentDataGet = async (req, res) => {
    try {
        const studentData = await StudentModel.find({accountType: 'Student'}).select('Student_ID Student_Name accountType Student_Email Grade School_Name Time_Zone Preferred_Language Appointment_Needs Parent_School_District Behavioral_Condition_to_be_Treated Student_Schedule Appointment_Duration Calendar_ID State');

        return res.status(200).json(
            {
                success:true,
                message:"All Student Details Fetched",
                data:studentData
            }
        )

    } catch (error) {
        console.error("Error fetching student data:", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message // Optional: to give more detail about the error
        });
    }
};