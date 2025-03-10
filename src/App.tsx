import { FormEvent, useCallback, useEffect, useState } from "react";
import ProductCardContainer from "./components/ProductCardContainer";
import ErrorComponent from "./components/ErrorComponent";
import LoadingComponent from "./components/LoadingComponent";
import SearchForm from "./components/SearchForm";
import useFetchPosts from "./hooks/useFetchPosts";

export interface Ipost {
  title: string;
  body: string;
  id: number;
  userId: number;
}
const App = () => {
  const [searchPosts, setSearchPosts] = useState<Ipost[]>([]);
  const { error, loading, posts } = useFetchPosts();

  const [count, setCount] = useState(0);

  const searchHandler = useCallback(
    async (e: FormEvent, search: string) => {
      e.preventDefault();
      const resultPosts: Ipost[] = posts.filter((post) =>
        post.title.toLowerCase().includes(search?.toLowerCase())
      );
      console.log(resultPosts)
      setSearchPosts(resultPosts);
    },
    [posts]
  );

  useEffect(() => {
    setSearchPosts(posts.slice(0, 10));
  }, [posts]);

  return (
    <div className="container  mt-5 justify-center justify-items-center grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-auto">
      <div className=" mb-5 col-span-full justify-self-stretch">
        <SearchForm searchHandler={searchHandler} loading={loading} />
      </div>
      {loading && <LoadingComponent />}
      {error && <ErrorComponent error={error} />}
      {!loading && !error && <ProductCardContainer posts={searchPosts} />}
    </div>
  );
};

export default App;
