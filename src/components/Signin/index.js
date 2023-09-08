import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db, usercollectionRef } from "../../firebase/configration";
import { serverTimestamp, addDoc,getDocs } from "firebase/firestore";

function Signin() {
  const loginHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        const { uid, displayName, email, photoURL } = user;
        const data = await getDocs(usercollectionRef);
        const userList = data.docs.map((doc) => ({...doc.data()}))
        const check = userList.findIndex((id)=>id.uid==uid)
       if(check==-1){
        await addDoc(usercollectionRef, {
            uid,
            displayName,
            email,
            photoURL,
            hrefcount: 5,
            creatAt:serverTimestamp()
          });
       }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <button
        onClick={loginHandler}
        type="button"
        className="rounded-md bg-white px-2.5 py-1.5 text-sm   text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <span className="text-gray-500 uppercase">Sign With </span>
        <span className="text-blue-400">G</span>
        <span className="text-amber-500">o</span>
        <span className="text-red-500">o</span>
        <span className="text-blue-400">g</span>
        <span className="text-green-400">l</span>
        <span className="text-red-500">e </span>
      </button>
    </div>
  );
}

export default Signin;
