import { TestBed, inject } from '@angular/core/testing';

import { TodosDropdownService } from './todos-dropdown.service';

describe('TodosDropdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosDropdownService]
    });
  });

  it('should be created', inject([TodosDropdownService], (service: TodosDropdownService) => {
    expect(service).toBeTruthy();
  }));
});
