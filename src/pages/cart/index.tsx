import { Container, SubPageHeader } from "../../shared";
import CartItemsTable from "./CartItemsTable";

const Cart = () => {
  return (
    <>
      <SubPageHeader title="Carrito" />
      <Container className="mt-15 mb-10">
        <CartItemsTable />
      </Container>
    </>
  );
};

export default Cart;
