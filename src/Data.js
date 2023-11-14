import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "./Firebase";

 export async function getTrending(collectionName,field,operator,value){
    const trending=query(collection(db,collectionName),where(field,operator,value),limit(12));
    let data=[]
    await getDocs(trending).then(snapShot=>{
        snapShot.docs.forEach(element => {
      data.push(element.data())
        });
    })
   return data;
};
