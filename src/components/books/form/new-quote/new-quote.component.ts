import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'new-quote',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-quote.component.html',
  styleUrl: './new-quote.component.scss'
})
export class NewQuoteComponent implements OnInit {
  
  @Input() parentForm:{name: string, group: FormGroup<any>} | undefined;

  public quotesForm:FormGroup<any>;
  public newQuotes:FormArray<any>;
  constructor(private readonly formBuilder:FormBuilder) {
    this.newQuotes = formBuilder.array([]);
    this.quotesForm = formBuilder.group({
      _quotes: this.newQuotes
    });
  }

  ngOnInit(): void {
    if (this.parentForm) {
      this.parentForm.group.addControl(this.parentForm.name, this.newQuotes);
      this.newQuotes.setParent(this.parentForm.group);
    }
  }

  justOneMore() {
    this.newQuotes.push(this.formBuilder.group({
      content: ['', Validators.required],
      note: [''],
      chapter: [null],
      page_from: [null, Validators.required],
      page_to: [null, Validators.required],
      line_from: [null],
      line_to: [null],
      is_public: [false]
    }));
  }

  lessOneJust(idx:number) {
    this.newQuotes.removeAt(idx);
  }
}
