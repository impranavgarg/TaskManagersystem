package com.goKloud.taskmanagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.goKloud.taskmanagement.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
	User findByUsername(String username);
	@Query("Select u from User u where u.username=:uname and u.password=:pass")
	public User findUser(@Param("uname")String uname,@Param("pass")String pass);

}
