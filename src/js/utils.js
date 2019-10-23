/**
 * Унаследовать
 * @param child
 * @param base
 */
function extend(child, base) {
  child.prototype = Object.create(base.prototype);
  child.prototype.constructor = child;
}
