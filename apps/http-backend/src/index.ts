import express from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config";
import {middleware} from "./middleware";
import {CreateUserSchema, SignInSchema, CreateRoomSchema} from "@repo/common/types"

const app = express();


// Signup route 

app.post("/signup",(req, res)=>{

    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect Inputs"
        });
        return;
    }
    //db_call
    res.json({
        userId:"123"
    })
});

// Signin Route 

app.post("/signin", (req, res)=>{

    const data = SignInSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect Inputs"
        });
        return;
    }
    const userId = 1;
    const token = jwt.sign({userId}, JWT_SECRET, {expiresIn: "24h"});

    res.json({token});

});

// Room Route

app.post("/room", middleware, (req, res)=>{
    const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect Inputs"
        });
        return;
    }
    //db Call
    res.json({

        roomId:123
    })


});


app.listen(3001);