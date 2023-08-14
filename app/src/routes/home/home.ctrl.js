"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require('../../models/User');
const output={
    home:(req,res)=>{
        //기능
        res.render("home/index");
    },
    login:(req,res)=>{
        //기능
        res.render("home/login");
    },
    register:(req,res)=>{
        res.render("home/register");
    }
};




const process={
    login: async (req,res)=>{
        const user = new User(req.body);
        const response = await user.login();
        // const id = req.body.id;
        // const psword= req.body.psword;
        // //const userStorage = new UserStorage();
        // console.log(UserStorage.getUsers("id","psword","name"));
        // const response={};
        // // if(users.id.includes(id)){
        // //     const idx=users.id.indexOf(id);
        // //     if(users.psword[idx]===psword){
        // //         response.success=true;
        // //         return res.json(response);
        // //     }
        // // }
        // response.success=true;
        // response.msg="로그인에 실패하셨습니다."
        //console.log(response);
        return res.json(response);
    },
    register: async(req,res)=>{
        const user = new User(req.body);
        const response = await user.register();
        // const id = req.body.id;
        // const psword= req.body.psword;
        // //const userStorage = new UserStorage();
        // console.log(UserStorage.getUsers("id","psword","name"));
        // const response={};
        // // if(users.id.includes(id)){
        // //     const idx=users.id.indexOf(id);
        // //     if(users.psword[idx]===psword){
        // //         response.success=true;
        // //         return res.json(response);
        // //     }
        // // }
        // response.success=true;
        // response.msg="로그인에 실패하셨습니다."
        //console.log(response);
        return res.json(response);
    }
};

module.exports={
    output,
    process,
};