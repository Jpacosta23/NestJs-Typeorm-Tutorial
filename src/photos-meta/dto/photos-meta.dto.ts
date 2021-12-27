import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class PhotosMetadataDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  height: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  width: number;

  @IsOptional()
  comment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  photo_id: number;

  @IsOptional()
  orientation: string;

  @IsOptional()
  compressed: boolean;

  @IsOptional()
  id: number;
}
