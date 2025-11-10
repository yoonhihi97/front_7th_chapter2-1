import { PageLayout } from "./PageLayout";
import { SearchForm } from "../components/search/index.js";
import { ProductList } from "../components/product/index.js";
import { getProducts } from "../api/productApi.js";

export const HomePage = async ({ query = {} }) => {
  // 1. query에서 필터 정보 추출
  const filters = {
    search: query.search || "",
    category1: query.category1 || "",
    category2: query.category2 || "",
    sort: query.sort || "price_asc",
    limit: parseInt(query.limit) || 20,
  };

  // 2. API 호출해서 상품 데이터 가져오기
  const data = await getProducts(filters);

  // 3. 페이지 렌더링
  return PageLayout({
    children: `
      ${SearchForm({ filters, pagination: data.pagination })}
      ${ProductList({ loading: false, products: data.products })}
    `,
  });
};
