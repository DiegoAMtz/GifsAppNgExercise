import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsSideMenuHeaderComponent } from './gifs-side-menu-header.component';

describe('GifsSideMenuHeaderComponent', () => {
  let component: GifsSideMenuHeaderComponent;
  let fixture: ComponentFixture<GifsSideMenuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifsSideMenuHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifsSideMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
