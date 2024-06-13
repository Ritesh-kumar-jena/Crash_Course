import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true)
    setError(false)
    try {
      {
      let res=await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res?.data)
      setLoading(false)
      }
    } catch (error) {
      {
        setLoading(false)
        setError(true)
      }
    }
  }

  useEffect(()=>{
     fetchAndUpdateData()
  },[]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>

      {posts?.map((ele)=>(
        <Post {...ele} key={ele.id}/>
      ))}
    </div>
  );
}

export default Posts;
