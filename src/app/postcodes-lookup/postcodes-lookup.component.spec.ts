import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodesLookupComponent } from './postcodes-lookup.component';

describe('PostcodesLookupComponent', () => {
  let component: PostcodesLookupComponent;
  let fixture: ComponentFixture<PostcodesLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcodesLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcodesLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
