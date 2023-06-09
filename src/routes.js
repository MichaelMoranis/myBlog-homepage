import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import Pagina404 from "paginas/Pagina404";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />}/>
          <Route path="sobremim" element={<SobreMim />}/>
        </Route>
          <Route path="posts/:id" element={<Post />} />
          <Route path="*" element={<Pagina404 />}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
