exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 41137:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "menu_container__9Zl3P",
	"subtitle": "menu_subtitle__7Kija",
	"title": "menu_title__7uNe1"
};


/***/ }),

/***/ 22754:
/***/ ((module) => {

// Exports
module.exports = {
	"categoryList": "menuCategories_categoryList__ktFqg",
	"categoryItem": "menuCategories_categoryItem__o9cKJ",
	"style": "menuCategories_style__cZGml",
	"fashion": "menuCategories_fashion__iNpn3",
	"food": "menuCategories_food__ufPAu",
	"travel": "menuCategories_travel__E4B5s",
	"culture": "menuCategories_culture__QFA4c",
	"coding": "menuCategories_coding__9Rxni"
};


/***/ }),

/***/ 66851:
/***/ ((module) => {

// Exports
module.exports = {
	"items": "menuPosts_items__zCzFu",
	"item": "menuPosts_item__FYpEz",
	"imageContainer": "menuPosts_imageContainer__XG76w",
	"image": "menuPosts_image__IA3eB",
	"textContainer": "menuPosts_textContainer__au0GC",
	"category": "menuPosts_category__Aonfr",
	"travel": "menuPosts_travel__mQpLL",
	"culture": "menuPosts_culture__pFTSR",
	"food": "menuPosts_food__s3FgX",
	"fashion": "menuPosts_fashion__CLcq8",
	"coding": "menuPosts_coding__gPTWe",
	"style": "menuPosts_style__2TsaX",
	"postTitle": "menuPosts_postTitle___KHVw",
	"detail": "menuPosts_detail__kP_z0",
	"date": "menuPosts_date__ioevs"
};


/***/ }),

/***/ 43289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Menu_Menu)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./src/components/Menu/menu.module.css
var menu_module = __webpack_require__(41137);
var menu_module_default = /*#__PURE__*/__webpack_require__.n(menu_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/menuPosts/menuPosts.module.css
var menuPosts_module = __webpack_require__(66851);
var menuPosts_module_default = /*#__PURE__*/__webpack_require__.n(menuPosts_module);
;// CONCATENATED MODULE: ./src/components/menuPosts/MenuPosts.jsx





const MenuPosts = ({ withImage })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (menuPosts_module_default()).items,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPosts_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPosts_module_default()).imageContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPosts_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPosts_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `${(menuPosts_module_default()).category} ${(menuPosts_module_default()).travel}`,
                                children: "Travel"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPosts_module_default()).postTitle,
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPosts_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPosts_module_default()).username,
                                        children: "John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPosts_module_default()).date,
                                        children: " - 10.03.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPosts_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPosts_module_default()).imageContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPosts_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPosts_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `${(menuPosts_module_default()).category} ${(menuPosts_module_default()).culture}`,
                                children: "Culture"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPosts_module_default()).postTitle,
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPosts_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPosts_module_default()).username,
                                        children: "John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPosts_module_default()).date,
                                        children: " - 10.03.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPosts_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPosts_module_default()).imageContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPosts_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPosts_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `${(menuPosts_module_default()).category} ${(menuPosts_module_default()).food}`,
                                children: "Food"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPosts_module_default()).postTitle,
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPosts_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPosts_module_default()).username,
                                        children: "John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPosts_module_default()).date,
                                        children: " - 10.03.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPosts_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPosts_module_default()).imageContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPosts_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPosts_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `${(menuPosts_module_default()).category} ${(menuPosts_module_default()).fashion}`,
                                children: "Fashion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPosts_module_default()).postTitle,
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPosts_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPosts_module_default()).username,
                                        children: "John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPosts_module_default()).date,
                                        children: " - 10.03.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const menuPosts_MenuPosts = (MenuPosts);

// EXTERNAL MODULE: ./src/components/menuCategories/menuCategories.module.css
var menuCategories_module = __webpack_require__(22754);
var menuCategories_module_default = /*#__PURE__*/__webpack_require__.n(menuCategories_module);
;// CONCATENATED MODULE: ./src/components/menuCategories/MenuCategories.jsx




const MenuCategories = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (menuCategories_module_default()).categoryList,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog?cat=style",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).style}`,
                children: "Style"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).fashion}`,
                children: "Fashion"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).food}`,
                children: "Food"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).travel}`,
                children: "Travel"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).culture}`,
                children: "Culture"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).coding}`,
                children: "Coding"
            })
        ]
    });
};
/* harmony default export */ const menuCategories_MenuCategories = (MenuCategories);

;// CONCATENATED MODULE: ./src/components/Menu/Menu.jsx







const Menu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (menu_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (menu_module_default()).subtitle,
                children: "What's hot"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (menu_module_default()).title,
                children: "Most Popular"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(menuPosts_MenuPosts, {
                withImage: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (menu_module_default()).subtitle,
                children: "Discover by topic"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (menu_module_default()).title,
                children: "Categories"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(menuCategories_MenuCategories, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (menu_module_default()).subtitle,
                children: "Chosen by the editor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (menu_module_default()).title,
                children: "Editors Pick"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(menuPosts_MenuPosts, {
                withImage: true
            })
        ]
    });
};
/* harmony default export */ const Menu_Menu = (Menu);


/***/ })

};
;