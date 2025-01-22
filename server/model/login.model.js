import mongoose from 'mongoose'

const login = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})
const logins = mongoose.model('login',login)

export default logins;