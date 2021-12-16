
const User = require('../../../models/model')
const mongoose = require("mongoose")
export default async function getData (req,res){
    console.log(mongoose.connection)
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