(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_7th_chapter2-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=e=>{if(!e||e===`?`)return{};let t=new URLSearchParams(e),n=Object.fromEntries(t.entries());return n},a=e=>{if(!e||Object.keys(e).length===0)return``;let t=new URLSearchParams(e);return t.toString()},o=e=>{if(e===`*`)return/./;let t=e.replace(/\//g,`\\/`),n=t.replace(/:(\w+)/g,`(?<$1>[^/]+)`);return RegExp(`^${n}$`)},s=(e,t)=>{let n=o(e),r=n.exec(t);if(!r)return{matched:!1,params:{}};let i=r.groups||{};return{matched:!0,params:i}},c=(e,t)=>{let n=`/front_7th_chapter2-1/`,r=t;n!==`/`&&t.startsWith(n)&&(r=t.slice(n.length-1));for(let t of e){let e=s(t.path,r);if(e.matched)return{route:t,params:e.params}}return null};let l=null;const u=async e=>{l&&(l(),l=null);let t=location.pathname,n=location.search,r=c(e,t);if(!r){console.error(`[오류] 매칭되는 라우트 없음:`,t);return}let{route:a,params:o}=r,s=i(n),u=document.querySelector(`#root`);if(a.component.loading){let e=a.component.loading({params:o,query:s});u.innerHTML=e}let d=await a.component({params:o,query:s});u.innerHTML=d,a.setupHandlers&&(l=a.setupHandlers())},d=(e,t,n={})=>{let r=a(n),i=r?`${t}?${r}`:t;history.pushState({},``,i),u(e)},f=e=>{document.addEventListener(`click`,t=>{let n=t.target.closest(`[data-link]`);if(n){t.preventDefault();let r=n.getAttribute(`href`);d(e,r);return}let r=t.target.closest(`.product-card`);if(r){if(t.target.closest(`.add-to-cart-btn`))return;let n=r.dataset.productId;d(e,`/product/${n}`);return}})},p=e=>{window.addEventListener(`popstate`,()=>{u(e)})},m=e=>(f(e),p(e),u(e),{push:(t,n={})=>d(e,t,n)}),h=()=>`
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold text-gray-900">
            <a href="/" data-link="">쇼핑몰</a>
          </h1>
          <div class="flex items-center space-x-2">
            <!-- 장바구니 아이콘 -->
            <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  `,g=()=>`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© ${new Date().getFullYear()} 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `,_=({children:e})=>`
    <div class="min-h-screen bg-gray-50">
      ${h()}
      <main class="max-w-md mx-auto px-4 py-4">${e}</main>
      ${g()}
    </div>
  `,v=({value:e=``}={})=>`
    <div class="mb-4">
      <div class="relative">
        <input
          type="text"
          id="search-input"
          placeholder="상품명을 검색해보세요..."
          value="${e}"
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  `,y=({category1:e=``,category2:t=``,categories:n={}}={})=>{let r=Object.keys(n),i=e&&n[e]?Object.keys(n[e]):[],a=[];return e&&(a.push(e),t&&a.push(t)),`
    <div class="space-y-2">
      <!-- 브레드크럼 -->
      <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">카테고리:</label>
        <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>${a.length>0?`<span class="text-xs text-gray-500">&gt;</span><button data-breadcrumb="category1" data-category1="${e}" class="text-xs hover:text-blue-800 hover:underline">${e}</button>`:``}${t?`<span class="text-xs text-gray-500">&gt;</span><span class="text-xs text-gray-600 cursor-default">${t}</span>`:``}
      </div>

      <!-- 카테고리 1depth 버튼들 -->
      ${e?``:r.length>0?`
        <div class="flex flex-wrap gap-2">
          ${r.map(e=>`
            <button
              data-category1="${e}"
              class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              ${e}
            </button>
          `).join(``)}
        </div>
      `:`
        <div class="flex flex-wrap gap-2">
          <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
        </div>
      `}

      <!-- 카테고리 2depth 버튼들 -->
      ${e&&i.length>0?`
        <div class="flex flex-wrap gap-2">
          ${i.map(n=>`
            <button
              data-category1="${e}"
              data-category2="${n}"
              class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors ${t===n?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}"
            >
              ${n}
            </button>
          `).join(``)}
        </div>
      `:``}
    </div>
  `},b=({sort:e=`price_asc`,limit:t=20}={})=>{let n=[{value:10,label:`10개`},{value:20,label:`20개`},{value:50,label:`50개`},{value:100,label:`100개`}],r=[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}];return`
    <div class="flex gap-2 items-center justify-between">
      <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">개수:</label>
        <select
          id="limit-select"
          class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          ${n.map(e=>`
            <option value="${e.value}" ${Number(t)===e.value?`selected=""`:``}>
              ${e.label}
            </option>
          `).join(``)}
        </select>
      </div>
      <div class="flex items-center gap-2">
        <label class="text-sm text-gray-600">정렬:</label>
        <select
          id="sort-select"
          class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        >
          ${r.map(t=>`
            <option value="${t.value}" ${e===t.value?`selected=""`:``}>
              ${t.label}
            </option>
          `).join(``)}
        </select>
      </div>
    </div>
  `},x=({filters:e={},categories:t={}}={})=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      ${v({value:e.search||``})}
      <div class="space-y-3">
        ${y({category1:e.category1,category2:e.category2,categories:t})}
        ${b({sort:e.sort,limit:e.limit})}
      </div>
    </div>
  `,S=({title:e,image:t,lprice:n,brand:r,productId:i})=>`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${i}"
    >
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img
          src="${t}"
          alt="${e}"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
      </div>
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${e}
          </h3>
          <p class="text-xs text-gray-500 mb-2">${r||``}</p>
          <p class="text-lg font-bold text-gray-900">${Number(n).toLocaleString()}원</p>
        </div>
        <button
          class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors add-to-cart-btn"
          data-product-id="${i}"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  `,C=`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `,w=`
    <div class="text-center py-4">
      <div class="inline-flex items-center">
        <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
      </div>
    </div>
  `,T=({loading:e,products:t,total:n})=>`
    <div class="mb-6">
      <div>
        ${e?`
          <!-- 상품 그리드 -->
          <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            ${C.repeat(4)}
          </div>

          ${w}
          `:`
            <!-- 상품 개수 정보 -->
            <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${n}개</span>의 상품
            </div>
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
              ${t.map(S).join(``)}
            </div>
            `}
      </div>
    </div>
  `;async function E(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function D(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function O(){let e=await fetch(`/api/categories`);return await e.json()}const k=async({query:e={}})=>{let t={search:e.search||``,category1:e.category1||``,category2:e.category2||``,sort:e.sort||`price_asc`,limit:parseInt(e.limit)||20},[n,r]=await Promise.all([E(t),O()]);return _({children:`
      ${x({filters:t,categories:r})}
      ${T({loading:!1,products:n.products,total:n.pagination.total})}
    `})};k.loading=()=>_({children:`
      ${x({categories:{}})}
      ${T({loading:!0,products:[],total:0})}
    `});const A=()=>{let e=new URLSearchParams(window.location.search),t={};for(let[n,r]of e.entries())t[n]=r;return t},j=(e,t=!1)=>{let n=A(),r={...n,...e};Object.keys(r).forEach(e=>{(r[e]===``||r[e]===null||r[e]===void 0)&&delete r[e]});let i=new URLSearchParams(r),a=`${window.location.pathname}?${i.toString()}`;t?window.history.replaceState({},``,a):window.history.pushState({},``,a),window.dispatchEvent(new PopStateEvent(`popstate`))},M=()=>{let e=document.querySelector(`#root`);if(!e)return;let t=e=>{let t=e.target;if(t.id===`search-input`&&e.type===`keydown`&&e.key===`Enter`){e.preventDefault();let n=t.value.trim();j({search:n||void 0,page:void 0});return}if(t.id===`sort-select`&&e.type===`change`){j({sort:t.value,page:void 0});return}if(t.id===`limit-select`&&e.type===`change`){j({limit:t.value,page:void 0});return}if(t.classList.contains(`category1-filter-btn`)&&e.type===`click`){let e=t.dataset.category1;j({category1:e||void 0,category2:void 0,page:void 0});return}if(t.classList.contains(`category2-filter-btn`)&&e.type===`click`){let e=t.dataset.category1,n=t.dataset.category2;j({category1:e,category2:n||void 0,page:void 0});return}if(t.dataset.breadcrumb===`category1`&&e.type===`click`){let e=t.dataset.category1;j({category1:e,category2:void 0,page:void 0});return}if(t.dataset.breadcrumb===`reset`&&e.type===`click`){j({category1:void 0,category2:void 0,page:void 0});return}};return e.addEventListener(`keydown`,t),e.addEventListener(`change`,t),e.addEventListener(`click`,t),()=>{e.removeEventListener(`keydown`,t),e.removeEventListener(`change`,t),e.removeEventListener(`click`,t)}},N=({category1:e,category2:t})=>`
    <nav class="mb-4">
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <a href="/" data-link="" class="hover:text-blue-600 transition-colors">홈</a>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category1="${e}">
          ${e}
        </button>
        <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <button class="breadcrumb-link" data-category2="${t}">
          ${t}
        </button>
      </div>
    </nav>
  `,P=e=>{let t=Math.floor(e),n=5-t,r=`M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z`,i=`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="${r}"></path></svg>`,a=`<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="${r}"></path></svg>`;return i.repeat(t)+a.repeat(n)},F=e=>`
    <div class="bg-white rounded-lg shadow-sm mb-6">
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover product-detail-image">
        </div>
        <div>
          <p class="text-sm text-gray-600 mb-1">${e.mallName}</p>
          <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
          <div class="flex items-center mb-3">
            <div class="flex items-center">
              ${P(e.rating)}
            </div>
            <span class="ml-2 text-sm text-gray-600">${e.rating}.0 (${e.reviewCount}개 리뷰)</span>
          </div>
          <div class="mb-4">
            <span class="text-2xl font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</span>
          </div>
          <div class="text-sm text-gray-600 mb-4">
            재고 ${e.stock}개
          </div>
          <div class="text-sm text-gray-700 leading-relaxed mb-6">
            ${e.description}
          </div>
        </div>
      </div>
    </div>
  `,I=({productId:e,stock:t})=>`
    <div class="border-t border-gray-200 p-4">
      <div class="flex items-center justify-between mb-4">
        <span class="text-sm font-medium text-gray-900">수량</span>
        <div class="flex items-center">
          <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
            </svg>
          </button>
          <input type="number" id="quantity-input" value="1" min="1" max="${t}" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300
            focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
          <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
      <button id="add-to-cart-btn" data-product-id="${e}" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
        장바구니 담기
      </button>
    </div>
  `,L=()=>`
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="86940857379">
            <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
              <img src="https://shopping-phinf.pstatic.net/main_8694085/86940857379.1.jpg" alt="샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이" class="w-full h-full object-cover" loading="lazy">
            </div>
            <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">샷시 풍지판 창문 바람막이 베란다 문 틈막이 창틀 벌레 차단 샤시 방충망 틈새막이</h3>
            <p class="text-sm font-bold text-blue-600">230원</p>
          </div>
          <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="82094468339">
            <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
              <img src="https://shopping-phinf.pstatic.net/main_8209446/82094468339.4.jpg" alt="실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제" class="w-full h-full object-cover" loading="lazy">
            </div>
            <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">실리카겔 50g 습기제거제 제품 /산업 신발 의류 방습제</h3>
            <p class="text-sm font-bold text-blue-600">280원</p>
          </div>
        </div>
      </div>
    </div>
  `,R=async({params:e={}})=>{let t=e.id,n=await D(t);return _({children:`
      <main class="max-w-md mx-auto px-4 py-4">
        ${N({category1:n.category1,category2:n.category2})}
        ${F(n)}
        ${I({productId:n.productId,stock:n.stock})}
        <div class="mb-6">
          <a
            href="/"
            data-link
            class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors"
          >
            상품 목록으로 돌아가기
          </a>
        </div>
        ${L()}
      </main>
    `})},z=()=>_({children:`
    <main class="max-w-md mx-auto px-4 py-4">
      <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
          </linearGradient>
          <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
          </filter>
        </defs>
        
        <!-- 404 Numbers -->
        <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
        
        <!-- Icon decoration -->
        <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
        <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
        
        <!-- Message -->
        <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
        
        <!-- Subtle bottom accent -->
        <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
      </svg>
      
      <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
    </div>
    </main>
  `}),B=()=>r(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`,serviceWorker:{url:`/front_7th_chapter2-1/mockServiceWorker.js`}})),V=[{path:`/`,component:k,setupHandlers:M},{path:`/product/:id`,component:R},{path:`*`,component:z}];async function H(){let e=m(V);window.router=e}B().then(H);