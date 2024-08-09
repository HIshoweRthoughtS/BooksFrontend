import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormAuthor } from '../../../../shared/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-review',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.scss'
})
export class NewReviewComponent implements OnInit {
  
  @Input() parentForm:{name: string, controls: FormGroup<any>} | undefined;

  @Output() newAuthorEvent = new EventEmitter<FormAuthor>();

  public newReviews:FormArray<any>;

  constructor(private readonly formBuilder:FormBuilder) {
    this.newReviews = formBuilder.array([]);
  }

  ngOnInit(): void {
    if (this.parentForm) {
      this.parentForm.controls.addControl(this.parentForm.name, this.newReviews);
      this.newReviews.setParent(this.parentForm.controls);
    }
  }

  justOneMore() {
    this.newReviews.push(this.formBuilder.group({
      is_public: [],
      rating: [],
      //quicknote wont be here long enough
      title: [''], // not required
      essay: ['', Validators.required],
      tldr: ['']
    }));
  }

  createNewReview() {

  }

}
