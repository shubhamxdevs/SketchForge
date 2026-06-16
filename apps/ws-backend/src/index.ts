import {WebSocketServer} from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config";    

const wss = new WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws, request) {
    const url = request.url;
    if(!url){
        return;
    }
    const queryParams = new URLSearchParams(url.split('?')[1]);
    const token = queryParams.get('token') || "";
    const decoded = jwt.verify(token, JWT_SECRET);
   
    if(typeof decoded == "string"){
        ws.close();
        return;

    }
   // If control reaches till here means decoded can't be a string and it must be JWTPayload
   
    if(!decoded || !decoded.userId){
        ws.close();
        return;
    }

    ws.on('message', function message(data) {
        ws.send('pong');
    });
})