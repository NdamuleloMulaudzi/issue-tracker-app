import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { AddIssueComponent } from "./components/add-issue/add-issue.component";
import { IssueListComponent } from "./components/issue-list/issue-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, AddIssueComponent, IssueListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'issue-tracker-app';
}
