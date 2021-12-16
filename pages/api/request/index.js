
const User = require('../../../models/model')
import dbConnection from '../../../utils/mongoDB'
dbConnection(process.env.MONGO_DB)
export default async function getData (req,res){
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