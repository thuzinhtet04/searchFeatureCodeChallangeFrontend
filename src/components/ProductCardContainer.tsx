import { memo, useState } from "react";
import PostCard from "./PostCard";
import { Ipost } from "../App";

const ProductCardContainer = ({ posts }: { posts: Ipost[] }) => {
  const [startIndex, setStartIndex] = useState<number>(0); //for pagination

  return (
    <>
      {posts.length === 0 ? (
        <p className=" text-center text-lg col-span-full ">
          There is no post you search. Try different{" "}
        </p>
      ) : (
        posts
          .slice(startIndex, startIndex + 10)
          .map((post, index) => (
            <PostCard key={index} title={post.title} body={post.body} />
          ))
      )}
    </>
  );
};

export default memo(ProductCardContainer);
