import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPost } from "../action/post.action";
import moment from "moment";

const AddPost = () => {

  const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();
  const {handleSubmit, register, formState:{errors}} = useForm()


/**
 * Send the form in the page
 * @param {*} data 
 */
const sendForm = async (data) => {
const postData = {
      content: data.feedback,
      createdAt: moment().startOf().fromNow(),
      score: 0,
      user: {
        image: {
        webp: `./images/avatars/${user.image.webp.split('/')[3]}`
        },
        username: user.username,
       
      },
      
      replies: []
   
};
await dispatch(addPost(postData))
 dispatch(getPost())


};


  return (
    <form
      className="flex flex-col bg-white h-40 rounded-xl w-full p-6 mt-12 "
    
      onSubmit={handleSubmit(sendForm)}
    >
      <textarea
      
        className="border border-gray-400 rounded-md mb-2"
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Add a comment"
        {...register("feedback", {require: true})}
      ></textarea>
      {errors.feedback &&  <p className="text-red-700 italic -mt-2">The minimum of feedback is 12 characters</p> }
      <div className="flex justify-between">
        {
          user.image && 
        <img src={`../../public/assets/${String(user.image.webp.split('/')[3])}`} alt="" className="w-8"/>
        }
        <input
        
          type="submit"
          value="SEND"
          className="text-white bg-blue-800 w-1/4 rounded-md text-xs "
        />
        
      </div>
    </form>
  );
};

export default AddPost;

