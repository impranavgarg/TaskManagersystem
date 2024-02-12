import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Task } from '../task';


@Injectable({ providedIn: 'root' })
export class TaskSearchService {
  private searchQuerySource = new BehaviorSubject<string>('');
  currentQuery: Observable<string> = this.searchQuerySource.asObservable();

  private resultsSource = new BehaviorSubject<Task[]>([]);
  currentResults: Observable<Task[]> = this.resultsSource.asObservable();

  updateQuery(query: string) {
      this.searchQuerySource.next(query);
  }

  updateResults(results: Task[]) {
      this.resultsSource.next(results);
  }
}
