const mongoose = require('mongoose')

//Connect to mongodb database
const connectDB = async()=>{
    try{
        const conn =await mongoose.connect("mongodb+srv://deenadhayalanm1969:deenamohan%4026@deenadb.indjmxz.mongodb.net/?retryWrites=true&w=majority&appName=DeenaDB",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected ${conn.connection.host} `)
    }catch(err){
        console.log(`Error occured:${err.message}`)
    } 
}

module.exports = connectDB