"use strict";

const output={
    home:(req,res)=>{
        //기능
        res.render("home/index");
    },
    login:(req,res)=>{
        //기능
        res.render("home/login");
    },
};
const process={
    login:(req,res)=>{
        console.log(req.body);
    }
}

module.exports={
    output,
    process,
};