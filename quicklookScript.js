var quicklook = document.querySelector('.quicklook');
var quicklook_container = quicklook.querySelector('.quicklook-container');

function Populate_Quicklook(my_product) {
    var quicklook_small_images_html = ``;

    for (var i = 0; i < my_product.images.length; i++) {
        if (i == 0) {
            quicklook_small_images_html += `<img class="quicklook-small-image selected"
        src="${my_product.images[i]}">`;
        }
        else {
            quicklook_small_images_html += `<img class="quicklook-small-image"
        src="${my_product.images[i]}">`;
        }
    }

    var quicklook_prices_html = `<h3 class="quicklook-product-discounted-price t">${my_product.discounted_price.format_number('LBP')}</h3>`;
    if (my_product.is_discounted()) {
        quicklook_prices_html = `<h3 class="quicklook-product-original-price t">${my_product.original_price.format_number('LBP')}</h3>
        <h3 class="quicklook-product-discounted-price t">${my_product.discounted_price.format_number('LBP')}</h3>`;
    }

    var quicklook_features_html = ``;
    if (my_product.is_discounted()) {
        quicklook_features_html += `<h3 class="quicklook-feature t"><i
        class='bx bxs-badge-check quicklook-check t'></i> SAVE ${my_product.discount_amount()}%</h3>\n`
    }

    if (my_product.free_delivery()) {
        quicklook_features_html += `<h3 class="quicklook-feature t"><i
        class='bx bxs-badge-check quicklook-check t'></i> FREE DELIVERY</h3>\n`
    }

    for (var i = 0; i < my_product.features.length; i++) {
        quicklook_features_html += `<h3 class="quicklook-feature t"><i
        class='bx bxs-badge-check quicklook-check t'></i> ${my_product.features[i].toUpperCase()}</h3>`
    }

    quicklook_features_html += `<h3 class="quicklook-feature t"><i
    class='bx bxs-badge-check quicklook-check t'></i> CASH ON DELIVERY</h3>`;

    quicklook_container.innerHTML = `<i class='bx bx-x quicklook-x-button'></i>
    <div class="quicklook-images-container t">
        <img class="quicklook-main-image t"
            src="${my_product.images[0]}">
        <div class="quicklook-small-images-container t">
            ${quicklook_small_images_html}
        </div>
    </div>
    <div class="quicklook-details-container t">
        <div class="quicklook-top-details t">
            <h3 class="quicklook-product-brand t">${my_product.brand}</h3>
            <h3 class="quicklook-product-name t">${my_product.name}</h3>
            <h3 class="quicklook-product-description t">${my_product.description}</h3>
            <h3 class="quicklook-product-more-details t">See full details</h3>
        </div>
        <div class="quicklook-bottom-details t">
            <div class="quicklook-prices-and-features t">
                <div class="quicklook-prices t">
                    ${quicklook_prices_html}
                </div>
                <div class="quicklook-features t">
                    ${quicklook_features_html}
                </div>
            </div>
            <div class="quicklook-actions t">
                <input class="quicklook-product-count t" type="number" value="1">
                <div class="quicklook-buttons t">
                    <h3 class="quicklook-add-to-favorites-button t">Add to Favorites</h3>
                    <h3 class="quicklook-add-to-basket-button t">Add to Basket</h3>
                </div>
            </div>
        </div>
    </div>`;

    var quicklook_small_images_container = quicklook.querySelector('.quicklook-small-images-container');
    var quicklook_main_image = quicklook.querySelector('.quicklook-main-image');

    var quicklook_small_images = quicklook.querySelectorAll('.quicklook-small-image');
    quicklook_small_images.forEach(image => {
        image.addEventListener('click', element => {
            quicklook_main_image.src = element.target.src;
            quicklook_small_images_container.querySelector('.selected').classList.remove('selected');
            element.target.classList.toggle('selected');
        });
    });

    quicklook.querySelector('.quicklook-x-button').addEventListener('click', element => {
        quicklook.classList.remove('active');
        document.querySelector('body').classList.remove('stop-scrolling');
    });

    if (is_touch_enabled) {
        quicklook.querySelectorAll('.t').forEach(element => {
            if (!element.matches('.touch'))
                element.classList.toggle('touch');
        });
    }
}

Populate_Quicklook(new product('Lip Sleeping Mask Intense Hydration with Vitamin C', 'LANEIGE', 699000, 699000, 'A leave-on lip mask that delivers intense moisture and antioxidants while you sleep with Berry Fruit Complex™, Murumuru seed and Shea butter.', ['https://www.sephora.com/productimages/sku/s1966258-main-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/sku/s1966258-av-05-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/sku/s1966258-av-14-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/sku/s1966258-av-15-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/sku/s1966258-av-16-zoom.jpg?imwidth=612', 'https://www.sephora.com/productimages/sku/s1966258-av-9-zoom.jpg?imwidth=612'], [['care', 'skin care']], ['RECOMMENDED', 'NEW']));