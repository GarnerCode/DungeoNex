import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        FontAwesomeModule,
    ],
    exports: [
        NavbarComponent,
    ],
})
export class NavbarModule {}