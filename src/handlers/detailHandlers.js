import { navigateTo } from "../router/navigation.js";
import { routes } from "../main.js";

/**
 * DetailPage의 이벤트 핸들러를 등록하는 함수
 */
export const setupDetailPageHandlers = () => {
  const container = document.querySelector("#root");
  if (!container) return;

  // 이벤트 위임을 사용하여 동적으로 생성된 요소의 이벤트도 처리
  const handleEvent = (e) => {
    const target = e.target;

    // 브레드크럼 클릭 처리
    if (target.classList.contains("breadcrumb-link") && e.type === "click") {
      e.preventDefault();

      const category1 = target.dataset.category1;
      const category2 = target.dataset.category2;

      // category1만 있으면 1depth 카테고리로 이동
      if (category1 && !category2) {
        navigateTo(routes, "/", { category1 });
      }
      // category2도 있으면 2depth 카테고리로 이동
      else if (category1 && category2) {
        navigateTo(routes, "/", { category1, category2 });
      }

      return;
    }
  };

  // 이벤트 리스너 등록
  container.addEventListener("click", handleEvent);

  // 클린업 함수 반환
  return () => {
    container.removeEventListener("click", handleEvent);
  };
};
