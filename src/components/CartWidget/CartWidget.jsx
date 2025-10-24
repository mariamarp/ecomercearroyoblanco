import './CartWidget.css';
const CartWidget = () => {
  return (
    <div className="position-relative" style={{ cursor: "pointer" }}>
      <span style={{ fontSize: "1.5rem" }}>🛒</span>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ fontSize: "0.7rem" }}
      >
        1
      </span>
    </div>
  );
};

export default CartWidget;