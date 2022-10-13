class product {
    name;
    brand;
    original_price;
    discounted_price;
    description;
    images;
    categories;
    features;

    constructor(_name, _brand, _original_price, _discounted_price, _description, _images, _categories, _features) {
        this.name = _name;
        this.brand = _brand;
        this.original_price = _original_price;
        this.discounted_price = _discounted_price;
        this.description = _description;
        this.images = _images;
        this.categories = _categories;
        this.features = _features;
    }

    is_discounted() {
        return this.original_price != this.discounted_price;
    }

    discount_amount() {
        return Math.round(100 - ((this.discounted_price / this.original_price) * 100));
    }

    free_delivery() {
        return this.discounted_price >= 700000;
    }
}

class featuredproducts {
    title;
    products;

    constructor(_title, _products) {
        this.title = _title;
        this.products = _products;
    }
}

Number.prototype.format_number = function (currency, n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return currency + ' ' + this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

var dropdown_menu = document.querySelector('.dropdown-menu');

var logo = document.querySelector('h1');
logo.addEventListener('click', ()=>{
    location.replace("./index.html");
});

var bag_icon = document.querySelector('.bag-icon');
bag_icon.addEventListener('click', e => {
    location.replace("./basket.html");
});

var account_icon = document.querySelector('.account-icon');

function check_touch_enabled() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}

const is_touch_enabled = check_touch_enabled();


function AddCategory(category) {
    var header_category_html = `<h2 class="dropdown-button">${category} <i class='bx bxs-chevron-down dropdown-button'></i></h2>`;

    var bottom_header_content = document.querySelector('.bottom-header-content');
    bottom_header_content.innerHTML += header_category_html;
}

function UpdateDropdown(sub_categories, micro_categories) {
    var dropdown_menu_content = document.querySelector('.dropdown-menu-content');
    dropdown_menu_content.innerHTML = '';
    for (var i = 0; i < sub_categories.length; i++) {
        var dropdown_full_category_html;
        if (!is_touch_enabled) {
            dropdown_full_category_html = `<div class="dropdown-categories-container dm">
                                                <div class="dropdown-sub-categories-container dm">
                                                    <h3 class="dropdown-sub-category dm">${sub_categories[i]} </h3>
                                                    <i class='bx bx-plus dropdown-sub-category-plus-icon'></i>
                                                </div>
                                                <div class="dropdown-micro-categories-container dm">
                                                </div>
                                            </div>`;
        }
        else {
            dropdown_full_category_html = `<div class="dropdown-categories-container dm touch">
                                                <div class="dropdown-sub-categories-container dm touch">
                                                    <h3 class="dropdown-sub-category dm touch">${sub_categories[i]} </h3>
                                                    <i class='bx bx-plus dropdown-sub-category-plus-icon touch'></i>
                                                </div>
                                                <div class="dropdown-micro-categories-container dm touch">
                                                </div>
                                            </div>`;
        }
        dropdown_menu_content.innerHTML += dropdown_full_category_html;

        var dropdown_micro_categories_containers = dropdown_menu_content.querySelectorAll('.dropdown-micro-categories-container');
        var dropdown_micro_categories_container = dropdown_micro_categories_containers[dropdown_micro_categories_containers.length - 1];
        dropdown_micro_categories_container.innerHTML = '';

        if (micro_categories[i][0] == ' ' || micro_categories[i][0] == '') {
            var plus_icon = dropdown_micro_categories_container.parentElement.querySelector('.dropdown-sub-category-plus-icon');
            plus_icon.classList.remove('touch');
            continue;
        }

        for (var j = 0; j < micro_categories[i].length; j++) {
            var dropdown_micro_category_html;
            if (!is_touch_enabled)
                dropdown_micro_category_html = `<h4 class="dropdown-micro-category dm">${micro_categories[i][j]}</h4>`;
            else
                dropdown_micro_category_html = `<h4 class="dropdown-micro-category dm touch">${micro_categories[i][j]}</h4>`;
            dropdown_micro_categories_container.innerHTML += dropdown_micro_category_html;
        }
    }
}

AddCategory('CARE');
AddCategory('BABY & MOM');
AddCategory('SUPPLEMENTS');
AddCategory('BRANDS');
UpdateDropdown(['ALL CARE', 'Moisturizers', 'Masks'], [[''], ['Night Creams', 'Face Oils', 'Mists & Essences', 'BB & CC Creams'], ['Face Masks', 'Sheet Masks', 'Eye Masks']]);

var old_dropdown_button_text = document.querySelectorAll('.dropdown-button')[0].textContent;

if (!is_touch_enabled) {
    document.addEventListener('mouseover', event => {
        if (event.target.matches('.dropdown-button')) {
            if (!dropdown_menu.matches('.active'))
                dropdown_menu.classList.toggle('active');
        }
        else {
            dropdown_menu.classList.remove('active');
        }

        if (event.target.matches('.bag-icon')) {
            bag_icon.classList.remove('bx-shopping-bag');
            bag_icon.classList.add('bxs-shopping-bag');
        }
        else if (bag_icon.matches('.bxs-shopping-bag')) {
            bag_icon.classList.add('bx-shopping-bag');
            bag_icon.classList.remove('bxs-shopping-bag');
        }

        if (event.target.matches('.account-icon')) {
            account_icon.classList.remove('bx-user-circle');
            account_icon.classList.add('bxs-user-circle');
        }
        else if (account_icon.matches('.bxs-user-circle')) {
            account_icon.classList.remove('bxs-user-circle');
            account_icon.classList.add('bx-user-circle');
        }
    });

    document.addEventListener('click', event => {
        if (event.target.matches('.dropdown-button')) {
            if (dropdown_menu.matches('.active')) {
                document.open('#');
            }
        }
    });
}
else {
    document.addEventListener('click', event => {
        if (event.target.matches('.dropdown-sub-category-plus-icon')) {
            event.target.parentElement.parentElement.querySelectorAll('.dropdown-micro-category').forEach(micro => { micro.classList.toggle('active'); });
            return;
        }

        if (event.target.matches('.dropdown-button')) {
            if (dropdown_menu.matches('.active') && old_dropdown_button_text != event.target.textContent) {
                old_dropdown_button_text = event.target.textContent;
            }
            else {
                dropdown_menu.classList.toggle('active');
            }
        }
        else if (!event.target.matches('.dropdown-sub-category-plus-icon') && !event.target.matches('.dropdown-menu') && !event.target.matches('.dm')) {
            dropdown_menu.classList.remove('active');
        }

    });

    if (!dropdown_menu.matches('.touch')) dropdown_menu.classList.toggle('touch');
    dropdown_menu.querySelectorAll('.dm').forEach(d => { if (!d.matches('.touch')) d.classList.toggle('touch') });
    document.querySelectorAll('.t').forEach(t => { if (!t.matches('.touch')) t.classList.toggle('touch') });
}
