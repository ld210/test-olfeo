import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { FormularComponent } from "./formular.component";

const formBuilderStub = new FormBuilder();

describe("FormularComponent", () => {
  let component: FormularComponent;
  let fixture: ComponentFixture<FormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilderStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
