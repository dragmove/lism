!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.lism = t())
    : (e.lism = t());
})(global, function () {
  return (() => {
    'use strict';
    var e = {
        372: (e, t) => {
          Object.defineProperty(t, '__esModule', {
            value: !0,
          }),
            (t.isDefined = void 0),
            (t.isDefined = function (e) {
              return null != e;
            });
        },
      },
      t = {};
    function r(o) {
      var n = t[o];
      if (void 0 !== n) return n.exports;
      var i = (t[o] = {
        exports: {},
      });
      return e[o](i, i.exports, r), i.exports;
    }
    var o = {};
    return (
      (() => {
        var e = o;
        Object.defineProperty(e, '__esModule', {
          value: !0,
        }),
          (e.isDefined = void 0);
        var t = r(372);
        Object.defineProperty(e, 'isDefined', {
          enumerable: !0,
          get: function () {
            return t.isDefined;
          },
        });
      })(),
      o
    );
  })();
});
