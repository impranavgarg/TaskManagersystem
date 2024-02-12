package com.goKloud.taskmanagement.exception;

public class TaskNotFoundException extends RuntimeException {
	
	public TaskNotFoundException(String string) {
		super("Task notFound with the Id:"+ string);
	}
//	public TaskNotFoundException(String taskId) {
//		super("Task notFound with the Id:"+ taskId);
//	}

}
