import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DousersPage } from './dousers.page';

describe('DousersPage', () => {
  let component: DousersPage;
  let fixture: ComponentFixture<DousersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DousersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DousersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
