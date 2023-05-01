import "./Post.css";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Pagina404 from "paginas/Pagina404";
import { Routes, Route } from "react-router-dom";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <Pagina404 />;
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element=<PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.jpeg`}
            titulo={post.titulo}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>{post.texto}</ReactMarkdown>
            </div>
          </PostModelo>
        ></Route>
      </Route>
    </Routes>
  );
}
