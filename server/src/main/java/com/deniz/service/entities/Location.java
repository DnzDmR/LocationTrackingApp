package com.deniz.service.entities;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "locations")
public class Location {

	@Id
	private ObjectId _id;

	private String latitude;
	private String longitude;
	private String latitudeDelta;
	private String longitudeDelta;

	private Users user;

	public ObjectId get_id() {
		return _id;
	}

	public void set_id(ObjectId _id) {
		this._id = _id;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLatitudeDelta() {
		return latitudeDelta;
	}

	public void setLatitudeDelta(String latitudeDelta) {
		this.latitudeDelta = latitudeDelta;
	}

	public String getLongitudeDelta() {
		return longitudeDelta;
	}

	public void setLongitudeDelta(String longitudeDelta) {
		this.longitudeDelta = longitudeDelta;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

}
