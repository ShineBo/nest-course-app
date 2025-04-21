import { Injectable } from '@nestjs/common';
import { CreateMusicstoreDto } from './dto/create-musicstore.dto';
import { UpdateMusicstoreDto } from './dto/update-musicstore.dto';
import { Musicstore } from './entities/musicstore.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MusicstoreService {
  constructor(
    @InjectModel(Musicstore)
    private musicstoreModel: typeof Musicstore,
  ) {}

  async create(createMusicstoreDto: CreateMusicstoreDto) {
    return await this.musicstoreModel.create(createMusicstoreDto);
  }

  async findAll() {
    return await this.musicstoreModel.findAll();
  }

  async findOne(id: number) {
    return await this.musicstoreModel.findByPk(id);
  }

  async findByMusicName(music_name: string) {
    return await this.musicstoreModel.findOne({ where: { music_name } });
  }

  async update(id: number, updateMusicstoreDto: UpdateMusicstoreDto) {
    return await this.musicstoreModel.update(updateMusicstoreDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.musicstoreModel.destroy({ where: { id } });
  }
}