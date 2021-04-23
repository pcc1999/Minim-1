import {connect} from "mongoose"


export async function startConnection(){

    const db = await connect('mongodb://127.0.0.1:27017/institutions',{ 
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log('Connection to Database stablished')
}