package com.deniz.service.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.deniz.service.entities.Notification;
import com.deniz.service.repository.NotificationRepository;

@Component
public class MongoNotificationService {

	@Autowired
	private NotificationRepository notificationRepository;

	public void save(Notification notification) {

		Optional<Notification> n = Optional.ofNullable(notificationRepository.findNotification(notification.getSender(), notification.getReceiver()));

		if (n.isEmpty()) {
			notificationRepository.save(notification);
		}
		else if (n.isPresent() && n.get().getStatus().equals("-1")) {
			n.get().setStatus("0");
			notificationRepository.save(n.get());
		}

	}

	public ArrayList<Notification> getUserNotification(String receiver) {

		return notificationRepository.findUserNotification(receiver);
	}

	public void update(Notification notification) {
		notificationRepository.save(notification);
	}

}
