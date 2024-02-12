import { Component } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-viewtask',
  standalone: true,
  imports: [],
  templateUrl: './viewtask.component.html',
  styleUrl: './viewtask.component.css'
})
export class ViewtaskComponent {
  id!:number;
  task!:Task;
  username!:any;
  tasks: Task[] = [];

  constructor(private route:ActivatedRoute,private router:Router ,private taskservice:TaskService){}
  ngOnInit():void{
    if(typeof localStorage!=="undefined"){
      this.username = localStorage.getItem("username")?.toString();
    }
    this.id = this.route.snapshot.params['id'];
    this.task = new Task();
    this.taskservice.getTaskById(this.id, this.username).subscribe(data=>{
      this.task = data;
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
    this.taskservice.deleteTask(id, this.username).subscribe(data=>{
      console.log(data);
      this.router.navigate(['taskbystatus']);
      this.getTasks();

    })
  }

}
