
const User = require('../../../models/model')
const mongoose = require("mongoose")

export default async function getData (req,res){
    await mongoose.connect(process.env.MONGO_DB)
    await User.findOne({username:"martin"}).then(async user=>{
        if(user){
            res.send("already created")
        }else{
            await new User({
                username: "markos",
                password: "123"
            }).save()
        }
    }).catch(err=>console.log(err))
    res.end()
}