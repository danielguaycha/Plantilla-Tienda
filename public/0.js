(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/ListServices.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/services/ListServices.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./resources/js/components/services/Service.vue");
/* harmony import */ var _plugins_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../plugins/db */ "./resources/js/plugins/db.js");
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
  name: "ListServices",
  components: {
    Service: _Service__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      servicios: _plugins_db__WEBPACK_IMPORTED_MODULE_1__["default"].servicios
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/Service.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/services/Service.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./resources/js/config.js");
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
  name: "Service",
  props: {
    service: {
      type: Object | Array,
      required: true
    }
  },
  methods: {
    getUrl: function getUrl(service) {
      var text = "Comprar ".concat(service.name, " ").concat(service.price < 0 ? '' : ' - $' + service.price);
      return "https://wa.me/".concat(_config__WEBPACK_IMPORTED_MODULE_0__["default"].phone, "?text=").concat(text, "&lang=es");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/ListServices.vue?vue&type=template&id=7a9c1592&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/services/ListServices.vue?vue&type=template&id=7a9c1592&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "row" },
      _vm._l(_vm.servicios, function(s) {
        return _c(
          "div",
          { key: s.name, staticClass: "col-6 col-sm-6 col-md-4 col-xl-3" },
          [_c("service", { attrs: { service: s } })],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/Service.vue?vue&type=template&id=02c18ba2&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/services/Service.vue?vue&type=template&id=02c18ba2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card text-white bg-dark service p-0" }, [
    _c("figure", [
      _c("div", {
        staticClass: "card-img-top",
        style: "background-image: url(/img/" + _vm.service.img + ")",
        attrs: { alt: "freefire" }
      })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.service.name))
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "card-text" }, [
          _vm._v(_vm._s(_vm.service.description))
        ]),
        _vm._v(" "),
        _vm.service.type === 1
          ? _c(
              "router-link",
              {
                staticClass: "btn btn-secondary btn-block",
                attrs: {
                  to: { name: "service", params: { slug: _vm.service.slug } }
                }
              },
              [_vm._v("Ver planes")]
            )
          : _c(
              "a",
              {
                staticClass: "btn btn-primary btn-block",
                attrs: { href: _vm.getUrl(_vm.service), target: "_blank" }
              },
              [
                _c("i", { staticClass: "fa fa-shopping-cart mr-1" }),
                _vm._v("Comprar "),
                _vm.service.price > 0
                  ? _c("b", [_vm._v("$" + _vm._s(_vm.service.price))])
                  : _vm._e()
              ]
            )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/services/ListServices.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/services/ListServices.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListServices_vue_vue_type_template_id_7a9c1592_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListServices.vue?vue&type=template&id=7a9c1592&scoped=true& */ "./resources/js/components/services/ListServices.vue?vue&type=template&id=7a9c1592&scoped=true&");
/* harmony import */ var _ListServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListServices.vue?vue&type=script&lang=js& */ "./resources/js/components/services/ListServices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListServices_vue_vue_type_template_id_7a9c1592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListServices_vue_vue_type_template_id_7a9c1592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a9c1592",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/services/ListServices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/services/ListServices.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/services/ListServices.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListServices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/ListServices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/services/ListServices.vue?vue&type=template&id=7a9c1592&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/services/ListServices.vue?vue&type=template&id=7a9c1592&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListServices_vue_vue_type_template_id_7a9c1592_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ListServices.vue?vue&type=template&id=7a9c1592&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/ListServices.vue?vue&type=template&id=7a9c1592&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListServices_vue_vue_type_template_id_7a9c1592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListServices_vue_vue_type_template_id_7a9c1592_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/services/Service.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/services/Service.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Service_vue_vue_type_template_id_02c18ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service.vue?vue&type=template&id=02c18ba2&scoped=true& */ "./resources/js/components/services/Service.vue?vue&type=template&id=02c18ba2&scoped=true&");
/* harmony import */ var _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Service.vue?vue&type=script&lang=js& */ "./resources/js/components/services/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Service_vue_vue_type_template_id_02c18ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Service_vue_vue_type_template_id_02c18ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "02c18ba2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/services/Service.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/services/Service.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/services/Service.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/Service.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/services/Service.vue?vue&type=template&id=02c18ba2&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/services/Service.vue?vue&type=template&id=02c18ba2&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_02c18ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Service.vue?vue&type=template&id=02c18ba2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/services/Service.vue?vue&type=template&id=02c18ba2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_02c18ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Service_vue_vue_type_template_id_02c18ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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