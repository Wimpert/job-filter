import { TestBed } from '@angular/core/testing';
import { GeneralOptionsService } from './general-options.service';


describe('GeneralOptionsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralOptionsService = TestBed.get(GeneralOptionsService);
    expect(service).toBeTruthy();
  });
});
