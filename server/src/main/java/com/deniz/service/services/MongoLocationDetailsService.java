package com.deniz.service.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.deniz.service.entities.Location;
import com.deniz.service.entities.Notification;
import com.deniz.service.repository.LocationRepository;
import com.deniz.service.repository.NotificationRepository;

@Component
public class MongoLocationDetailsService {

	@Autowired
	private LocationRepository locationRepository;

	@Autowired
	private NotificationRepository notificationRepository;

	public void saveLocation(Location location) {

		List<Location> opt = locationRepository.findByUserQuery(location.getUser().getUsername());

		if (opt.size() == 0) {
			locationRepository.save(location);
		} else {
			Location temp = opt.get(0);
			temp.setLatitude(location.getLatitude());
			temp.setLatitudeDelta(location.getLatitudeDelta());
			temp.setLongitude(location.getLongitude());
			temp.setLongitudeDelta(location.getLongitudeDelta());
			temp.setUser(location.getUser());

			locationRepository.save(temp);
		}

	}

	public Location getLocation(String username) {

		return locationRepository.findByUserQuery(username).get(0);
	}

	public ArrayList<Location> getFollowingUsersLocation(String username) {

		ArrayList<Notification> notifications = notificationRepository.findSenderByUsername(username);

		ArrayList<Location> users = new ArrayList<Location>();

		for (Notification notification : notifications) {
			if(notification.getStatus().equals("1")) {
				users.add(locationRepository.findByUserQuery(notification.getReceiver()).get(0));	
			}
		}

		return users;

	}

}
