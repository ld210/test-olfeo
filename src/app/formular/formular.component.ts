/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-formular",
  templateUrl: "./formular.component.html",
  styleUrls: ["./formular.component.scss"],
})
export class FormularComponent implements OnInit {
  formularGroup = this.formBuiler.group(
    {
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#&$%])[A-Za-zd@#&$%].{11,}"
          ),
        ],
      ],
      passwordConfirm: ["", Validators.required],
      addresses: this.formBuiler.array([
        this.formBuiler.control("", Validators.required),
      ]),
    },
    { validators: this.password }
  );

  constructor(private formBuiler: FormBuilder) {}

  ngOnInit(): void {}

  get addresses(): FormArray {
    return this.formularGroup.get("addresses") as FormArray;
  }

  addAddress(): void {
    this.addresses.push(this.formBuiler.control("", Validators.required));
  }

  password(formGroup: FormGroup): null | { passwordNotMatch: boolean } {
    const password = formGroup.get("password")?.value;
    const passwordConfirm = formGroup.get("passwordConfirm")?.value;
    return password === passwordConfirm ? null : { passwordNotMatch: true };
  }

  onSubmit(): void {
    console.log(this.formularGroup.value);
  }
}
