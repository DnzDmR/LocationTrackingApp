package com.deniz.service.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deniz.service.entities.Notification;
import com.deniz.service.services.MongoNotificationService;

@RestController
@RequestMapping("/notification")
public class NotificationController {

	@Autowired
	private MongoNotificationService notificationService;

	@PostMapping(path = "/saveOrUpdateNotification")
	public void updateUser(@RequestBody Notification notification) {

		if(notification.getId()!=null) {
			notificationService.update(notification);	
		}else {
			notificationService.save(notification);
		}
		

	}

	@GetMapping(path = "/getUserNotifications/{receiver}")
	public ResponseEntity<ArrayList<Notification>> getUserNotification(@PathVariable String receiver) {

		ArrayList<Notification> notifications = notificationService.getUserNotification(receiver);

		return new ResponseEntity<ArrayList<Notification>>(notifications, HttpStatus.OK);
	}
}
