import { NgModule } from "@angular/core";
import { ToggleClassDirective } from "./directives/toggle-class.directive";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BigSpinnerComponent } from './components/big-spinner/big-spinner.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';

@NgModule({
  declarations: [
    ToggleClassDirective,
    SpinnerComponent,
    BigSpinnerComponent,
    MyUppercasePipe
  ],
  imports: [
  ],
  exports: [
    ToggleClassDirective,
    SpinnerComponent,
    BigSpinnerComponent, 
    MyUppercasePipe   
  ]
})

export class SharedModule {

}