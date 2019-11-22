package com.deniz.service.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.deniz.service.entities.Location;

public interface LocationRepository extends MongoRepository<Location, ObjectId> {

	
	@Query("{'user.username' : ?0}")
	public List<Location> findByUserQuery(String username);
	
}
