import { useEffect, useState } from "react";
import { Post } from "./Post";

export const Posts = () => {
    const [posts, setPosts] = useState([{id: 0}]);
    useEffect(() => {
       (async () => {
            try {
                let response = await fetch("http://localhost:7070/posts");
                if (!response.ok) {
                    setPosts({id: 0})
                }
                const json = await response.json();
                json.sort((a, b) => b.id - a.id)
                setPosts(json)
            } catch(e) {
                console.log(e.message)
            }
            
       })()
       
    }, []);
   
    return (
        posts.map(
            (post, index) => {
                if (post.id === 0) {
                    return <div key={ index }></div>
                }
                return (
                    <Post key={ index } data = { post }/>
                )
            }
        )
    )

}