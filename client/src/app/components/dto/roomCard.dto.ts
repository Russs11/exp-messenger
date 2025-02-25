import { IsString } from 'class-validator'

export class RoomCardDto {
  @IsString()
  roomId: string

  @IsString()
  avatarUrl: string

  @IsString()
  name: string
}
