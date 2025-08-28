export interface IssueFilter {
  search: string;
  status: 'All' | 'Open' | 'In Progress' | 'Closed';
  priority: 'All' | 'Low' | 'Medium' | 'High';
  sortBy: 'Newest' | 'Oldest' | 'Priority';
}
