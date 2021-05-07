import {connectToDatabase} from '../../util/mongodb'


export default async function DeleteElement(req,res){
    const {db} = await connectToDatabase();// connect with the data base
    const {id} = req.query;
    const result = await db.collection("Stores").deleteOne({id});
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

