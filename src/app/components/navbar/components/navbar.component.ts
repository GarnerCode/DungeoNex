import { Component } from '@angular/core';
import { faHouse, faBook, faUsers, faSkull, faMapLocationDot, faBoxesStacked, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    faHouse = faHouse;
    faBook = faBook;
    faUsers = faUsers;
    faSkull = faSkull;
    faMapLocationDot = faMapLocationDot;
    faBoxesStacked = faBoxesStacked;
    faGear = faGear;
}