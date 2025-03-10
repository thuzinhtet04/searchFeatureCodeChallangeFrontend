// import { Ipost } from "../../App";

import { Ipost } from "../../App";

export const fetchPosts = async (): Promise<Ipost[]> => {
  const res = await fetch( import.meta.env.VITE_BASE_URL +"/posts");

  if (res.ok) {
    const data = (await res.json()) as Ipost[];
    return data;
  } else {
    throw new Error("Something went wrong while loading posts");
  }
};
