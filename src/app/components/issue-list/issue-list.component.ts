import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IssueService } from '../../services/issue.service';
import { Issue } from '../../interface/issue.interface';
import { IssueCardComponent } from '../issue-card/issue-card.component';

@Component({
  selector: 'app-issue-list',
  imports: [NgFor, IssueCardComponent],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css',
})
export class IssueListComponent {
  issues: Issue[] = [];

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.issueService.issues$.subscribe((res) => (this.issues = res));
  }
  onStatusUpdate(event: { id: string; status: Issue['status'] }) {
    this.issueService.updateStatus(event.id, event.status);
  }

  onPriorityUpdate(event: { id: string; priority: Issue['priority'] }) {
    this.issueService.updatePriority(event.id, event.priority);
  }
}
