import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter-controls',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-controls.component.html',
  styleUrls: ['./filter-controls.component.css'],
})
export class FilterControlsComponent {
  constructor(private filterService: FilterService) {}

  // local state bound to ngModel
  search = '';
  status: 'All' | 'Open' | 'In Progress' | 'Closed' = 'All';
  priority: 'All' | 'Low' | 'Medium' | 'High' = 'All';
  sortBy: 'Newest' | 'Oldest' | 'Priority' = 'Newest';


  onSearchChange(value: string) {
    this.filterService.updateFilter({ search: value });
  }

  onStatusChange(value: string) {
    this.filterService.updateFilter({ status: value as any });
  }

  onPriorityChange(value: string) {
    this.filterService.updateFilter({ priority: value as any });
  }

  onSortChange(value: string) {
    this.filterService.updateFilter({ sortBy: value as any });
  }

  resetFilters() {
    this.search = '';
    this.status = 'All';
    this.priority = 'All';
    this.sortBy = 'Newest';
    this.filterService.resetFilter();
  }
}
