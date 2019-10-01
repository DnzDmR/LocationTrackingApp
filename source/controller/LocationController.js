import Geolocation from 'react-native-geolocation-service';

export default class LocationController {

 
  static start(username,token){

    function success(pos) {
      
      var url =`http://192.168.1.8:8080/location/saveLocation/${username}`;
      var crd = pos.coords;
      
      var location = {latitude:crd.latitude,longitude:crd.longitude}

      fetch(url,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(location),

      }).catch(error => console.warn(error));
  
    }
  
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    var options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
  

    Geolocation.getCurrentPosition(success, error, options);

    setTimeout(()=>{LocationController.start(username,token)},10000);
  }




}