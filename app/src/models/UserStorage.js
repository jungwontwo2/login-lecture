"use strict";

class UserStorage{
    static #users={
        id:["asd","asdf","qwer"],
        psword:["123","1234","1211"],
        name:["서정원","박용민","신재정"],
    };
    static getUsers(...fields){
        const users = this.#users;
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
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);//[id,psword]
        //console.log(userKeys);
        const userInfo = userKeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
}

module.exports= UserStorage;