// cats.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Cat } from './types/cats.model';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should add a cat to the list', () => {
      const cat = { name: 'Tom', age: 3, breed: 'Tabby' } as Cat;

      service.create(cat);

      expect(service.findAll()).toHaveLength(1);
      expect(service.findAll()).toEqual([cat]);
    });

    it('should keep cats in insertion order when multiple are added', () => {
      const cat1 = { name: 'Tom', age: 3, breed: 'Tabby' } as Cat;
      const cat2 = { name: 'Leo', age: 2, breed: 'Siamese' } as Cat;

      service.create(cat1);
      service.create(cat2);

      expect(service.findAll()).toEqual([cat1, cat2]);
    });
  });

  describe('findAll', () => {
    it('should return empty array initially', () => {
      expect(service.findAll()).toEqual([]);
    });

    it('should return the same internal array reference (current implementation)', () => {
      // This test documents current behavior; if you later change implementation
      // to return a copy (e.g., [...this.cats]), adjust/remove this test.
      const cats = service.findAll();
      expect(cats).toBe(service.findAll());
    });
  });
});