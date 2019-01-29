import 'whatwg-fetch';
import config from '../../config/config';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
});

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products,
});

const hardCodedJson  = [
                       {
                       "id": 1339,
                       "name": "Banana",
                       "slug": "patient-ninja",
                       "permalink": "https://pwathemes.com/demo-api/product/patient-ninja/",
                       "date_created": "2017-07-31T11:56:57",
                       "date_created_gmt": "2017-07-31T11:56:57",
                       "date_modified": "2017-07-31T11:56:57",
                       "date_modified_gmt": "2017-07-31T11:56:57",
                       "type": "simple",
                       "status": "publish",
                       "featured": true,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "HOODIE-PATIENT-NINJA",
                       "price": "2.99",
                       "regular_price": "35",
                       "sale_price": "",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>35.00</span>",
                       "on_sale": false,
                       "purchasable": true,
                       "total_sales": 30,
                       "virtual": false,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "",
                       "button_text": "",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": true,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": true,
                       "average_rating": "3.50",
                       "rating_count": 2,
                       "related_ids": [
                       1301,
                       1293,
                       1297,
                       1299,
                       1295
                       ],
                       "upsell_ids": [],
                       "cross_sell_ids": [
                       1300
                       ],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 88,
                       "name": "Fresh",
                       "slug": "fresh"
                       },
                       {
                       "id": 89,
                       "name": "Fruit",
                       "slug": "fruit"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1337,
                       "date_created": "2017-07-31T11:56:53",
                       "date_created_gmt": "2017-07-31T11:56:53",
                       "date_modified": "2017-07-31T11:56:53",
                       "date_modified_gmt": "2017-07-31T11:56:53",
                       "src": "https://res.cloudinary.com/dzpzeprjj/image/upload/v1541720557/banana_n6w3ln.png",
                       "name": "",
                       "alt": "",
                       "position": 0
                       },
                       {
                       "id": 1338,
                       "date_created": "2017-07-31T11:56:55",
                       "date_created_gmt": "2017-07-31T11:56:55",
                       "date_modified": "2017-07-31T11:56:55",
                       "date_modified_gmt": "2017-07-31T11:56:55",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115655/hoodie_3_back.jpg",
                       "name": "",
                       "alt": "",
                       "position": 1
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1339"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       },
                       {
                       "id": 1330,
                       "name": "Protein Powder",
                       "slug": "ship-your-idea",
                       "permalink": "https://pwathemes.com/demo-api/product/ship-your-idea/",
                       "date_created": "2017-07-31T11:56:40",
                       "date_created_gmt": "2017-07-31T11:56:40",
                       "date_modified": "2017-07-31T11:56:40",
                       "date_modified_gmt": "2017-07-31T11:56:40",
                       "type": "simple",
                       "status": "publish",
                       "featured": true,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "POSTER-SHIP-YOUR-IDEA",
                       "price": "179.99",
                       "regular_price": "15",
                       "sale_price": "",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span>",
                       "on_sale": false,
                       "purchasable": true,
                       "total_sales": 2,
                       "virtual": false,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "",
                       "button_text": "",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": true,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": true,
                       "average_rating": "0.00",
                       "rating_count": 0,
                       "related_ids": [
                       1318,
                       1321,
                       1324,
                       1327
                       ],
                       "upsell_ids": [
                       1296,
                       1297
                       ],
                       "cross_sell_ids": [
                       1296,
                       1297
                       ],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 87,
                       "name": "Supplement",
                       "slug": "supplement"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1328,
                       "date_created": "2017-07-31T11:56:35",
                       "date_created_gmt": "2017-07-31T11:56:35",
                       "date_modified": "2017-07-31T11:56:35",
                       "date_modified_gmt": "2017-07-31T11:56:35",
                       "src": "https://res.cloudinary.com/dzpzeprjj/image/upload/v1541720572/proteinpowder_ax0nod.jpg ",
                       "name": "",
                       "alt": "",
                       "position": 0
                       },
                       {
                       "id": 1329,
                       "date_created": "2017-07-31T11:56:38",
                       "date_created_gmt": "2017-07-31T11:56:38",
                       "date_modified": "2017-07-31T11:56:38",
                       "date_modified_gmt": "2017-07-31T11:56:38",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115638/Poster_1_flat.jpg",
                       "name": "",
                       "alt": "",
                       "position": 1
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1330"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       },
                       {
                       "id": 1327,
                       "name": "Flying Ninja",
                       "slug": "flying-ninja",
                       "permalink": "https://pwathemes.com/demo-api/product/flying-ninja/",
                       "date_created": "2017-07-31T11:56:34",
                       "date_created_gmt": "2017-07-31T11:56:34",
                       "date_modified": "2017-07-31T11:56:34",
                       "date_modified_gmt": "2017-07-31T11:56:34",
                       "type": "simple",
                       "status": "publish",
                       "featured": false,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "POSTER-FLYING-NINJA",
                       "price": "12",
                       "regular_price": "15",
                       "sale_price": "12",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<del><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span></del> <ins><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>12.00</span></ins>",
                       "on_sale": true,
                       "purchasable": true,
                       "total_sales": 1,
                       "virtual": false,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "",
                       "button_text": "",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": true,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": true,
                       "average_rating": "0.00",
                       "rating_count": 0,
                       "related_ids": [
                       1330,
                       1318,
                       1321,
                       1324
                       ],
                       "upsell_ids": [],
                       "cross_sell_ids": [],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 87,
                       "name": "Posters",
                       "slug": "posters"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1325,
                       "date_created": "2017-07-31T11:56:30",
                       "date_created_gmt": "2017-07-31T11:56:30",
                       "date_modified": "2017-07-31T11:56:30",
                       "date_modified_gmt": "2017-07-31T11:56:30",
                       "src": "https://res.cloudinary.com/dzpzeprjj/image/upload/v1541720572/proteinpowder_ax0nod.jpg",
                       "name": "",
                       "alt": "",
                       "position": 0
                       },
                       {
                       "id": 1326,
                       "date_created": "2017-07-31T11:56:32",
                       "date_created_gmt": "2017-07-31T11:56:32",
                       "date_modified": "2017-07-31T11:56:32",
                       "date_modified_gmt": "2017-07-31T11:56:32",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115633/Poster_2_flat.jpg",
                       "name": "",
                       "alt": "",
                       "position": 1
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1327"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       },
                       {
                       "id": 1324,
                       "name": "Premium Quality",
                       "slug": "premium-quality",
                       "permalink": "https://pwathemes.com/demo-api/product/premium-quality/",
                       "date_created": "2017-07-31T11:56:30",
                       "date_created_gmt": "2017-07-31T11:56:30",
                       "date_modified": "2017-07-31T11:56:30",
                       "date_modified_gmt": "2017-07-31T11:56:30",
                       "type": "simple",
                       "status": "publish",
                       "featured": false,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "POSTER-PREMIUM-QUALITY",
                       "price": "12",
                       "regular_price": "15",
                       "sale_price": "12",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<del><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span></del> <ins><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>12.00</span></ins>",
                       "on_sale": true,
                       "purchasable": true,
                       "total_sales": 0,
                       "virtual": false,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "",
                       "button_text": "",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": true,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": true,
                       "average_rating": "0.00",
                       "rating_count": 0,
                       "related_ids": [
                       1327,
                       1318,
                       1330,
                       1321
                       ],
                       "upsell_ids": [
                       1295
                       ],
                       "cross_sell_ids": [],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 87,
                       "name": "Posters",
                       "slug": "posters"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1322,
                       "date_created": "2017-07-31T11:56:26",
                       "date_created_gmt": "2017-07-31T11:56:26",
                       "date_modified": "2017-07-31T11:56:26",
                       "date_modified_gmt": "2017-07-31T11:56:26",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115627/poster_3_up.jpg",
                       "name": "",
                       "alt": "",
                       "position": 0
                       },
                       {
                       "id": 1323,
                       "date_created": "2017-07-31T11:56:28",
                       "date_created_gmt": "2017-07-31T11:56:28",
                       "date_modified": "2017-07-31T11:56:28",
                       "date_modified_gmt": "2017-07-31T11:56:28",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115628/Poster_3_flat.jpg",
                       "name": "",
                       "alt": "",
                       "position": 1
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1324"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       },
                       {
                       "id": 1321,
                       "name": "Woo Ninja",
                       "slug": "woo-ninja",
                       "permalink": "https://pwathemes.com/demo-api/product/woo-ninja/",
                       "date_created": "2017-07-31T11:56:26",
                       "date_created_gmt": "2017-07-31T11:56:26",
                       "date_modified": "2017-07-31T11:56:26",
                       "date_modified_gmt": "2017-07-31T11:56:26",
                       "type": "simple",
                       "status": "publish",
                       "featured": false,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "POSTER-WOO-NINJA",
                       "price": "15",
                       "regular_price": "15",
                       "sale_price": "",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span>",
                       "on_sale": false,
                       "purchasable": true,
                       "total_sales": 0,
                       "virtual": false,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "",
                       "button_text": "",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": true,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": true,
                       "average_rating": "0.00",
                       "rating_count": 0,
                       "related_ids": [
                       1330,
                       1327,
                       1318,
                       1324
                       ],
                       "upsell_ids": [],
                       "cross_sell_ids": [
                       1293,
                       1294
                       ],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 87,
                       "name": "Posters",
                       "slug": "posters"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1319,
                       "date_created": "2017-07-31T11:56:21",
                       "date_created_gmt": "2017-07-31T11:56:21",
                       "date_modified": "2017-07-31T11:56:21",
                       "date_modified_gmt": "2017-07-31T11:56:21",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115622/poster_4_up.jpg",
                       "name": "",
                       "alt": "",
                       "position": 0
                       },
                       {
                       "id": 1320,
                       "date_created": "2017-07-31T11:56:24",
                       "date_created_gmt": "2017-07-31T11:56:24",
                       "date_modified": "2017-07-31T11:56:24",
                       "date_modified_gmt": "2017-07-31T11:56:24",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115624/Poster_4_flat.jpg",
                       "name": "",
                       "alt": "",
                       "position": 1
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1321"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       },
                       {
                       "id": 1318,
                       "name": "Woo Logo",
                       "slug": "woo-logo",
                       "permalink": "https://pwathemes.com/demo-api/product/woo-logo/",
                       "date_created": "2017-07-31T11:56:21",
                       "date_created_gmt": "2017-07-31T11:56:21",
                       "date_modified": "2017-07-31T11:56:21",
                       "date_modified_gmt": "2017-07-31T11:56:21",
                       "type": "simple",
                       "status": "publish",
                       "featured": false,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "POSTER-WOO-LOGO",
                       "price": "15",
                       "regular_price": "15",
                       "sale_price": "",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>15.00</span>",
                       "on_sale": false,
                       "purchasable": true,
                       "total_sales": 1,
                       "virtual": false,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "",
                       "button_text": "",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": true,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": true,
                       "average_rating": "0.00",
                       "rating_count": 0,
                       "related_ids": [
                       1330,
                       1327,
                       1321,
                       1324
                       ],
                       "upsell_ids": [],
                       "cross_sell_ids": [
                       1291,
                       1292
                       ],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 87,
                       "name": "Posters",
                       "slug": "posters"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1316,
                       "date_created": "2017-07-31T11:56:17",
                       "date_created_gmt": "2017-07-31T11:56:17",
                       "date_modified": "2017-07-31T11:56:17",
                       "date_modified_gmt": "2017-07-31T11:56:17",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115617/poster_5_up.jpg",
                       "name": "",
                       "alt": "",
                       "position": 0
                       },
                       {
                       "id": 1317,
                       "date_created": "2017-07-31T11:56:19",
                       "date_created_gmt": "2017-07-31T11:56:19",
                       "date_modified": "2017-07-31T11:56:19",
                       "date_modified_gmt": "2017-07-31T11:56:19",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115619/Poster_5_flat.jpg",
                       "name": "",
                       "alt": "",
                       "position": 1
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1318"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       },
                       {
                       "id": 1309,
                       "name": "Woo Album #4",
                       "slug": "woo-album-4",
                       "permalink": "https://pwathemes.com/demo-api/product/woo-album-4/",
                       "date_created": "2017-07-31T11:56:05",
                       "date_created_gmt": "2017-07-31T11:56:05",
                       "date_modified": "2017-07-31T11:56:05",
                       "date_modified_gmt": "2017-07-31T11:56:05",
                       "type": "simple",
                       "status": "publish",
                       "featured": false,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "WOO-ALBUM-4",
                       "price": "9",
                       "regular_price": "9",
                       "sale_price": "",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>9.00</span>",
                       "on_sale": false,
                       "purchasable": true,
                       "total_sales": 0,
                       "virtual": true,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "",
                       "button_text": "",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": false,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": true,
                       "average_rating": "0.00",
                       "rating_count": 0,
                       "related_ids": [
                       1288,
                       1306,
                       1289,
                       1286,
                       1287
                       ],
                       "upsell_ids": [],
                       "cross_sell_ids": [],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 86,
                       "name": "Albums",
                       "slug": "albums"
                       },
                       {
                       "id": 84,
                       "name": "Music",
                       "slug": "music"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1307,
                       "date_created": "2017-07-31T11:56:01",
                       "date_created_gmt": "2017-07-31T11:56:01",
                       "date_modified": "2017-07-31T11:56:01",
                       "date_modified_gmt": "2017-07-31T11:56:01",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115601/cd_5_angle.jpg",
                       "name": "",
                       "alt": "",
                       "position": 0
                       },
                       {
                       "id": 1308,
                       "date_created": "2017-07-31T11:56:03",
                       "date_created_gmt": "2017-07-31T11:56:03",
                       "date_modified": "2017-07-31T11:56:03",
                       "date_modified_gmt": "2017-07-31T11:56:03",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115603/cd_5_flat.jpg",
                       "name": "",
                       "alt": "",
                       "position": 1
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1309"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       },
                       {
                       "id": 1306,
                       "name": "Woo Singles",
                       "slug": "woo-singles",
                       "permalink": "https://pwathemes.com/demo-api/product/woo-singles/",
                       "date_created": "2017-07-31T11:56:00",
                       "date_created_gmt": "2017-07-31T11:56:00",
                       "date_modified": "2017-07-31T11:56:00",
                       "date_modified_gmt": "2017-07-31T11:56:00",
                       "type": "grouped",
                       "status": "publish",
                       "featured": false,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "WOO-SINGLES",
                       "price": "",
                       "regular_price": "",
                       "sale_price": "",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>2.00</span>&ndash;<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>3.00</span>",
                       "on_sale": true,
                       "purchasable": false,
                       "total_sales": 0,
                       "virtual": false,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "",
                       "button_text": "",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": true,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": true,
                       "average_rating": "0.00",
                       "rating_count": 0,
                       "related_ids": [
                       1288,
                       1289,
                       1286,
                       1290,
                       1309
                       ],
                       "upsell_ids": [
                       1288,
                       1289
                       ],
                       "cross_sell_ids": [
                       1290
                       ],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 84,
                       "name": "Music",
                       "slug": "music"
                       },
                       {
                       "id": 85,
                       "name": "Singles",
                       "slug": "singles"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1303,
                       "date_created": "2017-07-31T11:55:54",
                       "date_created_gmt": "2017-07-31T11:55:54",
                       "date_modified": "2017-07-31T11:55:54",
                       "date_modified_gmt": "2017-07-31T11:55:54",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115555/cd_6_flat.jpg",
                       "name": "",
                       "alt": "",
                       "position": 0
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [
                       1286,
                       1287
                       ],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1306"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       },
                       {
                       "id": 1301,
                       "name": "Ninja Silhouette",
                       "slug": "ninja-silhouette",
                       "permalink": "https://pwathemes.com/demo-api/product/ninja-silhouette/",
                       "date_created": "2017-07-31T11:55:52",
                       "date_created_gmt": "2017-07-31T11:55:52",
                       "date_modified": "2017-07-31T11:56:48",
                       "date_modified_gmt": "2017-07-31T11:56:48",
                       "type": "external",
                       "status": "publish",
                       "featured": false,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "HOODIE-NINJA-SILHOUETTE",
                       "price": "30",
                       "regular_price": "30",
                       "sale_price": "",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>30.00</span>",
                       "on_sale": false,
                       "purchasable": false,
                       "total_sales": 0,
                       "virtual": false,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "https://mercantile.wordpress.org/product/wordpress-logo-black-zip-hoodie/",
                       "button_text": "Buy on WordPress Swag Store",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": true,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": false,
                       "average_rating": "0.00",
                       "rating_count": 0,
                       "related_ids": [
                       1298,
                       1299,
                       1293,
                       1300,
                       1297
                       ],
                       "upsell_ids": [],
                       "cross_sell_ids": [
                       1298
                       ],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 88,
                       "name": "Clothing",
                       "slug": "clothing"
                       },
                       {
                       "id": 89,
                       "name": "Hoodies",
                       "slug": "hoodies"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1333,
                       "date_created": "2017-07-31T11:56:44",
                       "date_created_gmt": "2017-07-31T11:56:44",
                       "date_modified": "2017-07-31T11:56:44",
                       "date_modified_gmt": "2017-07-31T11:56:44",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115644/hoodie_5_front.jpg",
                       "name": "",
                       "alt": "",
                       "position": 0
                       },
                       {
                       "id": 1334,
                       "date_created": "2017-07-31T11:56:46",
                       "date_created_gmt": "2017-07-31T11:56:46",
                       "date_modified": "2017-07-31T11:56:46",
                       "date_modified_gmt": "2017-07-31T11:56:46",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115646/hoodie_5_back.jpg",
                       "name": "",
                       "alt": "",
                       "position": 1
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1301"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       },
                       {
                       "id": 1298,
                       "name": "Ninja Silhouette",
                       "slug": "ninja-silhouette-2",
                       "permalink": "https://pwathemes.com/demo-api/product/ninja-silhouette-2/",
                       "date_created": "2017-07-31T11:55:51",
                       "date_created_gmt": "2017-07-31T11:55:51",
                       "date_modified": "2017-07-31T11:57:22",
                       "date_modified_gmt": "2017-07-31T11:57:22",
                       "type": "simple",
                       "status": "publish",
                       "featured": false,
                       "catalog_visibility": "visible",
                       "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
                       "sku": "T-SHIRT-NINJA-SILHOUETTE",
                       "price": "20",
                       "regular_price": "20",
                       "sale_price": "",
                       "date_on_sale_from": null,
                       "date_on_sale_from_gmt": null,
                       "date_on_sale_to": null,
                       "date_on_sale_to_gmt": null,
                       "price_html": "<span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</span>",
                       "on_sale": false,
                       "purchasable": true,
                       "total_sales": 0,
                       "virtual": false,
                       "downloadable": false,
                       "downloads": [],
                       "download_limit": 0,
                       "download_expiry": 0,
                       "external_url": "",
                       "button_text": "",
                       "tax_status": "taxable",
                       "tax_class": "taxable",
                       "manage_stock": false,
                       "stock_quantity": null,
                       "in_stock": true,
                       "backorders": "no",
                       "backorders_allowed": false,
                       "backordered": false,
                       "sold_individually": false,
                       "weight": "",
                       "dimensions": {
                       "length": "",
                       "width": "",
                       "height": ""
                       },
                       "shipping_required": true,
                       "shipping_taxable": true,
                       "shipping_class": "",
                       "shipping_class_id": 0,
                       "reviews_allowed": true,
                       "average_rating": "0.00",
                       "rating_count": 0,
                       "related_ids": [
                       1339,
                       1300,
                       1294,
                       1296,
                       1291
                       ],
                       "upsell_ids": [
                       1301
                       ],
                       "cross_sell_ids": [
                       1293,
                       1299
                       ],
                       "parent_id": 0,
                       "purchase_note": "",
                       "categories": [
                       {
                       "id": 88,
                       "name": "Clothing",
                       "slug": "clothing"
                       },
                       {
                       "id": 90,
                       "name": "T-shirts",
                       "slug": "t-shirts"
                       }
                       ],
                       "tags": [],
                       "images": [
                       {
                       "id": 1352,
                       "date_created": "2017-07-31T11:57:18",
                       "date_created_gmt": "2017-07-31T11:57:18",
                       "date_modified": "2017-07-31T11:57:18",
                       "date_modified_gmt": "2017-07-31T11:57:18",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115719/T_5_front.jpg",
                       "name": "",
                       "alt": "",
                       "position": 0
                       },
                       {
                       "id": 1353,
                       "date_created": "2017-07-31T11:57:21",
                       "date_created_gmt": "2017-07-31T11:57:21",
                       "date_modified": "2017-07-31T11:57:21",
                       "date_modified_gmt": "2017-07-31T11:57:21",
                       "src": "https://dm6mgg4whxzuh.cloudfront.net/website-pwathemes/demo-api/wp-content/uploads/2017/07/31115721/T_5_back.jpg",
                       "name": "",
                       "alt": "",
                       "position": 1
                       }
                       ],
                       "attributes": [],
                       "default_attributes": [],
                       "variations": [],
                       "grouped_products": [],
                       "menu_order": 0,
                       "meta_data": [],
                       "_links": {
                       "self": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products/1298"
                       }
                       ],
                       "collection": [
                       {
                       "href": "https://pwathemes.com/demo-api/wp-json/wc/v2/products"
                       }
                       ]
                       }
                       }
                       ]
export const fetchProducts = (params = {}) => (dispatch) => {
  dispatch(requestProducts());

  let url;
  if (params && params.id) {
    url = config.API_PRODUCT_URL + String(params.id);
  } else {
    url =
      config.API_PRODUCTS_URL +
      '?' +
      Object.keys(params)
        .map(k => k + '=' + encodeURIComponent(params[k]))
        .join('&');
  }

  return fetch(url)
    .then(response => response.json())
    .then(json => dispatch(receiveProducts(hardCodedJson)))
    .catch(() => {
      dispatch(receiveProducts([]));
    });
};
