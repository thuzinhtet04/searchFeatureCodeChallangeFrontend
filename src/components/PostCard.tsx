import { Ipost } from "../App";

const PostCard = ({ title, body }: Pick<Ipost, "title" | "body">) => {
  return (
    <div className="max-w-sm p-6 cursor-pointer bg-white border col-span-1 border-gray-200 flex flex-col rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-700">
      <h5 className="mb-2 text-xl  font-bold tracking-tight text-gray-900 dark:text-white">
        {title.toUpperCase()}
      </h5>

      <p className="mb-3 font-normal mt-auto text-gray-700 line-clamp-4 dark:text-gray-400">
        {body}
      </p>
    </div>
  );
};

export default PostCard;
