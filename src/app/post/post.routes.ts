import { RouterModule, Routes } from '@angular/router';
import { Postadd } from './postadd/postadd';
import { Postlist } from './postlist/postlist';
import { NgModule } from '@angular/core';


export const routes: Routes = [

    {
        path: '',
        component: Postlist
    },
    {
        path: 'add',
        component: Postadd
    },
    {
        path: 'edit/:id',
        component: Postadd
    }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }