import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSideMenuOptionsComponent } from './gifs-side-menu-options.component';

describe('GifsSideMenuOptionsComponent', () => {
  let component: GifsSideMenuOptionsComponent;
  let fixture: ComponentFixture<GifsSideMenuOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsSideMenuOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsSideMenuOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
