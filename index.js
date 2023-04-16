// root file
// for connection mongoose will help us

import mongoose from "mongoose";
import app from "./app.js"

// (method)(run the method)  ()()

// db asyn call and create and arrow function 
// inorder to have a db connection we are going to wrap it into a try and catch block

( async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/gitsetup")          // write localhost- url // gitsetup = db name(give any name)
        console.log("DB CONNECTED");

        // listening on some port
        // creating a method    
        const onListening = () => {
            console.log("Listening on PORT 5000");

        }

        // using app to listen 
        // provide port and callback reference not the method
        app.listen(5000, onListening)

    } catch (error) {
        console.error("error: ", error);
        throw err;
    }
})()