export interface ISendMenssageToQueue {
  queue: string,
  message: string
}

export interface ISendMenssageToExchange {
  exchange: string,
  routingKey: string,
  message: string
}
