package com.goKloud.taskmanagement.model;

import jakarta.persistence.*;

@Entity
@Table(name="tasks")
public class Task { 
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Column(name = "name", nullable =false)
	private String name;
	@Column(name= "description")
	private String description;
	@Column(name ="status", nullable = false)
	private String status;
	public String getName() {
		// TODO Auto-generated method stub
		return name;
	}
	
	@ManyToOne
    @JoinColumn(name = "username")
    private User user;
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	

}
