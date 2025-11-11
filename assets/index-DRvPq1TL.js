(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_7th_chapter2-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})},i=e=>{if(!e||e===`?`)return{};let t=new URLSearchParams(e),n=Object.fromEntries(t.entries());return n},a=e=>{if(!e||Object.keys(e).length===0)return``;let t=new URLSearchParams(e);return t.toString()},o=e=>{if(e===`*`)return/./;let t=e.replace(/\//g,`\\/`),n=t.replace(/:(\w+)/g,`(?<$1>[^/]+)`);return RegExp(`^${n}$`)},s=(e,t)=>{let n=o(e),r=n.exec(t);if(!r)return{matched:!1,params:{}};let i=r.groups||{};return{matched:!0,params:i}},c=(e,t)=>{let n=`/front_7th_chapter2-1/`,r=t;n!==`/`&&t.startsWith(n)&&(r=t.slice(n.length-1));for(let t of e){let e=s(t.path,r);if(e.matched)return{route:t,params:e.params}}return null};let l=null;const u=async e=>{l&&(l(),l=null);let t=location.pathname,n=location.search,r=c(e,t);if(!r){console.error(`[오류] 매칭되는 라우트 없음:`,t);return}let{route:a,params:o}=r,s=i(n),u=document.querySelector(`#root`);if(a.component.loading){let e=a.component.loading({params:o,query:s});u.innerHTML=e}let d=await a.component({params:o,query:s});u.innerHTML=d,a.setupHandlers&&(l=a.setupHandlers()),window.scrollTo(0,0)},d=(e,t,n={})=>{let r=`/front_7th_chapter2-1/`,i=r===`/`?t:r.slice(0,-1)+t,o=a(n),s=o?`${i}?${o}`:i;history.pushState({},``,s),u(e)},ee=e=>{document.addEventListener(`click`,t=>{let n=t.target.closest(`[data-link]`);if(n){t.preventDefault();let r=n.getAttribute(`href`);d(e,r);return}let r=t.target.closest(`.product-card, .related-product-card`);if(r){if(t.target.closest(`.add-to-cart-btn`))return;let n=r.dataset.productId;d(e,`/product/${n}`);return}})},te=e=>{window.addEventListener(`popstate`,()=>{u(e)})},ne=e=>(ee(e),te(e),u(e),{push:(t,n={})=>d(e,t,n)}),f=`shopping_cart`,p=()=>{let e=localStorage.getItem(f);if(!e)return[];try{let t=JSON.parse(e);return t?.items||[]}catch{return[]}},m=e=>{let t=localStorage.getItem(f),n=!1;if(t)try{let e=JSON.parse(t);n=e.selectedAll||!1}catch{}let r={items:e,selectedAll:n};localStorage.setItem(f,JSON.stringify(r))},h=(e,t)=>{let n=p(),r=n.find(t=>t.id===e.id);r?r.quantity+=t:n.push({id:e.id,title:e.title,price:e.price,image:e.image,quantity:t,selected:!1}),m(n)},g=(e,t)=>{let n=p(),r=n.find(t=>t.id===e);r&&(r.quantity=Math.max(1,t),m(n))},_=e=>{let t=p(),n=t.filter(t=>t.id!==e);m(n)},v=()=>{let e=p(),t=e.filter(e=>!e.selected);m(t)},y=()=>{localStorage.removeItem(f)},b=(e,t)=>{let n=p(),r=n.find(t=>t.id===e);r&&(r.selected=t);let i=n.length>0&&n.every(e=>e.selected),a={items:n,selectedAll:i};localStorage.setItem(f,JSON.stringify(a))},x=e=>{let t=p();t.forEach(t=>{t.selected=e});let n={items:t,selectedAll:e};localStorage.setItem(f,JSON.stringify(n))},S=()=>{let e=p();return e.length},re=({type:e=`default`,title:t=`쇼핑몰`}={})=>{let n=S(),r=n>0?`<span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">${n}</span>`:``;return e===`detail`?`
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 class="text-lg font-bold text-gray-900">${t}</h1>
            </div>
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
                ${r}
              </button>
            </div>
          </div>
        </div>
      </header>
    `:`
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
              ${r}
            </button>
          </div>
        </div>
      </div>
    </header>
  `},C=()=>{let e=document.getElementById(`cart-icon-btn`);if(!e)return;let t=S(),n=e.querySelector(`span`);if(t>0)if(n)n.textContent=t;else{let n=document.createElement(`span`);n.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center`,n.textContent=t,e.appendChild(n)}else n&&n.remove()},ie=()=>`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© ${new Date().getFullYear()} 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>
  `,w=({children:e,headerType:t=`default`,headerTitle:n=`쇼핑몰`})=>`
    <div class="min-h-screen bg-gray-50">
      ${re({type:t,title:n})}
      <main class="max-w-md mx-auto px-4 py-4">${e}</main>
      ${ie()}
    </div>
  `,ae=({value:e=``}={})=>`
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
  `,oe=({category1:e=``,category2:t=``,categories:n={}}={})=>{let r=Object.keys(n),i=e&&n[e]?Object.keys(n[e]):[],a=[];return e&&(a.push(e),t&&a.push(t)),`
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
  `},T=({sort:e=`price_asc`,limit:t=20}={})=>{let n=[{value:10,label:`10개`},{value:20,label:`20개`},{value:50,label:`50개`},{value:100,label:`100개`}],r=[{value:`price_asc`,label:`가격 낮은순`},{value:`price_desc`,label:`가격 높은순`},{value:`name_asc`,label:`이름순`},{value:`name_desc`,label:`이름 역순`}];return`
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
  `},E=({filters:e={},categories:t={}}={})=>`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      ${ae({value:e.search||``})}
      <div class="space-y-3">
        ${oe({category1:e.category1,category2:e.category2,categories:t})}
        ${T({sort:e.sort,limit:e.limit})}
      </div>
    </div>
  `,D=({title:e,image:t,lprice:n,brand:r,productId:i})=>`
    <div
      class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
      data-product-id="${i}"
      data-title="${e}"
      data-price="${n}"
      data-image="${t}"
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
  `,se=`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
      <div class="aspect-square bg-gray-200"></div>
      <div class="p-3">
        <div class="h-4 bg-gray-200 rounded mb-2"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
        <div class="h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  `,O=`
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
  `,k=({loading:e,products:t,total:n})=>`
    <div class="mb-6">
      <div>
        ${e?`
          <!-- 상품 그리드 -->
          <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
            ${se.repeat(4)}
          </div>

          ${O}
          `:`
            <!-- 상품 개수 정보 -->
            <div class="mb-4 text-sm text-gray-600">
              총 <span class="font-medium text-gray-900">${n}개</span>의 상품
            </div>
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
              ${t.map(D).join(``)}
            </div>
            `}
      </div>
    </div>
  `,A=({message:e=`상품을 불러오는데 실패했습니다`}={})=>`
    <div class="flex flex-col items-center justify-center py-12">
      <svg class="w-16 h-16 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
      <p class="text-gray-600 mb-4">${e}</p>
      <button id="retry-load-products" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        다시 시도
      </button>
    </div>
  `;async function j(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function ce(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function le(){let e=await fetch(`/api/categories`);return await e.json()}const M=async({query:e={}})=>{let t={search:e.search||``,category1:e.category1||``,category2:e.category2||``,sort:e.sort||`price_asc`,limit:parseInt(e.limit)||20};try{let[e,n]=await Promise.all([j(t),le()]);return w({children:`
        ${E({filters:t,categories:n})}
        ${k({loading:!1,products:e.products,total:e.pagination.total})}
      `})}catch(e){return console.error(`Failed to load products:`,e),w({children:`
        ${E({filters:t,categories:{}})}
        ${A({message:`상품을 불러오는데 실패했습니다`})}
      `})}};M.loading=({query:e={}})=>{let t={search:e.search||``,category1:e.category1||``,category2:e.category2||``,sort:e.sort||`price_asc`,limit:parseInt(e.limit)||20};return w({children:`
      ${E({filters:t,categories:{}})}
      ${k({loading:!0,products:[],total:0})}
    `})};const ue=()=>{let e=new URLSearchParams(window.location.search),t={};for(let[n,r]of e.entries())t[n]=r;return t},N=(e,t=!1)=>{let n=ue(),r={...n,...e};Object.keys(r).forEach(e=>{(r[e]===``||r[e]===null||r[e]===void 0)&&delete r[e]});let i=new URLSearchParams(r),a=`${window.location.pathname}?${i.toString()}`;t?window.history.replaceState({},``,a):window.history.pushState({},``,a),window.dispatchEvent(new PopStateEvent(`popstate`))},P=e=>`
    <div class="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p class="text-sm font-medium">${e}</p>
      <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `,F=e=>`
    <div class="bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
       </svg>
      </div>
      <p class="text-sm font-medium">${e}</p>
      <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `,I=e=>`
    <div class="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </div>
      <p class="text-sm font-medium">${e}</p>
      <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `,L=()=>{let e=document.querySelector(`.toast-container`);return e||(e=document.createElement(`div`),e.className=`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 toast-container`,document.body.appendChild(e)),e},R=e=>{let t=L();if(t.children.length>0)return;let n=document.createElement(`div`);n.innerHTML=e;let r=n.firstElementChild;t.appendChild(r);let i=r.querySelector(`#toast-close-btn`),a=()=>{r.remove(),t.children.length===0&&t.remove()};i&&i.addEventListener(`click`,a),setTimeout(a,3e3)},z={success:e=>{R(P(e))},info:e=>{R(F(e))},error:e=>{R(I(e))}};let B=1,V=!1,H=!0,U={},W=null;const de=async()=>{if(V||!H)return;V=!0;let e=B+1,t=document.querySelector(`#products-grid`);if(!t){V=!1;return}let n=document.createElement(`div`);n.id=`infinite-scroll-loading`,n.innerHTML=O,t.parentElement.appendChild(n);try{let r=new URL(window.location);r.searchParams.set(`current`,e),window.history.replaceState({},``,r);let i=await j({...U,current:e});if(n.remove(),i.products&&i.products.length>0){let n=i.products.map(D).join(``);t.insertAdjacentHTML(`beforeend`,n),B=e}if(H=i.pagination.hasNext,!H){let e=document.createElement(`div`);e.className=`text-center py-4 text-sm text-gray-500`,e.textContent=`모든 상품을 확인했습니다`,t.parentElement.appendChild(e)}}catch(e){console.error(`Failed to load more products:`,e),n.remove()}finally{V=!1}},fe=()=>{let e=document.querySelector(`#products-grid`);if(!e)return;let t=document.querySelector(`#infinite-scroll-sentinel`);t||(t=document.createElement(`div`),t.id=`infinite-scroll-sentinel`,t.style.height=`1px`,e.parentElement.appendChild(t)),W&&W.disconnect(),W=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!V&&H&&de()})},{root:null,rootMargin:`100px`,threshold:0}),W.observe(t)},pe=()=>{let e=document.querySelector(`#root`);if(!e)return;let t=new URLSearchParams(window.location.search);if(U={search:t.get(`search`)||``,category1:t.get(`category1`)||``,category2:t.get(`category2`)||``,sort:t.get(`sort`)||`price_asc`,limit:parseInt(t.get(`limit`))||20},B=1,V=!1,H=!0,t.has(`current`)){t.delete(`current`);let e=`${window.location.pathname}${t.toString()?`?`+t.toString():``}`;window.history.replaceState({},``,e)}fe();let n=e=>{let t=e.target;if(t.id===`search-input`&&e.type===`keydown`&&e.key===`Enter`){e.preventDefault();let n=t.value.trim();N({search:n||void 0,page:void 0,current:void 0});return}if(t.id===`sort-select`&&e.type===`change`){N({sort:t.value,page:void 0,current:void 0});return}if(t.id===`limit-select`&&e.type===`change`){N({limit:t.value,page:void 0,current:void 0});return}if(t.classList.contains(`category1-filter-btn`)&&e.type===`click`){let e=t.dataset.category1;N({category1:e||void 0,category2:void 0,page:void 0,current:void 0});return}if(t.classList.contains(`category2-filter-btn`)&&e.type===`click`){let e=t.dataset.category1,n=t.dataset.category2;N({category1:e,category2:n||void 0,page:void 0,current:void 0});return}if(t.dataset.breadcrumb===`category1`&&e.type===`click`){let e=t.dataset.category1;N({category1:e,category2:void 0,page:void 0,current:void 0});return}if(t.dataset.breadcrumb===`reset`&&e.type===`click`){N({category1:void 0,category2:void 0,page:void 0,current:void 0});return}if(t.id===`retry-load-products`){window.location.reload();return}if(t.classList.contains(`add-to-cart-btn`)){let e=t.closest(`.product-card`),n=e.dataset.productId,r=e.dataset.title,i=Number(e.dataset.price),a=e.dataset.image,o={id:n,title:r,price:i,image:a};h(o,1),z.success(`장바구니에 추가되었습니다`),C()}};return e.addEventListener(`keydown`,n),e.addEventListener(`change`,n),e.addEventListener(`click`,n),()=>{e.removeEventListener(`keydown`,n),e.removeEventListener(`change`,n),e.removeEventListener(`click`,n),W&&(W.disconnect(),W=null)}},me=({category1:e,category2:t})=>`
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
        <button class="breadcrumb-link" data-category1="${e}" data-category2="${t}">
          ${t}
        </button>
      </div>
    </nav>
  `,he=e=>{let t=Math.floor(e),n=5-t,r=`M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z`,i=`<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="${r}"></path></svg>`,a=`<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="${r}"></path></svg>`;return i.repeat(t)+a.repeat(n)},ge=e=>`
    <div class="bg-white rounded-lg shadow-sm mb-6"
         data-product-id="${e.productId}"
         data-title="${e.title}"
         data-price="${e.lprice}"
         data-image="${e.image}">
      <div class="p-4">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover product-detail-image">
        </div>
        <div>
          <p class="text-sm text-gray-600 mb-1">${e.mallName}</p>
          <h1 class="text-xl font-bold text-gray-900 mb-3">${e.title}</h1>
          <div class="flex items-center mb-3">
            <div class="flex items-center">
              ${he(e.rating)}
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
  `,_e=({productId:e,stock:t})=>`
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
  `,ve=({products:e=[]})=>e.length===0?``:`
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
      </div>
      <div class="p-4">
        <div class="grid grid-cols-2 gap-3 responsive-grid">
          ${e.map(e=>`
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
              <p class="text-sm font-bold text-blue-600">${e.lprice.toLocaleString()}원</p>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `,ye=async({params:e={}})=>{let t=e.id,n=await ce(t),r=[];if(n.category2){let e=await j({category1:n.category1,category2:n.category2,limit:20});r=e.products.filter(e=>e.productId!==t)}return w({headerType:`detail`,headerTitle:`상품 상세`,children:`
      ${me({category1:n.category1,category2:n.category2})}
      ${ge(n)}
      ${_e({productId:n.productId,stock:n.stock})}
      <div class="mb-6">
        <a
          href="/"
          data-link
          class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors"
        >
          상품 목록으로 돌아가기
        </a>
      </div>
      ${ve({products:r})}
    `})},be=()=>{let e=document.querySelector(`#root`);if(!e)return;let t=e=>{let t=e.target;if(t.classList.contains(`breadcrumb-link`)&&e.type===`click`){e.preventDefault();let n=t.dataset.category1,r=t.dataset.category2;n&&!r?d($,`/`,{category1:n}):n&&r&&d($,`/`,{category1:n,category2:r});return}if(t.closest(`#quantity-decrease`)&&e.type===`click`){let e=document.getElementById(`quantity-input`);if(e){let t=parseInt(e.value)||1,n=parseInt(e.min)||1;t>n&&(e.value=t-1)}return}if(t.closest(`#quantity-increase`)&&e.type===`click`){let e=document.getElementById(`quantity-input`);if(e){let t=parseInt(e.value)||1,n=parseInt(e.max)||1/0;t<n&&(e.value=t+1)}return}if(t.id===`add-to-cart-btn`&&e.type===`click`){let e=t.dataset.productId,n=document.querySelector(`[data-product-id="${e}"]`),r=document.getElementById(`quantity-input`);if(n&&r){let t=n.dataset.title,i=Number(n.dataset.price),a=n.dataset.image,o=parseInt(r.value)||1,s={id:e,title:t,price:i,image:a};h(s,o),z.success(`장바구니에 추가되었습니다`),C()}else z.error(`상품 정보를 불러올 수 없습니다`);return}};return e.addEventListener(`click`,t),()=>{e.removeEventListener(`click`,t)}},xe=()=>w({children:`
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
  `}),G=()=>{let e=p();return`
    <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <h2 class="text-lg font-bold text-gray-900 flex items-center">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
        </svg>
        장바구니
        <span class="text-sm font-normal text-gray-600 ml-1">(${e.length})</span>
      </h2>
      <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `},Se=()=>`
    <div class="flex-1 flex items-center justify-center p-8">
      <div class="text-center">
        <div class="text-gray-400 mb-4">
          <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
        <p class="text-gray-600">원하는 상품을 담아보세요!</p>
      </div>
    </div>
  `,Ce=({id:e,title:t,price:n,image:r,quantity:i,selected:a})=>`
  <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e}">
          <!-- 선택 체크박스 -->
          <label class="flex items-center mr-3">
            <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded
            focus:ring-blue-500" data-product-id="${e}" ${a?`checked`:``}>
          </label>
          <!-- 상품 이미지 -->
          <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
            <img src="${r}" alt="${t}" class="w-full h-full object-cover cursor-pointer cart-item-image" data-product-id="${e}">
          </div>
          <!-- 상품 정보 -->
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-medium text-gray-900 truncate cursor-pointer cart-item-title" data-product-id="${e}">
              ${t}
            </h4>
            <p class="text-sm text-gray-600 mt-1">
              ${Number(n).toLocaleString()}원
            </p>
            <!-- 수량 조절 -->
            <div class="flex items-center mt-2">
              <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center
                   border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e}">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                </svg>
              </button>
              <input type="number" value=${i} min="1" class="quantity-input w-12 h-7 text-center text-sm border-t border-b
            border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500" disabled="" data-product-id="${e}">
              <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center
                   border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e}">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>
          </div>
          <!-- 가격 및 삭제 -->
          <div class="text-right ml-3">
            <p class="text-sm font-medium text-gray-900">
              ${Number(n*i).toLocaleString()}원
            </p>
            <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e}">
              삭제
            </button>
          </div>
        </div>
  `,K=()=>{let e=p();if(e.length<1)return Se();let t=e.length>0&&e.every(e=>e.selected);return`
    <!-- 전체 선택 섹션 (고정) -->
    <div class="p-4 border-b border-gray-200 bg-gray-50 flex-shrink-0">
      <label class="flex items-center text-sm text-gray-700">
        <input type="checkbox" id="cart-modal-select-all-checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2" ${t?`checked`:``}>
        전체선택 (${e.length}개)
      </label>
    </div>
    <!-- 아이템 목록 (스크롤) -->
    <div class="flex-1 overflow-y-auto min-h-0">
      <div class="p-4 space-y-4">
        ${e.map(Ce).join(``)}
      </div>
    </div>
  `},q=()=>{let e=p(),t=e.filter(e=>e.selected),n=e.reduce((e,t)=>e+t.price*t.quantity,0),r=t.reduce((e,t)=>e+t.price*t.quantity,0),i=t.length;return e.length===0?``:`
    <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4">
      <!-- 선택된 아이템 정보 -->
      ${i>0?`<div class="flex justify-between items-center mb-3 text-sm">
            <span class="text-gray-600">선택한 상품 (${i}개)</span>
            <span class="font-medium">${Number(r).toLocaleString()}원</span>
          </div>`:``}
      <!-- 총 금액 -->
      <div class="flex justify-between items-center mb-4">
        <span class="text-lg font-bold text-gray-900">총 금액</span>
        <span class="text-xl font-bold text-blue-600">${Number(n).toLocaleString()}원</span>
      </div>
      <!-- 액션 버튼들 -->
      <div class="space-y-2">
        ${i>0?`<button id="cart-modal-remove-selected-btn" class="w-full bg-red-600 text-white py-2 px-4 rounded-md
                   hover:bg-red-700 transition-colors text-sm">
              선택한 상품 삭제 (${i}개)
            </button>`:``}
        <div class="flex gap-2">
          <button id="cart-modal-clear-cart-btn" class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md
                   hover:bg-gray-700 transition-colors text-sm">
            전체 비우기
          </button>
          <button id="cart-modal-checkout-btn" class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md
                   hover:bg-blue-700 transition-colors text-sm">
            구매하기
          </button>
        </div>
      </div>
    </div>
  `},J=()=>`
    <div class="fixed inset-0 z-50 overflow-y-auto cart-modal" style="display: none;">
      <!-- 배경 오버레이 -->
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity cart-modal-overlay"></div>

      <!-- 기존 코드 (div.flex부터) -->
      <div class="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4">
        <div class="relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
          ${G()}
          ${K()}
          ${q()}
        </div>
      </div>
    </div>
  `,Y=()=>{let e=document.querySelector(`.cart-modal`);if(!e)return;let t=e.querySelector(`.relative.bg-white`);t&&(t.innerHTML=`
      ${G()}
      ${K()}
      ${q()}
    `)},we=()=>{let e=J(),t=document.createElement(`div`);t.innerHTML=e;let n=document.querySelector(`#root`);n.appendChild(t.firstElementChild);let r=document.querySelector(`.cart-modal`);r.style.display=`block`;let i=document.querySelector(`.min-h-screen`);i&&i.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=`hidden`;let a=r.querySelector(`#cart-modal-close-btn`);a&&a.focus({preventScroll:!0}),document.addEventListener(`keydown`,Z)},X=()=>{let e=document.querySelector(`.cart-modal`);if(e){let t=document.querySelector(`.min-h-screen`);t&&t.removeAttribute(`aria-hidden`),document.body.style.overflow=``,document.removeEventListener(`keydown`,Z),e.remove()}},Z=e=>{e.key===`Escape`&&X()},Q=()=>{let e=p(),t=e.filter(e=>e.selected),n=t.reduce((e,t)=>e+t.price*t.quantity,0),r=t.length,i=document.querySelector(`.cart-modal .sticky.bottom-0`);if(i){var a;let e=(a=i.querySelector(`.text-gray-600`))?.parentElement;if(r>0)if(e)e.querySelector(`.text-gray-600`).textContent=`선택한 상품 (${r}개)`,e.querySelector(`.font-medium`).textContent=`${Number(n).toLocaleString()}원`;else{let e=i.querySelector(`.text-lg.font-bold`);if(e?.parentElement){let t=document.createElement(`div`);t.className=`flex justify-between items-center mb-3 text-sm`,t.innerHTML=`
            <span class="text-gray-600">선택한 상품 (${r}개)</span>
            <span class="font-medium">${Number(n).toLocaleString()}원</span>
          `,i.insertBefore(t,e.parentElement)}}else e&&e.remove()}let o=document.querySelector(`.cart-modal .sticky.bottom-0 .space-y-2`);if(o){let e=document.getElementById(`cart-modal-remove-selected-btn`);if(r>0)if(e)e.textContent=`선택한 상품 삭제 (${r}개)`;else{let e=document.createElement(`button`);e.id=`cart-modal-remove-selected-btn`,e.className=`w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm`,e.textContent=`선택한 상품 삭제 (${r}개)`,o.insertBefore(e,o.firstChild)}else e&&e.remove()}},Te=()=>{document.addEventListener(`click`,e=>{let t=e.target;if(t.classList.contains(`cart-item-checkbox`)){let e=t.dataset.productId,n=t.checked;b(e,n);let r=p(),i=r.length>0&&r.every(e=>e.selected),a=document.getElementById(`cart-modal-select-all-checkbox`);a&&(a.checked=i),Q();return}if(t.id===`cart-modal-select-all-checkbox`){let e=t.checked;x(e);let n=document.querySelectorAll(`.cart-item-checkbox`);n.forEach(t=>{t.checked=e}),Q();return}if(t.closest(`.quantity-increase-btn`)){let e=t.closest(`.quantity-increase-btn`),n=e.dataset.productId,r=p(),i=r.find(e=>e.id===n);i&&(g(n,i.quantity+1),Y(),C());return}if(t.closest(`.quantity-decrease-btn`)){let e=t.closest(`.quantity-decrease-btn`),n=e.dataset.productId,r=p(),i=r.find(e=>e.id===n);i&&i.quantity>1&&(g(n,i.quantity-1),Y(),C());return}if(t.closest(`.cart-item-remove-btn`)){let e=t.closest(`.cart-item-remove-btn`),n=e.dataset.productId;_(n),Y(),C(),z.info(`상품이 삭제되었습니다`);return}if(t.id===`cart-modal-remove-selected-btn`){let e=p(),t=e.filter(e=>e.selected).length;t>0&&(v(),Y(),C(),z.info(`선택된 상품들이 삭제되었습니다`));return}if(t.id===`cart-modal-clear-cart-btn`){y(),Y(),C(),z.info(`장바구니가 비워졌습니다`);return}})},Ee=()=>r(async()=>{let{worker:e}=await import(`./browser-CcyfQrG1.js`);return{worker:e}},[]).then(({worker:e})=>e.start({onUnhandledRequest:`bypass`,serviceWorker:{url:`/front_7th_chapter2-1/mockServiceWorker.js`}})),$=[{path:`/`,component:M,setupHandlers:pe},{path:`/product/:id`,component:ye,setupHandlers:be},{path:`*`,component:xe}];async function De(){let e=ne($);window.router=e,document.addEventListener(`click`,e=>{let t=e.target;if(t.closest(`#cart-icon-btn`)){we();return}if(t.closest(`#cart-modal-close-btn`)){X();return}if(t.classList.contains(`cart-modal-overlay`)){X();return}}),Te()}Ee().then(De);