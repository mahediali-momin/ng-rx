import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { postState } from '../../../../public/store/post/post.state';
import { addPost, editPost } from '../../../../public/store/post/poss.action';
import { getPostById } from '../../../../public/store/post/post.selectors';

@Component({
  selector: 'app-postadd',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './postadd.html',
  styleUrl: './postadd.css'
})
export class Postadd implements OnInit {

  addForm: FormGroup | any;
  isEditing: boolean;
  form: HTMLElement;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private store: Store<{ posts: postState }>,
    private location: Location
  ) {
    this.addForm = this.fb.group({
      title: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      description: [null, Validators.compose([Validators.required])],
      id: [null],

    });


    this.router.params.subscribe((res: any) => {
      if (res?.id) {
        this.isEditing = true
        this.store.select(getPostById, { id: res.id }).subscribe((post) => {
          console.log('post', post);
          this.addForm.patchValue(post)
        });

      } else {
        this.isEditing = false
      }

    })
  }
  ngOnInit(): void {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll('.needs-validation')
      console.log(forms);

      // Loop over them and prevent submission
      Array.from(forms).forEach((form: any) => {
        form.addEventListener('submit', (event: any) => {

          console.log(form.checkValidity());
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          this.form = form
          console.log(this.form);

          form.classList.add('was-validated')
        }, false)
      })
    })();
  }

  onSubmit() {
    if (this.addForm.valid) {
      console.log('submit', this.isEditing);

      if (this.isEditing) {
        this.store.dispatch(editPost(this.addForm.value));
      } else {
        this.store.dispatch(addPost(this.addForm.value));
      }


      this.location.back();
    }
  }
}
