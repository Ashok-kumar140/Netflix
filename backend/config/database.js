const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = () => {

    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("DB Connection successful")
    }).catch((error) => {
        console.log("Error in DB connection, ", error);
    })

}

module.exports = dbConnect;