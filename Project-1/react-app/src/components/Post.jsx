import { Link } from "react-router-dom";
import classess from "./Post.module.css";

function Post({ id, author, body }) {
  return (
    <li className={classess.post}>
      <Link to={id}>
        <p className={classess.author}>{author}</p>
        <p className={classess.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;
