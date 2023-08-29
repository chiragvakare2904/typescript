import http from 'http';
import { handleRequest } from './route/user.route';
import { connection } from './database/dbConfig';

const server = http.createServer(handleRequest);

connection();

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
