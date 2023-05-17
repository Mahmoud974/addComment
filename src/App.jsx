import Post from "./components/Post";
import AddPost from "./components/AddPost";

import { useSelector } from "react-redux";
import { useState } from "react";


const App = () => {
  const posts = useSelector((state) => state.postReducer);
    

  return (
    <div className="">
      <div className="container max-w-3xl md:mx-auto flex items-center justify-center flex-col space-y-8 mx-4 rounded-xl mb-8">
        {Array.isArray(posts) &&
          posts.map((post, index) => 
          <Post post={post} key={index}/>
)}


        <AddPost  />
      </div>
    </div>
  );
};

export default App;
