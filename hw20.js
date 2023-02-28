const $category = document.querySelectorAll(`.category`);
const $goodsList = document.querySelectorAll(`.goods_list`);
const $goods = document.querySelectorAll(`.goods`);
const $infoContainer = document.querySelectorAll(`.info_container`);
const $buyBtn = document.querySelectorAll(`.info_buy_button`);
const $showEl = document.getElementsByClassName(`show`);

for (let i = 0; i < $category.length; i++){
    $category[i].addEventListener('click', (event) => {

        for(let l = 0; l < $showEl.length; l++){
            $showEl[l].classList.remove(`show`)
        }

        if (event.target.tagName === `SPAN`) {
            let activeEl = document.querySelector(`.active`);
            if(activeEl){
                activeEl.classList.remove(`active`);
                for (let j = 0; j < $goodsList.length; j++) {
                    $goodsList[j].classList.remove(`show`)
                }
            }
            event.target.classList.add(`active`);
            $goodsList[i].classList.add(`show`);
        }
    });
}

for (let i = 0; i < $goods.length; i++){
    $goods[i].addEventListener('click', (event) => {

        if (event.target.tagName === `SPAN`) {
            let activeEl = document.querySelector(`.active`)
            if(activeEl){
                activeEl.classList.remove(`active`);
                for (let j = 0; j < $goods.length; j++) {
                    $infoContainer[j].classList.remove(`show`)
                }
            }

            event.target.classList.add(`active`);
            $infoContainer[i].classList.add(`show`);
        }
    });
}

for (let i = 0; i < $buyBtn.length; i++){
    $buyBtn[i].addEventListener('click', () => {
        alert(`Done!`);
    });
}