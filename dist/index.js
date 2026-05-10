/** @license Apache-2.0 */

'use strict';

/**
* Reinterpret a `Complex128Array` as a `Float64Array`.
*
* @module @stdlib/strided-base-reinterpret-complex128
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var reinterpret = require( '@stdlib/strided-base-reinterpret-complex128' );
*
* var x = new Complex128Array( 10 );
*
* var out = reinterpret( x, 0 );
* // returns <Float64Array>
*
* var bool = ( out.buffer === x.buffer );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
