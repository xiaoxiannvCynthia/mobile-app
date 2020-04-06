import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllTodoPage } from './all-todo.page';

describe('AllTodoPage', () => {
  let component: AllTodoPage;
  let fixture: ComponentFixture<AllTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTodoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
