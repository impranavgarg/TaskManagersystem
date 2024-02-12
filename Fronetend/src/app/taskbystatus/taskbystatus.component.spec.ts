import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskbystatusComponent } from './taskbystatus.component';

describe('TaskbystatusComponent', () => {
  let component: TaskbystatusComponent;
  let fixture: ComponentFixture<TaskbystatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskbystatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskbystatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
