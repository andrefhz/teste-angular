import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrevaComponent } from './inscreva.component';

describe('InscrevaComponent', () => {
  let component: InscrevaComponent;
  let fixture: ComponentFixture<InscrevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscrevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
