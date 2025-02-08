import { Routes } from '@angular/router';
import { SecondComponent } from '../second/second.component';
import { GetIdeasComponent } from './get-ideas/get-ideas.component';

export const routes: Routes = [
    {path: 'second-component', component: SecondComponent},
    {path: 'get-ideas', component: GetIdeasComponent},
];
