"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var g=d(function(sr,V){"use strict";var T=require("@stdlib/ndarray-base-vind2bind"),R="throw";function J(e,r,a,i){var t,n,v,o,s,y,c,h,m,w,k,j,f,p,E,F,u;if(s=e.length,m=e.shape,w=r.shape,t=e.data,n=r.data,k=e.strides,j=r.strides,f=e.offset,p=r.offset,v=e.order,o=r.order,y=e.accessors[0],c=r.accessors[1],h=e.ref,m.length===0){c(n,p,a.call(i,y(t,f),0,h));return}for(u=s-1;u>=0;u--)E=T(m,k,f,v,u,R),F=T(w,j,p,o,u,R),c(n,F,a.call(i,y(t,E),u,h))}V.exports=J});var b=d(function(ur,O){"use strict";function K(e,r,a,i){var t,n,v,o,s;for(t=e.data,n=r.data,v=e.accessors[0],o=r.accessors[1],s=t.length-1;s>=0;s--)o(n,s,a.call(i,v(t,s),s,t))}O.exports=K});var C=d(function(vr,z){"use strict";var N=require("@stdlib/assert-is-array-like-object"),P=require("@stdlib/assert-is-ndarray-like"),Q=require("@stdlib/assert-is-function"),U=require("@stdlib/array-base-zeros"),x=require("@stdlib/ndarray-base-ndarraylike2object"),L=require("@stdlib/array-base-arraylike2object"),W=require("@stdlib/ndarray-zeros"),I=require("@stdlib/string-format"),X=g(),Y=b();function Z(e,r,a){var i;if(!Q(r))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",r));if(P(e))return e=x(e),i=W(e.shape,{dtype:"generic",order:e.order}),X(e,x(i),r,a),i;if(N(e))return i=U(e.length),Y(L(e),L(i),r,a),i;throw new TypeError(I("invalid argument. First argument must be an array-like object or an ndarray. Value: `%s`.",e))}z.exports=Z});var G=d(function(or,B){"use strict";var D=require("@stdlib/assert-is-array-like-object"),q=require("@stdlib/assert-is-ndarray-like"),_=require("@stdlib/assert-is-function"),M=require("@stdlib/ndarray-base-ndarraylike2object"),S=require("@stdlib/array-base-arraylike2object"),$=require("@stdlib/ndarray-base-maybe-broadcast-array"),A=require("@stdlib/ndarray-base-assert-is-read-only"),l=require("@stdlib/string-format"),rr=g(),er=b();function ar(e,r,a,i){var t,n;if(!_(a))throw new TypeError(l("invalid argument. Third argument must be a function. Value: `%s`.",a));if(q(e)){if(!q(r))throw new TypeError(l("invalid argument. If the input array is an ndarray, the output array must also be an ndarray. Value: `%s`.",r));if(A(r))throw new Error("invalid argument. The output ndarray must be writable. Cannot write to a read-only ndarray.");return r=M(r),n=r.shape,t=M($(e,n)),t.ref=e,e=t,rr(e,r,a,i),r.ref}if(D(e)){if(!D(r)||q(r))throw new TypeError(l("invalid argument. If the input array is an array-like object, the output array must also be an array-like object. Value: `%s`.",r));if(e.length!==r.length)throw new RangeError("invalid arguments. Input and output arrays must have the same length.");return er(S(e),S(r),a,i),r}throw new TypeError(l("invalid argument. First argument must be an array-like object or an ndarray. Value: `%s`.",e))}B.exports=ar});var ir=require("@stdlib/utils-define-nonenumerable-read-only-property"),H=C(),tr=G();ir(H,"assign",tr);module.exports=H;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
