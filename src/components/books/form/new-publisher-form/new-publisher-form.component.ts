import { booleanAttribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormPublisher } from '../../../../shared/interfaces/publisher';

@Component({
  selector: 'new-publisher-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-publisher-form.component.html',
  styleUrl: './new-publisher-form.component.scss'
})
export class NewPublisherFormComponent implements OnInit {

  @Input() parentForm:{name: string, controls: FormGroup<any>} | undefined;

  @Output() newPublisherEvent = new EventEmitter<FormPublisher>();

  public publisherForm:FormGroup<any>;
  constructor(private readonly formBuilder:FormBuilder) {
    this.publisherForm = formBuilder.group({
      title: ['test', Validators.required],
      country_of_origin: [''],
      hq_location: [''],
    });
  }

  ngOnInit(): void {
    if (this.parentForm) {
      this.parentForm.controls.addControl(this.parentForm.name, this.publisherForm);
      this.publisherForm.setParent(this.parentForm.controls);
    }
  }

  submitNewPublisher() {
    this.publisherForm.disable();
    this.newPublisherEvent.emit(this.publisherForm.getRawValue());
  }
}
