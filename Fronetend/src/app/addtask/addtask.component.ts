import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  task:Task = new Task();
  username!:any;

  constructor(private taskservice:TaskService,private router:Router){}
  ngOnInit(){
    if(typeof localStorage!=="undefined"){
      this.username = localStorage.getItem("username")?.toString();
    }
  }
  saveTask(){
    const username1 = localStorage.getItem('username');
    if (username1) {
      // Do something with the username
      console.log('Username:', username1);
    } else {
      console.log('Username not found in local storage.');
    }

    this.taskservice.addaddTask(this.task,this.username).subscribe(data=>{
      console.log(data);
      this.goToTaskList();
    },err=>console.log(err))

  }

  goToTaskList(){
    this.router.navigate(['/viewlist']);
  }

  onSubmit(){
    console.log(this.task);
    this.saveTask();
  }

}
