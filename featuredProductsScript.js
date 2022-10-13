var _titles = ['Featured Products 1', 'Featured Products 2', 'Featured Products 3'];

products1 = [new product('Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica', 'HAUS LABS BY LADY GAGA', 69000, 49000, 'A medium coverage, weightless, clean foundation with fermented arnica that reduces redness, helps even skin tone & protects from environmental stress.', ['https://www.sephora.com/productimages/sku/s2597011-main-zoom.jpg?imwidth=612'], [['', ''], ['', '']], ['smart', 'new']), new product('Revealer Super Creamy + Brightening Concealer and Daytime Eye Cream', 'Kosas', 50000, 50000, 'A crease-proof, medium-coverage, super creamy concealer, eye cream, and spot treatment in one that visibly brightens and helps reveal better-looking skin.', ['https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/product/p456151-av-1-zoom.jpg?imwidth=612'], [], []), new product('Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica', 'HAUS LABS BY LADY GAGA', 69000, 49000, 'A medium coverage, weightless, clean foundation with fermented arnica that reduces redness, helps even skin tone & protects from environmental stress.', ['https://www.sephora.com/productimages/sku/s2597011-main-zoom.jpg?imwidth=612'], [['', ''], ['', '']], ['new', 'smart']), new product('Revealer Super Creamy + Brightening Concealer and Daytime Eye Cream', 'Kosas', 50000, 50000, 'A crease-proof, medium-coverage, super creamy concealer, eye cream, and spot treatment in one that visibly brightens and helps reveal better-looking skin.', ['https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/product/p456151-av-1-zoom.jpg?imwidth=612'], [], []), new product('Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica', 'HAUS LABS BY LADY GAGA', 69000, 49000, 'A medium coverage, weightless, clean foundation with fermented arnica that reduces redness, helps even skin tone & protects from environmental stress.', ['https://www.sephora.com/productimages/sku/s2597011-main-zoom.jpg?imwidth=612'], [['', ''], ['', '']], ['new', 'smart']), new product('Revealer Super Creamy + Brightening Concealer and Daytime Eye Cream', 'Kosas', 50000, 50000, 'A crease-proof, medium-coverage, super creamy concealer, eye cream, and spot treatment in one that visibly brightens and helps reveal better-looking skin.', ['https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/product/p456151-av-1-zoom.jpg?imwidth=612'], [], []), new product('Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica', 'HAUS LABS BY LADY GAGA', 69000, 49000, 'A medium coverage, weightless, clean foundation with fermented arnica that reduces redness, helps even skin tone & protects from environmental stress.', ['https://www.sephora.com/productimages/sku/s2597011-main-zoom.jpg?imwidth=612'], [['', ''], ['', '']], ['new', 'smart']), new product('Revealer Super Creamy + Brightening Concealer and Daytime Eye Cream', 'Kosas', 50000, 50000, 'A crease-proof, medium-coverage, super creamy concealer, eye cream, and spot treatment in one that visibly brightens and helps reveal better-looking skin.', ['https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/product/p456151-av-1-zoom.jpg?imwidth=612'], [], []), new product('Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica', 'HAUS LABS BY LADY GAGA', 69000, 49000, 'A medium coverage, weightless, clean foundation with fermented arnica that reduces redness, helps even skin tone & protects from environmental stress.', ['https://www.sephora.com/productimages/sku/s2597011-main-zoom.jpg?imwidth=612'], [['', ''], ['', '']], ['new', 'smart']), new product('Revealer Super Creamy + Brightening Concealer and Daytime Eye Cream', 'Kosas', 50000, 50000, 'A crease-proof, medium-coverage, super creamy concealer, eye cream, and spot treatment in one that visibly brightens and helps reveal better-looking skin.', ['https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/product/p456151-av-1-zoom.jpg?imwidth=612'], [], []), new product('Triclone Skin Tech Medium Coverage Foundation with Fermented Arnica', 'HAUS LABS BY LADY GAGA', 69000, 49000, 'A medium coverage, weightless, clean foundation with fermented arnica that reduces redness, helps even skin tone & protects from environmental stress.', ['https://www.sephora.com/productimages/sku/s2597011-main-zoom.jpg?imwidth=612'], [['', ''], ['', '']], ['new', 'smart']), new product('Revealer Super Creamy + Brightening Concealer and Daytime Eye Cream', 'Kosas', 50000, 50000, 'A crease-proof, medium-coverage, super creamy concealer, eye cream, and spot treatment in one that visibly brightens and helps reveal better-looking skin.', ['https://www.sephora.com/productimages/sku/s2333771-main-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/product/p456151-av-1-zoom.jpg?imwidth=612'], [], [])];
var _products = [products1, products1, products1];

