
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { fDB } from "../../config/firebase";
//i need to create a signout asuncthunk and update store state for the sake of flux and also this needs to happen when i willl create custom user modal

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ auth, name, email, password }, { rejectWithValue }) => {
    console.log("at tthunk", { auth, email, password });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        // Update profile
        return updateProfile(user, {
          displayName: name,
        });
      })
      .then(() => {
        // Profile updated successfully
        // "User Name"
        // const displayName = auth.currentUser.displayName;
        // "https://example.com/user-photo.jpg"
        // const photoURL = auth.currentUser.photoURL;
      })
      .catch((error) => {
        // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ auth, email, password }, { rejectWithValue }) => {
    // signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //     // Signed in
    //     // const user = userCredential.user;
    //     console.log("here is the user",userCredential)
    //     return {userCredential}
    //     // ...
    // })
    // .catch((error) => {
    //     // const errorCode = error.code;
    //     // const errorMessage = error.message;
    //     console.log("here is the user error",error)
    //     // ..
    // });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const token = await userCredential.user.getIdToken();

      // Extract only the necessary user data
      const { uid, displayName, eMail, photoURL } = userCredential.user;
      const userDocRef = await doc(fDB, "users", uid);

      // Get the document snapshot
      const docSnap = await getDoc(userDocRef);
      console.log("looking here ", docSnap);
      console.log("here is the user", userCredential);
      return {
        user: { uid, displayName, eMail, photoURL },
        token,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }

  },
);

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

  }
)
export const signOutUser=createAsyncThunk(
  'auth/signout',
  async ({auth},{rejectWithValue})=>{
    try{
      await auth.signOut()
      return true;
    }
    catch(error){
      return rejectWithValue(error.message);
    }
  }
)

const initialState = {
    user:{
      loading: false,
      userInfo: null,
      userToken: null,
      error: null,
      success: false,
    }
  }
  

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log("user at fulfilled", payload);
        state.userInfo = payload.user;
        state.userToken = payload.token; // Store the user token in the state
        state.success = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    // Add other cases...
  },
});


export const userReducer = authSlice.reducer;

  const authSlice = createSlice({
    name: 'authUser',
    initialState:initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        })
        .addCase(registerUser.fulfilled, (state, { payload }) => {
          return {user:{ loading : false, userInfo:payload, userToken:payload, success:true, error:null}}
        })
        .addCase(registerUser.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = payload;
          state.success = false;
        })
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        })
        .addCase(loginUser.fulfilled, (state, { payload }) => {
          return {user:{ loading : false, userInfo:payload, userToken:payload, success:true, error:null}}
        })
        .addCase(loginUser.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = payload;
          state.success = false;
        }).addCase(signOutUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(signOutUser.fulfilled, (state, { payload }) => {
          return {user:{loading : false, userInfo:null, userToken:null, success:false, error:null}}
        })
        .addCase(signOutUser.rejected, (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        });
        // Add other cases...
    },
  });
  
  export const userReducer=authSlice.reducer;

