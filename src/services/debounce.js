function debounce(func, wait, immediate, context) {
  var result;
  var timeout = null;
  return function () {
    var ctx = context || this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) result = func.apply(ctx, args);
    };
    var callNow = immediate && !timeout;
    // Tant que la fonction est appelée, on reset le timeout.
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) result = func.apply(ctx, args);
    return result;
  };
}
export default debounce;
