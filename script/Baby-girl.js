//////////////////////////////////checkBox

let check = document.querySelectorAll(".checkbox");
let icon = document.querySelectorAll(".checkbox i");

let CardOfBrand = [];

check.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("view");
    icon.forEach((i) => {
      i.classList.toggle("view-icon");
    });
    // Filter
    let _card = document.querySelectorAll(".all-dresses .card");
    document.querySelectorAll(item.dataset.brand).forEach((el) => {
      if (item.classList.contains("view")) {
        CardOfBrand.push(el);
        _card.forEach((c) => {
          c.style.display = "none";
        });
        CardOfBrand.forEach((Card) => {
          Card.style.display = "block";
        });
      } else {
        const index = CardOfBrand.indexOf(el);
        if (index > -1) {
          // only splice array when item is found
          CardOfBrand.splice(index, 1); // 2nd parameter means remove one item only
        }
        _card.forEach((c) => {
          c.style.display = "none";
        });
        CardOfBrand.forEach((Card) => {
          Card.style.display = "block";
        });
      }
      if (CardOfBrand.length === 0) {
        _card.forEach((c) => {
          c.style.display = "block";
        });}
    });
  });
});
AOS.init();

function getDress() {
  return new Promise((res) => {
    let url = "script/Baby-girl.json";
    fetch(url).then((response) => {
      res(response.json());
    });
  });
}
getDress();

async function displaydata() {
  let dress = document.querySelector(".all-dresses");
  try {
    let card = ``;
    const data = await getDress();
    data.forEach((d) => {
      card += `
            <div class="card ${d.all} ${d.dressType} ${d.brand} ${d.color} ${d.Size}" >
            <a href="#">
            <div class="img-style">
              <img src=${d.img} class="card-img-top img-fluid" alt="product-img">
            </div>
            <div class="card-bodyy">
                <p class="card-textt">${d.description}</p>
                <h5>${d.price}</h5>
                <div class="cart-price">
                    <span>${d.old_price}</span>
                   <a href="#">
                    <svg width="33" height="29" viewBox="0 0 33 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_499_279)">
                        <rect x="2" y="1" width="29" height="25" rx="5" fill="#D9D9D9" fill-opacity="0.3" shape-rendering="crispEdges"/>
                        </g>
                        <path d="M26.5317 18.4508H11.9932L12.7231 17.0234L24.852 17.0023C25.2622 17.0023 25.6138 16.7211 25.687 16.332L27.3667 7.30625C27.4106 7.06953 27.3447 6.82578 27.1836 6.64062C27.104 6.5495 27.0046 6.4761 26.8925 6.42551C26.7803 6.37492 26.6581 6.34835 26.5342 6.34766L11.1045 6.29844L10.9727 5.70312C10.8896 5.32344 10.5332 5.04688 10.1279 5.04688H6.35596C6.12739 5.04688 5.90818 5.13404 5.74656 5.2892C5.58494 5.44436 5.49414 5.65479 5.49414 5.87422C5.49414 6.09364 5.58494 6.30408 5.74656 6.45924C5.90818 6.6144 6.12739 6.70156 6.35596 6.70156H9.42969L10.0059 9.33125L11.4243 15.9242L9.59814 18.7859C9.50331 18.9088 9.44619 19.0547 9.43324 19.2071C9.4203 19.3596 9.45205 19.5124 9.5249 19.6484C9.67139 19.9273 9.9668 20.1031 10.2939 20.1031H11.8271C11.5003 20.5199 11.3237 21.0275 11.3242 21.5492C11.3242 22.8758 12.4473 23.9539 13.8291 23.9539C15.2109 23.9539 16.334 22.8758 16.334 21.5492C16.334 21.0266 16.1533 20.518 15.8311 20.1031H19.7642C19.4373 20.5199 19.2607 21.0275 19.2612 21.5492C19.2612 22.8758 20.3843 23.9539 21.7661 23.9539C23.1479 23.9539 24.271 22.8758 24.271 21.5492C24.271 21.0266 24.0903 20.518 23.7681 20.1031H26.5342C27.0078 20.1031 27.396 19.7328 27.396 19.2758C27.3946 19.0566 27.3029 18.8468 27.141 18.6923C26.9791 18.5377 26.7601 18.4509 26.5317 18.4508ZM11.4634 7.92969L25.521 7.97422L24.144 15.3758L13.1016 15.3945L11.4634 7.92969ZM13.8291 22.2898C13.4043 22.2898 13.0576 21.957 13.0576 21.5492C13.0576 21.1414 13.4043 20.8086 13.8291 20.8086C14.2539 20.8086 14.6006 21.1414 14.6006 21.5492C14.6006 21.7456 14.5193 21.934 14.3746 22.0729C14.2299 22.2118 14.0337 22.2898 13.8291 22.2898ZM21.7661 22.2898C21.3413 22.2898 20.9946 21.957 20.9946 21.5492C20.9946 21.1414 21.3413 20.8086 21.7661 20.8086C22.1909 20.8086 22.5376 21.1414 22.5376 21.5492C22.5376 21.7456 22.4563 21.934 22.3116 22.0729C22.167 22.2118 21.9707 22.2898 21.7661 22.2898Z" fill="black" fill-opacity="0.89"/>
                        <defs>
                        <filter id="filter0_d_499_279" x="0" y="0" width="33" height="29" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_499_279"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_499_279" result="shape"/>
                        </filter>
                        </defs>
                        </svg>
                   </a>           
                </div>
               
            </div>
            </a>
        </div>`;
    });
    dress.innerHTML = card;
  } catch (e) {
    console.log(e);
  }

  // Filter
  let _DressesType = document.querySelectorAll(".Dresses-Type li");
  let _card = document.querySelectorAll(".all-dresses .card");

  _DressesType.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageCard);
  });
  // Remove Active Class
  function removeActive() {
    _DressesType.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
  }
  // Manage Card
  function manageCard() {
    _card.forEach((c) => {
      c.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "block";
    });
  }
}
displaydata();
