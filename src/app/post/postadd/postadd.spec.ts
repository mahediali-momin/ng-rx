import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postadd } from './postadd';

describe('Postadd', () => {
  let component: Postadd;
  let fixture: ComponentFixture<Postadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postadd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postadd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
