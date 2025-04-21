import { Test, TestingModule } from '@nestjs/testing';
import { MusicstoreService } from './musicstore.service';

describe('MusicstoreService', () => {
  let service: MusicstoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicstoreService],
    }).compile();

    service = module.get<MusicstoreService>(MusicstoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
