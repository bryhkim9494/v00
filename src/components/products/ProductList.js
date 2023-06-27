import ProductDetail from "./ProductDetail";

const ProductList = () => {

    // 컨테이너형 컴포넌트

    const products = [
    {pno:1,pname:'상품1',price:3000, imgFile:'j02.jpg'},
    {pno:2,pname:'상품2',price:5000, imgFile:'j04.jpg' },
    {pno:3,pname:'상품3',price:7000, imgFile:'j03.jpg'},
    {pno:4,pname:'상품4',price:9000, imgFile:'j04.jpg'},
    {pno:5,pname:'상품5',price:1000, imgFile:'j05.jpg'},
  ]
 

    return (  
        <ul className="productList">
            {products.map( p => <ProductDetail key={p.pno} product={p}></ProductDetail>)}
        </ul>
    );
}
 
export default ProductList;