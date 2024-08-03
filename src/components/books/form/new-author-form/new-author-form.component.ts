import { booleanAttribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormAuthor } from '../../../../shared/interfaces';

@Component({
  selector: 'new-author-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-author-form.component.html',
  styleUrl: './new-author-form.component.scss'
})
export class NewAuthorFormComponent implements OnInit {

  @Input() parentForm:{name: string, controls: FormGroup<any>} | undefined;

  @Output() newAuthorEvent = new EventEmitter<FormAuthor>();

  public authorForm:FormGroup<any>;
  constructor(private readonly formBuilder:FormBuilder) {
    this.authorForm = formBuilder.group({
      firstName: ['test', Validators.required],
      lastName: ['test', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.parentForm) {
      this.parentForm.controls.addControl(this.parentForm.name, this.authorForm);
      this.authorForm.setParent(this.parentForm.controls);
    }
  }

  submitNewAuthor() {
    this.authorForm.disable();
    this.newAuthorEvent.emit(this.authorForm.getRawValue());
  }
}
