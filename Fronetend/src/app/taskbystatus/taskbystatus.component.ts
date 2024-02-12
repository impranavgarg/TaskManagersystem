import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskbystatus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './taskbystatus.component.html',
  styleUrl: './taskbystatus.component.css'
})
export class TaskbystatusComponent {
  inProgressTasks: Task[] = [];
  todoTasks: Task[] = [];
  completedTasks: Task[] = [];
  blockedTasks: Task[] = [];
  tasks: Task[] = [];
  username!:any;

  constructor(private taskservice: TaskService , private router: Router) { }

  ngOnInit(): void {
    if(typeof localStorage!=="undefined"){
      this.username = localStorage.getItem("username")?.toString();
    }
    this.getTasks();
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskservice.getAllTasks(this.username).subscribe(tasks => {
      this.inProgressTasks = tasks.filter(task => task.status === 'inProgress');
      this.todoTasks = tasks.filter(task => task.status === 'todo');
      this.completedTasks = tasks.filter(task => task.status === 'complete');
      this.blockedTasks = tasks.filter(task => task.status === 'blocked');
    });
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
    this.taskservice.deleteTask(id, this.username).subscribe(data=>{
      console.log(data);
      this.getTasks();
      this.loadTasks();

    })
  }

}
