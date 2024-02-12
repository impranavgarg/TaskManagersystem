package com.goKloud.taskmanagement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.goKloud.taskmanagement.model.Task;
import com.goKloud.taskmanagement.service.TaskService;


import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("http://localhost:4200")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/{userid}/create")
    public ResponseEntity<Task> createTask(@PathVariable String userid, @RequestBody Task task) {
        Task createdTask= taskService.createTask(userid,task);
       
        return ResponseEntity.ok(createdTask);
    }

    @GetMapping("/{userid}")
    public ResponseEntity<List<Task>> showAllTasks(@PathVariable String userid) {
        List<Task> tasks = taskService.retrieveAllTasks(userid);
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("{userid}/show/{id}")
    public ResponseEntity<Task> showTaskById(@PathVariable Long id, @PathVariable String userid) {
        Task task = taskService.retrieveTaskById(id,userid);
        return ResponseEntity.ok(task);
    }

    @PutMapping("/{userid}/update/{id}")
    public ResponseEntity<Task> updateTask(
            @PathVariable String userid, @PathVariable Long id, @RequestBody Task updatedTask) {
        Task task = taskService.updateTask(userid, id, updatedTask);
        return ResponseEntity.ok(task);
    }

    @DeleteMapping("/{userid}/delete/{id}")
    public ResponseEntity<String> deleteTask(@PathVariable String userid, @PathVariable Long id) {
        taskService.deleteTask(userid, id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Task deleted successfully");
    }
    @GetMapping("/{userid}/search/{taskName}")
    public List<Task> findTasksByName(@PathVariable String taskName) {
        return taskService.findTask(taskName);
    }
}
