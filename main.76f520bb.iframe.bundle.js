(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(210);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(659),module),module.exports={}}.call(this,__webpack_require__(270)(module))},343:function(module,exports,__webpack_require__){__webpack_require__(344),__webpack_require__(504),__webpack_require__(505),module.exports=__webpack_require__(654)},411:function(module,exports){},505:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(210)},654:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(48),__webpack_require__(20),__webpack_require__(78),__webpack_require__(655),__webpack_require__(328),__webpack_require__(53),__webpack_require__(656),__webpack_require__(657),__webpack_require__(658);var C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(82),C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(4),C_Users_favcastle_Documents_task_manager_storybook_config_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(213);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(C_Users_favcastle_Documents_task_manager_storybook_config_js__WEBPACK_IMPORTED_MODULE_11__).forEach((function(key){var value=C_Users_favcastle_Documents_task_manager_storybook_config_js__WEBPACK_IMPORTED_MODULE_11__[key];switch(key){case"args":case"argTypes":return C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_10__.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_9__.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_9__.d)(loader,!1)}));case"parameters":return Object(C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_9__.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_9__.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_9__.b)(enhancer)}));case"render":return Object(C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_9__.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(C_Users_favcastle_Documents_task_manager_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_9__.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},659:function(module,exports,__webpack_require__){var map={"./DnDTestComponent/index.stories.tsx":667,"./ScrollViewWithIndex/index.stories.tsx":668,"./molecules/SnackBar/index.stories.tsx":666,"./molecules/TaskItem/index.stories.tsx":669};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=659},666:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"snackbar",(function(){return index_stories_snackbar}));__webpack_require__(28),__webpack_require__(145),__webpack_require__(20),__webpack_require__(26),__webpack_require__(17),__webpack_require__(31),__webpack_require__(24),__webpack_require__(21),__webpack_require__(23),__webpack_require__(27),__webpack_require__(39),__webpack_require__(63),__webpack_require__(663);var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(8),styleConstants=(__webpack_require__(665),{snackbar:1e3}),jsx_runtime=__webpack_require__(2);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var ContentWrapper=styled_components_browser_esm.b.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  position: fixed;\n  z-index: ",";\n  transition: all 0.5s;\n  display: inline-table;\n\n  ","\n"])),styleConstants.snackbar,(function(_ref){var horizontal=_ref.horizontal,vertical=_ref.vertical,open=_ref.open,animation=_ref.animation,styles="";switch(horizontal){case"left":styles+=Object(styled_components_browser_esm.a)(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n          left: 32px;\n          right: auto;\n        "])));break;case"right":styles+=Object(styled_components_browser_esm.a)(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n          left: auto;\n          right: 32px;\n        "])));break;default:styles+=Object(styled_components_browser_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n          left: 50%;\n          right: auto;\n          // 自分自身の幅半分ずらす\n          transform: translateX(-50%);\n        "])))}if("top"===vertical)styles+=Object(styled_components_browser_esm.a)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n          top: 32px;\n        "])));else styles+=Object(styled_components_browser_esm.a)(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n          bottom: 32px;\n        "])));if(open)styles+=Object(styled_components_browser_esm.a)(_templateObject12||(_templateObject12=_taggedTemplateLiteralLoose(["opacity: 1"])));else{switch(animation){case"right-to-left":styles+=Object(styled_components_browser_esm.a)(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n            right: -50%;\n            left: 100%;\n          "])));break;case"left-to-right":styles+=Object(styled_components_browser_esm.a)(_templateObject8||(_templateObject8=_taggedTemplateLiteralLoose(["\n            right: 100%;\n            left: -50%;\n          "])));break;case"top-to-bottom":styles+=Object(styled_components_browser_esm.a)(_templateObject9||(_templateObject9=_taggedTemplateLiteralLoose(["\n            top: -50%;\n            bottom: 100%;\n          "])));break;default:styles+=Object(styled_components_browser_esm.a)(_templateObject10||(_templateObject10=_taggedTemplateLiteralLoose(["\n            // top: 100%;\n            bottom: -50%;\n          "])))}styles+=Object(styled_components_browser_esm.a)(_templateObject11||(_templateObject11=_taggedTemplateLiteralLoose(["opacity: 0"])))}return styles})),DefaultContent=styled_components_browser_esm.b.div(_templateObject13||(_templateObject13=_taggedTemplateLiteralLoose(["\n  width: 320px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 4px 4px 4px gray;\n  border-radius: 4px;\n"]))),SnackBar_Snackbar=function Snackbar(_ref2){var element,children=_ref2.children,message=_ref2.message,_ref2$position=_ref2.position,position=void 0===_ref2$position?{vertical:"bottom",horizontal:"left"}:_ref2$position,_ref2$animation=_ref2.animation,animation=void 0===_ref2$animation?"bottom-to-top":_ref2$animation,parentOpenState=_ref2.open,onClose=_ref2.onClose,autoHideDuration=_ref2.autoHideDuration,_React$useState2=_slicedToArray(react.useState(parentOpenState),2),open=_React$useState2[0],setOpen=_React$useState2[1];return react.useEffect((function(){setOpen(parentOpenState),parentOpenState||onClose(),autoHideDuration&&parentOpenState&&setTimeout((function(){setOpen(!1),onClose()}),autoHideDuration)}),[parentOpenState]),element=children||Object(jsx_runtime.jsx)(DefaultContent,{children:message}),Object(jsx_runtime.jsx)(ContentWrapper,{vertical:null==position?void 0:position.vertical,horizontal:null==position?void 0:position.horizontal,animation:animation,open:open,children:element})};SnackBar_Snackbar.displayName="Snackbar";var index_stories_templateObject,index_stories_templateObject2,molecules_SnackBar=SnackBar_Snackbar;try{SnackBar.displayName="SnackBar",SnackBar.__docgenInfo={description:"",displayName:"SnackBar",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => any"}},position:{defaultValue:{value:"{\n    vertical: 'bottom',\n    horizontal: 'left',\n  }"},description:"",name:"position",required:!1,type:{name:"{ vertical?: SnackBarVerticalPosition; horizontal?: SnackBarHorizontalPosition; }"}},animation:{defaultValue:{value:"bottom-to-top"},description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:'"right-to-left"'},{value:'"left-to-right"'},{value:'"bottom-to-top"'},{value:'"top-to-bottom"'}]}},autoHideDuration:{defaultValue:null,description:"",name:"autoHideDuration",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/SnackBar/index.tsx#SnackBar"]={docgenInfo:SnackBar.__docgenInfo,name:"SnackBar",path:"src/components/molecules/SnackBar/index.tsx#SnackBar"})}catch(__react_docgen_typescript_loader_error){}function index_stories_slicedToArray(arr,i){return function index_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function index_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function index_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return index_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_stories_arrayLikeToArray(o,minLen)}(arr,i)||function index_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function index_stories_taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}__webpack_exports__.default={title:"SnackBar"};var Alert=styled_components_browser_esm.b.div(index_stories_templateObject||(index_stories_templateObject=index_stories_taggedTemplateLiteralLoose(["\n  width: 240px;\n  height: 40px;\n  background: #f44336;\n  border-radius: 4px;\n  box-shadow: 4px 4px 4px gray;\n  color: white;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Label=styled_components_browser_esm.b.p(index_stories_templateObject2||(index_stories_templateObject2=index_stories_taggedTemplateLiteralLoose(["\n  font-size: 24px;\n"]))),index_stories_snackbar=function snackbar(){var _React$useState2=index_stories_slicedToArray(react.useState(!1),2),open=_React$useState2[0],setOpen=_React$useState2[1],_React$useState4=index_stories_slicedToArray(react.useState("bottom"),2),verticalPosition=_React$useState4[0],setVerticalPosition=_React$useState4[1],_React$useState6=index_stories_slicedToArray(react.useState("left"),2),horizontalPosition=_React$useState6[0],setHorizontalPosition=_React$useState6[1],_React$useState8=index_stories_slicedToArray(react.useState("left-to-right"),2),animation=_React$useState8[0],setAnimation=_React$useState8[1],_React$useState10=index_stories_slicedToArray(react.useState(1e3),2),autoHideDuration=_React$useState10[0],setAutoHideDuration=_React$useState10[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)(Label,{children:"position vertical"}),["top","bottom"].map((function(vertical){return Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("input",{type:"radio",name:"vertical",checked:verticalPosition===vertical,onClick:function onClick(){return setVerticalPosition(vertical)}}),vertical]})}))]}),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)(Label,{children:"position horizontal"}),["left","middle","right"].map((function(horizontal){return Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("input",{type:"radio",name:"horizontal",checked:horizontalPosition===horizontal,onClick:function onClick(){return setHorizontalPosition(horizontal)}}),horizontal]})}))]}),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)(Label,{children:"animation direction"}),["right-to-left","left-to-right","bottom-to-top","top-to-bottom"].map((function(animationDirection){return Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("input",{type:"radio",name:"animations",checked:animation===animationDirection,onClick:function onClick(){return setAnimation(animationDirection)}}),animationDirection]})}))]}),Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)(Label,{children:"autoHideDuration"}),Object(jsx_runtime.jsx)("input",{type:"number",min:"10",max:"10000",value:autoHideDuration,onChange:function onChange(e){return setAutoHideDuration(parseInt(e.target.value,10))}})]}),Object(jsx_runtime.jsx)("button",{type:"button",onClick:function onClick(){return setOpen(!0)},children:"Click here"}),Object(jsx_runtime.jsx)(molecules_SnackBar,{open:open,onClose:function onClose(){return setOpen(!1)},position:{vertical:verticalPosition,horizontal:horizontalPosition},animation:animation,autoHideDuration:autoHideDuration,children:Object(jsx_runtime.jsx)(Alert,{onClick:function onClick(){return setOpen(!1)},children:"Click to close"})})]})};index_stories_snackbar.story={name:"SnackBar"}},667:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"dndTestComponent",(function(){return index_stories_dndTestComponent}));var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,react=__webpack_require__(0),styled_components_browser_esm=(__webpack_require__(28),__webpack_require__(145),__webpack_require__(20),__webpack_require__(26),__webpack_require__(17),__webpack_require__(31),__webpack_require__(24),__webpack_require__(21),__webpack_require__(23),__webpack_require__(27),__webpack_require__(39),__webpack_require__(8)),useDrag=__webpack_require__(678),useDrop=__webpack_require__(679),DndProvider=__webpack_require__(677),esm=__webpack_require__(340),jsx_runtime=__webpack_require__(2);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Item=styled_components_browser_esm.b.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  font-size: 24px;\n  opacity: ",";\n"])),(function(_ref){return _ref.isDragging?"0.2":"1"})),Area=styled_components_browser_esm.b.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  width: 480px;\n  height: 480px;\n  border: 1px solid grey;\n  background: ",";\n"])),(function(_ref2){return _ref2.isOver?"#f0f3f5":"transparent"})),DroppedItem=styled_components_browser_esm.b.div(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  font-size: 24px;\n  position: absolute;\n  ","\n"])),(function(_ref3){var position=_ref3.position;return position?Object(styled_components_browser_esm.a)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n    display: block;\n    top: ","px;\n    left: ","px;\n  "])),position.y,position.x):Object(styled_components_browser_esm.a)(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["display: none;"])))})),DnDTestComponent_DraggableItem=function DraggableItem(){react.useRef(null);var _React$useState2=_slicedToArray(react.useState({}),2),position=_React$useState2[0],setPosition=_React$useState2[1],_useDrag2=_slicedToArray(Object(useDrag.a)({type:"item",item:{index:"1"},collect:function collect(m){return{isDragging:m.isDragging()}}}),2),isDragging=_useDrag2[0].isDragging,drag=_useDrag2[1],_useDrop2=_slicedToArray(Object(useDrop.a)({accept:"item",drop:function drop(e,m){console.log(e,m.getClientOffset()),setPosition(m.getClientOffset())},hover:function hover(e,m){setPosition(m.getClientOffset())},collect:function collect(m){return{isOver:m.isOver()}}}),2),isOver=_useDrop2[0].isOver,drop=_useDrop2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Item,{ref:drag,isDragging:isDragging,children:"♘"}),Object(jsx_runtime.jsx)(Area,{ref:drop,isOver:isOver}),Object(jsx_runtime.jsx)(DroppedItem,{position:position,children:"♘"})]})},DnDTestComponent_DnDTestComponent=function DnDTestComponent(){return Object(jsx_runtime.jsxs)(DndProvider.a,{backend:esm.a,children:[Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Test"}),Object(jsx_runtime.jsx)(DnDTestComponent_DraggableItem,{})]})};DnDTestComponent_DnDTestComponent.displayName="DnDTestComponent";var components_DnDTestComponent=DnDTestComponent_DnDTestComponent;try{DnDTestComponent_DnDTestComponent.displayName="DnDTestComponent",DnDTestComponent_DnDTestComponent.__docgenInfo={description:"",displayName:"DnDTestComponent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DnDTestComponent/index.tsx#DnDTestComponent"]={docgenInfo:DnDTestComponent_DnDTestComponent.__docgenInfo,name:"DnDTestComponent",path:"src/components/DnDTestComponent/index.tsx#DnDTestComponent"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"DnDTestComponent"};var index_stories_dndTestComponent=function dndTestComponent(){return Object(jsx_runtime.jsx)(components_DnDTestComponent,{})};index_stories_dndTestComponent.displayName="dndTestComponent",index_stories_dndTestComponent.story={name:"DnDTestComponent"}},668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scrollViewWithIndex",(function(){return index_stories_scrollViewWithIndex}));var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,react=__webpack_require__(0),styled_components_browser_esm=(__webpack_require__(28),__webpack_require__(145),__webpack_require__(20),__webpack_require__(26),__webpack_require__(31),__webpack_require__(27),__webpack_require__(39),__webpack_require__(24),__webpack_require__(77),__webpack_require__(17),__webpack_require__(21),__webpack_require__(23),__webpack_require__(63),__webpack_require__(328),__webpack_require__(53),__webpack_require__(662),__webpack_require__(8)),jsx_runtime=__webpack_require__(2);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Root=styled_components_browser_esm.b.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: ","px;\n  background: #c2f0ff;\n  display: flex;\n"])),800),ScrollWrapper=styled_components_browser_esm.b.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  width: 80%;\n  overflow: scroll;\n  \n  &::-webkit-scrollbar {\n    display:none;\n  }\n"]))),IndexesWrapper=styled_components_browser_esm.b.div(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  width: 20%;\n  background: gray;\n"]))),IndexWrapper=styled_components_browser_esm.b.div(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  height: ","px;\n  border-radius: 4px;\n  margin: 4px;\n  margin-bottom: ",";\n  transition: all 0.3s ease-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n"])),60,(function(_ref){var marginBottom=_ref.marginBottom;return marginBottom?marginBottom+"px":"4px"})),ScrollData=styled_components_browser_esm.b.div(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  height: 500px;\n  background: white;\n  margin: 4px;\n"]))),ScrollViewWithIndex_ScrollViewWithIndex=function ScrollViewWithIndex(_ref2){var items=_ref2.items,types=Array.from(new Set(items.map((function(_ref3){return _ref3.type}))))||[],_useState2=_slicedToArray(Object(react.useState)(types[0]),2),top=_useState2[0],setTop=_useState2[1],scrollWrapperRef=Object(react.useRef)(null),onClickIndex=function onClickIndex(type){var topPosition=function getTopPosition(index){var dataElements=scrollWrapperRef.current.children||[],height=0;return dataElements.forEach((function(element,i){i<index&&(height+=element.offsetHeight)})),height}(types.indexOf(type));scrollWrapperRef.current.scroll({top:topPosition,behavior:"smooth"})},getMarginBottom=function getMarginBottom(){return 800-68*types.length};return Object(jsx_runtime.jsxs)(Root,{children:[Object(jsx_runtime.jsx)(ScrollWrapper,{onScroll:function onScroll(e){return function onScroll(e){setTop(types[Math.floor(e.target.scrollTop/500)])}(e)},ref:scrollWrapperRef,children:types.map((function(type){return Object(jsx_runtime.jsx)(ScrollData,{children:type},type)}))}),Object(jsx_runtime.jsx)(IndexesWrapper,{children:types.map((function(type){return Object(jsx_runtime.jsx)(IndexWrapper,{onClick:function onClick(){return onClickIndex(type)},marginBottom:top===type?getMarginBottom():null,children:type},type)}))})]})};ScrollViewWithIndex_ScrollViewWithIndex.displayName="ScrollViewWithIndex";var components_ScrollViewWithIndex=ScrollViewWithIndex_ScrollViewWithIndex;try{ScrollViewWithIndex_ScrollViewWithIndex.displayName="ScrollViewWithIndex",ScrollViewWithIndex_ScrollViewWithIndex.__docgenInfo={description:"",displayName:"ScrollViewWithIndex",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ScrollViewWithIndex/index.tsx#ScrollViewWithIndex"]={docgenInfo:ScrollViewWithIndex_ScrollViewWithIndex.__docgenInfo,name:"ScrollViewWithIndex",path:"src/components/ScrollViewWithIndex/index.tsx#ScrollViewWithIndex"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"ScrollViewWithIndex"};var index_stories_items=[{type:"A",text:"ああああああああああああああああああああああああああ"},{type:"B",text:"ああああああああああああああああああああああああああ"},{type:"C",text:"ああああああああああああああああああああああああああ"},{type:"D",text:"ああああああああああああああああああああああああああ"},{type:"E",text:"ああああああああああああああああああああああああああ"}],index_stories_scrollViewWithIndex=function scrollViewWithIndex(){return Object(jsx_runtime.jsx)(components_ScrollViewWithIndex,{items:index_stories_items})};index_stories_scrollViewWithIndex.displayName="scrollViewWithIndex",index_stories_scrollViewWithIndex.story={name:"ScrollViewWithIndex"}},669:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"taskItem",(function(){return index_stories_taskItem}));__webpack_require__(0),__webpack_require__(28);var _templateObject,_templateObject2,styled_components_browser_esm=__webpack_require__(8),jsx_runtime=__webpack_require__(2);function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Root=styled_components_browser_esm.b.div(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  width: 800px;\n  height: 600px;\n  border-radius: 8px;\n  background: #c2f0ff;\n"]))),Title=styled_components_browser_esm.b.div(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  padding: 32px;\n  font-size: 24px;\n"]))),TaskItem_TaskItem=function TaskItem(_ref){var title=_ref.title;return Object(jsx_runtime.jsxs)(Root,{children:[Object(jsx_runtime.jsx)(Title,{children:title}),Object(jsx_runtime.jsx)("textarea",{})]})};TaskItem_TaskItem.displayName="TaskItem";var molecules_TaskItem=TaskItem_TaskItem;try{TaskItem_TaskItem.displayName="TaskItem",TaskItem_TaskItem.__docgenInfo={description:"",displayName:"TaskItem",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/TaskItem/index.tsx#TaskItem"]={docgenInfo:TaskItem_TaskItem.__docgenInfo,name:"TaskItem",path:"src/components/molecules/TaskItem/index.tsx#TaskItem"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"TaskItem"};var index_stories_taskItem=function taskItem(){return Object(jsx_runtime.jsx)(molecules_TaskItem,{title:"タイトル",content:""})};index_stories_taskItem.displayName="taskItem",index_stories_taskItem.story={name:"TaskItem"}}},[[343,1,2]]]);