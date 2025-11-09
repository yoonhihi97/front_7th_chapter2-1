import { PageLayout } from "./PageLayout";
import { Breadcrumb } from "../components/detail/Breadcrumb.js";
import { ProductDetailInfo } from "../components/detail/ProductDetailInfo.js";
import { QuantitySelector } from "../components/detail/QuantitySelector.js";
import { RelatedProducts } from "../components/detail/RelatedProducts.js";

/**
 * 상품 상세 페이지
 * @param {Object} props
 * @param {boolean} props.loading - 로딩 상태
 * @param {Object} props.product - 상품 상세 정보
 * @returns {string} 상품 상세 페이지 HTML
 */
export const DetailPage = ({ loading, product }) => {
  return PageLayout({
    children: loading
      ? `
        <div class="py-20 bg-gray-50 flex items-center justify-center">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">상품 정보를 불러오는 중...</p>
          </div>
        </div>
      `
      : `
        <main class="max-w-md mx-auto px-4 py-4">
          ${Breadcrumb({ category1: product.category1, category2: product.category2 })}
          ${ProductDetailInfo(product)}
          ${QuantitySelector({ productId: product.productId, stock: product.stock })}
          <div class="mb-6">
            <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md
              hover:bg-gray-200 transition-colors go-to-product-list">
              상품 목록으로 돌아가기
            </button>
          </div>
          ${RelatedProducts()}
        </main>
      `,
  });
};
