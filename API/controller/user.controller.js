import "../models/connection.js";
import jwt from "jsonwebtoken";
import rs from "randomstring";
import url from "url";

//to link users model
import UserSchemaModel from "../models/user.model.js";
import sendMail from "./email.controller.js";

export const save=async(req,res)=>{
 var users=await UserSchemaModel.find();
 var l=users.length;
 var _id=l==0?1:users[l-1]._id+1;
 var userDetails={...req.body,"_id":_id,"role":"user","status":0,"info":Date()};
 try{
    await UserSchemaModel.create(userDetails);

    sendMail(userDetails.email, userDetails.password);
    res.status(201).json({"status":true});
 }catch(error){
  console.log(error);
    res.status(500).json({"status":false});        
 };
};


export const login=async(req,res)=>{

    // ✅ ONLY extract required fields
  const { email, password } = req.body;

  // ✅ Build clean query
  const userDetails = {
    email: email,
    password: password,
    status: 1
  };

//  var userDetails={...req.body,"status":1};
 var users=await UserSchemaModel.find(userDetails);       
 if(users.length>0)
 { 
  const payload=users[0].email;
  const key=rs.generate(50);
  const token=jwt.sign(payload,key); 
  res.status(200).json({"status":true,"token":token,"users":users[0]});
 }
 else
  res.status(500).json({"status":false,"token":"error"});    
};


export const fetch=async(req,res)=>{
  var userList=await UserSchemaModel.find(req.query);
  if(userList.length!=0)
    res.status(200).json(userList);
  else
    res.status(404).json({"status":"Resource not found"});    
 };


export var deleteUser=async(req,res)=>{
  try{
    let userDetails = await UserSchemaModel.findOne(req.body);
    if(userDetails){
      let user=await UserSchemaModel.deleteOne(req.body);   
      if(user)
        res.status(200).json({"status":"OK"});
      else
        res.status(500).json({"status": "Server Error"});
    }
    else
      res.status(404).json({"status":"Requested resource not available"});
  }catch(error){
    res.status(500).json({"status":false});        
  };
};  


export var update=async(req,res)=>{
  try{
    let userDetails = await UserSchemaModel.findOne(req.body.condition_obj);
    if(userDetails){
      let user=await UserSchemaModel.updateMany(req.body.condition_obj,{$set:req.body.content_obj});   
      if(user)
        res.status(200).json({"status":"OK"});
      else
        res.status(500).json({"status": "Server Error"});
    }
    else
      res.status(404).json({"status":"Requested resource not available"});
  }catch(error){
    res.status(500).json({"status":false});        
  };
};