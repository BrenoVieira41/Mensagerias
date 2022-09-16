import { Connection, Channel, connect, Message } from 'amqplib';
import { config } from 'dotenv';

config();

export default class ConsumerApp {
  private conn: Connection;
  private channel: Channel;
  private uri: string = process.env.RABBIT_URI;

  async start() {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
  }

  async consume(queue: string, callback: (message: Message) => void) {
    return this.channel.consume(queue, (message) => {
      callback(message);
      this.channel.ack(message);
    });
  }

}
