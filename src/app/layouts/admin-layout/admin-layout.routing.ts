import { Routes } from '@angular/router';

import {UsersComponent} from '../../pages/users/users.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'users',   component: UsersComponent },
];
