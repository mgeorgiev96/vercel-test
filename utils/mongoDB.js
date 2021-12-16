import mongoose from 'mongoose'

const connection = {}

async function dbConnection(url){
    if(connection) return;

    const db = await mongoose.connect(url)

    connection.isConnected = db.connections[0].readyState

    console.log(connection.isConnected)
}


export default dbConnection