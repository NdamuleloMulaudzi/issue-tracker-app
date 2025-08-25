import { Component, Input } from '@angular/core';
import { Issue } from '../../interface/issue.interface';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-issue-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './issue-card.component.html',
  styleUrl: './issue-card.component.css'
})
export class IssueCardComponent {
  @Input() issue!: Issue;
}
