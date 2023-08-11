import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSelectorComponent } from './css-selector.component';

describe('CssSelectorComponent', () => {
  let component: CssSelectorComponent;
  let fixture: ComponentFixture<CssSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssSelectorComponent]
    });
    fixture = TestBed.createComponent(CssSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
