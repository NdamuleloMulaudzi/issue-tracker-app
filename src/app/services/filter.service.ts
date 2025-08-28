import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IssueFilter } from '../interface/filter.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private defaultFilter: IssueFilter = {
    search: '',
    status: 'All',
    priority: 'All',
    sortBy: 'Newest',
  };

  private filterSubject = new BehaviorSubject<IssueFilter>(this.defaultFilter);
  filter$ = this.filterSubject.asObservable();

  updateFilter(partial: Partial<IssueFilter>) {
    const current = this.filterSubject.value;
    this.filterSubject.next({ ...current, ...partial });
  }

  resetFilter() {
    this.filterSubject.next(this.defaultFilter);
  }
}
