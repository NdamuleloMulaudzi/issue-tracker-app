import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Issue } from '../../interface/issue.interface';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './issue-card.component.html',
  styleUrl: './issue-card.component.css',
})
export class IssueCardComponent {
  @Input() issue!: Issue;
  @Output() statusChanged = new EventEmitter<{ id: string; status: Issue['status'] }>();
  @Output() priorityChanged = new EventEmitter<{ id: string; priority: Issue['priority'] }>();

  constructor(){}

  onStatusChange(newStatus: Issue['status']) {
    this.statusChanged.emit({ id: this.issue.id, status: newStatus });
    console.log(this.issue.id);
    console.log(this.issue.status)
  }

  onPriorityChange(newPriority: Issue['priority']) {
    this.priorityChanged.emit({ id: this.issue.id, priority: newPriority });
    console.log(this.issue.id);
    console.log(this.issue.priority)
  }

  getCardColor(status: string): string {
    switch (status) {
      case 'Open':
        return 'bg-blue-100';
      case 'In Progress':
        return 'bg-orange-100';
      case 'Closed':
        return 'bg-green-100';
      default:
        return 'bg-gray-50';
    }
  }

  getStatusSelectColor(status: string): string {
    switch (status) {
      case 'Open':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-orange-100 text-orange-800';
      case 'Closed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
  
  getPrioritySelectColor(priority: string): string {
    switch (priority) {
      case 'Low':
        return 'bg-gray-100 text-gray-700';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
  
}
