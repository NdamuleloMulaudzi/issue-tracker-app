import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IssueService } from '../../services/issue.service';

import { v4 as uuid } from 'uuid';
import { Issue } from '../../interface/issue.interface';

@Component({
  selector: 'app-add-issue',
  imports: [ReactiveFormsModule],
  templateUrl: './add-issue.component.html',
  styleUrl: './add-issue.component.css',
})
export class AddIssueComponent {
  issueForm: FormGroup;

  constructor(private fb: FormBuilder, private issueService: IssueService) {
    this.issueForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['Open'],
      priority: ['Low'],
    });
  }

  onSubmit(): void {
    if (this.issueForm.valid) {
      const { title, description, priority } = this.issueForm.value;
      this.issueService.addIssue(title!, description!, priority!);
      console.log(this.issueService.issues);
      this.issueForm.reset({ status: 'Open', priority: 'Low' });
    }
  }
}
