import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { TaskSearchService } from '../services/tasksearch.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';
  username!:any;

  constructor(private taskSearchService: TaskSearchService,
    private taskService: TaskService, private router: Router) { }
    ngOnInit(){
      if(typeof localStorage!=="undefined"){
        this.username = localStorage.getItem("username")?.toString();
      }
      
    }

  searchTasks() {
    this.taskSearchService.updateQuery(this.searchQuery);

    this.taskService.searchTasks(this.searchQuery, this.username)
      .subscribe(tasks => {
        this.taskSearchService.updateResults(tasks);
      });
    this.router.navigate(['searchresult']);
  }
  logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem("username");
      this.router.navigate(['loginuser'])
    }
  }


}
