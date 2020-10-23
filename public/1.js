(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/ShowService.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/services/ShowService.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/db */ "./resources/js/plugins/db.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./resources/js/config.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShowService",
  data: function data() {
    return {
      slug: null,
      service: null
    };
  },
  created: function created() {
    var _this = this;

    this.slug = this.$route.params.slug;
    this.service = _plugins_db__WEBPACK_IMPORTED_MODULE_0__["default"].servicios.find(function (e) {
      return e.slug === _this.slug;
    });
    console.log(this.service);
  },
  methods: {
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    getLink: function getLink(service) {
      var text = "Comprar *".concat(this.service.name, "*.\n Paquete ").concat(service.name, " - $").concat(service.price);
      return "https://wa.me/".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].phone, "?text=").concat(text, "&lang=es");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/ShowService.vue?vue&type=template&id=8b9a941c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/services/ShowService.vue?vue&type=template&id=8b9a941c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm.service
      ? _c("div", [
          _c(
            "div",
            { staticClass: "card text-white bg-dark mb-3 service-show" },
            [
              _c("figure", [
                _c("div", {
                  staticClass: "card-img-top",
                  style: "background-image: url(/img/" + _vm.service.img + ")"
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.service.name))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-subtitle" }, [
                  _vm._v(_vm._s(_vm.service.description))
                ])
              ]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "list-group list-group-flush" },
                _vm._l(_vm.service.plans, function(s) {
                  return _c(
                    "li",
                    {
                      key: s.name,
                      staticClass:
                        "list-group-item d-flex list-group-item-dark justify-content-between"
                    },
                    [
                      _c("b", [
                        _vm._v(
                          "\n                        " +
                            _vm._s(s.name) +
                            "\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { href: _vm.getLink(s), target: "_blank" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-shopping-cart mr-1" }),
                          _vm._v("\n                        Comprar "),
                          _c("b", [
                            _vm._v("$ " + _vm._s(_vm.formatPrice(s.price)))
                          ])
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
        ])
      : _c("div", { staticClass: "not-found" }, [
          _c("h2", [_vm._v("404")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("\n            No encontramos lo que buscas\n        ")
          ])
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/services/ShowService.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/services/ShowService.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShowService_vue_vue_type_template_id_8b9a941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowService.vue?vue&type=template&id=8b9a941c&scoped=true& */ "./resources/js/components/services/ShowService.vue?vue&type=template&id=8b9a941c&scoped=true&");
/* harmony import */ var _ShowService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowService.vue?vue&type=script&lang=js& */ "./resources/js/components/services/ShowService.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowService_vue_vue_type_template_id_8b9a941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShowService_vue_vue_type_template_id_8b9a941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8b9a941c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/services/ShowService.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/services/ShowService.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/services/ShowService.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowService.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/ShowService.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/services/ShowService.vue?vue&type=template&id=8b9a941c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/services/ShowService.vue?vue&type=template&id=8b9a941c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowService_vue_vue_type_template_id_8b9a941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShowService.vue?vue&type=template&id=8b9a941c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/ShowService.vue?vue&type=template&id=8b9a941c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowService_vue_vue_type_template_id_8b9a941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowService_vue_vue_type_template_id_8b9a941c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/plugins/db.js":
/*!************************************!*\
  !*** ./resources/js/plugins/db.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  servicios: [{
    name: 'Netflix Premium UHD 4k',
    slug: 'netflix',
    description: 'Básico, Estándar, Premium',
    img: 'netflix.jpg',
    type: 1,
    price: 0,
    plans: [{
      name: 'Básico',
      price: 4.99
    }, {
      name: 'Estándar',
      price: 6.99
    }, {
      name: 'Premium',
      price: 9.99
    }]
  }, {
    name: 'Amazon Prime Video',
    description: '3 dispositivos',
    img: 'prime.jpg',
    type: 0,
    price: 5.99
  }, {
    name: 'Spotify Premium',
    description: '1 dispositivo',
    img: 'spotify.png',
    type: 0,
    price: 4.99
  }, {
    name: 'Youtube Premium',
    description: '3 dispositivos',
    img: 'yt.jpg',
    type: 0,
    price: 4.99
  }, {
    name: 'IPTV',
    description: '1 a 3 Dispositivos',
    img: 'iptv.jpg',
    slug: 'iptv',
    type: 1,
    price: 0,
    plans: [{
      name: '1 Dispositivo',
      price: 4.99
    }, {
      name: '2 Dispositivos',
      price: 7.99
    }, {
      name: '3 Dispositivos',
      price: 9.99
    }]
  }, {
    name: 'Gifs Cards',
    description: 'Google Play & Play Station',
    img: 'gifs.jpg',
    type: 0,
    price: -1
  }, {
    name: 'Diamantes FreeFire',
    slug: 'diamantes-free-fire',
    description: 'Recargas desde 100 diamantes',
    img: 'freefire.jpg',
    type: 1,
    price: 0,
    plans: [{
      name: '100 +bonus 10',
      price: 1.75
    }, {
      name: '310 +bonus 31',
      price: 4.50
    }, {
      name: '520 +bonus 52',
      price: 6.50
    }, {
      name: '1060 +bonus 106',
      price: 12.50
    }]
  }]
});

/***/ })

}]);