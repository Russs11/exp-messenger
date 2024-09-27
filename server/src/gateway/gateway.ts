import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: { origin: '*' }, transports: ['websocket'] })
export class MyGateway {
  @SubscribeMessage('newMessage')
  onNewMessage(@MessageBody() body: any) {
    console.log('body: ', body);
  }
}
