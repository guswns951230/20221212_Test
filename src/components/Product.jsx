import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>값을 입력받아 페이지를 이동합니다.</h1>
      <input type="text" onChange={onChangeInput} />
      <Link to={`/product/${value}`}>페이지 이동</Link>
      <Outlet />
    </div>
  );
};

export default Product;
