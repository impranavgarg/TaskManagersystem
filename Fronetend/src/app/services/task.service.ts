import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl= 'http://localhost:8080/tasks/';

  constructor(private http: HttpClient) { }

  addaddTask(task:Task, username:string):Observable<Task>{
    return this.http.post<Task>(`${this.baseUrl}`+username +"/create" ,task);
  }
  getAllTasks(username:string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}` + username);
  }
  getTaskById(id: number, username:string): Observable<Task> {
    return this.http.get<Task>(`${this.baseUrl}`+username + "/show/"+ `${id}`);
  }

  updateTask(id:number ,task: Task,username:string): Observable<Task> {
    return this.http.put<Task>(`${this.baseUrl}`+username  + "/update/" + `${id}`, task);
  }

  deleteTask(id:number, username:string){
    return this.http.delete(`${this.baseUrl}`+username +"/delete/"+`${id}`);
  }
  searchTasks(taskName: string,username:string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}`+username +"/search/"+ `${taskName}`);
}

  
  
}
