import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-updatetask',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './updatetask.component.html',
  styleUrl: './updatetask.component.css'
})
export class UpdatetaskComponent {
  id!:number;
  task:Task = new Task();
  username!:any;

  constructor(private taskservice:TaskService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    if(typeof localStorage!=="undefined"){
      this.username = localStorage.getItem("username")?.toString();
    }
    this.taskservice.getTaskById(this.id,this.username).subscribe(data=>{
      this.task = data;
    },err=>console.log(err))
  }
  onSubmit(){
    this.taskservice.updateTask(this.id,this.task,this.username).subscribe(data=>{
      this.goToTaskList();
    },err=> console.log(err))
  }
  goToTaskList(){
    this.router.navigate(['/viewlist']);
  }

}
