import { IncomingMessage, ServerResponse } from "http";
import User from "../model/user.model";

export async function show(req: IncomingMessage, res: ServerResponse){
    try {
        const Users = await User.find();
        res.statusCode = 200;
        res.end(JSON.stringify(Users));
      } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
      }
}

export async function create(req: IncomingMessage, res: ServerResponse){
    let body: string = '';
    
    req.on('data', (chunk) => {
      body+=chunk.toString();
    });

    req.on('end', async () => {
        try {
          await User.insertMany(JSON.parse(body));
          res.statusCode = 201;
          res.end(JSON.stringify({message:"User created successfully"}));
        } catch (error) {
          res.statusCode = 500;
          res.end(JSON.stringify({ message: 'Internal Server Error' }));
        }
    });
}

export async function remove(req: IncomingMessage, res: ServerResponse){
    try {
        const id = req.url?.slice(8);
        const Users = await User.deleteOne({id:id});
        res.statusCode = 200;
        res.end(JSON.stringify({id,message:`User of ${id} is deleted`}));
      } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
      }
}

export async function update(req: IncomingMessage, res: ServerResponse){
    let userId = Number(req.url?.slice(8));

    let body: string = '';
    
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const updatedUserData = JSON.parse(body); 
        const updatedUser = await User.findOneAndUpdate({id:userId}, updatedUserData);
        
        if (updatedUser) {
          res.statusCode = 200;
          res.end(JSON.stringify({message : "User updated successfully"}));
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ message: 'User not found' }));
        }
      } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
      }
    });
}