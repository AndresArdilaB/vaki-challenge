import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiComponent } from './vaki.component';

describe('VakiComponent', () => {
  let component: VakiComponent;
  let fixture: ComponentFixture<VakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
