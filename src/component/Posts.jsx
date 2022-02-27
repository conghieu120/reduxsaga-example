import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostStart } from "../redux/posts";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post);
    console.log(posts);
    useEffect(() => {
        dispatch(getPostStart());
    }, []);
    return (
        <div>
            {posts.loading ? (
                <h2>Loading.....</h2>
            ) : (
                posts.posts.map((post) => (
                    <li key={post.id}>
                        <span>{post.title}</span>
                    </li>
                ))
            )}
        </div>
    );
};

export default Posts;
