import { getProduct, getProducts } from "./api/productApi.js";
import { DetailPage } from "./pages/DetailPage.js";
import { HomePage } from "./pages/HomePage.js";

const enableMocking = () =>
  import("./mocks/browser.js").then(({ worker }) =>
    worker.start({
      onUnhandledRequest: "bypass",
    }),
  );

const push = (path) => {
  history.pushState({}, "", path);
  render();
};

async function render() {
  const $root = document.querySelector("#root");

  if (location.pathname === "/") {
    $root.innerHTML = HomePage({ loading: true });

    const data = await getProducts();

    $root.innerHTML = HomePage({ loading: false, ...data });

    document.body.addEventListener("click", (event) => {
      if (event.target.closest(".product-card")) {
        const productId = event.target.closest(".product-card").dataset.productId;

        push(`/products/${productId}`);
      }
    });
  } else {
    const productId = location.pathname.split("/").pop();
    console.log(productId);
    $root.innerHTML = DetailPage({ loading: true });
    const data = await getProduct(productId);
    $root.innerHTML = DetailPage({ product: data, loading: false });
  }
}

window.addEventListener("popstate", render);

async function main() {
  render();
}

// 애플리케이션 시작
if (import.meta.env.MODE !== "test") {
  enableMocking().then(main);
} else {
  main();
}
