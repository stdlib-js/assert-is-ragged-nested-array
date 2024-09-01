// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;var e=4294967295;function n(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&(r=n.length,t(r)===r)&&n.length>=0&&n.length<=e;var r}function r(t){var e,r;if(!n(t)||t.length<2)return!1;for(e=t[0].length,r=1;r<t.length;r++){if(!n(t[r]))return!1;if(t[r].length!==e)return!0}return!1}export{r as default};
//# sourceMappingURL=mod.js.map
