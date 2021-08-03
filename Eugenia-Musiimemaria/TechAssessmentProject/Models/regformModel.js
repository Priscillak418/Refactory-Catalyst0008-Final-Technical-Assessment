const mongoose = require("mongoose")

const patientSchema = mongoose.Schema(
    {
        surname: String,
        givenName: String,
        dob: String,
        residence: String,
        occupation: String,
        nationality: String,
        gender: String,
        field: String
    },
    {collection: "Patient"}
);

module.exports = mongoose.model("Patients", patientSchema);