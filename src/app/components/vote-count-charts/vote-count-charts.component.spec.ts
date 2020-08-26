import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteCountChartsComponent } from './vote-count-charts.component';

describe('VoteCountChartsComponent', () => {
  let component: VoteCountChartsComponent;
  let fixture: ComponentFixture<VoteCountChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoteCountChartsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteCountChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
