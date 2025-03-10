import React, { useEffect, useState } from "react";
import { Ipost } from "../App";
import { fetchPosts } from "../service/api/api";

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Ipost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const getPosts = async () => {
      try {
        setError(null);
        setLoading(true);
        const posts = await fetchPosts();
        setPosts(posts);
      } catch (e: any) {
        setError(e.message as string);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return { posts, loading, error };
};

export default useFetchPosts;
