package com.deniz.service.repository;

import java.util.ArrayList;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.deniz.service.entities.Notification;

public interface NotificationRepository extends MongoRepository<Notification, ObjectId> {

	@Query("{'sender': ?0 , 'receiver': ?1}")
	public Notification findNotification(String sender, String receiver);

	@Query("{'receiver': ?0}")
	public ArrayList<Notification> findUserNotification(String receiver);
	
	@Query("{'sender': ?0}")
	public ArrayList<Notification> findSenderByUsername(String sender);

}
