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

  getStripeColor(status: string): string {
    switch (status) {
      case 'Open':
        return 'bg-blue-600';
      case 'In Progress':
        return 'bg-orange-600';
      case 'Closed':
        return 'bg-green-600';
      default:
        return 'bg-gray-400';
    }
  }
  

getStatusLabelColor(status: string): string {
  switch (status) {
    case 'Open':
      return 'text-blue-600 bg-blue-200';
    case 'In Progress':
      return 'text-orange-600 bg-orange-200';
    case 'Closed':
      return 'text-green-600 bg-green-200';
    default:
      return 'text-gray-700 bg-gray-200';
  }
}


getPriorityLabelColor(priority: string): string {
  switch (priority) {
    case 'High':
      return 'text-red-600 bg-red-100';
    case 'Medium':
      return 'text-orange-600 bg-orange-100';
    case 'Low':
    default:
      return 'text-gray-700 bg-gray-100';
  }
}

  
  
 
  
}
