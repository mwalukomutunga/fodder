import FilterModel from "../Components/FilterModel";
import PostItem from "../Components/PostItem";
import Container from "../Components/Container";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import requests from "../agent";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { data: session, status } = useSession();
  const loading = status === "loading";


  useEffect(() => {
    requests.get("/posts").then((res) => {
      setPosts(res);
    });   
  }, []);
  if (typeof window !== "undefined" && loading) return null;
  // If no session exists, display access denied message
  //   if (!session) {
  //     return (
  //       <h1>
  //         <p> Access denied </p>
  //       </h1>
  //     )
  //   }
  return (
    <>
      <Container>
        {posts.map((item, index) => (
          <PostItem key={index} post={item} />
        ))}
      </Container>
      <FilterModel />
    </>
  );
}
