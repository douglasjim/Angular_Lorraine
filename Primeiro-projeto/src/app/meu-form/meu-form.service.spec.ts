import { TestBed } from '@angular/core/testing';

import { MeuFormService } from './meu-form.service';

describe('MeuFormService', () => {
  let service: MeuFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
