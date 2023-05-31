import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const responce = await fetch("http://localhost:8080/posts");
  const resData = await responce.json();
  return resData.posts;
}
