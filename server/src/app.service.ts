import { Injectable } from '@nestjs/common';
import { Connection, Channel, connect } from 'amqplib';
import { ISendMenssageToQueue, ISendMenssageToExchange } from './app.interface';

@Injectable()
export class AppService {
  private conn: Connection;
  private channel: Channel;
  private uri: string = process.env.RABBIT_URI;

  async start() {
    this.conn = await connect(this.uri);
    this.channel = await this.conn.createChannel();
  }

  async sendMenssageToQueue(data: ISendMenssageToQueue) {
    return this.channel.sendToQueue(data.queue, Buffer.from(data.message));
  }

  async sendMessageToExchange(data: ISendMenssageToExchange): Promise<Boolean> {
    return this.channel.publish(data.exchange, data.routingKey, Buffer.from(data.message));
  }
}
