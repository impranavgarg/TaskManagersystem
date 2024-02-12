import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskSearchService } from '../services/tasksearch.service';
import { Task } from '../task';
import { Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-searchresults',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchresults.component.html',
  styleUrl: './searchresults.component.css'
})
export class SearchresultsComponent {
  searchResults: Task[] = [];
  tasks!:Task[];
  username!:any;


    constructor(private taskSearchService: TaskSearchService,private taskservice:TaskService, private router:Router) {}

    ngOnInit() {
      if(typeof localStorage!=="undefined"){
        this.username = localStorage.getItem("username")?.toString();
      }
        this.taskSearchService.currentResults.subscribe(results => {
            this.searchResults = results;
        });
        this.getTasks();
    }
    private getTasks(){
      this.taskservice.getAllTasks(this.username).subscribe(data=>{
        this.tasks=data;
      })
    }
  
    taskdetails(id:number){
      this.router.navigate(['viewtask',id]);
    }
    updateTask(id:number){
      this.router.navigate(['updatetask',id]);
    }
    deleteTask(id:number){
      this.taskservice.deleteTask(id,this.username).subscribe(data=>{
        console.log(data);
        this.getTasks();
      })
    }

}
