"use strict";(self.webpackChunkstorybook_addon_launchdarkly=self.webpackChunkstorybook_addon_launchdarkly||[]).push([[811],{"./stories/Example.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{False:()=>False,True:()=>True,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Example_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/launchdarkly-react-client-sdk/lib/index.js"));const commonStyles={color:"white",width:300,height:300,display:"flex",alignItems:"center",justifyContent:"center"},Example_stories={component:()=>{const{testFlag}=(0,lib.useFlags)();return testFlag?(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"blue",...commonStyles},children:"True"}):(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"red",...commonStyles},children:"False"})}},True={parameters:{launchdarkly:{flags:{testFlag:!0}}}},False={parameters:{launchdarkly:{flags:{testFlag:!1}}}},__namedExportsOrder=["True","False"]}}]);