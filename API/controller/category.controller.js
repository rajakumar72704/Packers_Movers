import '../models/connection.js';
import CategorySchemaModel from '../models/category.model.js';
import rs from 'randomstring';
import url from 'url';
import path from 'path';


export var save=async(req,res)=>{
 try{
    //console.log("hi");
    const lastObject= await CategorySchemaModel.findOne().sort({"_id":-1});
    //console.log(lastObject);
    const _id = lastObject==null?1:lastObject._id+1;
    if(!req.files||!req.files.caticon)
    {
        res.status(404).json({"status":false,"message":"Category icon is required"});
        return;
    }
      const caticon = req.files.caticon;
      const caticonnm = rs.generate(10)+"-"+Date.now()+"-"+caticon.name;
      let cDetails  = {...req.body,"caticonnm":caticonnm,"_id":_id};
        //console.log(cDetails);
      await CategorySchemaModel.create(cDetails);
      const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
      const uploadpath = path.join(__dirname,'../../UI/public/assets/uploads/caticons',caticonnm);
      await caticon.mv(uploadpath);
    res.status(201).json({"status":true});
 }catch(error){
  console.log(error);
    res.status(500).json({"status":false});        
 };
};

export const fetch=async(req,res)=>{
    try{
        const condition = req.query; //cleaner than url.parse
        const cList = await CategorySchemaModel.find(condition);
        if(cList.length===0){
            return res.status(404).json({"status":false,"msg":"Resource not found"});
        }
         res.status(200).json(cList);//array pass
    }catch(error){
        console.error("FETCH ERROR:",error);
        res.status(500).json({"status":false,"msg":"Internal Server Error"});
    }
 };

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    await CategorySchemaModel.deleteOne({ _id: id });

    res.status(200).json({
      status: true,
      message: "Category deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Delete failed"
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { catnm } = req.body;

    await CategorySchemaModel.updateOne(
      { _id: id },
      { $set: { catnm } }
    );

    res.status(200).json({
      status: true,
      message: "Category updated successfully"
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Update failed"
    });
  }
};
export const fetchById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await CategorySchemaModel.findOne({ _id: id });

    if (!category) {
      return res.status(404).json({ status: false });
    }

    res.status(200).json({
      status: true,
      category
    });

  } catch (err) {
    res.status(500).json({ status: false });
  }
};
