import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { FilterService } from '../../services/filter.service';
import { Issue } from '../../interface/issue.interface';
import { IssueCardComponent } from '../issue-card/issue-card.component';
import { FilterControlsComponent } from "../filter-controls/filter-controls.component";

@Component({
  selector: 'app-issue-list',
  imports: [NgFor, NgIf, IssueCardComponent, FilterControlsComponent],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css',
})
export class IssueListComponent {
  issues: Issue[] = [];

  constructor(
    private issueService: IssueService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    combineLatest([this.issueService.issues$, this.filterService.filter$])
      .pipe(
        map(([issues, filter]) => this.applyFilters(issues, filter))
      )
      .subscribe((filtered) => (this.issues = filtered));
  }

  private applyFilters(issues: Issue[], filter: any): Issue[] {
    let filtered = [...issues];

    // Search
    if (filter.search) {
      const term = filter.search.toLowerCase();
      filtered = filtered.filter(
        (issue) =>
          issue.title.toLowerCase().includes(term) ||
          issue.description.toLowerCase().includes(term)
      );
    }

    // Status
    if (filter.status !== 'All') {
      filtered = filtered.filter((i) => i.status === filter.status);
    }

    // Priority
    if (filter.priority !== 'All') {
      filtered = filtered.filter((i) => i.priority === filter.priority);
    }

    // Sort
    if (filter.sortBy === 'Newest') {
      filtered.sort(
        (a, b) =>
          new Date(b.createdDate).getTime() -
          new Date(a.createdDate).getTime()
      );
    } else if (filter.sortBy === 'Oldest') {
      filtered.sort(
        (a, b) =>
          new Date(a.createdDate).getTime() -
          new Date(b.createdDate).getTime()
      );
    } else if (filter.sortBy === 'Priority') {
      const priorityOrder: Record<string, number> = {
        High: 1,
        Medium: 2,
        Low: 3,
      };
      filtered.sort(
        (a, b) =>
          (priorityOrder[a.priority] ?? 99) -
          (priorityOrder[b.priority] ?? 99)
      );
    }

    return filtered;
  }

  onStatusUpdate(event: { id: string; status: Issue['status'] }) {
    this.issueService.updateStatus(event.id, event.status);
  }

  onPriorityUpdate(event: { id: string; priority: Issue['priority'] }) {
    this.issueService.updatePriority(event.id, event.priority);
  }
}
