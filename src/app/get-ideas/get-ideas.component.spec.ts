import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdeasComponent } from './get-ideas.component';

describe('GetIdeasComponent', () => {
  let component: GetIdeasComponent;
  let fixture: ComponentFixture<GetIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
