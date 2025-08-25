import { Injectable } from '@angular/core';
import { Issue } from '../interface/issue.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor() { }

  // addIssue(title:string, description:string, priority:Issue['priority']){
  //   const newIssue:Issue = {
  //     id:uuid();

  //   }
  // }
}
