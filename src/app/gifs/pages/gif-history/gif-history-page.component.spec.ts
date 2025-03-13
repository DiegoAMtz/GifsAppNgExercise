import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifHistoryComponent } from './gif-history-page.component';

describe('GifHistoryComponent', () => {
  let component: GifHistoryComponent;
  let fixture: ComponentFixture<GifHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
