import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetBioComponent } from './pet-bio.component';

describe('PetBioComponent', () => {
  let component: PetBioComponent;
  let fixture: ComponentFixture<PetBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
