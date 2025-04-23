import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiQueryComponent } from './ai-query.component';

describe('AiQueryComponent', () => {
  let component: AiQueryComponent;
  let fixture: ComponentFixture<AiQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
