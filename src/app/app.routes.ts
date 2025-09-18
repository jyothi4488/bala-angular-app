import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';

export const routes: Routes = [{
    path: '',
    component: AppComponent,
},
{
    path: 'test',
    component: MyTestComponentComponent,
}];