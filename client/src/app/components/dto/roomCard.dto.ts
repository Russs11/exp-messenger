import { IsString } from 'class-validator'

export class RoomCardDto {
  @IsString()
  roomId: string

  @IsString()
  avatar: string

  @IsString()
  roomName: string
}
