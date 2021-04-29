import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormularComponent } from "./formular.component";
import { MaterialModule } from "./material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [FormularComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [FormularComponent],
})
export class FormularModule {}
