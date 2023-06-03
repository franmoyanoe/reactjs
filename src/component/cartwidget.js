function CartWidget() {
  return (
    <div class="cart-iconos">
      <div id="cart">
        <button class="btn--black" id="btnFinalizar">
          Finalizar compra
        </button>
        <div class="cart-contador">
          <div id="contador-cart">0</div>
          <i id="bi-cart" class="bi bi-cart2"></i>
        </div>
      </div>
      <div class="none" id="container-cart"></div>
    </div>
  );
}

export default CartWidget;
