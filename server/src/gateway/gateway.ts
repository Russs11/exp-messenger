import { OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface MessageDto {
  socketId: string;
  text: string;
}

@WebSocketGateway({ cors: { origin: ['http://localhost:3001'] } })
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('connected ' + socket.id);
    });
  }

  @SubscribeMessage('newMessage')
  onNewMessage(
    @MessageBody() body: MessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    const message: MessageDto = {
      socketId: body.socketId ? body.socketId : 'no id',
      text: body.text,
    };
    if (client.id === body.socketId) this.server.emit('onMessage', message);
  }

  @SubscribeMessage('joinToRoom')
  onJoinToRoom(
    @MessageBody() body: MessageDto,
    @ConnectedSocket() client: Socket,
  ) {


    const message: MessageDto = {
      socketId: body.socketId ? body.socketId : 'no id',
      text: body.text,
    };
    if (client.id === body.socketId) this.server.emit('onMessage', message);
  }
}
