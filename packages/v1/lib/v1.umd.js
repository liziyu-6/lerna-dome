(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueApp1"] = factory();
	else
		root["vueApp1"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "f5e1");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f5e1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "HelloWorld", function() { return /* reexport */ hello_world; });
__webpack_require__.d(__webpack_exports__, "Button1", function() { return /* reexport */ button1; });

// CONCATENATED MODULE: C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+@vue+cli-service@4.5.19_vue-template-compiler@2.7.15_vue@2.7.15/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"924cb146-vue-loader-template"}!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--13-0!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+thread-loader@2.1.3_webpack@4.47.0/node_modules/thread-loader/dist/cjs.js!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_@babel+core@7.23.3_webpack@4.47.0/node_modules/babel-loader/lib!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_cache-loader@4.1.0_css-loader@3.6.0_vue-template-co_wb3t4kok4nbmrmr53k32ebcn2u/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_cache-loader@4.1.0_css-loader@3.6.0_vue-template-co_wb3t4kok4nbmrmr53k32ebcn2u/node_modules/vue-loader/lib??vue-loader-options!./src/components/hello-world/HelloWorld.vue?vue&type=template&id=71a03029
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._v("11133")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/hello-world/HelloWorld.vue?vue&type=template&id=71a03029

// CONCATENATED MODULE: C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--13-0!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+thread-loader@2.1.3_webpack@4.47.0/node_modules/thread-loader/dist/cjs.js!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_@babel+core@7.23.3_webpack@4.47.0/node_modules/babel-loader/lib!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_cache-loader@4.1.0_css-loader@3.6.0_vue-template-co_wb3t4kok4nbmrmr53k32ebcn2u/node_modules/vue-loader/lib??vue-loader-options!./src/components/hello-world/HelloWorld.vue?vue&type=script&lang=js
/* harmony default export */ var HelloWorldvue_type_script_lang_js = ({
  name: 'HelloWorld',
  props: {
    size: {
      type: [Number, String],
      validator(val) {
        if (typeof val === 'string') {
          return ['large', 'medium', 'small'].includes(val);
        }
        return typeof val === 'number';
      }
    },
    shape: {
      type: String,
      default: 'circle',
      validator(val) {
        return ['circle', 'square'].includes(val);
      }
    },
    icon: String,
    src: String,
    alt: String,
    srcSet: String,
    error: Function,
    fit: {
      type: String,
      default: 'cover'
    }
  },
  data() {
    return {
      isImageExist: true
    };
  }
});
// CONCATENATED MODULE: ./src/components/hello-world/HelloWorld.vue?vue&type=script&lang=js
 /* harmony default export */ var hello_world_HelloWorldvue_type_script_lang_js = (HelloWorldvue_type_script_lang_js); 
// CONCATENATED MODULE: C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_cache-loader@4.1.0_css-loader@3.6.0_vue-template-co_wb3t4kok4nbmrmr53k32ebcn2u/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/hello-world/HelloWorld.vue





/* normalize component */

var component = normalizeComponent(
  hello_world_HelloWorldvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HelloWorld = (component.exports);
// CONCATENATED MODULE: ./src/components/hello-world/index.js


/* istanbul ignore next */
HelloWorld.install = function (Vue) {
  Vue.component(HelloWorld.name, HelloWorld);
};
/* harmony default export */ var hello_world = (HelloWorld);
// CONCATENATED MODULE: C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"924cb146-vue-loader-template"}!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--13-0!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+thread-loader@2.1.3_webpack@4.47.0/node_modules/thread-loader/dist/cjs.js!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_@babel+core@7.23.3_webpack@4.47.0/node_modules/babel-loader/lib!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_cache-loader@4.1.0_css-loader@3.6.0_vue-template-co_wb3t4kok4nbmrmr53k32ebcn2u/node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_cache-loader@4.1.0_css-loader@3.6.0_vue-template-co_wb3t4kok4nbmrmr53k32ebcn2u/node_modules/vue-loader/lib??vue-loader-options!./src/components/button1/Button1.vue?vue&type=template&id=c434747e
var Button1vue_type_template_id_c434747e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var Button1vue_type_template_id_c434747e_staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('button', {
    staticStyle: {
      "width": "200px",
      "height": "40px"
    }
  }, [_vm._v("33333332")])]);
}];

// CONCATENATED MODULE: ./src/components/button1/Button1.vue?vue&type=template&id=c434747e

// CONCATENATED MODULE: C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--13-0!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+thread-loader@2.1.3_webpack@4.47.0/node_modules/thread-loader/dist/cjs.js!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_@babel+core@7.23.3_webpack@4.47.0/node_modules/babel-loader/lib!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_cache-loader@4.1.0_css-loader@3.6.0_vue-template-co_wb3t4kok4nbmrmr53k32ebcn2u/node_modules/vue-loader/lib??vue-loader-options!./src/components/button1/Button1.vue?vue&type=script&lang=js
/* harmony default export */ var Button1vue_type_script_lang_js = ({
  name: 'Button1'
});
// CONCATENATED MODULE: ./src/components/button1/Button1.vue?vue&type=script&lang=js
 /* harmony default export */ var button1_Button1vue_type_script_lang_js = (Button1vue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/button1/Button1.vue





/* normalize component */

var Button1_component = normalizeComponent(
  button1_Button1vue_type_script_lang_js,
  Button1vue_type_template_id_c434747e_render,
  Button1vue_type_template_id_c434747e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Button1 = (Button1_component.exports);
// CONCATENATED MODULE: ./src/components/button1/index.js


/* istanbul ignore next */
console.log(Button1, '?????');
Button1.install = function (Vue) {
  Vue.component(Button1.name, Button1);
};
/* harmony default export */ var button1 = (Button1);
// CONCATENATED MODULE: ./src/index.js


const components = [hello_world, button1];
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* harmony default export */ var src_0 = ({
  install
});
// CONCATENATED MODULE: C:/limai/dome/lerna-dome/node_modules/.pnpm/registry.npmmirror.com+@vue+cli-service@4.5.19_vue-template-compiler@2.7.15_vue@2.7.15/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0);



/***/ })

/******/ });
});
//# sourceMappingURL=v1.umd.js.map