import { PartialType } from '@nestjs/mapped-types';
import { CreateMusicstoreDto } from './create-musicstore.dto';

export class UpdateMusicstoreDto extends PartialType(CreateMusicstoreDto) {}
