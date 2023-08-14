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

    // static #users={
    //     id:["asd","asdf","qwer"],
    //     psword:["123","1234","1211"],
    //     name:["서정원","박용민","신재정"],
    // };
    static getUsers(...fields){
        //const users = this.#users;
        const newUsers= fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
                console.log(newUsers[field],field);
            }
            return newUsers;
        },{});
        //console.log(newUsers);
        //console.log(fields);
        //console.log(newUsers);

        return newUsers;
    }
    static getUserInfo(id){
        return fs
        .readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getuserInfo(data,id);
        }
        )
        .catch(console.error);
        
        // ,(err,data)=>{
        //     if(err) throw err;
        //     const users = (JSON.parse(data));
        //     const idx = users.id.indexOf(id);
        //     const userKeys = Object.keys(users);//[id,psword]
        //     const userInfo = userKeys.reduce((newUser,info)=>{
        //         newUser[info]=users[info][idx];
        //         return newUser;
        //     },{});
        //     return userInfo;
        // })

       
    }
    
    static save(userInfo){
        //const users= this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);

    }
}

module.exports= UserStorage;