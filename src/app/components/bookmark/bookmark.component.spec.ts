import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { BookmarkComponent } from './bookmark.component';
import { By } from '@angular/platform-browser';

describe('BookmarkComponent', () => {
  let component: BookmarkComponent;
  let fixture: ComponentFixture<BookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Bookmark has innerText equal to BOOKMARK THIS PG NO.', () => {
    const fixture = TestBed.createComponent(BookmarkComponent);
    fixture.detectChanges();

    const h1 = fixture.debugElement.query(By.css('button'));
    h1.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('button')).nativeElement.innerText
    ).toEqual('BOOKMARK THIS PG NO.');
  });

  it('should check for method has been called on click or not ', fakeAsync(() => {
    spyOn(component, 'bookmarkSet');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.bookmarkSet).toHaveBeenCalled();
  }));
});
