import React, { useEffect, useState } from 'react'
import SignOut from '../SignOut'
import { auth, db, usercollectionRef } from '../../firebase/configration'
import { doc, getDocs,updateDoc } from 'firebase/firestore';
function Home() {
const[user,setUser] = useState({})
const[input,setInput] = useState("")
const[count,setCount] = useState(0)
const getUSer = async()=>{
    const data = await getDocs(usercollectionRef);
    const userList = data.docs.map((doc) => ({id:doc.id,...doc.data()}))
    const check = userList.find((id)=>id.uid==auth.currentUser.uid)
   setUser(check)
   setCount(check.hrefcount)
  
}
const  search = ()=>{
let url = "https://www.bing.com/search?q="   
for (var i = 1; i <=input.length; i++) {
var newString = input.slice(0, i)
window.open(url+newString)
}
updateForm()
}
const updateForm = async()=>{
  const userDoc = doc(db,"users",user.id)
  await updateDoc(userDoc,{hrefcount:count-1})
  getUSer()
}
useEffect(()=>{
getUSer()
},[])
  return (
    <div className='h-[100vh] bg-blue-100 p-2'>
        <div className='flex justify-end p-2 items-center gap-2'>
     {count}
        <small>Bal:{user.hrefcount}</small>
        <small className='font-bold'>{user.displayName}</small>
        <SignOut/>
        <img src={user.photoURL} className='h-5 w-5 rounded-full' alt='profile'/>
      
        </div> 
        <div>
        <div className='logo'>
    Heacking faizal coin🪙
  </div>
  <div class='search'>
    <input placeholder='Search' onChange={(e)=>setInput(e.target.value)}  type='text'/>
    <div className='button'>
    {user.hrefcount<=0?<button>Search</button>:<button  onClick={search} >Search</button>}
    </div>
  </div>
    
    </div>     
    </div>
  )
}

export default Home