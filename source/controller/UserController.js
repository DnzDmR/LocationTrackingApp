export default class UserController {
 
    static async userLogin(username,password){
        var url = `http://192.168.1.8:8080/api/authenticate?username=${username}&password=${password}`;
        return await fetch(url,{
            method: 'POST',
        }) .then(response => {return response} )
        .catch(error => console.warn(error));
    };
     
}
