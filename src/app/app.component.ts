import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddIssueComponent } from "./components/add-issue/add-issue.component";
import { IssueListComponent } from "./components/issue-list/issue-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddIssueComponent, IssueListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'issue-tracker-app';
}
