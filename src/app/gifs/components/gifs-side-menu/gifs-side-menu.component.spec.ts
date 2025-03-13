import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSideMenuComponent } from './gifs-side-menu.component';

describe('GifsSideMenuComponent', () => {
  let component: GifsSideMenuComponent;
  let fixture: ComponentFixture<GifsSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsSideMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
