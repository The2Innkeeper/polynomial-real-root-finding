/**
 * Evaluates the polynomial at a specified value using the Horner method.
 */
export function evaluatePolynomial(poly, x) {
    let result = 0;
    for (let i = poly.length - 1; i >= 0; i--) {
        result = result * x + poly[i];
    }
    return result;
}
//# sourceMappingURL=evaluation.js.map