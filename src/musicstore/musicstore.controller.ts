import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusicstoreService } from './musicstore.service';
import { CreateMusicstoreDto } from './dto/create-musicstore.dto';
import { UpdateMusicstoreDto } from './dto/update-musicstore.dto';

@Controller('musicstore')
export class MusicstoreController {
  constructor(private readonly musicstoreService: MusicstoreService) {}

  @Post()
  create(@Body() createMusicstoreDto: CreateMusicstoreDto) {
    return this.musicstoreService.create(createMusicstoreDto);
  }

  @Get()
  findAll() {
    return this.musicstoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musicstoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusicstoreDto: UpdateMusicstoreDto) {
    return this.musicstoreService.update(+id, updateMusicstoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musicstoreService.remove(+id);
  }
}
