<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# mapRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a function to each element in an array and assign the result to an element in an output array, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import mapRight from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-right@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-right@deno/mod.js';
```

<a name="fcn-map-right"></a>

#### mapRight( arr, fcn\[, thisArg] )

Applies a function to each element in an array and assigns the result to an element in a new array, iterating from right to left.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import abs from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@deno/mod.js';

var arr = [ -1, -2, -3, -4, -5, -6 ];

var out = mapRight( arr, naryFunction( abs, 1 ) );
// returns [ 1, 2, 3, 4, 5, 6 ]
```

The function accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import abs from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var opts = {
    'dtype': 'generic'
};
var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );

var out = mapRight( arr, naryFunction( abs, 1 ) );
// returns <ndarray>

var v = out.get( 1, 1 );
// returns 5
```

The applied function is provided the following arguments:

-   **value**: array element.
-   **index**: element index.
-   **arr**: input array.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
import abs from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@deno/mod.js';

function fcn( v ) {
    this.count += 1;
    return abs( v );
}

var arr = [ -1, -2, -3, -4, -5, -6 ];

var ctx = {
    'count': 0
};

var out = mapRight( arr, fcn, ctx );
// returns [ 1, 2, 3, 4, 5, 6 ]

var cnt = ctx.count;
// returns 6
```

<a name="method-map-right-assign"></a>

#### mapRight.assign( arr, out, fcn\[, thisArg] )

Applies a function to each element in an array and assigns the result to an element in an output array, iterating from right to left.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import abs from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@deno/mod.js';

var arr = [ -1, -2, -3, -4, -5, -6 ];
var out = [ 0, 0, 0, 0, 0, 0 ];

mapRight.assign( arr, out, naryFunction( abs, 1 ) );

console.log( out );
// => [ 1, 2, 3, 4, 5, 6 ]
```

The method accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import abs from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );
var out = array( opts );

mapRight.assign( arr, out, naryFunction( abs, 1 ) );

var v = out.get( 1, 1 );
// returns 5
```

Input and output arrays must be either both array-like objects or both [`ndarray`][@stdlib/ndarray/ctor]-like objects. If input and output arrays are both array-like objects, both arrays **must** have the same number of elements.

If input and output arrays are both [`ndarray`][@stdlib/ndarray/ctor]-like objects, the arrays **must** be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes]. To map from an input [`ndarray`][@stdlib/ndarray/ctor] to an output [`ndarray`][@stdlib/ndarray/ctor] which has the same rank (i.e., dimensionality) and the same number of elements, but which is not [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes], reshape the arrays prior to invocation.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import abs from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var arr = array( [ [ -1, -2, -3 ], [ -4, -5, -6 ] ], opts );

opts = {
    'dtype': 'generic',
    'shape': [ 2, 2, 3 ]  // broadcast compatible shape
};
var out = array( opts );

mapRight.assign( arr, out, naryFunction( abs, 1 ) );

var v = out.get( 0, 1, 1 );
// returns 5

v = out.get( 1, 1, 1 );
// returns 5
```

In general, avoid providing output [`ndarray`][@stdlib/ndarray/ctor]-like objects which are [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] views containing one or more elements referring to the **same** memory location. Writing to an overlapping [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] view is likely to simultaneously affect multiple elements and yield unexpected results.

The applied function is provided the same arguments as with [`mapRight`](#fcn-map-right).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [`mapRight`](#fcn-map-right) function **always** returns an output value having a "generic" data type. For example, if provided an array-like object, the function returns a generic `array`. If provided an [`ndarray`][@stdlib/ndarray/ctor], the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a "generic" data type.

    Accordingly, in contrast to [`TypedArray.prototype.map()`][mdn-typedarray-map], when provided a typed array, the [`mapRight`](#fcn-map-right) function does **not** return a typed array of the same type. To assign results to a typed array, use the [`mapRight.assign`](#method-map-right-assign) method.

-   Both [`mapRight`](#fcn-map-right) and [`mapRight.assign`](#method-map-right-assign) accept array-like objects exposing getters and setters for array element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

    ```javascript
    import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
    import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';
    import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@deno/mod.js';
    import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@deno/mod.js';

    function scale( z ) {
        return new Complex64( realf(z)*10.0, imagf(z)*10.0 );
    }

    var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
    var y = new Complex64Array( 4 );

    mapRight.assign( x, y, scale );

    var v = y.get( 0 );

    var re = realf( v );
    // returns 10.0

    var im = imagf( v );
    // returns 20.0
    ```

-   When applying a function to [`ndarray`][@stdlib/ndarray/ctor]-like objects, performance will be best for [`ndarray`][@stdlib/ndarray/ctor]-like objects which are single-segment contiguous. For non-contiguous arrays, see [`@stdlib/ndarray-base/unary`][@stdlib/ndarray/base/unary].

-   Both [`mapRight`](#fcn-map-right) and [`mapRight.assign`](#method-map-right-assign) do **not** skip `undefined` elements.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import abs2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs2@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import mapRight from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map-right@deno/mod.js';

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'generic', rand );
}

// Create a two-dimensional ndarray (i.e., a matrix):
var x = array( filledarrayBy( 10, 'generic', fill ), {
    'dtype': 'generic',
    'flatten': true
});

// Create an explicit unary function:
var f = naryFunction( abs2, 1 );

// Compute the element-wise squared absolute value...
var y = mapRight( x, f );

console.log( 'x:' );
console.log( x.data );

console.log( 'y:' );
console.log( y.data );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-map`][@stdlib/utils/map]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array.</span>
-   <span class="package-name">[`@stdlib/utils-reduce`][@stdlib/utils/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in an array and return the accumulated result.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-map-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-map-right

[test-image]: https://github.com/stdlib-js/utils-map-right/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-map-right/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-map-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-map-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-map-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-map-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-map-right/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-map-right/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-map-right/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-map-right/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-map-right/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-map-right/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-map-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-map-right/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/ndarray/base/unary]: https://github.com/stdlib-js/ndarray-base-unary/tree/deno

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/deno

[@stdlib/ndarray/base/assert/is-contiguous]: https://github.com/stdlib-js/ndarray-base-assert-is-contiguous/tree/deno

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/deno

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

[mdn-typedarray-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map

<!-- <related-links> -->

[@stdlib/utils/map]: https://github.com/stdlib-js/utils-map/tree/deno

[@stdlib/utils/reduce]: https://github.com/stdlib-js/utils-reduce/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
