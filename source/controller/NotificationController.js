export default class NotificationController {

    static sendNotification(notification,token){

        var url = `http://192.168.1.8:8080/notification/saveOrUpdateNotification`;

        fetch(url,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(notification)

        }).catch((error) => {console.log(error)});


    }

    static async getUserNotification(username,token){
        var url = `http://192.168.1.8:8080/notification/getUserNotifications/${username}`;

        return await fetch(url,{
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            }
        ).then(response => {return response})
        .catch(error => console.warn(error));

    }

}