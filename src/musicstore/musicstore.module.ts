import { Module } from '@nestjs/common';
import { MusicstoreService } from './musicstore.service';
import { MusicstoreController } from './musicstore.controller';
import { Musicstore } from './entities/musicstore.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Musicstore])],
  controllers: [MusicstoreController],
  providers: [MusicstoreService],
})
export class MusicstoreModule {}
