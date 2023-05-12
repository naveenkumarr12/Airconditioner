import "./styles.css";
const product = {
  id: "AC1023",
  name: "Air Conditioner",
  price: 29600,
  specification: "1 Ton, 4 Star Rating",
  warranty: "5 Years Compressor Warranty"
};

function Product() {
  const { name, price, specification, warranty } = product;
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>{name} </h1>
      <p>Price: INR {price}</p>
      <p>specification: {specification}</p>
      <p>Warranty: {warranty}</p>
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <Product />
    </div>
  );
}
