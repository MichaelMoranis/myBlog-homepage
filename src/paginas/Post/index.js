import "./Post.css"
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";


export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if(!post) {
    return <h1>post nao encontrado</h1>
  }

  return (
    <PostModelo
      fotoCapa={`/assets/posts/${post.id}/capa.jpeg`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>
            {post.texto}
        </ReactMarkdown>
      </div>
    </PostModelo>
  );
}
