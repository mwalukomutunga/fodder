import FilterModel from "../Components/FilterModel";
import PostItem from "../Components/PostItem";
import Container from "../Components/Container";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import requests from "../agent";
import Pagination from "../Components/Pagination";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const Paginate = (num) => {
    setCurrentPage(num);
  };

  useEffect(() => {
    requests.get("/posts").then((res) => {
      setPosts(res);
    });
  }, []);
  // const Paginate =(number) =>setCurrentPage(number);
  //

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Container>
        {currentPosts.map((item, index) => (
          <PostItem key={index} post={item} />
        ))}
      </Container>
      <Pagination
        Paginate={Paginate}
        postPerPage={postPerPage}
        totalPosts={posts.length}
      />
      <FilterModel />
    </>
  );
}
