import { BsFillReplyFill } from "react-icons/bs";
import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePost } from "../action/post.action";

const Comments = ({post}) => {
  console.log(post.id );

const dispatch = useDispatch()
    return (
        <div className=" bg-white h-40 rounded-xl box-content p-4 mt-8 pb-0 w-6/6 ">
      <div className="flex justify-start ">
        <img
          src={`../../public/assets/${String(
            post.user.image.webp.split("/")[3]
          )}`}
          alt=""
          className="w-8 h-8"
        />
        <div className="flex justify-between">
          <p className="font-bold mt-1 ml-2">{post.user.username}</p>
          <p className="text-slate-600 mt-1 ml-4">{post.createdAt}</p>
           <div>
         {post.user.username === "juliusomo" && <div className="flex cursor-pointer text-red-600 space-x-4">
          <div className="flex " onClick={() =>dispatch(deletePost(post.id))}>
            <MdDelete className=""/>
          <p className="text-xs  font-bold ml-1"> Delete</p>
          </div>
              <div className="flex  text-violet-800">
            <FaPen className="text-sm"/>
          <p className="text-xs  font-bold ml-1"> Edit</p>
          </div>


        </div> }
        </div>
        </div>
       
      </div>

      <div className="flex">
        <p className="text-xs my-2 text-gray-600 ">{post.content}</p>
      </div>
      <div className="flex items-center justify-between">
        {/* Incrémenter et Décrémenter */}
        <div className="vertical-center">
          <div className="custom-number-input h-8 w-20">
            <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
              <button
                data-action="decrement"
                className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center  text-violet-800 "
                name="custom-input-number"
                defaultValue="0"
              ></input>
              <button
                data-action="increment"
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex text-violet-800">
          <BsFillReplyFill />
          <p className="text-xs  font-bold"> Reply</p>
        </div>
      </div>
    </div>
    );
};

export default Comments;