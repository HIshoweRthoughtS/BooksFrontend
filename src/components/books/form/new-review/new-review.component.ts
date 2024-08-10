import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormAuthor, Review } from '../../../../shared/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-review',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-review.component.html',
  styleUrl: './new-review.component.scss'
})
export class NewReviewComponent implements OnInit {
  
  @Input() parentForm:{name: string, group: FormGroup<any>} | undefined;

  // @Output() newAuthorEvent = new EventEmitter<Review>();

  public reviewForm:FormGroup<any>;
  public newReviews:FormArray<any>;

  constructor(private readonly formBuilder:FormBuilder) {
    this.newReviews = formBuilder.array([]);
    this.reviewForm = formBuilder.group({
      _reviews: this.newReviews
    });
  }

  ngOnInit(): void {
    if (this.parentForm) {
      this.parentForm.group.addControl(this.parentForm.name, this.newReviews); //this line fires ng submit in parent form. Warum auch immer
      this.newReviews.setParent(this.parentForm.group);
    }
  }

  justOneMore() {
    this.newReviews.push(this.formBuilder.group({
      is_public: [false],
      rating: [null],
      //quicknote wont be here long enough
      title: [''], // not required
      essay: ['', Validators.required],
      tldr: ['']
    }));
  }

  lessOneJust(idx:number) {
    this.newReviews.removeAt(idx);
  }

  // createNewReview() {

  // }

}
