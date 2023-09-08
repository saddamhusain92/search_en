import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/configration";
function SignOut() {
  return (
    <div>
        <button
        onClick={()=>signOut(auth)}
        type="button"
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Sign Out
      </button>
    </div>
  )
}

export default SignOut