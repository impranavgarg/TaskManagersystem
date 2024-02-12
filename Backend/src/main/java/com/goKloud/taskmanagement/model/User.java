package com.goKloud.taskmanagement.model;


import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {



	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Id
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password; 
    

    

}
