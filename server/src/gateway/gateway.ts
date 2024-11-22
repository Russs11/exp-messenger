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
      socket.join('broadcast');
      console.log('rooms ', socket.rooms);
    });
  }

  @SubscribeMessage('broadcast')
  onBroadcastRoomMessage(
    @MessageBody() body: MessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    const message: MessageDto = {
      socketId: body.socketId ? body.socketId : 'no id',
      text: body.text,
    };
    if (client.id === body.socketId)
      this.server.to('broadcast').emit('onMessage', message);
  }

  @SubscribeMessage('joinToRoom')
  onJoinToRoom(
    @MessageBody() body: MessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    console.log('rooms1: ', client.rooms);
    client.leave('broadcast');
    client.join(body.text);
    console.log('rooms2: ', client.rooms);

    const message: MessageDto = {
      socketId: body.socketId ? body.socketId : 'no id',
      text: `${body.socketId} join to ${body.text}`,
    };
    if (client.id === body.socketId)
      this.server.to(body.text).emit('onMessage', message);
  }

  @SubscribeMessage('room1')
  onRoom1Message(
    @MessageBody() body: MessageDto,
    @ConnectedSocket() client: Socket,
  ) {
    const message: MessageDto = {
      socketId: body.socketId ? body.socketId : 'no id',
      text: body.text,
    };
    if (client.id === body.socketId)
      this.server.to('room1').emit('onMessage', message);
  }
}
