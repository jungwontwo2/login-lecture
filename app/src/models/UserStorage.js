"use strict";

const fs = require("fs").promises;

class UserStorage{
    static #getuserInfo(data,id){
        const users = (JSON.parse(data));
            const idx = users.id.indexOf(id);
            const userKeys = Object.keys(users);//[id,psword]
            const userInfo = userKeys.reduce((newUser,info)=>{
                newUser[info]=users[info][idx];
                return newUser;
            },{});
            //console.log(userInfo);
            return userInfo;
    }
    static #getUsers(data,isAll,fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers= fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
                console.log(newUsers[field],field);
            }
            return newUsers;
        },{});


        return newUsers;
    }

    //     id:["asd","asdf","qwer"],
    //     psword:["123","1234","1211"],
    //     name:["서정원","박용민","신재정"],
    // };
    static getUsers(isAll,...fields){
        return fs
        .readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUsers(data,isAll,fields);
        }
        )
        .catch(console.error);
        
    }
    static getUserInfo(id){
        return fs
        .readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getuserInfo(data,id);
        }
        )
        .catch(console.error);
        


       
    }
    
    static async save(userInfo){       
        const users= await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }
        users.id.push(userInfo.id);
            users.name.push(userInfo.name);
            users.psword.push(userInfo.psword);
            fs.writeFile("./src/databases/users.json",JSON.stringify(users));
            return {success: true};
        //console.log(users);
    }
}

module.exports= UserStorage;