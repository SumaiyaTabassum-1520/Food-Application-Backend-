const mongoose = require("mongoose");
const dns = require("dns")
const colors = require("colors");

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])



const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            family: 4  // Force IPv4 - fixes mobile data DNS issues
        })
        console.log(`Connected to Database ${mongoose.connection.host}`.bgCyan)
    }catch(error){
        console.log("DB Error", error.bgRed);
    }
};

module.exports = connectDb;