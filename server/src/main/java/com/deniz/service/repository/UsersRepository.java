package com.deniz.service.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.deniz.service.entities.Users;

public interface UsersRepository extends MongoRepository<Users, ObjectId> {
	
	Users findByUsername(String username);
}