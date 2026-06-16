import express from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config";
import {middleware} from "./middleware";
const app = express();


// Signup route 

app.post("/signup",(req, res)=>{
    //db Call
    res.json({
        userId:"123"
    })

});

// Signin Route 

app.post("/signin", (req, res)=>{

    const userId = 1;
    const token = jwt.sign({userId}, JWT_SECRET, {expiresIn: "24h"});

    res.json({token});

});

// Room Route

app.post("/room", middleware, (req, res)=>{
    //db Call
    res.json({

        roomId:123
    })


});


app.listen(3001);