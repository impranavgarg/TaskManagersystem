package com.goKloud.taskmanagement.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.goKloud.taskmanagement.model.Task;
import com.goKloud.taskmanagement.model.User;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {
    List<Task> findByName(String name);

	@Query("SELECT t FROM Task t WHERE t.user = :userId")
	public List<Task> findByUserId(@Param("userId") User userId);


}
