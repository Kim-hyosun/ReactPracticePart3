import { useNavigate, useParams } from "react-router-dom";

function Menu1() {
  const { m1 } = useParams();
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/");
  };
  return (
    <div className="wrapper">
      <h2>{m1}</h2>
      <button onClick={goTo}>이전으로</button>
    </div>
  );
}

export default Menu1;
