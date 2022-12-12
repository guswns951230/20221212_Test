import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>{id}</h2>
      <p>상품의 이름으로 상품 페이지를 출력하고 있습니다.</p>
    </div>
  );
};

export default ProductPage;
