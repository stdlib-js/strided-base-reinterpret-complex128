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

# reinterpret

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reinterpret a [`Complex128Array`][@stdlib/array/complex128] as a [`Float64Array`][@stdlib/array/float64].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import reinterpret from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@esm/index.mjs';
```

#### reinterpret( x, offset )

Returns a [`Float64Array`][@stdlib/array/float64] view of a [`Complex128Array`][@stdlib/array/complex128].

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@esm/index.mjs';

var x = new Complex128Array( 10 );

var view = reinterpret( x, 0 );
// returns <Float64Array>

var bool = ( view.buffer === x.buffer );
// returns true

var len = view.length;
// returns 20
```

The `offset` argument specifies the starting index of the returned [`Float64Array`][@stdlib/array/float64] view relative to the [`Complex128Array`][@stdlib/array/complex128].

```javascript
import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@esm/index.mjs';

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

var view = reinterpret( x, 2 );
// returns <Float64Array>

var len = view.length;
// returns 4

var re = view[ 0 ];
// returns 5.0

var im = view[ 1 ];
// returns 6.0
````

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Complex128Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@esm/index.mjs';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@esm/index.mjs';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@esm/index.mjs';
import reinterpret from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@esm/index.mjs';

// Define a complex number array:
var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
// returns <Complex128Array>

// Reinterpret as a `float64` array:
var view = reinterpret( x, 0 );
// returns <Float64Array>

// Set view elements:
view[ 0 ] = 9.0;
view[ 1 ] = 10.0;

// Get the first element of the complex number array:
var z = x.get( 0 );
// returns <Complex128>

var re = real( z );
// returns 9.0

var im = imag( z );
// returns 10.0

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-reinterpret-complex128.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-reinterpret-complex128

[test-image]: https://github.com/stdlib-js/strided-base-reinterpret-complex128/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex128/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-reinterpret-complex128/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-reinterpret-complex128?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-reinterpret-complex128.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-reinterpret-complex128/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex128/tree/deno
[umd-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex128/tree/umd
[esm-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex128/tree/esm
[branches-url]: https://github.com/stdlib-js/strided-base-reinterpret-complex128/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-reinterpret-complex128/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/stdlib/tree/esm

[@stdlib/array/float64]: https://github.com/stdlib-js/stdlib/tree/esm

</section>

<!-- /.links -->
