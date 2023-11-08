//setting up the reduc reducers 
import { createSlice  } from "@reduxjs/toolkit";
const authSlice = createSlice({ //this will be accessable throughout the whole application 
    name: 'auth',
    initialState: { //all of this will be stored in local state, anytime the user close the browser or the tab, the info will still be there. So the user info will still be there. The only way to get rid of it is to clear the browser catch  
        mode: "light",
        user: null,
        token: null,
        posts: []
    },
    //setting the redux state and reducers 
    reducers: {
        setMode: (state) => {
            state.mode = state.mode == "light" ? "light" : "dark";
        },
        setLogins: (state, action) => {
            state.user = action.payload.user
            state.tokens = action.payload.token
        },
        setLogout: (state) => {
            state.user = null,
            state.tokens = null
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts
        },
        setPost: (state, action) => {
            const updatedPost = state.posts.map((post) => {
                if (post.post_id === action.payload.post_id) { return action.payload.post; }
            })
            state.posts = updatedPost;
        }
    }
})

export const { setMode, setLogins, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;

