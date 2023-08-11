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

const users={
    id:["asd","asdf","qwer"],
    psword:["123","1234","1211"],
};


const process={
    login:(req,res)=>{
        const id = req.body.id;
        const psword= req.body.psword;

        if(users.id.includes(id)){
            const idx=users.id.indexOf(id);
            if(users.psword[idx]===psword){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success:false,
            msg:"로그인에 실패하셨습니다.",
        });
    },
};

module.exports={
    output,
    process,
};