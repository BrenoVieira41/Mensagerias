import { config } from 'dotenv';
import express from 'express';
import ConsumerApp from './rabbitmq-consumer';
import http from 'http';

config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

const consumer = async () => {
  const server = new ConsumerApp();
  await server.start();
  await server.consume('queue', (message) => console.log(message.content.toString()));
}

consumer();

app.set('port', port);
const runningServer = http.createServer(app);

runningServer.listen(port,() => console.log(`Server is running on port: ${port}`));
