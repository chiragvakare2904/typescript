import { IncomingMessage, ServerResponse } from 'http';
import { create, remove, show, update } from '../controller/user.controller';

export async function handleRequest(req: IncomingMessage, res: ServerResponse) {

  if (req.url === '/show' && req.method === 'GET') {
     show(req,res);
  } 
  
  else if (req.url === '/create' && req.method === 'POST') {
     create(req,res);
  }

  else if (req.url?.startsWith('/delete/') && req.method === 'DELETE') {
     remove(req,res);
  }

  else if (req.url?.startsWith('/update/') && req.method === 'PUT') {
     update(req,res);    
  } 
}
