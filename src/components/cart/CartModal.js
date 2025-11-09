import { CartHeader } from "./CartHeader.js";
import { CartItemList } from "./CartItemList.js";
import { CartFooter } from "./CartFooter.js";

/**
 * 장바구니 모달 컴포넌트
 * @returns {string} 장바구니 모달 HTML
 */
export const CartModal = () => {
  return `
    <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
      <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
        ${CartHeader()}
        <!-- 컨텐츠 -->
        <div class="flex flex-col max-h-[calc(90vh-120px)]">
          ${CartItemList()}
        </div>
        ${CartFooter()}
      </div>
    </div>
  `;
};
