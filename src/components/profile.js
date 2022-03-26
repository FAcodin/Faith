import React, { useState } from "react";
import store from "../store";
function Profile() {
    const { user } = useState(store)
    console.log(user.get())
    return (
    "hello" + user.displayName.get()
    )
}
export default Profile;