import { Test, TestingModule } from '@nestjs/testing';
import { MusicstoreController } from './musicstore.controller';
import { MusicstoreService } from './musicstore.service';

describe('MusicstoreController', () => {
  let controller: MusicstoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicstoreController],
      providers: [MusicstoreService],
    }).compile();

    controller = module.get<MusicstoreController>(MusicstoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
