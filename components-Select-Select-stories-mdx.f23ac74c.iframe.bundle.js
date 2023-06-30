"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[2667],{"./src/components/Select/Select.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SelectOptions:()=>SelectOptions,Template:()=>Template,creatable:()=>creatable,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,disabledOptionsFunction:()=>disabledOptionsFunction,disabledOptionsProperty:()=>disabledOptionsProperty,manyOptions:()=>manyOptions,multiSelect:()=>multiSelect});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/client-api"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Select/Select.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>{const[_,updateArgs]=(0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.P,{onChange:option=>{updateArgs({value:option})},...args})},SelectOptions=options=>[...Array(options+1).keys()].slice(1).map((e=>({value:"option"+e,label:"Option "+e})));const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.args={options:[...SelectOptions(2),{value:"option4",label:`A ${"very ".repeat(100)}long option`}]},defaultStory.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = option => {\n    updateArgs({\n      value: option\n    });\n  };\n\n  return <Select onChange={handleChange} {...args} />;\n}"}};const disabledOptionsFunction=Template.bind({});disabledOptionsFunction.storyName="Disabled options (function)",disabledOptionsFunction.args={options:[...SelectOptions(5)],isOptionDisabled:option=>"option2"===option.value||"option4"===option.value,menuPosition:"fixed"},disabledOptionsFunction.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = option => {\n    updateArgs({\n      value: option\n    });\n  };\n\n  return <Select onChange={handleChange} {...args} />;\n}"}};const disabledOptionsProperty=Template.bind({});disabledOptionsProperty.storyName="Disabled options (property)",disabledOptionsProperty.args={options:[...SelectOptions(2),{value:"option3",label:"Option 3",isDisabled:!0}]},disabledOptionsProperty.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = option => {\n    updateArgs({\n      value: option\n    });\n  };\n\n  return <Select onChange={handleChange} {...args} />;\n}"}};const multiSelect=Template.bind({});multiSelect.storyName="Multi-select",multiSelect.args={options:SelectOptions(3),isMulti:!0},multiSelect.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = option => {\n    updateArgs({\n      value: option\n    });\n  };\n\n  return <Select onChange={handleChange} {...args} />;\n}"}};const creatable=Template.bind({});creatable.storyName="Creatable",creatable.args={options:SelectOptions(3),creatable:!0,placeholder:"Type an option to add your own"},creatable.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = option => {\n    updateArgs({\n      value: option\n    });\n  };\n\n  return <Select onChange={handleChange} {...args} />;\n}"}};const manyOptions=Template.bind({});manyOptions.storyName="Many Options",manyOptions.args={options:SelectOptions(100),isMulti:!0,menuPosition:"fixed"},manyOptions.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n\n  const handleChange = option => {\n    updateArgs({\n      value: option\n    });\n  };\n\n  return <Select onChange={handleChange} {...args} />;\n}"}};const componentMeta={title:"Components/Forms/Select",parameters:{controls:{sort:"requiredFirst",exclude:["onBlur","onFocus","onInputChange","onKeyDown","onMenuClose","onMenuOpen","onMenuScrollToBottom","onMenuScrollToTop"]},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{marginBottom:"110px"},children:Story()})],component:___WEBPACK_IMPORTED_MODULE_4__.P,argTypes:{value:{control:{type:"array"}},error:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["defaultStory","disabledOptionsFunction","disabledOptionsProperty","multiSelect","creatable","manyOptions"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({div:"div",h1:"h1",ul:"ul",li:"li",a:"a",p:"p",h3:"h3",pre:"pre",code:"code",em:"em"},(0,_storybook_addon_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Components/Forms/Select",component:___WEBPACK_IMPORTED_MODULE_4__.P,parameters:{controls:{sort:"requiredFirst",exclude:["onBlur","onFocus","onInputChange","onKeyDown","onMenuClose","onMenuOpen","onMenuScrollToBottom","onMenuScrollToTop"]},docs:{source:{excludeDecorators:!0}}},argTypes:{value:{control:{type:"array"}},error:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{style:{marginBottom:"110px"},children:Story()})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"select",children:"Select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Select allows users to select one or more options from a pre-defined list, or add their own option."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Select depends on:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://react-select.com/home",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-select"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Select } from '@lokalise/louis';\n\nexport default () => {\n\tconst [value, setValue] = useState();\n\tconst optionsArray = [\n\t\t{ value: 'option1', label: 'Option 1' },\n\t\t{ value: 'option2', label: 'Option 2' },\n\t];\n\treturn <Select options={optionsArray} value={value} onChange={setValue} />;\n};\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29262",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Select"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29305",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Multi select"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{of:___WEBPACK_IMPORTED_MODULE_4__.P,sort:"requiredFirst",exclude:["ref"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Default",args:{options:[...SelectOptions(2),{value:"option4",label:`A ${"very ".repeat(100)}long option`}]},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"disabled-options",children:"Disabled options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["By passing an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"isOptionDisabled"})," function, you can disable individual options. This function is passed the option object and should return a boolean, e.g.: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"isOptionDisabled={(option) => option.value === 'option2'}"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Disabled options (function)",args:{options:[...SelectOptions(5)],isOptionDisabled:option=>"option2"===option.value||"option4"===option.value,menuPosition:"fixed"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Alternatively, you can pass an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"isDisabled"})," boolean property to options, e.g.: ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"{ value: 'option3', label: 'Option 3', isDisabled: true }"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Disabled options (property)",args:{options:[...SelectOptions(2),{value:"option3",label:"Option 3",isDisabled:!0}]},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"multi-select",children:"Multi-select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Multi-select",args:{options:SelectOptions(3),isMulti:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"creatable",children:"Creatable"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Creatable",args:{options:SelectOptions(3),creatable:!0,placeholder:"Type an option to add your own"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"many-options",children:"Many Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.em,{children:["Note: using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:'menuPosition="fixed"'})," in this example to allow Select to overlap outside of the Storybook container"]}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Xz,{withSource:"closed",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oG,{name:"Many Options",args:{options:SelectOptions(100),isMulti:!0,menuPosition:"fixed"},children:Template.bind({})})})]})}}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/components/InputErrorMessage/InputErrorMessage.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>InputErrorMessage});var useTheme=__webpack_require__("./node_modules/@lokalise/styled/dist/hooks/useTheme.js"),BoxImportant=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/foundations/icons/BoxImportant.tsx")),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),theme=__webpack_require__("./src/utils/theme/index.ts");const Error=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__Error",componentId:"sc-1wn0241-0"})([""," color:",";display:grid;gap:",";grid-template-columns:min-content auto;align-items:center;"],(0,theme.cp)("body.tiny.default"),(0,theme.S3)("color.background.action.danger.default"),(0,theme.W0)(1)),MultiErrorContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__MultiErrorContainer",componentId:"sc-1wn0241-1"})(["display:grid;gap:",";"],(0,theme.W0)(1)),IconContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"InputErrorMessage__IconContainer",componentId:"sc-1wn0241-2"})(["align-self:flex-start;font-size:16px;display:flex;align-items:center;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isInputMessage=error=>(error=>"object"==typeof error&&null!==error)(error)&&"string"==typeof error.message&&"string"==typeof error.id,normalizeChildren=(children,id)=>{if(null===children)return[];if(errors=children,Array.isArray(errors)&&errors.every(isInputMessage))return children;var errors;return[...new Set("string"==typeof children?[children]:children)].map(((message,index)=>({message,id:[id,index].filter((x=>void 0!==x)).join("-")})))},InputErrorMessage=_ref=>{let{children,id,className}=_ref;const theme=(0,useTheme.F)();if(null===children)return null;const uniqueErrors=normalizeChildren(children,id);return 0===uniqueErrors.length?null:(0,jsx_runtime.jsx)(MultiErrorContainer,{"aria-live":"assertive",className,children:uniqueErrors.map((child=>!!child.message&&(0,jsx_runtime.jsxs)(Error,{id:`${child.id}`,children:[(0,jsx_runtime.jsx)(IconContainer,{children:(0,jsx_runtime.jsx)(BoxImportant.m,{color:theme.color.background.action.danger.default})}),child.message]},`${child.id}`)))})};InputErrorMessage.displayName="InputErrorMessage";try{InputErrorMessage.displayName="InputErrorMessage",InputErrorMessage.__docgenInfo={description:"",displayName:"InputErrorMessage",props:{children:{defaultValue:null,description:"One or more error message objects with error text to render and ID.",name:"children",required:!0,type:{name:"DeprecatedMessages | InputErrorMessage[]"}},id:{defaultValue:null,description:"**Deprecated**: Should not provide `id` when providing error message objects\n@deprecated in favor of error message objects",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"]={docgenInfo:InputErrorMessage.__docgenInfo,name:"InputErrorMessage",path:"src/components/InputErrorMessage/InputErrorMessage.tsx#InputErrorMessage"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/InputErrorMessage/useInputErrorMessages.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useInputErrorMessages});var hooks=__webpack_require__("./node_modules/react-uid/dist/es2015/hooks.js");const useInputErrorMessages=error=>{const errorId=(0,hooks.H)()("error-id"),isInvalid=Array.isArray(error)?error.length>0:!!error,errorMessages=(error=>{switch(typeof error){case"boolean":case"undefined":return[];case"string":return[error];default:return[...new Set(error)]}})(error).map(((message,index)=>({message,id:`${errorId}-${index}`})));return{isInvalid,errorMessages}}},"./src/foundations/icons/BoxImportant.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>BoxImportant});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BoxImportant=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 10c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8Zm7.20371 4.0062h1.59999v-1.6H9.20371v1.6Zm0-3.1999h1.59999V6.00627H9.20371v4.80003Z"})});BoxImportant.displayName="BoxImportant";try{BoxImportant.displayName="BoxImportant",BoxImportant.__docgenInfo={description:"",displayName:"BoxImportant",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/BoxImportant.tsx#BoxImportant"]={docgenInfo:BoxImportant.__docgenInfo,name:"BoxImportant",path:"src/foundations/icons/BoxImportant.tsx#BoxImportant"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Close.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"m15.2954 14.1358-1.1707 1.1707-4.13028-4.1304-4.11927 4.1193-1.17062-1.1706 4.11927-4.1193-4.11927-4.13029 1.17062-1.17062 4.11927 4.11927 4.13028-4.13032 1.1817 1.18167-4.1303 4.13029 4.1193 4.1303Z"})});Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Close.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/foundations/icons/Close.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const commonStyles=styled_components_browser_esm.iv`
	pointer-events: all;
	box-sizing: border-box;
	color: var(--louis-svgicon-color);
	fill: currentColor;
	font-size: var(--louis-svgicon-size);
