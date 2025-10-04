import { RouterModule, Routes } from '@angular/router';
import { Postadd } from './postadd/postadd';
import { Postlist } from './postlist/postlist';
import { NgModule } from '@angular/core';
import { provideState, StoreFeatureModule, StoreModule } from '@ngrx/store';
import { postReducer } from '../../../public/store/post/post.reducer';
import { POST_STATE_NAME } from '../../../public/store/post/post.selectors';


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
    imports: [
        RouterModule.forChild(routes),
    ], providers: [
        provideState(POST_STATE_NAME, postReducer)
    ],
    exports: [RouterModule]
})
export class PostRoutingModule { }