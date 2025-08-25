import { Injectable } from '@angular/core';
import { Issue } from '../interface/issue.interface';
import { v4 as uuid } from 'uuid';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  constructor() {}
  issues: Issue[] = [];

  addIssue(title: string, description: string, priority: Issue['priority']) {
    const newIssue: Issue = {
      id: uuid(),
      title,
      description,
      status: 'Open',
      priority,
      createdDate: new Date(),
    };
    this.issues.push(newIssue);
  }

  getIssues() {
    return this.issues;
  }



}
