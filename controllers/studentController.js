const {student}=require("../models/studentModel")
const create_student=async(req,res)=>{
    const s= await student.insertOne(req.body)
    await res.send(s)}
const create_students=async(req,res)=>{
    const s=await student.insertMany(req.body)
    await res.send(s)
}
const students=async(req,res)=>{
    const s=await student.find()
    await res.send(s)
}
const studento=async(req,res)=>{
    const s=await student.find(req.body)
    await res.send(s)
}
const studentById=async(req,res)=>{
    const s=await student.find({_id:req.params.id})
    await res.send(s)
}
const  updateo=async(req,res)=>{
    const s=await student.updateOne({name:req.body.name},
                                    {$set:{city:req.body.city}}) 
                                    
    await res.send(s)
}
const updatem=async(req,res)=>{
    const s=await student.updateMany({course:req.body.course},
                                    {$set:{gender:req.body.gender}}
    )
    await res.send(s)
}
const updateById=async(req,res)=>{
    const s=await student.updateOne({_id:req.params.id},
                                    {$set:{city:req.body.city}}
    )
    await res.send(s)
}
const deleteo=async(req,res)=>{
    const s=await student.deleteOne({name:req.body.name})
    await res.send(s)
}
const deletem=async(req,res)=>{
    const s=await student.deleteMany({gender:req.body.gender})
    await res.send(s)
}
const deleteById=async(req,res)=>{
    const s=await student.deleteOne({_id:req.params.id})
    await res.send(s)
}

module.exports={create_student,create_students,
    students,studento,studentById,updateo,
    deleteo,updatem,updateById,deletem,deleteById}