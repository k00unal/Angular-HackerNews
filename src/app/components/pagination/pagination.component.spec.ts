import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref, Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

import { PaginationComponent } from './pagination.component';
import { HomeComponent } from '../home/home.component';
import { ElementRef } from '@angular/core';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let a: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent },
          { path: 'home/:currentPage', component: HomeComponent },
        ]),
      ],
      declarations: [PaginationComponent, HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to /home?currentPage=4', () => {
    const debugElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    const index = debugElements.findIndex((de) => {
      return de.properties['href'] === '/home?currentPage=4';
    });
    expect(index).toBeGreaterThan(-1);
  });

  it('should go to url', async(
    inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(PaginationComponent);
      fixture.detectChanges();

      fixture.debugElement.query(By.css('a')).nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('');
        console.log('after expect');
      });
    })
  ));

  it('should trigger nextData method on click', () => {
    const fixture = TestBed.createComponent(PaginationComponent);
    fixture.detectChanges();

    const h1 = fixture.debugElement.query(By.css('a'));
    h1.triggerEventHandler('nextData', {});
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('a')).nativeElement.innerText
    ).toEqual('NEXT');
  });
});
