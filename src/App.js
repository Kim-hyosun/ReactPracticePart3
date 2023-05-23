import { Routes, Route } from "react-router-dom";

// layout
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

// components
// 위로 가기
import GoUp from "./components/GoUp";
// 주요 메뉴
import About from "./components/About";
import Menu1 from "./components/Menu1";
import Menu2 from "./components/Menu2";
import Service from "./components/Service";
import Product from "./components/Product";
import Board from "./components/Board";
// 회원가입 & 로그인
import Login from "./components/Login";
import Join from "./components/Join";
// 페이지를 찾을 수 없습니다
import NotFoundPage from "./components/NotFoundPage";

// style
import "./assets/style/style.scss";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/about">
          <Route index element={<About />} />
          <Route path=":m1" element={<Menu1 />} />
          <Route path=":m2" element={<Menu2 />} />
        </Route>

        <Route path="/service" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/board" element={<Board />} />

        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      <GoUp />
    </>
  );
}

export default App;
