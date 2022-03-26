import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import store from "../store";
export const signUp = ({ firstname, lastname, email, password }, onSuccess, onFailure) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: firstname+ " "+ lastname,
      })
      if (onSuccess) {
        onSuccess();
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      if (onFailure) {
        onFailure(error.message);
      }
    });
}

export const signIn = ({ email, password }, onSuccess, onFailure) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Sign in
      const user = userCredential.user;
      console.log("userSignedInSuccessfully")
      store.user.set({fullName: user.displayName, email:user.email,emailVerified:user.emailVerified,isAuthenticated:true})
      if (onSuccess) {
        onSuccess();
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export const forgotpassword = ({ email, onSuccess, onFailure }) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      //..
      if (onSuccess) {
        onSuccess();
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      if (onFailure) {
        onFailure(error.messaget);
      }
    });

}