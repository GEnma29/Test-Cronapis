import {connectToDatabase} from '../../util/mongodb'


export default async function DeleteElement(req,res){
    const {db} = await connectToDatabase();// connect with the data base
    const data = req.body;
    const result = await db.collection("Stores").insertOne({
        name: data.name,
        Direction: data.Direction,
        phone:data.phone,
        email:data.email,
        Location:{
          Latitude:data.latitude,
          longitude:data.longitude,
        },
        imageUrl:data.imageUrl,});// insertData
    console.log(`New Store Create with the following id: ${result.id}`);
}
/**const DeleteData = async (property)=>{
    const data = await fetch(`http://localhost:3000/api/CRUD?property_id=${property.id}&guest=Ado`)
    const res= await data.json()
    console.log(res)
  } */