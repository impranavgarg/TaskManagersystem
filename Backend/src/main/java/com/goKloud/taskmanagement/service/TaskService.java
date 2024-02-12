package com.goKloud.taskmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.goKloud.taskmanagement.exception.TaskNotFoundException;
import com.goKloud.taskmanagement.exception.UserNotFoundException;
import com.goKloud.taskmanagement.model.Task;
import com.goKloud.taskmanagement.model.User;
import com.goKloud.taskmanagement.repositories.TaskRepository;
import com.goKloud.taskmanagement.repositories.UserRepository;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;


    public Task createTask( String userid, Task task) {
        User user = getUserByUserId(userid);
        task.setUser(user);
 
        Task createdTask = taskRepository.save(task);
        return createdTask;
    }

    public List<Task> retrieveAllTasks(String userid) {
//        User user = userRepository.findByUsername(userid);
    	User user = getUserByUserId(userid);
    	
        return taskRepository.findByUserId(user);
    }

    public Task retrieveTaskById(Long id ,String userid) {
    	getUserByUserId(userid);
        return taskRepository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException("Task not found with id: " + id));
    }

    
    public Task updateTask(String userid, Long id, Task updatedTask) {
        getUserByUserId(userid); // Ensure user exists
        Task existingTask = retrieveTaskById(id,userid);
        existingTask.setName(updatedTask.getName());
        existingTask.setDescription(updatedTask.getDescription());
        existingTask.setStatus(updatedTask.getStatus());

        return taskRepository.save(existingTask);
    }

    public void deleteTask(String userid, Long id) {
        User user = getUserByUserId(userid); 
        Task existingTask = retrieveTaskById(id,userid);

       
        if (!existingTask.getUser().equals(user)) {
            throw new RuntimeException("Task does not belong to the specified user.");
        }

        taskRepository.delete(existingTask);
    }

    private User getUserByUserId(String userid) {
        return userRepository.findById(userid)
                .orElseThrow(() -> new UserNotFoundException("User not found with Id: " + userid));
    }
    
    public List<Task> findTask(String taskname){
    	return  taskRepository.findByName(taskname);
    }


}