`,SvgRoot=styled_components_browser_esm.ZP.svg.withConfig({displayName:"icons__SvgRoot",componentId:"sc-4ot8tf-0"})(["",";width:1em;height:1em;"],commonStyles);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const reservedKeywords=["currentColor","inherit"],colorDefaults={color:"inherit",fill:"currentColor",stroke:void 0},SvgIcon=_ref=>{let{color="inherit",size="inherit",ariaLabel,children,...props}=_ref;return(0,jsx_runtime.jsx)(SvgRoot,{style:{"--louis-svgicon-color":(colorType="color",inputColor=color,inputColor&&!reservedKeywords.includes(inputColor)?inputColor:colorDefaults[colorType]),"--louis-svgicon-size":size},...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children});var colorType,inputColor};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/styles/inputStyle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IK:()=>withInputErrorModifier,NH:()=>withInputContainerStyle,RP:()=>withInputSizeVariants,gf:()=>withInputStyle,hJ:()=>withInputDisabledStyle,jR:()=>withInputFieldStyle});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/index.ts");const withInputErrorStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["border-color:",";"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.danger")),withInputErrorModifier=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.c)("error",withInputErrorStyle),withInputDisabledStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["color:",";background-color:",";border-color:",";cursor:not-allowed;&:hover,[data-dev-state='hover'] &{border-color:",";}&:focus,[data-dev-state='focus'] &{border-color:",";}&::placeholder{color:",";}"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.disabled"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.surface.middle"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.disabled"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.disabled"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.disabled"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.disabled")),withInputDisabledModifier=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)([""," &:disabled{","}"],(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_2__.c)("disabled",withInputDisabledStyle),withInputDisabledStyle),withInputContainerStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["box-sizing:border-box;",";width:100%;color:",";border:1px solid ",";border-radius:",";transition:border-color ease-in-out ",";padding:",";background-color:",";@media (prefers-reduced-motion:reduce){transition:none;}&:hover,[data-dev-state='hover'] &{border-color:",";}&:focus-within,[data-dev-state='focus'] &{border-color:",";}"," ",""],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("body.small.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.input.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("radius.m"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("transition.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.W0)(2,3),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.input.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.input.hover"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.border.active"),withInputErrorModifier,withInputDisabledModifier),withInputFieldStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["box-sizing:content-box;-webkit-font-smoothing:subpixel-antialiased;",";color:",";background:none;&&&:focus,&&&:focus-visible,[data-dev-state='focus'] &&&{outline:none !important;}&::placeholder{",";color:",";}"," ",""],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("body.small.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("body.small.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.text.input.placeholder"),withInputErrorModifier,withInputDisabledModifier),withInputStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["",";",";box-sizing:border-box;background:",";"],withInputContainerStyle,withInputFieldStyle,(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("color.background.input.default")),withInputSizeVariants=(sizeStyles={small:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["height:",";min-height:",";",";&::placeholder{","}"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("size.height.input.small"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("size.height.input.small"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("body.caption.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("body.caption.default")),default:(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["height:",";min-height:",";",";&::placeholder{",";}"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("size.height.input.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.S3)("size.height.input.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("body.small.default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.cp)("body.small.default"))},(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__.o)("inputSize",sizeStyles,"default"));var sizeStyles}}]);
//# sourceMappingURL=components-Select-Select-stories-mdx.f23ac74c.iframe.bundle.js.map