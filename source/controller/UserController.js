
export default class UserController {
 
    static async userLogin(username,password){
        var url = `http://192.168.1.8:8080/api/authenticate?username=${username}&password=${password}`;
        return await fetch(url,{
            method: 'POST',
        }) .then(response => {return response} )
        .catch(error => console.warn(error));
    }

    static async userRegister(user){
        var url = `http://192.168.1.8:8080/users/saveUser`;

        await fetch(url,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)

        }).catch(error => console.warn(error));
    }

    static async getUser(username,token){
        var url = `http://192.168.1.8:8080/users/getUser/${username}`;

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