function Create_Featured_Products(titles = _titles, products = _products) {
    var featured_products_ultra_container = document.querySelector('.featured-products-ultra-container');
    featured_products_ultra_container.innerHTML = '';

    for (var i = 0; i < titles.length; i++) {
        var elements = '';
        for (var j = 0; j < products[i].length; j++) {
            var index = '_' + i + ' __' + j;

            var discount_html = '';
            if (products[i][j].is_discounted()) {
                discount_html = `<div class="featured-product-discount-container featured-product-clickable ${index}">
                                    <h4 class="featured-product-discount featured-product-clickable ${index}">${products[i][j].discount_amount()}% OFF</h4>
                                </div>`;
            }

            var features_html = ``;
            if (products[i][j].features.length > 0) {
                features_html = `<div class="featured-product-features featured-product-clickable ${index}">\n`;
                for (var k = 0; k < products[i][j].features.length; k++) {
                    features_html += `<span class="featured-product-feature featured-product-clickable ${index}">${products[i][j].features[k].toUpperCase()}</span>\n`;
                }
                features_html += `</div>`;
            }

            var original_price_html = ``;
            if (products[i][j].is_discounted()) {
                original_price_html = `<h3 class="featured-product-original-price featured-product-clickable ${index}">${products[i][j].original_price.format_number('LBP')}</h3>`;
            }

            elements += `<div class="featured-product-box featured-product-clickable ${index}">
            ${features_html}
            ${discount_html}
            <img class="featured-product-image featured-product-clickable ${index}"
                src="${products[i][j].images[0]}">
            <h3 class="featured-product-brand featured-product-clickable ${index}">${products[i][j].brand}</h3>
            <h2 class="featured-product-name featured-product-clickable ${index}">${products[i][j].name}</h2>
            <div class="featured-product-prices-container featured-product-clickable ${index}">
                ${original_price_html}
                <h3 class="featured-product-discounted-price featured-product-clickable ${index}">${products[i][j].discounted_price.format_number('LBP')}</h3>
            </div>
            <!--<h3 class="featured-product-quicklook-button featured-product-clickable ${index}">QUICKLOOK</h3>-->
            </div>\n`;
        }

        featured_products_ultra_container.innerHTML += `<section class="featured-products fp">
        <div class="featured-products-title-and-more fp">
            <h2 class="featured-products-title fp">${titles[i]}</h2>
            <h3 class="featured-products-show-more fp">Show More</h3>
        </div>
        <div class="featured-products-capsule fp">
            <i class='bx bxs-left-arrow-alt featured-products-left-arrow fp'></i>
    
            <div class="featured-products-container fp">
                ${elements}
            </div>
    
            <i class='bx bxs-right-arrow-alt featured-products-right-arrow fp'></i>
        </div>
    </section>`;
    }
}

Create_Featured_Products();

const featured_products = document.querySelectorAll('.featured-products');

const scroll_amount = 698;

function OnScroll(left, right, featured_product_container, targetScrollLeft) {
    console.log(targetScrollLeft + featured_product_container.offsetWidth, featured_product_container.scrollWidth);
    if (targetScrollLeft <= 0) {
        if (targetScrollLeft + featured_product_container.offsetWidth >= featured_product_container.scrollWidth) {
            left.classList.toggle('noShow');
            right.classList.toggle('noShow');
        }
        else {
            left.classList.toggle('noShow');
            right.classList.remove('noShow');
        }
    }
    else if (targetScrollLeft + featured_product_container.offsetWidth >= featured_product_container.scrollWidth) {
        if (targetScrollLeft <= 0) {
            left.classList.toggle('noShow');
            right.classList.toggle('noShow');
        }
        else {
            left.classList.remove('noShow');
            right.classList.toggle('noShow');
        }
    }
    else {
        left.classList.remove('noShow');
        right.classList.remove('noShow');
    }
}

if (is_touch_enabled) {
    featured_products.forEach(element => { element.classList.toggle('touch') });
    featured_products.forEach(element => {
        element.querySelectorAll('.fp').forEach(element => {
            element.classList.toggle('touch');
        });
    });
}
else {
    var left_arrows = document.querySelectorAll('.featured-products-left-arrow');
    var right_arrows = document.querySelectorAll('.featured-products-right-arrow');

    left_arrows.forEach(element => {
        element.addEventListener('click', element => {
            var scroll_container = element.target.parentElement.querySelector('.featured-products-container');
            scroll_container.scrollBy(-scroll_amount, 0);
            OnScroll(element.target, element.target.parentElement.querySelector('.featured-products-right-arrow'), scroll_container, scroll_container.scrollLeft - scroll_amount);
        });
    });

    left_arrows.forEach(element => { element.click() });

    right_arrows.forEach(element => {
        element.addEventListener('click', element => {
            var scroll_container = element.target.parentElement.querySelector('.featured-products-container');
            scroll_container.scrollBy(scroll_amount, 0);
            OnScroll(element.target.parentElement.querySelector('.featured-products-left-arrow'), element.target, scroll_container, scroll_container.scrollLeft + scroll_amount);
        });
    });
}

featured_products.forEach(element => {
    element.querySelectorAll('.featured-product-clickable').forEach(_element => {
        _element.addEventListener('click', __element => {

            main_index = parseInt(String(__element.target.classList[__element.target.classList.length - 2]).replace('_', ''));
            partial_index = parseInt(String(__element.target.classList[__element.target.classList.length - 1]).replace('__', ''));
            console.log(main_index, partial_index);
            Populate_Quicklook(_products[main_index][partial_index]);

            console.log('made it here?');
            if (!document.querySelector('.quicklook').matches('.active'))
                document.querySelector('.quicklook').classList.toggle('active');
            if (!document.querySelector('body').matches('.active'))
                document.querySelector('body').classList.toggle('stop-scrolling');
        });
    });
});

