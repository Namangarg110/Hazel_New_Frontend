const mongoose  = require("mongoose")

const studentsModel = new mongoose.Schema(
    {
        Student_ID: {
            type: Number
        },

        Student_Name: {
            type: String
        },

        accountType: {
            type: String
        },

        Grade: {
            type: Number
        },

        State: {
            type: String
        },

        School_Name: {
            type: String
        },

        Time_Zone: {
            type: String
        },

        Preferred_Language: {
            type: [String]
        },

        Appointment_Needs: {
            type: [String]
        },

        Parent_School_District: {
            type: String
        },

        Student_Email: {
            type: String
        },

        Behavioral_Condition_to_be_Treated: {
            type: String
        },

        Student_Schedule: {
            type: Object
        },

        Appointment_Duration: {
            type: Number
        },

        Calendar_ID: {
            type: String
        },

        password: {
            type: String
        }
    }
)

module.exports = mongoose.model("studentsModel", studentsModel);