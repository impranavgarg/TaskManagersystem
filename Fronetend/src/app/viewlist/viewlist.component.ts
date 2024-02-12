import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TaskService } from '../services/task.service';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-viewlist',
    standalone: true,
    templateUrl: './viewlist.component.html',
    styleUrl: './viewlist.component.css',
    imports: [HeaderComponent , FormsModule, CommonModule]
})

export class ViewlistComponent {
    tasks!:Task[];
    username:any="";
  constructor(private taskservice:TaskService,private router:Router){}
  ngOnInit(){
    if(typeof localStorage!=="undefined"){
        this.username = localStorage.getItem("username")?.toString();
      }
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
