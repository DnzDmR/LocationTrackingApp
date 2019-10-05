export default class NotificationController {

    static sendNotification(notification,token){

        var url = `http://192.168.1.8:8080/notification/followUser`;

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

}