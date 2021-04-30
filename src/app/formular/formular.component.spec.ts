/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

  it("should contain required inputs", () => {
    fixture = TestBed.createComponent(FormularComponent);
    fixture.detectChanges();
    const render = fixture.debugElement.nativeElement;

    expect(render.querySelector("input[formControlName='lastName']")).not.toBe(
      null
    );
    expect(render.querySelector("input[formControlName='firstName']")).not.toBe(
      null
    );
    expect(render.querySelector("input[formControlName='email']")).not.toBe(
      null
    );
    expect(render.querySelector("input[formControlName='password']")).not.toBe(
      null
    );
    expect(
      render.querySelector("input[formControlName='passwordConfirm']")
    ).not.toBe(null);
    expect(render.querySelector("div[formArrayName='addresses']")).not.toBe(
      null
    );
  });

  it("submit button should call submit function", () => {
    fixture = TestBed.createComponent(FormularComponent);
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      "button[type='submit']"
    );
    button.click();

    fixture
      .whenStable()
      .then(() => expect(component.onSubmit).toHaveBeenCalledWith());
  });
});
