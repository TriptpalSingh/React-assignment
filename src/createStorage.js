
const users = {
    data:[
        {
            "username":"admin",
            "email":"admin@gmail.com",
            "password":"admin"
        }
    ]
}

const loggedIn = {
    "check": false,
    "username":""
}

const lists = {
    data:[
        {
            "user":"admin",
            "title":"test title",
            "items":["test task"],
            "listID":"0"
        }
    ]
}

const CreateStorage = ()=>{
    if(localStorage.getItem("users") == null){
        const data = JSON.stringify(users);
        localStorage.setItem("users", data);
    }
    if(localStorage.getItem("loggedIn") == null){
        localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    }
    if(localStorage.getItem("lists")==null){
        localStorage.setItem("lists", JSON.stringify(lists));
    }
}

export default CreateStorage;