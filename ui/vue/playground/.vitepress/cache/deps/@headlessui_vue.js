import {
  Fragment,
  Teleport,
  cloneVNode,
  computed,
  defineComponent,
  h,
  inject,
  nextTick,
  normalizeClass,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  shallowRef,
  toRaw,
  unref,
  watch,
  watchEffect
} from "./chunk-67UUJLDS.js";
import "./chunk-76J2PTFD.js";

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/match.js
function u(r3, n6, ...a7) {
  if (r3 in n6) {
    let e4 = n6[r3];
    return typeof e4 == "function" ? e4(...a7) : e4;
  }
  let t6 = new Error(`Tried to handle "${r3}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t6, u), t6;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/render.js
var N = ((o6) => (o6[o6.None = 0] = "None", o6[o6.RenderStrategy = 1] = "RenderStrategy", o6[o6.Static = 2] = "Static", o6))(N || {});
var S = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(S || {});
function H({ visible: r3 = true, features: t6 = 0, ourProps: e4, theirProps: o6, ...i4 }) {
  var a7;
  let n6 = j(o6, e4), l4 = Object.assign(i4, { props: n6 });
  if (r3 || t6 & 2 && n6.static)
    return y(l4);
  if (t6 & 1) {
    let d8 = (a7 = n6.unmount) == null || a7 ? 0 : 1;
    return u(d8, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i4, props: { ...n6, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l4);
}
function y({ props: r3, attrs: t6, slots: e4, slot: o6, name: i4 }) {
  var m5, h4;
  let { as: n6, ...l4 } = T(r3, ["unmount", "static"]), a7 = (m5 = e4.default) == null ? void 0 : m5.call(e4, o6), d8 = {};
  if (o6) {
    let u6 = false, c5 = [];
    for (let [p8, f5] of Object.entries(o6))
      typeof f5 == "boolean" && (u6 = true), f5 === true && c5.push(p8);
    u6 && (d8["data-headlessui-state"] = c5.join(" "));
  }
  if (n6 === "template") {
    if (a7 = b(a7 != null ? a7 : []), Object.keys(l4).length > 0 || Object.keys(t6).length > 0) {
      let [u6, ...c5] = a7 != null ? a7 : [];
      if (!v(u6) || c5.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i4} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l4).concat(Object.keys(t6)).map((s2) => s2.trim()).filter((s2, g4, R2) => R2.indexOf(s2) === g4).sort((s2, g4) => s2.localeCompare(g4)).map((s2) => `  - ${s2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s2) => `  - ${s2}`).join(`
`)].join(`
`));
      let p8 = j((h4 = u6.props) != null ? h4 : {}, l4), f5 = cloneVNode(u6, p8);
      for (let s2 in p8)
        s2.startsWith("on") && (f5.props || (f5.props = {}), f5.props[s2] = p8[s2]);
      return f5;
    }
    return Array.isArray(a7) && a7.length === 1 ? a7[0] : a7;
  }
  return h(n6, Object.assign({}, l4, d8), { default: () => a7 });
}
function b(r3) {
  return r3.flatMap((t6) => t6.type === Fragment ? b(t6.children) : [t6]);
}
function j(...r3) {
  var o6;
  if (r3.length === 0)
    return {};
  if (r3.length === 1)
    return r3[0];
  let t6 = {}, e4 = {};
  for (let i4 of r3)
    for (let n6 in i4)
      n6.startsWith("on") && typeof i4[n6] == "function" ? ((o6 = e4[n6]) != null || (e4[n6] = []), e4[n6].push(i4[n6])) : t6[n6] = i4[n6];
  if (t6.disabled || t6["aria-disabled"])
    return Object.assign(t6, Object.fromEntries(Object.keys(e4).map((i4) => [i4, void 0])));
  for (let i4 in e4)
    Object.assign(t6, { [i4](n6, ...l4) {
      let a7 = e4[i4];
      for (let d8 of a7) {
        if (n6 instanceof Event && n6.defaultPrevented)
          return;
        d8(n6, ...l4);
      }
    } });
  return t6;
}
function K(r3) {
  let t6 = Object.assign({}, r3);
  for (let e4 in t6)
    t6[e4] === void 0 && delete t6[e4];
  return t6;
}
function T(r3, t6 = []) {
  let e4 = Object.assign({}, r3);
  for (let o6 of t6)
    o6 in e4 && delete e4[o6];
  return e4;
}
function v(r3) {
  return r3 == null ? false : typeof r3.type == "string" || typeof r3.type == "object" || typeof r3.type == "function";
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-id.js
var e = 0;
function n() {
  return ++e;
}
function t() {
  return n();
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/keyboard.js
var o = ((r3) => (r3.Space = " ", r3.Enter = "Enter", r3.Escape = "Escape", r3.Backspace = "Backspace", r3.Delete = "Delete", r3.ArrowLeft = "ArrowLeft", r3.ArrowUp = "ArrowUp", r3.ArrowRight = "ArrowRight", r3.ArrowDown = "ArrowDown", r3.Home = "Home", r3.End = "End", r3.PageUp = "PageUp", r3.PageDown = "PageDown", r3.Tab = "Tab", r3))(o || {});

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/calculate-active-index.js
function f(r3) {
  throw new Error("Unexpected object: " + r3);
}
var a = ((e4) => (e4[e4.First = 0] = "First", e4[e4.Previous = 1] = "Previous", e4[e4.Next = 2] = "Next", e4[e4.Last = 3] = "Last", e4[e4.Specific = 4] = "Specific", e4[e4.Nothing = 5] = "Nothing", e4))(a || {});
function x(r3, n6) {
  let t6 = n6.resolveItems();
  if (t6.length <= 0)
    return null;
  let l4 = n6.resolveActiveIndex(), s2 = l4 != null ? l4 : -1, d8 = (() => {
    switch (r3.focus) {
      case 0:
        return t6.findIndex((e4) => !n6.resolveDisabled(e4));
      case 1: {
        let e4 = t6.slice().reverse().findIndex((i4, c5, u6) => s2 !== -1 && u6.length - c5 - 1 >= s2 ? false : !n6.resolveDisabled(i4));
        return e4 === -1 ? e4 : t6.length - 1 - e4;
      }
      case 2:
        return t6.findIndex((e4, i4) => i4 <= s2 ? false : !n6.resolveDisabled(e4));
      case 3: {
        let e4 = t6.slice().reverse().findIndex((i4) => !n6.resolveDisabled(i4));
        return e4 === -1 ? e4 : t6.length - 1 - e4;
      }
      case 4:
        return t6.findIndex((e4) => n6.resolveId(e4) === r3.id);
      case 5:
        return null;
      default:
        f(r3);
    }
  })();
  return d8 === -1 ? l4 : d8;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/dom.js
function o2(n6) {
  var l4;
  return n6 == null || n6.value == null ? null : (l4 = n6.value.$el) != null ? l4 : n6.value;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/internal/open-closed.js
var n2 = Symbol("Context");
var l = ((e4) => (e4[e4.Open = 1] = "Open", e4[e4.Closed = 2] = "Closed", e4[e4.Closing = 4] = "Closing", e4[e4.Opening = 8] = "Opening", e4))(l || {});
function C() {
  return p() !== null;
}
function p() {
  return inject(n2, null);
}
function c(o6) {
  provide(n2, o6);
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js
function r(t6, e4) {
  if (t6)
    return t6;
  let n6 = e4 != null ? e4 : "button";
  if (typeof n6 == "string" && n6.toLowerCase() === "button")
    return "button";
}
function b2(t6, e4) {
  let n6 = ref(r(t6.value.type, t6.value.as));
  return onMounted(() => {
    n6.value = r(t6.value.type, t6.value.as);
  }), watchEffect(() => {
    var o6;
    n6.value || o2(e4) && o2(e4) instanceof HTMLButtonElement && !((o6 = o2(e4)) != null && o6.hasAttribute("type")) && (n6.value = "button");
  }), n6;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/env.js
var i = Object.defineProperty;
var d = (t6, e4, r3) => e4 in t6 ? i(t6, e4, { enumerable: true, configurable: true, writable: true, value: r3 }) : t6[e4] = r3;
var n3 = (t6, e4, r3) => (d(t6, typeof e4 != "symbol" ? e4 + "" : e4, r3), r3);
var s = class {
  constructor() {
    n3(this, "current", this.detect());
    n3(this, "currentId", 0);
  }
  set(e4) {
    this.current !== e4 && (this.currentId = 0, this.current = e4);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
};
var c2 = new s();

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/owner.js
function m(r3) {
  if (c2.isServer)
    return null;
  if (r3 instanceof Node)
    return r3.ownerDocument;
  if (r3 != null && r3.hasOwnProperty("value")) {
    let n6 = o2(r3);
    if (n6)
      return n6.ownerDocument;
  }
  return document;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-tree-walker.js
function p2({ container: e4, accept: t6, walk: d8, enabled: o6 }) {
  watchEffect(() => {
    let r3 = e4.value;
    if (!r3 || o6 !== void 0 && !o6.value)
      return;
    let l4 = m(e4);
    if (!l4)
      return;
    let c5 = Object.assign((f5) => t6(f5), { acceptNode: t6 }), n6 = l4.createTreeWalker(r3, NodeFilter.SHOW_ELEMENT, c5, false);
    for (; n6.nextNode(); )
      d8(n6.currentNode);
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/focus-management.js
var c3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var N2 = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(N2 || {});
var T2 = ((o6) => (o6[o6.Error = 0] = "Error", o6[o6.Overflow = 1] = "Overflow", o6[o6.Success = 2] = "Success", o6[o6.Underflow = 3] = "Underflow", o6))(T2 || {});
var F = ((t6) => (t6[t6.Previous = -1] = "Previous", t6[t6.Next = 1] = "Next", t6))(F || {});
function E(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(c3)).sort((r3, t6) => Math.sign((r3.tabIndex || Number.MAX_SAFE_INTEGER) - (t6.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h2 = ((t6) => (t6[t6.Strict = 0] = "Strict", t6[t6.Loose = 1] = "Loose", t6))(h2 || {});
function w(e4, r3 = 0) {
  var t6;
  return e4 === ((t6 = m(e4)) == null ? void 0 : t6.body) ? false : u(r3, { [0]() {
    return e4.matches(c3);
  }, [1]() {
    let l4 = e4;
    for (; l4 !== null; ) {
      if (l4.matches(c3))
        return true;
      l4 = l4.parentElement;
    }
    return false;
  } });
}
function _(e4) {
  let r3 = m(e4);
  nextTick(() => {
    r3 && !w(r3.activeElement, 0) && S2(e4);
  });
}
var y2 = ((t6) => (t6[t6.Keyboard = 0] = "Keyboard", t6[t6.Mouse = 1] = "Mouse", t6))(y2 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e4) => {
  e4.metaKey || e4.altKey || e4.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e4) => {
  e4.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e4.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function S2(e4) {
  e4 == null || e4.focus({ preventScroll: true });
}
var H2 = ["textarea", "input"].join(",");
function I(e4) {
  var r3, t6;
  return (t6 = (r3 = e4 == null ? void 0 : e4.matches) == null ? void 0 : r3.call(e4, H2)) != null ? t6 : false;
}
function O(e4, r3 = (t6) => t6) {
  return e4.slice().sort((t6, l4) => {
    let o6 = r3(t6), i4 = r3(l4);
    if (o6 === null || i4 === null)
      return 0;
    let n6 = o6.compareDocumentPosition(i4);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v2(e4, r3) {
  return P(E(), r3, { relativeTo: e4 });
}
function P(e4, r3, { sorted: t6 = true, relativeTo: l4 = null, skipElements: o6 = [] } = {}) {
  var m5;
  let i4 = (m5 = Array.isArray(e4) ? e4.length > 0 ? e4[0].ownerDocument : document : e4 == null ? void 0 : e4.ownerDocument) != null ? m5 : document, n6 = Array.isArray(e4) ? t6 ? O(e4) : e4 : E(e4);
  o6.length > 0 && n6.length > 1 && (n6 = n6.filter((s2) => !o6.includes(s2))), l4 = l4 != null ? l4 : i4.activeElement;
  let x3 = (() => {
    if (r3 & 5)
      return 1;
    if (r3 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p8 = (() => {
    if (r3 & 1)
      return 0;
    if (r3 & 2)
      return Math.max(0, n6.indexOf(l4)) - 1;
    if (r3 & 4)
      return Math.max(0, n6.indexOf(l4)) + 1;
    if (r3 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L4 = r3 & 32 ? { preventScroll: true } : {}, a7 = 0, d8 = n6.length, u6;
  do {
    if (a7 >= d8 || a7 + d8 <= 0)
      return 0;
    let s2 = p8 + a7;
    if (r3 & 16)
      s2 = (s2 + d8) % d8;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= d8)
        return 1;
    }
    u6 = n6[s2], u6 == null || u6.focus(L4), a7 += x3;
  } while (u6 !== i4.activeElement);
  return r3 & 6 && I(u6) && u6.select(), 2;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-document-event.js
function u2(e4, t6, n6) {
  c2.isServer || watchEffect((o6) => {
    document.addEventListener(e4, t6, n6), o6(() => document.removeEventListener(e4, t6, n6));
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-window-event.js
function w2(e4, n6, t6) {
  c2.isServer || watchEffect((o6) => {
    window.addEventListener(e4, n6, t6), o6(() => window.removeEventListener(e4, n6, t6));
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-outside-click.js
function y3(f5, c5, i4 = computed(() => true)) {
  function a7(e4, r3) {
    if (!i4.value || e4.defaultPrevented)
      return;
    let t6 = r3(e4);
    if (t6 === null || !t6.getRootNode().contains(t6))
      return;
    let m5 = function o6(n6) {
      return typeof n6 == "function" ? o6(n6()) : Array.isArray(n6) || n6 instanceof Set ? n6 : [n6];
    }(f5);
    for (let o6 of m5) {
      if (o6 === null)
        continue;
      let n6 = o6 instanceof HTMLElement ? o6 : o2(o6);
      if (n6 != null && n6.contains(t6) || e4.composed && e4.composedPath().includes(n6))
        return;
    }
    return !w(t6, h2.Loose) && t6.tabIndex !== -1 && e4.preventDefault(), c5(e4, t6);
  }
  let u6 = ref(null);
  u2("pointerdown", (e4) => {
    var r3, t6;
    i4.value && (u6.value = ((t6 = (r3 = e4.composedPath) == null ? void 0 : r3.call(e4)) == null ? void 0 : t6[0]) || e4.target);
  }, true), u2("mousedown", (e4) => {
    var r3, t6;
    i4.value && (u6.value = ((t6 = (r3 = e4.composedPath) == null ? void 0 : r3.call(e4)) == null ? void 0 : t6[0]) || e4.target);
  }, true), u2("click", (e4) => {
    u6.value && (a7(e4, () => u6.value), u6.value = null);
  }, true), u2("touchend", (e4) => a7(e4, () => e4.target instanceof HTMLElement ? e4.target : null), true), w2("blur", (e4) => a7(e4, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/internal/hidden.js
var a2 = ((e4) => (e4[e4.None = 1] = "None", e4[e4.Focusable = 2] = "Focusable", e4[e4.Hidden = 4] = "Hidden", e4))(a2 || {});
var f2 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r3, { slots: t6, attrs: d8 }) {
  return () => {
    let { features: e4, ...o6 } = r3, n6 = { "aria-hidden": (e4 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e4 & 4) === 4 && (e4 & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: n6, theirProps: o6, slot: {}, attrs: d8, slots: t6, name: "Hidden" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/form.js
function e2(i4 = {}, s2 = null, t6 = []) {
  for (let [r3, n6] of Object.entries(i4))
    o3(t6, f3(s2, r3), n6);
  return t6;
}
function f3(i4, s2) {
  return i4 ? i4 + "[" + s2 + "]" : s2;
}
function o3(i4, s2, t6) {
  if (Array.isArray(t6))
    for (let [r3, n6] of t6.entries())
      o3(i4, f3(s2, r3.toString()), n6);
  else
    t6 instanceof Date ? i4.push([s2, t6.toISOString()]) : typeof t6 == "boolean" ? i4.push([s2, t6 ? "1" : "0"]) : typeof t6 == "string" ? i4.push([s2, t6]) : typeof t6 == "number" ? i4.push([s2, `${t6}`]) : t6 == null ? i4.push([s2, ""]) : e2(t6, s2, i4);
}
function p3(i4) {
  var t6, r3;
  let s2 = (t6 = i4 == null ? void 0 : i4.form) != null ? t6 : i4.closest("form");
  if (s2) {
    for (let n6 of s2.elements)
      if (n6 !== i4 && (n6.tagName === "INPUT" && n6.type === "submit" || n6.tagName === "BUTTON" && n6.type === "submit" || n6.nodeName === "INPUT" && n6.type === "image")) {
        n6.click();
        return;
      }
    (r3 = s2.requestSubmit) == null || r3.call(s2);
  }
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-controllable.js
function d2(u6, e4, r3) {
  let i4 = ref(r3 == null ? void 0 : r3.value), f5 = computed(() => u6.value !== void 0);
  return [computed(() => f5.value ? u6.value : i4.value), function(t6) {
    return f5.value || (i4.value = t6), e4 == null ? void 0 : e4(t6);
  }];
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-tracked-pointer.js
function r2(e4) {
  return [e4.screenX, e4.screenY];
}
function u3() {
  let e4 = ref([-1, -1]);
  return { wasMoved(n6) {
    let t6 = r2(n6);
    return e4.value[0] === t6[0] && e4.value[1] === t6[1] ? false : (e4.value = t6, true);
  }, update(n6) {
    e4.value = r2(n6);
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/platform.js
function t2() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i2() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n4() {
  return t2() || i2();
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/micro-task.js
function t3(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o6) => setTimeout(() => {
    throw o6;
  }));
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/disposables.js
function o4() {
  let a7 = [], s2 = { addEventListener(e4, t6, r3, i4) {
    return e4.addEventListener(t6, r3, i4), s2.add(() => e4.removeEventListener(t6, r3, i4));
  }, requestAnimationFrame(...e4) {
    let t6 = requestAnimationFrame(...e4);
    s2.add(() => cancelAnimationFrame(t6));
  }, nextFrame(...e4) {
    s2.requestAnimationFrame(() => {
      s2.requestAnimationFrame(...e4);
    });
  }, setTimeout(...e4) {
    let t6 = setTimeout(...e4);
    s2.add(() => clearTimeout(t6));
  }, microTask(...e4) {
    let t6 = { current: true };
    return t3(() => {
      t6.current && e4[0]();
    }), s2.add(() => {
      t6.current = false;
    });
  }, style(e4, t6, r3) {
    let i4 = e4.style.getPropertyValue(t6);
    return Object.assign(e4.style, { [t6]: r3 }), this.add(() => {
      Object.assign(e4.style, { [t6]: i4 });
    });
  }, group(e4) {
    let t6 = o4();
    return e4(t6), this.add(() => t6.dispose());
  }, add(e4) {
    return a7.push(e4), () => {
      let t6 = a7.indexOf(e4);
      if (t6 >= 0)
        for (let r3 of a7.splice(t6, 1))
          r3();
    };
  }, dispose() {
    for (let e4 of a7.splice(0))
      e4();
  } };
  return s2;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/combobox/combobox.js
function Oe(l4, y4) {
  return l4 === y4;
}
var Se = ((r3) => (r3[r3.Open = 0] = "Open", r3[r3.Closed = 1] = "Closed", r3))(Se || {});
var Ce = ((r3) => (r3[r3.Single = 0] = "Single", r3[r3.Multi = 1] = "Multi", r3))(Ce || {});
var ge = ((r3) => (r3[r3.Pointer = 0] = "Pointer", r3[r3.Other = 1] = "Other", r3))(ge || {});
var Y = Symbol("ComboboxContext");
function $(l4) {
  let y4 = inject(Y, null);
  if (y4 === null) {
    let r3 = new Error(`<${l4} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r3, $), r3;
  }
  return y4;
}
var Je = defineComponent({ name: "Combobox", emits: { "update:modelValue": (l4) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => Oe }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(l4, { slots: y4, attrs: r3, emit: w4 }) {
  let e4 = ref(1), t6 = ref(null), S5 = ref(null), p8 = ref(null), d8 = ref(null), b4 = ref({ static: false, hold: false }), v4 = ref([]), O4 = ref(null), I2 = ref(1), P3 = ref(false);
  function j4(n6 = (u6) => u6) {
    let u6 = O4.value !== null ? v4.value[O4.value] : null, s2 = O(n6(v4.value.slice()), (f5) => o2(f5.dataRef.domRef)), a7 = u6 ? s2.indexOf(u6) : null;
    return a7 === -1 && (a7 = null), { options: s2, activeOptionIndex: a7 };
  }
  let k3 = computed(() => l4.multiple ? 1 : 0), m5 = computed(() => l4.nullable), [o6, h4] = d2(computed(() => l4.modelValue), (n6) => w4("update:modelValue", n6), computed(() => l4.defaultValue)), C3 = computed(() => o6.value === void 0 ? u(k3.value, { [1]: [], [0]: void 0 }) : o6.value), E6 = null, R2 = null, i4 = { comboboxState: e4, value: C3, mode: k3, compare(n6, u6) {
    if (typeof l4.by == "string") {
      let s2 = l4.by;
      return (n6 == null ? void 0 : n6[s2]) === (u6 == null ? void 0 : u6[s2]);
    }
    return l4.by(n6, u6);
  }, defaultValue: computed(() => l4.defaultValue), nullable: m5, inputRef: S5, labelRef: t6, buttonRef: p8, optionsRef: d8, disabled: computed(() => l4.disabled), options: v4, change(n6) {
    h4(n6);
  }, activeOptionIndex: computed(() => {
    if (P3.value && O4.value === null && v4.value.length > 0) {
      let n6 = v4.value.findIndex((u6) => !u6.dataRef.disabled);
      n6 !== -1 && (O4.value = n6);
    }
    return O4.value;
  }), activationTrigger: I2, optionsPropsRef: b4, closeCombobox() {
    P3.value = false, !l4.disabled && e4.value !== 1 && (e4.value = 1, O4.value = null);
  }, openCombobox() {
    if (P3.value = true, l4.disabled || e4.value === 0)
      return;
    let n6 = v4.value.findIndex((u6) => {
      let s2 = toRaw(u6.dataRef.value);
      return u(k3.value, { [0]: () => i4.compare(toRaw(i4.value.value), toRaw(s2)), [1]: () => toRaw(i4.value.value).some((f5) => i4.compare(toRaw(f5), toRaw(s2))) });
    });
    n6 !== -1 && (O4.value = n6), e4.value = 0;
  }, goToOption(n6, u6, s2) {
    P3.value = false, E6 !== null && cancelAnimationFrame(E6), E6 = requestAnimationFrame(() => {
      if (l4.disabled || d8.value && !b4.value.static && e4.value === 1)
        return;
      let a7 = j4();
      if (a7.activeOptionIndex === null) {
        let T5 = a7.options.findIndex((B2) => !B2.dataRef.disabled);
        T5 !== -1 && (a7.activeOptionIndex = T5);
      }
      let f5 = x(n6 === a.Specific ? { focus: a.Specific, id: u6 } : { focus: n6 }, { resolveItems: () => a7.options, resolveActiveIndex: () => a7.activeOptionIndex, resolveId: (T5) => T5.id, resolveDisabled: (T5) => T5.dataRef.disabled });
      O4.value = f5, I2.value = s2 != null ? s2 : 1, v4.value = a7.options;
    });
  }, selectOption(n6) {
    let u6 = v4.value.find((a7) => a7.id === n6);
    if (!u6)
      return;
    let { dataRef: s2 } = u6;
    h4(u(k3.value, { [0]: () => s2.value, [1]: () => {
      let a7 = toRaw(i4.value.value).slice(), f5 = toRaw(s2.value), T5 = a7.findIndex((B2) => i4.compare(f5, toRaw(B2)));
      return T5 === -1 ? a7.push(f5) : a7.splice(T5, 1), a7;
    } }));
  }, selectActiveOption() {
    if (i4.activeOptionIndex.value === null)
      return;
    let { dataRef: n6, id: u6 } = v4.value[i4.activeOptionIndex.value];
    h4(u(k3.value, { [0]: () => n6.value, [1]: () => {
      let s2 = toRaw(i4.value.value).slice(), a7 = toRaw(n6.value), f5 = s2.findIndex((T5) => i4.compare(a7, toRaw(T5)));
      return f5 === -1 ? s2.push(a7) : s2.splice(f5, 1), s2;
    } })), i4.goToOption(a.Specific, u6);
  }, registerOption(n6, u6) {
    R2 && cancelAnimationFrame(R2);
    let s2 = { id: n6, dataRef: u6 }, a7 = j4((f5) => (f5.push(s2), f5));
    if (O4.value === null) {
      let f5 = u6.value.value;
      u(k3.value, { [0]: () => i4.compare(toRaw(i4.value.value), toRaw(f5)), [1]: () => toRaw(i4.value.value).some((B2) => i4.compare(toRaw(B2), toRaw(f5))) }) && (a7.activeOptionIndex = a7.options.indexOf(s2));
    }
    v4.value = a7.options, O4.value = a7.activeOptionIndex, I2.value = 1, a7.options.some((f5) => !o2(f5.dataRef.domRef)) && (R2 = requestAnimationFrame(() => {
      let f5 = j4();
      v4.value = f5.options, O4.value = f5.activeOptionIndex;
    }));
  }, unregisterOption(n6) {
    var s2;
    i4.activeOptionIndex.value !== null && ((s2 = i4.options.value[i4.activeOptionIndex.value]) == null ? void 0 : s2.id) === n6 && (P3.value = true);
    let u6 = j4((a7) => {
      let f5 = a7.findIndex((T5) => T5.id === n6);
      return f5 !== -1 && a7.splice(f5, 1), a7;
    });
    v4.value = u6.options, O4.value = u6.activeOptionIndex, I2.value = 1;
  } };
  y3([S5, p8, d8], () => i4.closeCombobox(), computed(() => e4.value === 0)), provide(Y, i4), c(computed(() => u(e4.value, { [0]: l.Open, [1]: l.Closed })));
  let A4 = computed(() => i4.activeOptionIndex.value === null ? null : v4.value[i4.activeOptionIndex.value].dataRef.value), F4 = computed(() => {
    var n6;
    return (n6 = o2(S5)) == null ? void 0 : n6.closest("form");
  });
  return onMounted(() => {
    watch([F4], () => {
      if (!F4.value || l4.defaultValue === void 0)
        return;
      function n6() {
        i4.change(l4.defaultValue);
      }
      return F4.value.addEventListener("reset", n6), () => {
        var u6;
        (u6 = F4.value) == null || u6.removeEventListener("reset", n6);
      };
    }, { immediate: true });
  }), () => {
    let { name: n6, disabled: u6, form: s2, ...a7 } = l4, f5 = { open: e4.value === 0, disabled: u6, activeIndex: i4.activeOptionIndex.value, activeOption: A4.value, value: C3.value };
    return h(Fragment, [...n6 != null && C3.value != null ? e2({ [n6]: C3.value }).map(([T5, B2]) => h(f2, K({ features: a2.Hidden, key: T5, as: "input", type: "hidden", hidden: true, readOnly: true, form: s2, name: T5, value: B2 }))) : [], H({ theirProps: { ...r3, ...T(a7, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: f5, slots: y4, attrs: r3, name: "Combobox" })]);
  };
} });
var We = defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${t()}` } }, setup(l4, { attrs: y4, slots: r3 }) {
  let w4 = $("ComboboxLabel");
  function e4() {
    var t6;
    (t6 = o2(w4.inputRef)) == null || t6.focus({ preventScroll: true });
  }
  return () => {
    let t6 = { open: w4.comboboxState.value === 0, disabled: w4.disabled.value }, { id: S5, ...p8 } = l4, d8 = { id: S5, ref: w4.labelRef, onClick: e4 };
    return H({ ourProps: d8, theirProps: p8, slot: t6, attrs: y4, slots: r3, name: "ComboboxLabel" });
  };
} });
var Ge = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${t()}` } }, setup(l4, { attrs: y4, slots: r3, expose: w4 }) {
  let e4 = $("ComboboxButton");
  w4({ el: e4.buttonRef, $el: e4.buttonRef });
  function t6(d8) {
    e4.disabled.value || (e4.comboboxState.value === 0 ? e4.closeCombobox() : (d8.preventDefault(), e4.openCombobox()), nextTick(() => {
      var b4;
      return (b4 = o2(e4.inputRef)) == null ? void 0 : b4.focus({ preventScroll: true });
    }));
  }
  function S5(d8) {
    switch (d8.key) {
      case o.ArrowDown:
        d8.preventDefault(), d8.stopPropagation(), e4.comboboxState.value === 1 && e4.openCombobox(), nextTick(() => {
          var b4;
          return (b4 = e4.inputRef.value) == null ? void 0 : b4.focus({ preventScroll: true });
        });
        return;
      case o.ArrowUp:
        d8.preventDefault(), d8.stopPropagation(), e4.comboboxState.value === 1 && (e4.openCombobox(), nextTick(() => {
          e4.value.value || e4.goToOption(a.Last);
        })), nextTick(() => {
          var b4;
          return (b4 = e4.inputRef.value) == null ? void 0 : b4.focus({ preventScroll: true });
        });
        return;
      case o.Escape:
        if (e4.comboboxState.value !== 0)
          return;
        d8.preventDefault(), e4.optionsRef.value && !e4.optionsPropsRef.value.static && d8.stopPropagation(), e4.closeCombobox(), nextTick(() => {
          var b4;
          return (b4 = e4.inputRef.value) == null ? void 0 : b4.focus({ preventScroll: true });
        });
        return;
    }
  }
  let p8 = b2(computed(() => ({ as: l4.as, type: y4.type })), e4.buttonRef);
  return () => {
    var I2, P3;
    let d8 = { open: e4.comboboxState.value === 0, disabled: e4.disabled.value, value: e4.value.value }, { id: b4, ...v4 } = l4, O4 = { ref: e4.buttonRef, id: b4, type: p8.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (I2 = o2(e4.optionsRef)) == null ? void 0 : I2.id, "aria-expanded": e4.comboboxState.value === 0, "aria-labelledby": e4.labelRef.value ? [(P3 = o2(e4.labelRef)) == null ? void 0 : P3.id, b4].join(" ") : void 0, disabled: e4.disabled.value === true ? true : void 0, onKeydown: S5, onClick: t6 };
    return H({ ourProps: O4, theirProps: v4, slot: d8, attrs: y4, slots: r3, name: "ComboboxButton" });
  };
} });
var Qe = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${t()}` } }, emits: { change: (l4) => true }, setup(l4, { emit: y4, attrs: r3, slots: w4, expose: e4 }) {
  let t6 = $("ComboboxInput"), S5 = computed(() => m(o2(t6.inputRef))), p8 = { value: false };
  e4({ el: t6.inputRef, $el: t6.inputRef });
  function d8() {
    t6.change(null);
    let o6 = o2(t6.optionsRef);
    o6 && (o6.scrollTop = 0), t6.goToOption(a.Nothing);
  }
  let b4 = computed(() => {
    var h4;
    let o6 = t6.value.value;
    return o2(t6.inputRef) ? typeof l4.displayValue != "undefined" && o6 !== void 0 ? (h4 = l4.displayValue(o6)) != null ? h4 : "" : typeof o6 == "string" ? o6 : "" : "";
  });
  onMounted(() => {
    watch([b4, t6.comboboxState, S5], ([o6, h4], [C3, E6]) => {
      if (p8.value)
        return;
      let R2 = o2(t6.inputRef);
      R2 && ((E6 === 0 && h4 === 1 || o6 !== C3) && (R2.value = o6), requestAnimationFrame(() => {
        var F4;
        if (p8.value || !R2 || ((F4 = S5.value) == null ? void 0 : F4.activeElement) !== R2)
          return;
        let { selectionStart: i4, selectionEnd: A4 } = R2;
        Math.abs((A4 != null ? A4 : 0) - (i4 != null ? i4 : 0)) === 0 && i4 === 0 && R2.setSelectionRange(R2.value.length, R2.value.length);
      }));
    }, { immediate: true }), watch([t6.comboboxState], ([o6], [h4]) => {
      if (o6 === 0 && h4 === 1) {
        if (p8.value)
          return;
        let C3 = o2(t6.inputRef);
        if (!C3)
          return;
        let E6 = C3.value, { selectionStart: R2, selectionEnd: i4, selectionDirection: A4 } = C3;
        C3.value = "", C3.value = E6, A4 !== null ? C3.setSelectionRange(R2, i4, A4) : C3.setSelectionRange(R2, i4);
      }
    });
  });
  let v4 = ref(false);
  function O4() {
    v4.value = true;
  }
  function I2() {
    o4().nextFrame(() => {
      v4.value = false;
    });
  }
  function P3(o6) {
    switch (p8.value = true, o6.key) {
      case o.Enter:
        if (p8.value = false, t6.comboboxState.value !== 0 || v4.value)
          return;
        if (o6.preventDefault(), o6.stopPropagation(), t6.activeOptionIndex.value === null) {
          t6.closeCombobox();
          return;
        }
        t6.selectActiveOption(), t6.mode.value === 0 && t6.closeCombobox();
        break;
      case o.ArrowDown:
        return p8.value = false, o6.preventDefault(), o6.stopPropagation(), u(t6.comboboxState.value, { [0]: () => t6.goToOption(a.Next), [1]: () => t6.openCombobox() });
      case o.ArrowUp:
        return p8.value = false, o6.preventDefault(), o6.stopPropagation(), u(t6.comboboxState.value, { [0]: () => t6.goToOption(a.Previous), [1]: () => {
          t6.openCombobox(), nextTick(() => {
            t6.value.value || t6.goToOption(a.Last);
          });
        } });
      case o.Home:
        if (o6.shiftKey)
          break;
        return p8.value = false, o6.preventDefault(), o6.stopPropagation(), t6.goToOption(a.First);
      case o.PageUp:
        return p8.value = false, o6.preventDefault(), o6.stopPropagation(), t6.goToOption(a.First);
      case o.End:
        if (o6.shiftKey)
          break;
        return p8.value = false, o6.preventDefault(), o6.stopPropagation(), t6.goToOption(a.Last);
      case o.PageDown:
        return p8.value = false, o6.preventDefault(), o6.stopPropagation(), t6.goToOption(a.Last);
      case o.Escape:
        if (p8.value = false, t6.comboboxState.value !== 0)
          return;
        o6.preventDefault(), t6.optionsRef.value && !t6.optionsPropsRef.value.static && o6.stopPropagation(), t6.nullable.value && t6.mode.value === 0 && t6.value.value === null && d8(), t6.closeCombobox();
        break;
      case o.Tab:
        if (p8.value = false, t6.comboboxState.value !== 0)
          return;
        t6.mode.value === 0 && t6.selectActiveOption(), t6.closeCombobox();
        break;
    }
  }
  function j4(o6) {
    y4("change", o6), t6.nullable.value && t6.mode.value === 0 && o6.target.value === "" && d8(), t6.openCombobox();
  }
  function k3() {
    p8.value = false;
  }
  let m5 = computed(() => {
    var o6, h4, C3, E6;
    return (E6 = (C3 = (h4 = l4.defaultValue) != null ? h4 : t6.defaultValue.value !== void 0 ? (o6 = l4.displayValue) == null ? void 0 : o6.call(l4, t6.defaultValue.value) : null) != null ? C3 : t6.defaultValue.value) != null ? E6 : "";
  });
  return () => {
    var A4, F4, n6, u6, s2, a7;
    let o6 = { open: t6.comboboxState.value === 0 }, { id: h4, displayValue: C3, onChange: E6, ...R2 } = l4, i4 = { "aria-controls": (A4 = t6.optionsRef.value) == null ? void 0 : A4.id, "aria-expanded": t6.comboboxState.value === 0, "aria-activedescendant": t6.activeOptionIndex.value === null || (F4 = t6.options.value[t6.activeOptionIndex.value]) == null ? void 0 : F4.id, "aria-labelledby": (s2 = (n6 = o2(t6.labelRef)) == null ? void 0 : n6.id) != null ? s2 : (u6 = o2(t6.buttonRef)) == null ? void 0 : u6.id, "aria-autocomplete": "list", id: h4, onCompositionstart: O4, onCompositionend: I2, onKeydown: P3, onInput: j4, onBlur: k3, role: "combobox", type: (a7 = r3.type) != null ? a7 : "text", tabIndex: 0, ref: t6.inputRef, defaultValue: m5.value, disabled: t6.disabled.value === true ? true : void 0 };
    return H({ ourProps: i4, theirProps: R2, slot: o6, attrs: r3, slots: w4, features: N.RenderStrategy | N.Static, name: "ComboboxInput" });
  };
} });
var Xe = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(l4, { attrs: y4, slots: r3, expose: w4 }) {
  let e4 = $("ComboboxOptions"), t6 = `headlessui-combobox-options-${t()}`;
  w4({ el: e4.optionsRef, $el: e4.optionsRef }), watchEffect(() => {
    e4.optionsPropsRef.value.static = l4.static;
  }), watchEffect(() => {
    e4.optionsPropsRef.value.hold = l4.hold;
  });
  let S5 = p(), p8 = computed(() => S5 !== null ? (S5.value & l.Open) === l.Open : e4.comboboxState.value === 0);
  return p2({ container: computed(() => o2(e4.optionsRef)), enabled: computed(() => e4.comboboxState.value === 0), accept(d8) {
    return d8.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d8.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d8) {
    d8.setAttribute("role", "none");
  } }), () => {
    var O4, I2, P3;
    let d8 = { open: e4.comboboxState.value === 0 }, b4 = { "aria-labelledby": (P3 = (O4 = o2(e4.labelRef)) == null ? void 0 : O4.id) != null ? P3 : (I2 = o2(e4.buttonRef)) == null ? void 0 : I2.id, id: t6, ref: e4.optionsRef, role: "listbox", "aria-multiselectable": e4.mode.value === 1 ? true : void 0 }, v4 = T(l4, ["hold"]);
    return H({ ourProps: b4, theirProps: v4, slot: d8, attrs: y4, slots: r3, features: N.RenderStrategy | N.Static, visible: p8.value, name: "ComboboxOptions" });
  };
} });
var Ye = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(l4, { slots: y4, attrs: r3, expose: w4 }) {
  let e4 = $("ComboboxOption"), t6 = `headlessui-combobox-option-${t()}`, S5 = ref(null);
  w4({ el: S5, $el: S5 });
  let p8 = computed(() => e4.activeOptionIndex.value !== null ? e4.options.value[e4.activeOptionIndex.value].id === t6 : false), d8 = computed(() => u(e4.mode.value, { [0]: () => e4.compare(toRaw(e4.value.value), toRaw(l4.value)), [1]: () => toRaw(e4.value.value).some((m5) => e4.compare(toRaw(m5), toRaw(l4.value))) })), b4 = computed(() => ({ disabled: l4.disabled, value: l4.value, domRef: S5 }));
  onMounted(() => e4.registerOption(t6, b4)), onUnmounted(() => e4.unregisterOption(t6)), watchEffect(() => {
    e4.comboboxState.value === 0 && p8.value && e4.activationTrigger.value !== 0 && nextTick(() => {
      var m5, o6;
      return (o6 = (m5 = o2(S5)) == null ? void 0 : m5.scrollIntoView) == null ? void 0 : o6.call(m5, { block: "nearest" });
    });
  });
  function v4(m5) {
    if (l4.disabled)
      return m5.preventDefault();
    e4.selectOption(t6), e4.mode.value === 0 && e4.closeCombobox(), n4() || requestAnimationFrame(() => {
      var o6;
      return (o6 = o2(e4.inputRef)) == null ? void 0 : o6.focus();
    });
  }
  function O4() {
    if (l4.disabled)
      return e4.goToOption(a.Nothing);
    e4.goToOption(a.Specific, t6);
  }
  let I2 = u3();
  function P3(m5) {
    I2.update(m5);
  }
  function j4(m5) {
    I2.wasMoved(m5) && (l4.disabled || p8.value || e4.goToOption(a.Specific, t6, 0));
  }
  function k3(m5) {
    I2.wasMoved(m5) && (l4.disabled || p8.value && (e4.optionsPropsRef.value.hold || e4.goToOption(a.Nothing)));
  }
  return () => {
    let { disabled: m5 } = l4, o6 = { active: p8.value, selected: d8.value, disabled: m5 }, h4 = { id: t6, ref: S5, role: "option", tabIndex: m5 === true ? void 0 : -1, "aria-disabled": m5 === true ? true : void 0, "aria-selected": d8.value, disabled: void 0, onClick: v4, onFocus: O4, onPointerenter: P3, onMouseenter: P3, onPointermove: j4, onMousemove: j4, onPointerleave: k3, onMouseleave: k3 };
    return H({ ourProps: h4, theirProps: l4, slot: o6, attrs: r3, slots: y4, name: "ComboboxOption" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-tab-direction.js
var d3 = ((r3) => (r3[r3.Forwards = 0] = "Forwards", r3[r3.Backwards = 1] = "Backwards", r3))(d3 || {});
function n5() {
  let o6 = ref(0);
  return w2("keydown", (e4) => {
    e4.key === "Tab" && (o6.value = e4.shiftKey ? 1 : 0);
  }), o6;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-event-listener.js
function E2(n6, e4, o6, r3) {
  c2.isServer || watchEffect((t6) => {
    n6 = n6 != null ? n6 : window, n6.addEventListener(e4, o6, r3), t6(() => n6.removeEventListener(e4, o6, r3));
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/document-ready.js
function t4(n6) {
  function e4() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e4));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e4), e4());
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js
function B(e4) {
  if (!e4)
    return /* @__PURE__ */ new Set();
  if (typeof e4 == "function")
    return new Set(e4());
  let t6 = /* @__PURE__ */ new Set();
  for (let l4 of e4.value) {
    let o6 = o2(l4);
    o6 instanceof HTMLElement && t6.add(o6);
  }
  return t6;
}
var A = ((n6) => (n6[n6.None = 1] = "None", n6[n6.InitialFocus = 2] = "InitialFocus", n6[n6.TabLock = 4] = "TabLock", n6[n6.FocusLock = 8] = "FocusLock", n6[n6.RestoreFocus = 16] = "RestoreFocus", n6[n6.All = 30] = "All", n6))(A || {});
var ce = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e4, { attrs: t6, slots: l4, expose: o6 }) {
  let r3 = ref(null);
  o6({ el: r3, $el: r3 });
  let i4 = computed(() => m(r3)), n6 = ref(false);
  onMounted(() => n6.value = true), onUnmounted(() => n6.value = false), z({ ownerDocument: i4 }, computed(() => n6.value && Boolean(e4.features & 16)));
  let m5 = J({ ownerDocument: i4, container: r3, initialFocus: computed(() => e4.initialFocus) }, computed(() => n6.value && Boolean(e4.features & 2)));
  Q({ ownerDocument: i4, container: r3, containers: e4.containers, previousActiveElement: m5 }, computed(() => n6.value && Boolean(e4.features & 8)));
  let c5 = n5();
  function u6(a7) {
    let d8 = o2(r3);
    if (!d8)
      return;
    ((g4) => g4())(() => {
      u(c5.value, { [d3.Forwards]: () => {
        P(d8, N2.First, { skipElements: [a7.relatedTarget] });
      }, [d3.Backwards]: () => {
        P(d8, N2.Last, { skipElements: [a7.relatedTarget] });
      } });
    });
  }
  let s2 = ref(false);
  function H4(a7) {
    a7.key === "Tab" && (s2.value = true, requestAnimationFrame(() => {
      s2.value = false;
    }));
  }
  function M3(a7) {
    if (!n6.value)
      return;
    let d8 = B(e4.containers);
    o2(r3) instanceof HTMLElement && d8.add(o2(r3));
    let E6 = a7.relatedTarget;
    E6 instanceof HTMLElement && E6.dataset.headlessuiFocusGuard !== "true" && (N3(d8, E6) || (s2.value ? P(o2(r3), u(c5.value, { [d3.Forwards]: () => N2.Next, [d3.Backwards]: () => N2.Previous }) | N2.WrapAround, { relativeTo: a7.target }) : a7.target instanceof HTMLElement && S2(a7.target)));
  }
  return () => {
    let a7 = {}, d8 = { ref: r3, onKeydown: H4, onFocusout: M3 }, { features: E6, initialFocus: g4, containers: X2, ...O4 } = e4;
    return h(Fragment, [Boolean(E6 & 4) && h(f2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u6, features: a2.Focusable }), H({ ourProps: d8, theirProps: { ...t6, ...O4 }, slot: a7, attrs: t6, slots: l4, name: "FocusTrap" }), Boolean(E6 & 4) && h(f2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u6, features: a2.Focusable })]);
  };
} }), { features: A });
var L = [];
t4(() => {
  function e4(t6) {
    t6.target instanceof HTMLElement && t6.target !== document.body && L[0] !== t6.target && (L.unshift(t6.target), L = L.filter((l4) => l4 != null && l4.isConnected), L.splice(10));
  }
  window.addEventListener("click", e4, { capture: true }), window.addEventListener("mousedown", e4, { capture: true }), window.addEventListener("focus", e4, { capture: true }), document.body.addEventListener("click", e4, { capture: true }), document.body.addEventListener("mousedown", e4, { capture: true }), document.body.addEventListener("focus", e4, { capture: true });
});
function x2(e4) {
  let t6 = ref(L.slice());
  return watch([e4], ([l4], [o6]) => {
    o6 === true && l4 === false ? t3(() => {
      t6.value.splice(0);
    }) : o6 === false && l4 === true && (t6.value = L.slice());
  }, { flush: "post" }), () => {
    var l4;
    return (l4 = t6.value.find((o6) => o6 != null && o6.isConnected)) != null ? l4 : null;
  };
}
function z({ ownerDocument: e4 }, t6) {
  let l4 = x2(t6);
  onMounted(() => {
    watchEffect(() => {
      var o6, r3;
      t6.value || ((o6 = e4.value) == null ? void 0 : o6.activeElement) === ((r3 = e4.value) == null ? void 0 : r3.body) && S2(l4());
    }, { flush: "post" });
  }), onUnmounted(() => {
    t6.value && S2(l4());
  });
}
function J({ ownerDocument: e4, container: t6, initialFocus: l4 }, o6) {
  let r3 = ref(null), i4 = ref(false);
  return onMounted(() => i4.value = true), onUnmounted(() => i4.value = false), onMounted(() => {
    watch([t6, l4, o6], (n6, m5) => {
      if (n6.every((u6, s2) => (m5 == null ? void 0 : m5[s2]) === u6) || !o6.value)
        return;
      let c5 = o2(t6);
      c5 && t3(() => {
        var H4, M3;
        if (!i4.value)
          return;
        let u6 = o2(l4), s2 = (H4 = e4.value) == null ? void 0 : H4.activeElement;
        if (u6) {
          if (u6 === s2) {
            r3.value = s2;
            return;
          }
        } else if (c5.contains(s2)) {
          r3.value = s2;
          return;
        }
        u6 ? S2(u6) : P(c5, N2.First | N2.NoScroll) === T2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r3.value = (M3 = e4.value) == null ? void 0 : M3.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), r3;
}
function Q({ ownerDocument: e4, container: t6, containers: l4, previousActiveElement: o6 }, r3) {
  var i4;
  E2((i4 = e4.value) == null ? void 0 : i4.defaultView, "focus", (n6) => {
    if (!r3.value)
      return;
    let m5 = B(l4);
    o2(t6) instanceof HTMLElement && m5.add(o2(t6));
    let c5 = o6.value;
    if (!c5)
      return;
    let u6 = n6.target;
    u6 && u6 instanceof HTMLElement ? N3(m5, u6) ? (o6.value = u6, S2(u6)) : (n6.preventDefault(), n6.stopPropagation(), S2(c5)) : S2(o6.value);
  }, true);
}
function N3(e4, t6) {
  for (let l4 of e4)
    if (l4.contains(t6))
      return true;
  return false;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-inert.js
var i3 = /* @__PURE__ */ new Map();
var t5 = /* @__PURE__ */ new Map();
function E3(d8, f5 = ref(true)) {
  watchEffect((o6) => {
    var a7;
    if (!f5.value)
      return;
    let e4 = o2(d8);
    if (!e4)
      return;
    o6(function() {
      var u6;
      if (!e4)
        return;
      let r3 = (u6 = t5.get(e4)) != null ? u6 : 1;
      if (r3 === 1 ? t5.delete(e4) : t5.set(e4, r3 - 1), r3 !== 1)
        return;
      let n6 = i3.get(e4);
      n6 && (n6["aria-hidden"] === null ? e4.removeAttribute("aria-hidden") : e4.setAttribute("aria-hidden", n6["aria-hidden"]), e4.inert = n6.inert, i3.delete(e4));
    });
    let l4 = (a7 = t5.get(e4)) != null ? a7 : 0;
    t5.set(e4, l4 + 1), l4 === 0 && (i3.set(e4, { "aria-hidden": e4.getAttribute("aria-hidden"), inert: e4.inert }), e4.setAttribute("aria-hidden", "true"), e4.inert = true);
  });
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/internal/portal-force-root.js
var e3 = Symbol("ForcePortalRootContext");
function u4() {
  return inject(e3, false);
}
var P2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o6, { slots: t6, attrs: r3 }) {
  return provide(e3, o6.force), () => {
    let { force: f5, ...n6 } = o6;
    return H({ theirProps: n6, ourProps: {}, slot: {}, slots: t6, attrs: r3, name: "ForcePortalRoot" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/portal/portal.js
function E4(t6) {
  let e4 = m(t6);
  if (!e4) {
    if (t6 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t6}`);
  }
  let u6 = e4.getElementById("headlessui-portal-root");
  if (u6)
    return u6;
  let r3 = e4.createElement("div");
  return r3.setAttribute("id", "headlessui-portal-root"), e4.body.appendChild(r3);
}
var U = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t6, { slots: e4, attrs: u6 }) {
  let r3 = ref(null), i4 = computed(() => m(r3)), l4 = u4(), n6 = inject(h3, null), o6 = ref(l4 === true || n6 == null ? E4(r3.value) : n6.resolveTarget());
  watchEffect(() => {
    l4 || n6 != null && (o6.value = n6.resolveTarget());
  });
  let d8 = inject(f4, null);
  return onMounted(() => {
    let a7 = o2(r3);
    a7 && d8 && onUnmounted(d8.register(a7));
  }), onUnmounted(() => {
    var v4, P3;
    let a7 = (v4 = i4.value) == null ? void 0 : v4.getElementById("headlessui-portal-root");
    a7 && o6.value === a7 && o6.value.children.length <= 0 && ((P3 = o6.value.parentElement) == null || P3.removeChild(o6.value));
  }), () => {
    if (o6.value === null)
      return null;
    let a7 = { ref: r3, "data-headlessui-portal": "" };
    return h(Teleport, { to: o6.value }, H({ ourProps: a7, theirProps: t6, slot: {}, attrs: u6, slots: e4, name: "Portal" }));
  };
} });
var f4 = Symbol("PortalParentContext");
function V() {
  let t6 = inject(f4, null), e4 = ref([]);
  function u6(l4) {
    return e4.value.push(l4), t6 && t6.register(l4), () => r3(l4);
  }
  function r3(l4) {
    let n6 = e4.value.indexOf(l4);
    n6 !== -1 && e4.value.splice(n6, 1), t6 && t6.unregister(l4);
  }
  let i4 = { register: u6, unregister: r3, portals: e4 };
  return [e4, defineComponent({ name: "PortalWrapper", setup(l4, { slots: n6 }) {
    return provide(f4, i4), () => {
      var o6;
      return (o6 = n6.default) == null ? void 0 : o6.call(n6);
    };
  } })];
}
var h3 = Symbol("PortalGroupContext");
var _2 = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t6, { attrs: e4, slots: u6 }) {
  let r3 = reactive({ resolveTarget() {
    return t6.target;
  } });
  return provide(h3, r3), () => {
    let { target: i4, ...l4 } = t6;
    return H({ theirProps: l4, ourProps: {}, slot: {}, attrs: e4, slots: u6, name: "PortalGroup" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/internal/stack-context.js
var u5 = Symbol("StackContext");
var p4 = ((e4) => (e4[e4.Add = 0] = "Add", e4[e4.Remove = 1] = "Remove", e4))(p4 || {});
function v3() {
  return inject(u5, () => {
  });
}
function S3({ type: o6, enabled: r3, element: e4, onUpdate: i4 }) {
  let a7 = v3();
  function t6(...n6) {
    i4 == null || i4(...n6), a7(...n6);
  }
  onMounted(() => {
    watch(r3, (n6, d8) => {
      n6 ? t6(0, o6, e4) : d8 === true && t6(1, o6, e4);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r3.value && t6(1, o6, e4);
  }), provide(u5, t6);
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/description/description.js
var p5 = Symbol("DescriptionContext");
function b3() {
  let t6 = inject(p5, null);
  if (t6 === null)
    throw new Error("Missing parent");
  return t6;
}
function M({ slot: t6 = ref({}), name: i4 = "Description", props: o6 = {} } = {}) {
  let e4 = ref([]);
  function s2(n6) {
    return e4.value.push(n6), () => {
      let r3 = e4.value.indexOf(n6);
      r3 !== -1 && e4.value.splice(r3, 1);
    };
  }
  return provide(p5, { register: s2, slot: t6, name: i4, props: o6 }), computed(() => e4.value.length > 0 ? e4.value.join(" ") : void 0);
}
var E5 = defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t()}` } }, setup(t6, { attrs: i4, slots: o6 }) {
  let e4 = b3();
  return onMounted(() => onUnmounted(e4.register(t6.id))), () => {
    let { name: s2 = "Description", slot: n6 = ref({}), props: r3 = {} } = e4, { id: d8, ...l4 } = t6, c5 = { ...Object.entries(r3).reduce((f5, [a7, g4]) => Object.assign(f5, { [a7]: unref(g4) }), {}), id: d8 };
    return H({ ourProps: c5, theirProps: l4, slot: n6.value, attrs: i4, slots: o6, name: s2 });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-store.js
function m2(t6) {
  let e4 = shallowRef(t6.getSnapshot());
  return onUnmounted(t6.subscribe(() => {
    e4.value = t6.getSnapshot();
  })), e4;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/store.js
function a3(o6, r3) {
  let t6 = o6(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t6;
  }, subscribe(e4) {
    return n6.add(e4), () => n6.delete(e4);
  }, dispatch(e4, ...s2) {
    let i4 = r3[e4].call(t6, ...s2);
    i4 && (t6 = i4, n6.forEach((c5) => c5()));
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c4() {
  let o6;
  return { before({ doc: e4 }) {
    var l4;
    let n6 = e4.documentElement;
    o6 = ((l4 = e4.defaultView) != null ? l4 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e4, d: n6 }) {
    let t6 = e4.documentElement, l4 = t6.clientWidth - t6.offsetWidth, r3 = o6 - l4;
    n6.style(t6, "paddingRight", `${r3}px`);
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/document-overflow/handle-ios-locking.js
function w3() {
  if (!t2())
    return {};
  let r3;
  return { before() {
    r3 = window.pageYOffset;
  }, after({ doc: n6, d: o6, meta: s2 }) {
    function i4(e4) {
      return s2.containers.flatMap((t6) => t6()).some((t6) => t6.contains(e4));
    }
    if (window.getComputedStyle(n6.documentElement).scrollBehavior !== "auto") {
      let e4 = o4();
      e4.style(n6.documentElement, "scroll-behavior", "auto"), o6.add(() => o6.microTask(() => e4.dispose()));
    }
    o6.style(n6.body, "marginTop", `-${r3}px`), window.scrollTo(0, 0);
    let l4 = null;
    o6.addEventListener(n6, "click", (e4) => {
      if (e4.target instanceof HTMLElement)
        try {
          let t6 = e4.target.closest("a");
          if (!t6)
            return;
          let { hash: c5 } = new URL(t6.href), a7 = n6.querySelector(c5);
          a7 && !i4(a7) && (l4 = a7);
        } catch {
        }
    }, true), o6.addEventListener(n6, "touchmove", (e4) => {
      e4.target instanceof HTMLElement && !i4(e4.target) && e4.preventDefault();
    }, { passive: false }), o6.add(() => {
      window.scrollTo(0, window.pageYOffset + r3), l4 && l4.isConnected && (l4.scrollIntoView({ block: "nearest" }), l4 = null);
    });
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/document-overflow/prevent-scroll.js
function l2() {
  return { before({ doc: e4, d: o6 }) {
    o6.style(e4.documentElement, "overflow", "hidden");
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/document-overflow/overflow-store.js
function m3(e4) {
  let n6 = {};
  for (let t6 of e4)
    Object.assign(n6, t6(n6));
  return n6;
}
var a4 = a3(() => /* @__PURE__ */ new Map(), { PUSH(e4, n6) {
  var o6;
  let t6 = (o6 = this.get(e4)) != null ? o6 : { doc: e4, count: 0, d: o4(), meta: /* @__PURE__ */ new Set() };
  return t6.count++, t6.meta.add(n6), this.set(e4, t6), this;
}, POP(e4, n6) {
  let t6 = this.get(e4);
  return t6 && (t6.count--, t6.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e4, d: n6, meta: t6 }) {
  let o6 = { doc: e4, d: n6, meta: m3(t6) }, c5 = [w3(), c4(), l2()];
  c5.forEach(({ before: r3 }) => r3 == null ? void 0 : r3(o6)), c5.forEach(({ after: r3 }) => r3 == null ? void 0 : r3(o6));
}, SCROLL_ALLOW({ d: e4 }) {
  e4.dispose();
}, TEARDOWN({ doc: e4 }) {
  this.delete(e4);
} });
a4.subscribe(() => {
  let e4 = a4.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t6] of e4)
    n6.set(t6, t6.documentElement.style.overflow);
  for (let t6 of e4.values()) {
    let o6 = n6.get(t6.doc) === "hidden", c5 = t6.count !== 0;
    (c5 && !o6 || !c5 && o6) && a4.dispatch(t6.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t6), t6.count === 0 && a4.dispatch("TEARDOWN", t6);
  }
});

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/document-overflow/use-document-overflow.js
function d4(t6, a7, n6) {
  let i4 = m2(a4), l4 = computed(() => {
    let e4 = t6.value ? i4.value.get(t6.value) : void 0;
    return e4 ? e4.count > 0 : false;
  });
  return watch([t6, a7], ([e4, m5], [r3], o6) => {
    if (!e4 || !m5)
      return;
    a4.dispatch("PUSH", e4, n6);
    let f5 = false;
    o6(() => {
      f5 || (a4.dispatch("POP", r3 != null ? r3 : e4, n6), f5 = true);
    });
  }, { immediate: true }), l4;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-root-containers.js
function p6({ defaultContainers: t6 = [], portals: o6, mainTreeNodeRef: s2 } = {}) {
  let i4 = ref(null), r3 = m(i4);
  function u6() {
    var l4;
    let n6 = [];
    for (let e4 of t6)
      e4 !== null && (e4 instanceof HTMLElement ? n6.push(e4) : "value" in e4 && e4.value instanceof HTMLElement && n6.push(e4.value));
    if (o6 != null && o6.value)
      for (let e4 of o6.value)
        n6.push(e4);
    for (let e4 of (l4 = r3 == null ? void 0 : r3.querySelectorAll("html > *, body > *")) != null ? l4 : [])
      e4 !== document.body && e4 !== document.head && e4 instanceof HTMLElement && e4.id !== "headlessui-portal-root" && (e4.contains(o2(i4)) || n6.some((c5) => e4.contains(c5)) || n6.push(e4));
    return n6;
  }
  return { resolveContainers: u6, contains(n6) {
    return u6().some((l4) => l4.contains(n6));
  }, mainTreeNodeRef: i4, MainTreeNode() {
    return s2 != null ? null : h(f2, { features: a2.Hidden, ref: i4 });
  } };
}
function N4() {
  let t6 = ref(null);
  return { mainTreeNodeRef: t6, MainTreeNode() {
    return h(f2, { features: a2.Hidden, ref: t6 });
  } };
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/dialog/dialog.js
var Oe2 = ((t6) => (t6[t6.Open = 0] = "Open", t6[t6.Closed = 1] = "Closed", t6))(Oe2 || {});
var F2 = Symbol("DialogContext");
function C2(o6) {
  let n6 = inject(F2, null);
  if (n6 === null) {
    let t6 = new Error(`<${o6} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t6, C2), t6;
  }
  return n6;
}
var M2 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
var Ue = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: M2 }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${t()}` } }, emits: { close: (o6) => true }, setup(o6, { emit: n6, attrs: t6, slots: u6, expose: i4 }) {
  var N6;
  let r3 = ref(false);
  onMounted(() => {
    r3.value = true;
  });
  let s2 = ref(0), p8 = p(), m5 = computed(() => o6.open === M2 && p8 !== null ? (p8.value & l.Open) === l.Open : o6.open), v4 = ref(null), T5 = computed(() => m(v4));
  if (i4({ el: v4, $el: v4 }), !(o6.open !== M2 || p8 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof m5.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m5.value === M2 ? void 0 : o6.open}`);
  let c5 = computed(() => r3.value && m5.value ? 0 : 1), R2 = computed(() => c5.value === 0), E6 = computed(() => s2.value > 1), $4 = inject(F2, null) !== null, [G, V4] = V(), { resolveContainers: x3, mainTreeNodeRef: j4, MainTreeNode: W2 } = p6({ portals: G, defaultContainers: [computed(() => {
    var e4;
    return (e4 = y4.panelRef.value) != null ? e4 : v4.value;
  })] }), J2 = computed(() => E6.value ? "parent" : "leaf"), H4 = computed(() => p8 !== null ? (p8.value & l.Closing) === l.Closing : false), Q3 = computed(() => $4 || H4.value ? false : R2.value), X2 = computed(() => {
    var e4, l4, f5;
    return (f5 = Array.from((l4 = (e4 = T5.value) == null ? void 0 : e4.querySelectorAll("body > *")) != null ? l4 : []).find((d8) => d8.id === "headlessui-portal-root" ? false : d8.contains(o2(j4)) && d8 instanceof HTMLElement)) != null ? f5 : null;
  });
  E3(X2, Q3);
  let Z2 = computed(() => E6.value ? true : R2.value), ee2 = computed(() => {
    var e4, l4, f5;
    return (f5 = Array.from((l4 = (e4 = T5.value) == null ? void 0 : e4.querySelectorAll("[data-headlessui-portal]")) != null ? l4 : []).find((d8) => d8.contains(o2(j4)) && d8 instanceof HTMLElement)) != null ? f5 : null;
  });
  E3(ee2, Z2), S3({ type: "Dialog", enabled: computed(() => c5.value === 0), element: v4, onUpdate: (e4, l4) => {
    if (l4 === "Dialog")
      return u(e4, { [p4.Add]: () => s2.value += 1, [p4.Remove]: () => s2.value -= 1 });
  } });
  let te2 = M({ name: "DialogDescription", slot: computed(() => ({ open: m5.value })) }), k3 = ref(null), y4 = { titleId: k3, panelRef: ref(null), dialogState: c5, setTitleId(e4) {
    k3.value !== e4 && (k3.value = e4);
  }, close() {
    n6("close", false);
  } };
  provide(F2, y4);
  let le3 = computed(() => !(!R2.value || E6.value));
  y3(x3, (e4, l4) => {
    y4.close(), nextTick(() => l4 == null ? void 0 : l4.focus());
  }, le3);
  let oe = computed(() => !(E6.value || c5.value !== 0));
  E2((N6 = T5.value) == null ? void 0 : N6.defaultView, "keydown", (e4) => {
    oe.value && (e4.defaultPrevented || e4.key === o.Escape && (e4.preventDefault(), e4.stopPropagation(), y4.close()));
  });
  let re3 = computed(() => !(H4.value || c5.value !== 0 || $4));
  return d4(T5, re3, (e4) => {
    var l4;
    return { containers: [...(l4 = e4.containers) != null ? l4 : [], x3] };
  }), watchEffect((e4) => {
    if (c5.value !== 0)
      return;
    let l4 = o2(v4);
    if (!l4)
      return;
    let f5 = new ResizeObserver((d8) => {
      for (let A4 of d8) {
        let D = A4.target.getBoundingClientRect();
        D.x === 0 && D.y === 0 && D.width === 0 && D.height === 0 && y4.close();
      }
    });
    f5.observe(l4), e4(() => f5.disconnect());
  }), () => {
    let { id: e4, open: l4, initialFocus: f5, ...d8 } = o6, A4 = { ...t6, ref: v4, id: e4, role: "dialog", "aria-modal": c5.value === 0 ? true : void 0, "aria-labelledby": k3.value, "aria-describedby": te2.value }, D = { open: c5.value === 0 };
    return h(P2, { force: true }, () => [h(U, () => h(_2, { target: v4.value }, () => h(P2, { force: false }, () => h(ce, { initialFocus: f5, containers: x3, features: R2.value ? u(J2.value, { parent: ce.features.RestoreFocus, leaf: ce.features.All & ~ce.features.FocusLock }) : ce.features.None }, () => h(V4, {}, () => H({ ourProps: A4, theirProps: { ...d8, ...t6 }, slot: D, attrs: t6, slots: u6, visible: c5.value === 0, features: N.RenderStrategy | N.Static, name: "Dialog" })))))), h(W2)]);
  };
} });
var Ye2 = defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${t()}` } }, setup(o6, { attrs: n6, slots: t6 }) {
  let u6 = C2("DialogOverlay");
  function i4(r3) {
    r3.target === r3.currentTarget && (r3.preventDefault(), r3.stopPropagation(), u6.close());
  }
  return () => {
    let { id: r3, ...s2 } = o6;
    return H({ ourProps: { id: r3, "aria-hidden": true, onClick: i4 }, theirProps: s2, slot: { open: u6.dialogState.value === 0 }, attrs: n6, slots: t6, name: "DialogOverlay" });
  };
} });
var ze = defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${t()}` } }, inheritAttrs: false, setup(o6, { attrs: n6, slots: t6, expose: u6 }) {
  let i4 = C2("DialogBackdrop"), r3 = ref(null);
  return u6({ el: r3, $el: r3 }), onMounted(() => {
    if (i4.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s2, ...p8 } = o6, m5 = { id: s2, ref: r3, "aria-hidden": true };
    return h(P2, { force: true }, () => h(U, () => H({ ourProps: m5, theirProps: { ...n6, ...p8 }, slot: { open: i4.dialogState.value === 0 }, attrs: n6, slots: t6, name: "DialogBackdrop" })));
  };
} });
var Ge2 = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${t()}` } }, setup(o6, { attrs: n6, slots: t6, expose: u6 }) {
  let i4 = C2("DialogPanel");
  u6({ el: i4.panelRef, $el: i4.panelRef });
  function r3(s2) {
    s2.stopPropagation();
  }
  return () => {
    let { id: s2, ...p8 } = o6, m5 = { id: s2, ref: i4.panelRef, onClick: r3 };
    return H({ ourProps: m5, theirProps: p8, slot: { open: i4.dialogState.value === 0 }, attrs: n6, slots: t6, name: "DialogPanel" });
  };
} });
var Ve = defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${t()}` } }, setup(o6, { attrs: n6, slots: t6 }) {
  let u6 = C2("DialogTitle");
  return onMounted(() => {
    u6.setTitleId(o6.id), onUnmounted(() => u6.setTitleId(null));
  }), () => {
    let { id: i4, ...r3 } = o6;
    return H({ ourProps: { id: i4 }, theirProps: r3, slot: { open: u6.dialogState.value === 0 }, attrs: n6, slots: t6, name: "DialogTitle" });
  };
} });
var We2 = E5;

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js
var $2 = ((o6) => (o6[o6.Open = 0] = "Open", o6[o6.Closed = 1] = "Closed", o6))($2 || {});
var T3 = Symbol("DisclosureContext");
function O2(t6) {
  let r3 = inject(T3, null);
  if (r3 === null) {
    let o6 = new Error(`<${t6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o6, O2), o6;
  }
  return r3;
}
var k = Symbol("DisclosurePanelContext");
function U2() {
  return inject(k, null);
}
var V2 = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t6, { slots: r3, attrs: o6 }) {
  let s2 = ref(t6.defaultOpen ? 0 : 1), e4 = ref(null), i4 = ref(null), n6 = { buttonId: ref(`headlessui-disclosure-button-${t()}`), panelId: ref(`headlessui-disclosure-panel-${t()}`), disclosureState: s2, panel: e4, button: i4, toggleDisclosure() {
    s2.value = u(s2.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s2.value !== 1 && (s2.value = 1);
  }, close(l4) {
    n6.closeDisclosure();
    let a7 = (() => l4 ? l4 instanceof HTMLElement ? l4 : l4.value instanceof HTMLElement ? o2(l4) : o2(n6.button) : o2(n6.button))();
    a7 == null || a7.focus();
  } };
  return provide(T3, n6), c(computed(() => u(s2.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let { defaultOpen: l4, ...a7 } = t6, c5 = { open: s2.value === 0, close: n6.close };
    return H({ theirProps: a7, ourProps: {}, slot: c5, slots: r3, attrs: o6, name: "Disclosure" });
  };
} });
var X = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(t6, { attrs: r3, slots: o6, expose: s2 }) {
  let e4 = O2("DisclosureButton"), i4 = U2(), n6 = computed(() => i4 === null ? false : i4.value === e4.panelId.value);
  onMounted(() => {
    n6.value || t6.id !== null && (e4.buttonId.value = t6.id);
  }), onUnmounted(() => {
    n6.value || (e4.buttonId.value = null);
  });
  let l4 = ref(null);
  s2({ el: l4, $el: l4 }), n6.value || watchEffect(() => {
    e4.button.value = l4.value;
  });
  let a7 = b2(computed(() => ({ as: t6.as, type: r3.type })), l4);
  function c5() {
    var u6;
    t6.disabled || (n6.value ? (e4.toggleDisclosure(), (u6 = o2(e4.button)) == null || u6.focus()) : e4.toggleDisclosure());
  }
  function D(u6) {
    var S5;
    if (!t6.disabled)
      if (n6.value)
        switch (u6.key) {
          case o.Space:
          case o.Enter:
            u6.preventDefault(), u6.stopPropagation(), e4.toggleDisclosure(), (S5 = o2(e4.button)) == null || S5.focus();
            break;
        }
      else
        switch (u6.key) {
          case o.Space:
          case o.Enter:
            u6.preventDefault(), u6.stopPropagation(), e4.toggleDisclosure();
            break;
        }
  }
  function v4(u6) {
    switch (u6.key) {
      case o.Space:
        u6.preventDefault();
        break;
    }
  }
  return () => {
    var C3;
    let u6 = { open: e4.disclosureState.value === 0 }, { id: S5, ...K3 } = t6, M3 = n6.value ? { ref: l4, type: a7.value, onClick: c5, onKeydown: D } : { id: (C3 = e4.buttonId.value) != null ? C3 : S5, ref: l4, type: a7.value, "aria-expanded": e4.disclosureState.value === 0, "aria-controls": e4.disclosureState.value === 0 || o2(e4.panel) ? e4.panelId.value : void 0, disabled: t6.disabled ? true : void 0, onClick: c5, onKeydown: D, onKeyup: v4 };
    return H({ ourProps: M3, theirProps: K3, slot: u6, attrs: r3, slots: o6, name: "DisclosureButton" });
  };
} });
var Y2 = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(t6, { attrs: r3, slots: o6, expose: s2 }) {
  let e4 = O2("DisclosurePanel");
  onMounted(() => {
    t6.id !== null && (e4.panelId.value = t6.id);
  }), onUnmounted(() => {
    e4.panelId.value = null;
  }), s2({ el: e4.panel, $el: e4.panel }), provide(k, e4.panelId);
  let i4 = p(), n6 = computed(() => i4 !== null ? (i4.value & l.Open) === l.Open : e4.disclosureState.value === 0);
  return () => {
    var v4;
    let l4 = { open: e4.disclosureState.value === 0, close: e4.close }, { id: a7, ...c5 } = t6, D = { id: (v4 = e4.panelId.value) != null ? v4 : a7, ref: e4.panel };
    return H({ ourProps: D, theirProps: c5, slot: l4, attrs: r3, slots: o6, features: N.RenderStrategy | N.Static, visible: n6.value, name: "DisclosurePanel" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/get-text-value.js
var a5 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o5(e4) {
  var r3, i4;
  let n6 = (r3 = e4.innerText) != null ? r3 : "", t6 = e4.cloneNode(true);
  if (!(t6 instanceof HTMLElement))
    return n6;
  let u6 = false;
  for (let f5 of t6.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f5.remove(), u6 = true;
  let l4 = u6 ? (i4 = t6.innerText) != null ? i4 : "" : n6;
  return a5.test(l4) && (l4 = l4.replace(a5, "")), l4;
}
function g(e4) {
  let n6 = e4.getAttribute("aria-label");
  if (typeof n6 == "string")
    return n6.trim();
  let t6 = e4.getAttribute("aria-labelledby");
  if (t6) {
    let u6 = t6.split(" ").map((l4) => {
      let r3 = document.getElementById(l4);
      if (r3) {
        let i4 = r3.getAttribute("aria-label");
        return typeof i4 == "string" ? i4.trim() : o5(r3).trim();
      }
      return null;
    }).filter(Boolean);
    if (u6.length > 0)
      return u6.join(", ");
  }
  return o5(e4).trim();
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/hooks/use-text-value.js
function p7(a7) {
  let t6 = ref(""), r3 = ref("");
  return () => {
    let e4 = o2(a7);
    if (!e4)
      return "";
    let l4 = e4.innerText;
    if (t6.value === l4)
      return r3.value;
    let u6 = g(e4).trim().toLowerCase();
    return t6.value = l4, r3.value = u6, u6;
  };
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/listbox/listbox.js
function pe(t6, v4) {
  return t6 === v4;
}
var ce2 = ((l4) => (l4[l4.Open = 0] = "Open", l4[l4.Closed = 1] = "Closed", l4))(ce2 || {});
var ve = ((l4) => (l4[l4.Single = 0] = "Single", l4[l4.Multi = 1] = "Multi", l4))(ve || {});
var be = ((l4) => (l4[l4.Pointer = 0] = "Pointer", l4[l4.Other = 1] = "Other", l4))(be || {});
function me(t6) {
  requestAnimationFrame(() => requestAnimationFrame(t6));
}
var $3 = Symbol("ListboxContext");
function A2(t6) {
  let v4 = inject($3, null);
  if (v4 === null) {
    let l4 = new Error(`<${t6} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l4, A2), l4;
  }
  return v4;
}
var Be = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t6) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t6, { slots: v4, attrs: l4, emit: L4 }) {
  let e4 = ref(1), d8 = ref(null), b4 = ref(null), m5 = ref(null), f5 = ref([]), o6 = ref(""), i4 = ref(null), T5 = ref(1);
  function k3(a7 = (n6) => n6) {
    let n6 = i4.value !== null ? f5.value[i4.value] : null, u6 = O(a7(f5.value.slice()), (O4) => o2(O4.dataRef.domRef)), s2 = n6 ? u6.indexOf(n6) : null;
    return s2 === -1 && (s2 = null), { options: u6, activeOptionIndex: s2 };
  }
  let y4 = computed(() => t6.multiple ? 1 : 0), [h4, M3] = d2(computed(() => t6.modelValue), (a7) => L4("update:modelValue", a7), computed(() => t6.defaultValue)), w4 = computed(() => h4.value === void 0 ? u(y4.value, { [1]: [], [0]: void 0 }) : h4.value), r3 = { listboxState: e4, value: w4, mode: y4, compare(a7, n6) {
    if (typeof t6.by == "string") {
      let u6 = t6.by;
      return (a7 == null ? void 0 : a7[u6]) === (n6 == null ? void 0 : n6[u6]);
    }
    return t6.by(a7, n6);
  }, orientation: computed(() => t6.horizontal ? "horizontal" : "vertical"), labelRef: d8, buttonRef: b4, optionsRef: m5, disabled: computed(() => t6.disabled), options: f5, searchQuery: o6, activeOptionIndex: i4, activationTrigger: T5, closeListbox() {
    t6.disabled || e4.value !== 1 && (e4.value = 1, i4.value = null);
  }, openListbox() {
    t6.disabled || e4.value !== 0 && (e4.value = 0);
  }, goToOption(a7, n6, u6) {
    if (t6.disabled || e4.value === 1)
      return;
    let s2 = k3(), O4 = x(a7 === a.Specific ? { focus: a.Specific, id: n6 } : { focus: a7 }, { resolveItems: () => s2.options, resolveActiveIndex: () => s2.activeOptionIndex, resolveId: (P3) => P3.id, resolveDisabled: (P3) => P3.dataRef.disabled });
    o6.value = "", i4.value = O4, T5.value = u6 != null ? u6 : 1, f5.value = s2.options;
  }, search(a7) {
    if (t6.disabled || e4.value === 1)
      return;
    let u6 = o6.value !== "" ? 0 : 1;
    o6.value += a7.toLowerCase();
    let O4 = (i4.value !== null ? f5.value.slice(i4.value + u6).concat(f5.value.slice(0, i4.value + u6)) : f5.value).find((I2) => I2.dataRef.textValue.startsWith(o6.value) && !I2.dataRef.disabled), P3 = O4 ? f5.value.indexOf(O4) : -1;
    P3 === -1 || P3 === i4.value || (i4.value = P3, T5.value = 1);
  }, clearSearch() {
    t6.disabled || e4.value !== 1 && o6.value !== "" && (o6.value = "");
  }, registerOption(a7, n6) {
    let u6 = k3((s2) => [...s2, { id: a7, dataRef: n6 }]);
    f5.value = u6.options, i4.value = u6.activeOptionIndex;
  }, unregisterOption(a7) {
    let n6 = k3((u6) => {
      let s2 = u6.findIndex((O4) => O4.id === a7);
      return s2 !== -1 && u6.splice(s2, 1), u6;
    });
    f5.value = n6.options, i4.value = n6.activeOptionIndex, T5.value = 1;
  }, theirOnChange(a7) {
    t6.disabled || M3(a7);
  }, select(a7) {
    t6.disabled || M3(u(y4.value, { [0]: () => a7, [1]: () => {
      let n6 = toRaw(r3.value.value).slice(), u6 = toRaw(a7), s2 = n6.findIndex((O4) => r3.compare(u6, toRaw(O4)));
      return s2 === -1 ? n6.push(u6) : n6.splice(s2, 1), n6;
    } }));
  } };
  y3([b4, m5], (a7, n6) => {
    var u6;
    r3.closeListbox(), w(n6, h2.Loose) || (a7.preventDefault(), (u6 = o2(b4)) == null || u6.focus());
  }, computed(() => e4.value === 0)), provide($3, r3), c(computed(() => u(e4.value, { [0]: l.Open, [1]: l.Closed })));
  let x3 = computed(() => {
    var a7;
    return (a7 = o2(b4)) == null ? void 0 : a7.closest("form");
  });
  return onMounted(() => {
    watch([x3], () => {
      if (!x3.value || t6.defaultValue === void 0)
        return;
      function a7() {
        r3.theirOnChange(t6.defaultValue);
      }
      return x3.value.addEventListener("reset", a7), () => {
        var n6;
        (n6 = x3.value) == null || n6.removeEventListener("reset", a7);
      };
    }, { immediate: true });
  }), () => {
    let { name: a7, modelValue: n6, disabled: u6, form: s2, ...O4 } = t6, P3 = { open: e4.value === 0, disabled: u6, value: w4.value };
    return h(Fragment, [...a7 != null && w4.value != null ? e2({ [a7]: w4.value }).map(([I2, Q3]) => h(f2, K({ features: a2.Hidden, key: I2, as: "input", type: "hidden", hidden: true, readOnly: true, form: s2, name: I2, value: Q3 }))) : [], H({ ourProps: {}, theirProps: { ...l4, ...T(O4, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: P3, slots: v4, attrs: l4, name: "Listbox" })]);
  };
} });
var Ke = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t()}` } }, setup(t6, { attrs: v4, slots: l4 }) {
  let L4 = A2("ListboxLabel");
  function e4() {
    var d8;
    (d8 = o2(L4.buttonRef)) == null || d8.focus({ preventScroll: true });
  }
  return () => {
    let d8 = { open: L4.listboxState.value === 0, disabled: L4.disabled.value }, { id: b4, ...m5 } = t6, f5 = { id: b4, ref: L4.labelRef, onClick: e4 };
    return H({ ourProps: f5, theirProps: m5, slot: d8, attrs: v4, slots: l4, name: "ListboxLabel" });
  };
} });
var Ne = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t()}` } }, setup(t6, { attrs: v4, slots: l4, expose: L4 }) {
  let e4 = A2("ListboxButton");
  L4({ el: e4.buttonRef, $el: e4.buttonRef });
  function d8(o6) {
    switch (o6.key) {
      case o.Space:
      case o.Enter:
      case o.ArrowDown:
        o6.preventDefault(), e4.openListbox(), nextTick(() => {
          var i4;
          (i4 = o2(e4.optionsRef)) == null || i4.focus({ preventScroll: true }), e4.value.value || e4.goToOption(a.First);
        });
        break;
      case o.ArrowUp:
        o6.preventDefault(), e4.openListbox(), nextTick(() => {
          var i4;
          (i4 = o2(e4.optionsRef)) == null || i4.focus({ preventScroll: true }), e4.value.value || e4.goToOption(a.Last);
        });
        break;
    }
  }
  function b4(o6) {
    switch (o6.key) {
      case o.Space:
        o6.preventDefault();
        break;
    }
  }
  function m5(o6) {
    e4.disabled.value || (e4.listboxState.value === 0 ? (e4.closeListbox(), nextTick(() => {
      var i4;
      return (i4 = o2(e4.buttonRef)) == null ? void 0 : i4.focus({ preventScroll: true });
    })) : (o6.preventDefault(), e4.openListbox(), me(() => {
      var i4;
      return (i4 = o2(e4.optionsRef)) == null ? void 0 : i4.focus({ preventScroll: true });
    })));
  }
  let f5 = b2(computed(() => ({ as: t6.as, type: v4.type })), e4.buttonRef);
  return () => {
    var y4, h4;
    let o6 = { open: e4.listboxState.value === 0, disabled: e4.disabled.value, value: e4.value.value }, { id: i4, ...T5 } = t6, k3 = { ref: e4.buttonRef, id: i4, type: f5.value, "aria-haspopup": "listbox", "aria-controls": (y4 = o2(e4.optionsRef)) == null ? void 0 : y4.id, "aria-expanded": e4.listboxState.value === 0, "aria-labelledby": e4.labelRef.value ? [(h4 = o2(e4.labelRef)) == null ? void 0 : h4.id, i4].join(" ") : void 0, disabled: e4.disabled.value === true ? true : void 0, onKeydown: d8, onKeyup: b4, onClick: m5 };
    return H({ ourProps: k3, theirProps: T5, slot: o6, attrs: v4, slots: l4, name: "ListboxButton" });
  };
} });
var He = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t()}` } }, setup(t6, { attrs: v4, slots: l4, expose: L4 }) {
  let e4 = A2("ListboxOptions"), d8 = ref(null);
  L4({ el: e4.optionsRef, $el: e4.optionsRef });
  function b4(o6) {
    switch (d8.value && clearTimeout(d8.value), o6.key) {
      case o.Space:
        if (e4.searchQuery.value !== "")
          return o6.preventDefault(), o6.stopPropagation(), e4.search(o6.key);
      case o.Enter:
        if (o6.preventDefault(), o6.stopPropagation(), e4.activeOptionIndex.value !== null) {
          let i4 = e4.options.value[e4.activeOptionIndex.value];
          e4.select(i4.dataRef.value);
        }
        e4.mode.value === 0 && (e4.closeListbox(), nextTick(() => {
          var i4;
          return (i4 = o2(e4.buttonRef)) == null ? void 0 : i4.focus({ preventScroll: true });
        }));
        break;
      case u(e4.orientation.value, { vertical: o.ArrowDown, horizontal: o.ArrowRight }):
        return o6.preventDefault(), o6.stopPropagation(), e4.goToOption(a.Next);
      case u(e4.orientation.value, { vertical: o.ArrowUp, horizontal: o.ArrowLeft }):
        return o6.preventDefault(), o6.stopPropagation(), e4.goToOption(a.Previous);
      case o.Home:
      case o.PageUp:
        return o6.preventDefault(), o6.stopPropagation(), e4.goToOption(a.First);
      case o.End:
      case o.PageDown:
        return o6.preventDefault(), o6.stopPropagation(), e4.goToOption(a.Last);
      case o.Escape:
        o6.preventDefault(), o6.stopPropagation(), e4.closeListbox(), nextTick(() => {
          var i4;
          return (i4 = o2(e4.buttonRef)) == null ? void 0 : i4.focus({ preventScroll: true });
        });
        break;
      case o.Tab:
        o6.preventDefault(), o6.stopPropagation();
        break;
      default:
        o6.key.length === 1 && (e4.search(o6.key), d8.value = setTimeout(() => e4.clearSearch(), 350));
        break;
    }
  }
  let m5 = p(), f5 = computed(() => m5 !== null ? (m5.value & l.Open) === l.Open : e4.listboxState.value === 0);
  return () => {
    var y4, h4, M3, w4;
    let o6 = { open: e4.listboxState.value === 0 }, { id: i4, ...T5 } = t6, k3 = { "aria-activedescendant": e4.activeOptionIndex.value === null || (y4 = e4.options.value[e4.activeOptionIndex.value]) == null ? void 0 : y4.id, "aria-multiselectable": e4.mode.value === 1 ? true : void 0, "aria-labelledby": (w4 = (h4 = o2(e4.labelRef)) == null ? void 0 : h4.id) != null ? w4 : (M3 = o2(e4.buttonRef)) == null ? void 0 : M3.id, "aria-orientation": e4.orientation.value, id: i4, onKeydown: b4, role: "listbox", tabIndex: 0, ref: e4.optionsRef };
    return H({ ourProps: k3, theirProps: T5, slot: o6, attrs: v4, slots: l4, features: N.RenderStrategy | N.Static, visible: f5.value, name: "ListboxOptions" });
  };
} });
var Ue2 = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t()}` } }, setup(t6, { slots: v4, attrs: l4, expose: L4 }) {
  let e4 = A2("ListboxOption"), d8 = ref(null);
  L4({ el: d8, $el: d8 });
  let b4 = computed(() => e4.activeOptionIndex.value !== null ? e4.options.value[e4.activeOptionIndex.value].id === t6.id : false), m5 = computed(() => u(e4.mode.value, { [0]: () => e4.compare(toRaw(e4.value.value), toRaw(t6.value)), [1]: () => toRaw(e4.value.value).some((r3) => e4.compare(toRaw(r3), toRaw(t6.value))) })), f5 = computed(() => u(e4.mode.value, { [1]: () => {
    var x3;
    let r3 = toRaw(e4.value.value);
    return ((x3 = e4.options.value.find((a7) => r3.some((n6) => e4.compare(toRaw(n6), toRaw(a7.dataRef.value))))) == null ? void 0 : x3.id) === t6.id;
  }, [0]: () => m5.value })), o6 = p7(d8), i4 = computed(() => ({ disabled: t6.disabled, value: t6.value, get textValue() {
    return o6();
  }, domRef: d8 }));
  onMounted(() => e4.registerOption(t6.id, i4)), onUnmounted(() => e4.unregisterOption(t6.id)), onMounted(() => {
    watch([e4.listboxState, m5], () => {
      e4.listboxState.value === 0 && m5.value && u(e4.mode.value, { [1]: () => {
        f5.value && e4.goToOption(a.Specific, t6.id);
      }, [0]: () => {
        e4.goToOption(a.Specific, t6.id);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e4.listboxState.value === 0 && b4.value && e4.activationTrigger.value !== 0 && nextTick(() => {
      var r3, x3;
      return (x3 = (r3 = o2(d8)) == null ? void 0 : r3.scrollIntoView) == null ? void 0 : x3.call(r3, { block: "nearest" });
    });
  });
  function T5(r3) {
    if (t6.disabled)
      return r3.preventDefault();
    e4.select(t6.value), e4.mode.value === 0 && (e4.closeListbox(), nextTick(() => {
      var x3;
      return (x3 = o2(e4.buttonRef)) == null ? void 0 : x3.focus({ preventScroll: true });
    }));
  }
  function k3() {
    if (t6.disabled)
      return e4.goToOption(a.Nothing);
    e4.goToOption(a.Specific, t6.id);
  }
  let y4 = u3();
  function h4(r3) {
    y4.update(r3);
  }
  function M3(r3) {
    y4.wasMoved(r3) && (t6.disabled || b4.value || e4.goToOption(a.Specific, t6.id, 0));
  }
  function w4(r3) {
    y4.wasMoved(r3) && (t6.disabled || b4.value && e4.goToOption(a.Nothing));
  }
  return () => {
    let { disabled: r3 } = t6, x3 = { active: b4.value, selected: m5.value, disabled: r3 }, { id: a7, value: n6, disabled: u6, ...s2 } = t6, O4 = { id: a7, ref: d8, role: "option", tabIndex: r3 === true ? void 0 : -1, "aria-disabled": r3 === true ? true : void 0, "aria-selected": m5.value, disabled: void 0, onClick: T5, onFocus: k3, onPointerenter: h4, onMouseenter: h4, onPointermove: M3, onMousemove: M3, onPointerleave: w4, onMouseleave: w4 };
    return H({ ourProps: O4, theirProps: s2, slot: x3, attrs: l4, slots: v4, name: "ListboxOption" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/menu/menu.js
var Y3 = ((l4) => (l4[l4.Open = 0] = "Open", l4[l4.Closed = 1] = "Closed", l4))(Y3 || {});
var Z = ((l4) => (l4[l4.Pointer = 0] = "Pointer", l4[l4.Other = 1] = "Other", l4))(Z || {});
function ee(r3) {
  requestAnimationFrame(() => requestAnimationFrame(r3));
}
var A3 = Symbol("MenuContext");
function O3(r3) {
  let b4 = inject(A3, null);
  if (b4 === null) {
    let l4 = new Error(`<${r3} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l4, O3), l4;
  }
  return b4;
}
var Me = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(r3, { slots: b4, attrs: l4 }) {
  let I2 = ref(1), e4 = ref(null), f5 = ref(null), s2 = ref([]), g4 = ref(""), d8 = ref(null), o6 = ref(1);
  function t6(a7 = (i4) => i4) {
    let i4 = d8.value !== null ? s2.value[d8.value] : null, u6 = O(a7(s2.value.slice()), (v4) => o2(v4.dataRef.domRef)), n6 = i4 ? u6.indexOf(i4) : null;
    return n6 === -1 && (n6 = null), { items: u6, activeItemIndex: n6 };
  }
  let p8 = { menuState: I2, buttonRef: e4, itemsRef: f5, items: s2, searchQuery: g4, activeItemIndex: d8, activationTrigger: o6, closeMenu: () => {
    I2.value = 1, d8.value = null;
  }, openMenu: () => I2.value = 0, goToItem(a7, i4, u6) {
    let n6 = t6(), v4 = x(a7 === a.Specific ? { focus: a.Specific, id: i4 } : { focus: a7 }, { resolveItems: () => n6.items, resolveActiveIndex: () => n6.activeItemIndex, resolveId: (M3) => M3.id, resolveDisabled: (M3) => M3.dataRef.disabled });
    g4.value = "", d8.value = v4, o6.value = u6 != null ? u6 : 1, s2.value = n6.items;
  }, search(a7) {
    let u6 = g4.value !== "" ? 0 : 1;
    g4.value += a7.toLowerCase();
    let v4 = (d8.value !== null ? s2.value.slice(d8.value + u6).concat(s2.value.slice(0, d8.value + u6)) : s2.value).find((x3) => x3.dataRef.textValue.startsWith(g4.value) && !x3.dataRef.disabled), M3 = v4 ? s2.value.indexOf(v4) : -1;
    M3 === -1 || M3 === d8.value || (d8.value = M3, o6.value = 1);
  }, clearSearch() {
    g4.value = "";
  }, registerItem(a7, i4) {
    let u6 = t6((n6) => [...n6, { id: a7, dataRef: i4 }]);
    s2.value = u6.items, d8.value = u6.activeItemIndex, o6.value = 1;
  }, unregisterItem(a7) {
    let i4 = t6((u6) => {
      let n6 = u6.findIndex((v4) => v4.id === a7);
      return n6 !== -1 && u6.splice(n6, 1), u6;
    });
    s2.value = i4.items, d8.value = i4.activeItemIndex, o6.value = 1;
  } };
  return y3([e4, f5], (a7, i4) => {
    var u6;
    p8.closeMenu(), w(i4, h2.Loose) || (a7.preventDefault(), (u6 = o2(e4)) == null || u6.focus());
  }, computed(() => I2.value === 0)), provide(A3, p8), c(computed(() => u(I2.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let a7 = { open: I2.value === 0, close: p8.closeMenu };
    return H({ ourProps: {}, theirProps: r3, slot: a7, slots: b4, attrs: l4, name: "Menu" });
  };
} });
var Re = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${t()}` } }, setup(r3, { attrs: b4, slots: l4, expose: I2 }) {
  let e4 = O3("MenuButton");
  I2({ el: e4.buttonRef, $el: e4.buttonRef });
  function f5(o6) {
    switch (o6.key) {
      case o.Space:
      case o.Enter:
      case o.ArrowDown:
        o6.preventDefault(), o6.stopPropagation(), e4.openMenu(), nextTick(() => {
          var t6;
          (t6 = o2(e4.itemsRef)) == null || t6.focus({ preventScroll: true }), e4.goToItem(a.First);
        });
        break;
      case o.ArrowUp:
        o6.preventDefault(), o6.stopPropagation(), e4.openMenu(), nextTick(() => {
          var t6;
          (t6 = o2(e4.itemsRef)) == null || t6.focus({ preventScroll: true }), e4.goToItem(a.Last);
        });
        break;
    }
  }
  function s2(o6) {
    switch (o6.key) {
      case o.Space:
        o6.preventDefault();
        break;
    }
  }
  function g4(o6) {
    r3.disabled || (e4.menuState.value === 0 ? (e4.closeMenu(), nextTick(() => {
      var t6;
      return (t6 = o2(e4.buttonRef)) == null ? void 0 : t6.focus({ preventScroll: true });
    })) : (o6.preventDefault(), e4.openMenu(), ee(() => {
      var t6;
      return (t6 = o2(e4.itemsRef)) == null ? void 0 : t6.focus({ preventScroll: true });
    })));
  }
  let d8 = b2(computed(() => ({ as: r3.as, type: b4.type })), e4.buttonRef);
  return () => {
    var i4;
    let o6 = { open: e4.menuState.value === 0 }, { id: t6, ...p8 } = r3, a7 = { ref: e4.buttonRef, id: t6, type: d8.value, "aria-haspopup": "menu", "aria-controls": (i4 = o2(e4.itemsRef)) == null ? void 0 : i4.id, "aria-expanded": e4.menuState.value === 0, onKeydown: f5, onKeyup: s2, onClick: g4 };
    return H({ ourProps: a7, theirProps: p8, slot: o6, attrs: b4, slots: l4, name: "MenuButton" });
  };
} });
var he = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-menu-items-${t()}` } }, setup(r3, { attrs: b4, slots: l4, expose: I2 }) {
  let e4 = O3("MenuItems"), f5 = ref(null);
  I2({ el: e4.itemsRef, $el: e4.itemsRef }), p2({ container: computed(() => o2(e4.itemsRef)), enabled: computed(() => e4.menuState.value === 0), accept(t6) {
    return t6.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t6) {
    t6.setAttribute("role", "none");
  } });
  function s2(t6) {
    var p8;
    switch (f5.value && clearTimeout(f5.value), t6.key) {
      case o.Space:
        if (e4.searchQuery.value !== "")
          return t6.preventDefault(), t6.stopPropagation(), e4.search(t6.key);
      case o.Enter:
        if (t6.preventDefault(), t6.stopPropagation(), e4.activeItemIndex.value !== null) {
          let i4 = e4.items.value[e4.activeItemIndex.value];
          (p8 = o2(i4.dataRef.domRef)) == null || p8.click();
        }
        e4.closeMenu(), _(o2(e4.buttonRef));
        break;
      case o.ArrowDown:
        return t6.preventDefault(), t6.stopPropagation(), e4.goToItem(a.Next);
      case o.ArrowUp:
        return t6.preventDefault(), t6.stopPropagation(), e4.goToItem(a.Previous);
      case o.Home:
      case o.PageUp:
        return t6.preventDefault(), t6.stopPropagation(), e4.goToItem(a.First);
      case o.End:
      case o.PageDown:
        return t6.preventDefault(), t6.stopPropagation(), e4.goToItem(a.Last);
      case o.Escape:
        t6.preventDefault(), t6.stopPropagation(), e4.closeMenu(), nextTick(() => {
          var a7;
          return (a7 = o2(e4.buttonRef)) == null ? void 0 : a7.focus({ preventScroll: true });
        });
        break;
      case o.Tab:
        t6.preventDefault(), t6.stopPropagation(), e4.closeMenu(), nextTick(() => v2(o2(e4.buttonRef), t6.shiftKey ? N2.Previous : N2.Next));
        break;
      default:
        t6.key.length === 1 && (e4.search(t6.key), f5.value = setTimeout(() => e4.clearSearch(), 350));
        break;
    }
  }
  function g4(t6) {
    switch (t6.key) {
      case o.Space:
        t6.preventDefault();
        break;
    }
  }
  let d8 = p(), o6 = computed(() => d8 !== null ? (d8.value & l.Open) === l.Open : e4.menuState.value === 0);
  return () => {
    var u6, n6;
    let t6 = { open: e4.menuState.value === 0 }, { id: p8, ...a7 } = r3, i4 = { "aria-activedescendant": e4.activeItemIndex.value === null || (u6 = e4.items.value[e4.activeItemIndex.value]) == null ? void 0 : u6.id, "aria-labelledby": (n6 = o2(e4.buttonRef)) == null ? void 0 : n6.id, id: p8, onKeydown: s2, onKeyup: g4, role: "menu", tabIndex: 0, ref: e4.itemsRef };
    return H({ ourProps: i4, theirProps: a7, slot: t6, attrs: b4, slots: l4, features: N.RenderStrategy | N.Static, visible: o6.value, name: "MenuItems" });
  };
} });
var ye = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-menu-item-${t()}` } }, setup(r3, { slots: b4, attrs: l4, expose: I2 }) {
  let e4 = O3("MenuItem"), f5 = ref(null);
  I2({ el: f5, $el: f5 });
  let s2 = computed(() => e4.activeItemIndex.value !== null ? e4.items.value[e4.activeItemIndex.value].id === r3.id : false), g4 = p7(f5), d8 = computed(() => ({ disabled: r3.disabled, get textValue() {
    return g4();
  }, domRef: f5 }));
  onMounted(() => e4.registerItem(r3.id, d8)), onUnmounted(() => e4.unregisterItem(r3.id)), watchEffect(() => {
    e4.menuState.value === 0 && s2.value && e4.activationTrigger.value !== 0 && nextTick(() => {
      var n6, v4;
      return (v4 = (n6 = o2(f5)) == null ? void 0 : n6.scrollIntoView) == null ? void 0 : v4.call(n6, { block: "nearest" });
    });
  });
  function o6(n6) {
    if (r3.disabled)
      return n6.preventDefault();
    e4.closeMenu(), _(o2(e4.buttonRef));
  }
  function t6() {
    if (r3.disabled)
      return e4.goToItem(a.Nothing);
    e4.goToItem(a.Specific, r3.id);
  }
  let p8 = u3();
  function a7(n6) {
    p8.update(n6);
  }
  function i4(n6) {
    p8.wasMoved(n6) && (r3.disabled || s2.value || e4.goToItem(a.Specific, r3.id, 0));
  }
  function u6(n6) {
    p8.wasMoved(n6) && (r3.disabled || s2.value && e4.goToItem(a.Nothing));
  }
  return () => {
    let { disabled: n6 } = r3, v4 = { active: s2.value, disabled: n6, close: e4.closeMenu }, { id: M3, ...x3 } = r3;
    return H({ ourProps: { id: M3, ref: f5, role: "menuitem", tabIndex: n6 === true ? void 0 : -1, "aria-disabled": n6 === true ? true : void 0, disabled: void 0, onClick: o6, onFocus: t6, onPointerenter: a7, onMouseenter: a7, onPointermove: i4, onMousemove: i4, onPointerleave: u6, onMouseleave: u6 }, theirProps: { ...l4, ...x3 }, slot: v4, attrs: l4, slots: b4, name: "MenuItem" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/popover/popover.js
var Se2 = ((p8) => (p8[p8.Open = 0] = "Open", p8[p8.Closed = 1] = "Closed", p8))(Se2 || {});
var re = Symbol("PopoverContext");
function V3(P3) {
  let b4 = inject(re, null);
  if (b4 === null) {
    let p8 = new Error(`<${P3} /> is missing a parent <${ye2.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(p8, V3), p8;
  }
  return b4;
}
var le = Symbol("PopoverGroupContext");
function ae() {
  return inject(le, null);
}
var ue = Symbol("PopoverPanelContext");
function ge2() {
  return inject(ue, null);
}
var ye2 = defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(P3, { slots: b4, attrs: p8, expose: h4 }) {
  var v4;
  let t6 = ref(null);
  h4({ el: t6, $el: t6 });
  let e4 = ref(1), d8 = ref(null), c5 = ref(null), O4 = ref(null), f5 = ref(null), y4 = computed(() => m(t6)), M3 = computed(() => {
    var Y4, Z2;
    if (!o2(d8) || !o2(f5))
      return false;
    for (let B2 of document.querySelectorAll("body > *"))
      if (Number(B2 == null ? void 0 : B2.contains(o2(d8))) ^ Number(B2 == null ? void 0 : B2.contains(o2(f5))))
        return true;
    let o6 = E(), a7 = o6.indexOf(o2(d8)), g4 = (a7 + o6.length - 1) % o6.length, E6 = (a7 + 1) % o6.length, N6 = o6[g4], $4 = o6[E6];
    return !((Y4 = o2(f5)) != null && Y4.contains(N6)) && !((Z2 = o2(f5)) != null && Z2.contains($4));
  }), l4 = { popoverState: e4, buttonId: ref(null), panelId: ref(null), panel: f5, button: d8, isPortalled: M3, beforePanelSentinel: c5, afterPanelSentinel: O4, togglePopover() {
    e4.value = u(e4.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    e4.value !== 1 && (e4.value = 1);
  }, close(o6) {
    l4.closePopover();
    let a7 = (() => o6 ? o6 instanceof HTMLElement ? o6 : o6.value instanceof HTMLElement ? o2(o6) : o2(l4.button) : o2(l4.button))();
    a7 == null || a7.focus();
  } };
  provide(re, l4), c(computed(() => u(e4.value, { [0]: l.Open, [1]: l.Closed })));
  let m5 = { buttonId: l4.buttonId, panelId: l4.panelId, close() {
    l4.closePopover();
  } }, S5 = ae(), I2 = S5 == null ? void 0 : S5.registerPopover, [s2, u6] = V(), i4 = p6({ mainTreeNodeRef: S5 == null ? void 0 : S5.mainTreeNodeRef, portals: s2, defaultContainers: [d8, f5] });
  function n6() {
    var o6, a7, g4, E6;
    return (E6 = S5 == null ? void 0 : S5.isFocusWithinPopoverGroup()) != null ? E6 : ((o6 = y4.value) == null ? void 0 : o6.activeElement) && (((a7 = o2(d8)) == null ? void 0 : a7.contains(y4.value.activeElement)) || ((g4 = o2(f5)) == null ? void 0 : g4.contains(y4.value.activeElement)));
  }
  return watchEffect(() => I2 == null ? void 0 : I2(m5)), E2((v4 = y4.value) == null ? void 0 : v4.defaultView, "focus", (o6) => {
    var a7, g4;
    o6.target !== window && o6.target instanceof HTMLElement && e4.value === 0 && (n6() || d8 && f5 && (i4.contains(o6.target) || (a7 = o2(l4.beforePanelSentinel)) != null && a7.contains(o6.target) || (g4 = o2(l4.afterPanelSentinel)) != null && g4.contains(o6.target) || l4.closePopover()));
  }, true), y3(i4.resolveContainers, (o6, a7) => {
    var g4;
    l4.closePopover(), w(a7, h2.Loose) || (o6.preventDefault(), (g4 = o2(d8)) == null || g4.focus());
  }, computed(() => e4.value === 0)), () => {
    let o6 = { open: e4.value === 0, close: l4.close };
    return h(Fragment, [h(u6, {}, () => H({ theirProps: { ...P3, ...p8 }, ourProps: { ref: t6 }, slot: o6, slots: b4, attrs: p8, name: "Popover" })), h(i4.MainTreeNode)]);
  };
} });
var je = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-popover-button-${t()}` } }, inheritAttrs: false, setup(P3, { attrs: b4, slots: p8, expose: h4 }) {
  let t6 = V3("PopoverButton"), e4 = computed(() => m(t6.button));
  h4({ el: t6.button, $el: t6.button }), onMounted(() => {
    t6.buttonId.value = P3.id;
  }), onUnmounted(() => {
    t6.buttonId.value = null;
  });
  let d8 = ae(), c5 = d8 == null ? void 0 : d8.closeOthers, O4 = ge2(), f5 = computed(() => O4 === null ? false : O4.value === t6.panelId.value), y4 = ref(null), M3 = `headlessui-focus-sentinel-${t()}`;
  f5.value || watchEffect(() => {
    t6.button.value = y4.value;
  });
  let l4 = b2(computed(() => ({ as: P3.as, type: b4.type })), y4);
  function m5(n6) {
    var v4, o6, a7, g4, E6;
    if (f5.value) {
      if (t6.popoverState.value === 1)
        return;
      switch (n6.key) {
        case o.Space:
        case o.Enter:
          n6.preventDefault(), (o6 = (v4 = n6.target).click) == null || o6.call(v4), t6.closePopover(), (a7 = o2(t6.button)) == null || a7.focus();
          break;
      }
    } else
      switch (n6.key) {
        case o.Space:
        case o.Enter:
          n6.preventDefault(), n6.stopPropagation(), t6.popoverState.value === 1 && (c5 == null || c5(t6.buttonId.value)), t6.togglePopover();
          break;
        case o.Escape:
          if (t6.popoverState.value !== 0)
            return c5 == null ? void 0 : c5(t6.buttonId.value);
          if (!o2(t6.button) || (g4 = e4.value) != null && g4.activeElement && !((E6 = o2(t6.button)) != null && E6.contains(e4.value.activeElement)))
            return;
          n6.preventDefault(), n6.stopPropagation(), t6.closePopover();
          break;
      }
  }
  function S5(n6) {
    f5.value || n6.key === o.Space && n6.preventDefault();
  }
  function I2(n6) {
    var v4, o6;
    P3.disabled || (f5.value ? (t6.closePopover(), (v4 = o2(t6.button)) == null || v4.focus()) : (n6.preventDefault(), n6.stopPropagation(), t6.popoverState.value === 1 && (c5 == null || c5(t6.buttonId.value)), t6.togglePopover(), (o6 = o2(t6.button)) == null || o6.focus()));
  }
  function s2(n6) {
    n6.preventDefault(), n6.stopPropagation();
  }
  let u6 = n5();
  function i4() {
    let n6 = o2(t6.panel);
    if (!n6)
      return;
    function v4() {
      u(u6.value, { [d3.Forwards]: () => P(n6, N2.First), [d3.Backwards]: () => P(n6, N2.Last) }) === T2.Error && P(E().filter((a7) => a7.dataset.headlessuiFocusGuard !== "true"), u(u6.value, { [d3.Forwards]: N2.Next, [d3.Backwards]: N2.Previous }), { relativeTo: o2(t6.button) });
    }
    v4();
  }
  return () => {
    let n6 = t6.popoverState.value === 0, v4 = { open: n6 }, { id: o6, ...a7 } = P3, g4 = f5.value ? { ref: y4, type: l4.value, onKeydown: m5, onClick: I2 } : { ref: y4, id: o6, type: l4.value, "aria-expanded": t6.popoverState.value === 0, "aria-controls": o2(t6.panel) ? t6.panelId.value : void 0, disabled: P3.disabled ? true : void 0, onKeydown: m5, onKeyup: S5, onClick: I2, onMousedown: s2 };
    return h(Fragment, [H({ ourProps: g4, theirProps: { ...b4, ...a7 }, slot: v4, attrs: b4, slots: p8, name: "PopoverButton" }), n6 && !f5.value && t6.isPortalled.value && h(f2, { id: M3, features: a2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: i4 })]);
  };
} });
var Ae = defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(P3, { attrs: b4, slots: p8 }) {
  let h4 = V3("PopoverOverlay"), t6 = `headlessui-popover-overlay-${t()}`, e4 = p(), d8 = computed(() => e4 !== null ? (e4.value & l.Open) === l.Open : h4.popoverState.value === 0);
  function c5() {
    h4.closePopover();
  }
  return () => {
    let O4 = { open: h4.popoverState.value === 0 };
    return H({ ourProps: { id: t6, "aria-hidden": true, onClick: c5 }, theirProps: P3, slot: O4, attrs: b4, slots: p8, features: N.RenderStrategy | N.Static, visible: d8.value, name: "PopoverOverlay" });
  };
} });
var We3 = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-popover-panel-${t()}` } }, inheritAttrs: false, setup(P3, { attrs: b4, slots: p8, expose: h4 }) {
  let { focus: t6 } = P3, e4 = V3("PopoverPanel"), d8 = computed(() => m(e4.panel)), c5 = `headlessui-focus-sentinel-before-${t()}`, O4 = `headlessui-focus-sentinel-after-${t()}`;
  h4({ el: e4.panel, $el: e4.panel }), onMounted(() => {
    e4.panelId.value = P3.id;
  }), onUnmounted(() => {
    e4.panelId.value = null;
  }), provide(ue, e4.panelId), watchEffect(() => {
    var u6, i4;
    if (!t6 || e4.popoverState.value !== 0 || !e4.panel)
      return;
    let s2 = (u6 = d8.value) == null ? void 0 : u6.activeElement;
    (i4 = o2(e4.panel)) != null && i4.contains(s2) || P(o2(e4.panel), N2.First);
  });
  let f5 = p(), y4 = computed(() => f5 !== null ? (f5.value & l.Open) === l.Open : e4.popoverState.value === 0);
  function M3(s2) {
    var u6, i4;
    switch (s2.key) {
      case o.Escape:
        if (e4.popoverState.value !== 0 || !o2(e4.panel) || d8.value && !((u6 = o2(e4.panel)) != null && u6.contains(d8.value.activeElement)))
          return;
        s2.preventDefault(), s2.stopPropagation(), e4.closePopover(), (i4 = o2(e4.button)) == null || i4.focus();
        break;
    }
  }
  function l4(s2) {
    var i4, n6, v4, o6, a7;
    let u6 = s2.relatedTarget;
    u6 && o2(e4.panel) && ((i4 = o2(e4.panel)) != null && i4.contains(u6) || (e4.closePopover(), ((v4 = (n6 = o2(e4.beforePanelSentinel)) == null ? void 0 : n6.contains) != null && v4.call(n6, u6) || (a7 = (o6 = o2(e4.afterPanelSentinel)) == null ? void 0 : o6.contains) != null && a7.call(o6, u6)) && u6.focus({ preventScroll: true })));
  }
  let m5 = n5();
  function S5() {
    let s2 = o2(e4.panel);
    if (!s2)
      return;
    function u6() {
      u(m5.value, { [d3.Forwards]: () => {
        var n6;
        P(s2, N2.First) === T2.Error && ((n6 = o2(e4.afterPanelSentinel)) == null || n6.focus());
      }, [d3.Backwards]: () => {
        var i4;
        (i4 = o2(e4.button)) == null || i4.focus({ preventScroll: true });
      } });
    }
    u6();
  }
  function I2() {
    let s2 = o2(e4.panel);
    if (!s2)
      return;
    function u6() {
      u(m5.value, { [d3.Forwards]: () => {
        let i4 = o2(e4.button), n6 = o2(e4.panel);
        if (!i4)
          return;
        let v4 = E(), o6 = v4.indexOf(i4), a7 = v4.slice(0, o6 + 1), E6 = [...v4.slice(o6 + 1), ...a7];
        for (let N6 of E6.slice())
          if (N6.dataset.headlessuiFocusGuard === "true" || n6 != null && n6.contains(N6)) {
            let $4 = E6.indexOf(N6);
            $4 !== -1 && E6.splice($4, 1);
          }
        P(E6, N2.First, { sorted: false });
      }, [d3.Backwards]: () => {
        var n6;
        P(s2, N2.Previous) === T2.Error && ((n6 = o2(e4.button)) == null || n6.focus());
      } });
    }
    u6();
  }
  return () => {
    let s2 = { open: e4.popoverState.value === 0, close: e4.close }, { id: u6, focus: i4, ...n6 } = P3, v4 = { ref: e4.panel, id: u6, onKeydown: M3, onFocusout: t6 && e4.popoverState.value === 0 ? l4 : void 0, tabIndex: -1 };
    return H({ ourProps: v4, theirProps: { ...b4, ...n6 }, attrs: b4, slot: s2, slots: { ...p8, default: (...o6) => {
      var a7;
      return [h(Fragment, [y4.value && e4.isPortalled.value && h(f2, { id: c5, ref: e4.beforePanelSentinel, features: a2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: S5 }), (a7 = p8.default) == null ? void 0 : a7.call(p8, ...o6), y4.value && e4.isPortalled.value && h(f2, { id: O4, ref: e4.afterPanelSentinel, features: a2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I2 })])];
    } }, features: N.RenderStrategy | N.Static, visible: y4.value, name: "PopoverPanel" });
  };
} });
var Ve2 = defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(P3, { attrs: b4, slots: p8, expose: h4 }) {
  let t6 = ref(null), e4 = shallowRef([]), d8 = computed(() => m(t6)), c5 = N4();
  h4({ el: t6, $el: t6 });
  function O4(l4) {
    let m5 = e4.value.indexOf(l4);
    m5 !== -1 && e4.value.splice(m5, 1);
  }
  function f5(l4) {
    return e4.value.push(l4), () => {
      O4(l4);
    };
  }
  function y4() {
    var S5;
    let l4 = d8.value;
    if (!l4)
      return false;
    let m5 = l4.activeElement;
    return (S5 = o2(t6)) != null && S5.contains(m5) ? true : e4.value.some((I2) => {
      var s2, u6;
      return ((s2 = l4.getElementById(I2.buttonId.value)) == null ? void 0 : s2.contains(m5)) || ((u6 = l4.getElementById(I2.panelId.value)) == null ? void 0 : u6.contains(m5));
    });
  }
  function M3(l4) {
    for (let m5 of e4.value)
      m5.buttonId.value !== l4 && m5.close();
  }
  return provide(le, { registerPopover: f5, unregisterPopover: O4, isFocusWithinPopoverGroup: y4, closeOthers: M3, mainTreeNodeRef: c5.mainTreeNodeRef }), () => h(Fragment, [H({ ourProps: { ref: t6 }, theirProps: { ...P3, ...b4 }, slot: {}, attrs: b4, slots: p8, name: "PopoverGroup" }), h(c5.MainTreeNode)]);
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/label/label.js
var a6 = Symbol("LabelContext");
function d5() {
  let t6 = inject(a6, null);
  if (t6 === null) {
    let n6 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n6, d5), n6;
  }
  return t6;
}
function K2({ slot: t6 = {}, name: n6 = "Label", props: i4 = {} } = {}) {
  let e4 = ref([]);
  function l4(r3) {
    return e4.value.push(r3), () => {
      let o6 = e4.value.indexOf(r3);
      o6 !== -1 && e4.value.splice(o6, 1);
    };
  }
  return provide(a6, { register: l4, slot: t6, name: n6, props: i4 }), computed(() => e4.value.length > 0 ? e4.value.join(" ") : void 0);
}
var T4 = defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-label-${t()}` } }, setup(t6, { slots: n6, attrs: i4 }) {
  let e4 = d5();
  return onMounted(() => onUnmounted(e4.register(t6.id))), () => {
    let { name: l4 = "Label", slot: r3 = {}, props: o6 = {} } = e4, { id: p8, passive: c5, ...u6 } = t6, s2 = { ...Object.entries(o6).reduce((f5, [b4, g4]) => Object.assign(f5, { [b4]: unref(g4) }), {}), id: p8 };
    return c5 && (delete s2.onClick, delete s2.htmlFor, delete u6.onClick), H({ ourProps: s2, theirProps: u6, slot: r3, attrs: i4, slots: n6, name: l4 });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js
function re2(t6, c5) {
  return t6 === c5;
}
var j2 = Symbol("RadioGroupContext");
function H3(t6) {
  let c5 = inject(j2, null);
  if (c5 === null) {
    let u6 = new Error(`<${t6} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u6, H3), u6;
  }
  return c5;
}
var ke = defineComponent({ name: "RadioGroup", emits: { "update:modelValue": (t6) => true }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => re2 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, id: { type: String, default: () => `headlessui-radiogroup-${t()}` } }, inheritAttrs: false, setup(t6, { emit: c5, attrs: u6, slots: E6, expose: d8 }) {
  let s2 = ref(null), i4 = ref([]), R2 = K2({ name: "RadioGroupLabel" }), w4 = M({ name: "RadioGroupDescription" });
  d8({ el: s2, $el: s2 });
  let [f5, S5] = d2(computed(() => t6.modelValue), (e4) => c5("update:modelValue", e4), computed(() => t6.defaultValue)), p8 = { options: i4, value: f5, disabled: computed(() => t6.disabled), firstOption: computed(() => i4.value.find((e4) => !e4.propsRef.disabled)), containsCheckedOption: computed(() => i4.value.some((e4) => p8.compare(toRaw(e4.propsRef.value), toRaw(t6.modelValue)))), compare(e4, a7) {
    if (typeof t6.by == "string") {
      let n6 = t6.by;
      return (e4 == null ? void 0 : e4[n6]) === (a7 == null ? void 0 : a7[n6]);
    }
    return t6.by(e4, a7);
  }, change(e4) {
    var n6;
    if (t6.disabled || p8.compare(toRaw(f5.value), toRaw(e4)))
      return false;
    let a7 = (n6 = i4.value.find((l4) => p8.compare(toRaw(l4.propsRef.value), toRaw(e4)))) == null ? void 0 : n6.propsRef;
    return a7 != null && a7.disabled ? false : (S5(e4), true);
  }, registerOption(e4) {
    i4.value.push(e4), i4.value = O(i4.value, (a7) => a7.element);
  }, unregisterOption(e4) {
    let a7 = i4.value.findIndex((n6) => n6.id === e4);
    a7 !== -1 && i4.value.splice(a7, 1);
  } };
  provide(j2, p8), p2({ container: computed(() => o2(s2)), accept(e4) {
    return e4.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e4.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e4) {
    e4.setAttribute("role", "none");
  } });
  function m5(e4) {
    if (!s2.value || !s2.value.contains(e4.target))
      return;
    let a7 = i4.value.filter((n6) => n6.propsRef.disabled === false).map((n6) => n6.element);
    switch (e4.key) {
      case o.Enter:
        p3(e4.currentTarget);
        break;
      case o.ArrowLeft:
      case o.ArrowUp:
        if (e4.preventDefault(), e4.stopPropagation(), P(a7, N2.Previous | N2.WrapAround) === T2.Success) {
          let l4 = i4.value.find((r3) => {
            var b4;
            return r3.element === ((b4 = m(s2)) == null ? void 0 : b4.activeElement);
          });
          l4 && p8.change(l4.propsRef.value);
        }
        break;
      case o.ArrowRight:
      case o.ArrowDown:
        if (e4.preventDefault(), e4.stopPropagation(), P(a7, N2.Next | N2.WrapAround) === T2.Success) {
          let l4 = i4.value.find((r3) => {
            var b4;
            return r3.element === ((b4 = m(r3.element)) == null ? void 0 : b4.activeElement);
          });
          l4 && p8.change(l4.propsRef.value);
        }
        break;
      case o.Space:
        {
          e4.preventDefault(), e4.stopPropagation();
          let n6 = i4.value.find((l4) => {
            var r3;
            return l4.element === ((r3 = m(l4.element)) == null ? void 0 : r3.activeElement);
          });
          n6 && p8.change(n6.propsRef.value);
        }
        break;
    }
  }
  let v4 = computed(() => {
    var e4;
    return (e4 = o2(s2)) == null ? void 0 : e4.closest("form");
  });
  return onMounted(() => {
    watch([v4], () => {
      if (!v4.value || t6.defaultValue === void 0)
        return;
      function e4() {
        p8.change(t6.defaultValue);
      }
      return v4.value.addEventListener("reset", e4), () => {
        var a7;
        (a7 = v4.value) == null || a7.removeEventListener("reset", e4);
      };
    }, { immediate: true });
  }), () => {
    let { disabled: e4, name: a7, id: n6, form: l4, ...r3 } = t6, b4 = { ref: s2, id: n6, role: "radiogroup", "aria-labelledby": R2.value, "aria-describedby": w4.value, onKeydown: m5 };
    return h(Fragment, [...a7 != null && f5.value != null ? e2({ [a7]: f5.value }).map(([T5, G]) => h(f2, K({ features: a2.Hidden, key: T5, as: "input", type: "hidden", hidden: true, readOnly: true, form: l4, name: T5, value: G }))) : [], H({ ourProps: b4, theirProps: { ...u6, ...T(r3, ["modelValue", "defaultValue", "by"]) }, slot: {}, attrs: u6, slots: E6, name: "RadioGroup" })]);
  };
} });
var ie = ((u6) => (u6[u6.Empty = 1] = "Empty", u6[u6.Active = 2] = "Active", u6))(ie || {});
var Ee = defineComponent({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-radiogroup-option-${t()}` } }, setup(t6, { attrs: c5, slots: u6, expose: E6 }) {
  let d8 = H3("RadioGroupOption"), s2 = K2({ name: "RadioGroupLabel" }), i4 = M({ name: "RadioGroupDescription" }), R2 = ref(null), w4 = computed(() => ({ value: t6.value, disabled: t6.disabled })), f5 = ref(1);
  E6({ el: R2, $el: R2 });
  let S5 = computed(() => o2(R2));
  onMounted(() => d8.registerOption({ id: t6.id, element: S5, propsRef: w4 })), onUnmounted(() => d8.unregisterOption(t6.id));
  let p8 = computed(() => {
    var r3;
    return ((r3 = d8.firstOption.value) == null ? void 0 : r3.id) === t6.id;
  }), m5 = computed(() => d8.disabled.value || t6.disabled), v4 = computed(() => d8.compare(toRaw(d8.value.value), toRaw(t6.value))), e4 = computed(() => m5.value ? -1 : v4.value || !d8.containsCheckedOption.value && p8.value ? 0 : -1);
  function a7() {
    var r3;
    d8.change(t6.value) && (f5.value |= 2, (r3 = o2(R2)) == null || r3.focus());
  }
  function n6() {
    f5.value |= 2;
  }
  function l4() {
    f5.value &= -3;
  }
  return () => {
    let { id: r3, value: b4, disabled: T5, ...G } = t6, N6 = { checked: v4.value, disabled: m5.value, active: Boolean(f5.value & 2) }, K3 = { id: r3, ref: R2, role: "radio", "aria-checked": v4.value ? "true" : "false", "aria-labelledby": s2.value, "aria-describedby": i4.value, "aria-disabled": m5.value ? true : void 0, tabIndex: e4.value, onClick: m5.value ? void 0 : a7, onFocus: m5.value ? void 0 : n6, onBlur: m5.value ? void 0 : l4 };
    return H({ ourProps: K3, theirProps: G, slot: N6, attrs: c5, slots: u6, name: "RadioGroupOption" });
  };
} });
var we = T4;
var Se3 = E5;

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/switch/switch.js
var S4 = Symbol("GroupContext");
var ae2 = defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l4, { slots: p8, attrs: a7 }) {
  let o6 = ref(null), f5 = K2({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var r3;
    return (r3 = o6.value) == null ? void 0 : r3.id;
  }), onClick(r3) {
    o6.value && (r3.currentTarget.tagName === "LABEL" && r3.preventDefault(), o6.value.click(), o6.value.focus({ preventScroll: true }));
  } } }), t6 = M({ name: "SwitchDescription" });
  return provide(S4, { switchRef: o6, labelledby: f5, describedby: t6 }), () => H({ theirProps: l4, ourProps: {}, slot: {}, slots: p8, attrs: a7, name: "SwitchGroup" });
} });
var ue2 = defineComponent({ name: "Switch", emits: { "update:modelValue": (l4) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: () => `headlessui-switch-${t()}` } }, inheritAttrs: false, setup(l4, { emit: p8, attrs: a7, slots: o6, expose: f5 }) {
  let t6 = inject(S4, null), [i4, r3] = d2(computed(() => l4.modelValue), (e4) => p8("update:modelValue", e4), computed(() => l4.defaultChecked));
  function s2() {
    r3(!i4.value);
  }
  let w4 = ref(null), u6 = t6 === null ? w4 : t6.switchRef, g4 = b2(computed(() => ({ as: l4.as, type: a7.type })), u6);
  f5({ el: u6, $el: u6 });
  function k3(e4) {
    e4.preventDefault(), s2();
  }
  function C3(e4) {
    e4.key === o.Space ? (e4.preventDefault(), s2()) : e4.key === o.Enter && p3(e4.currentTarget);
  }
  function E6(e4) {
    e4.preventDefault();
  }
  let c5 = computed(() => {
    var e4, n6;
    return (n6 = (e4 = o2(u6)) == null ? void 0 : e4.closest) == null ? void 0 : n6.call(e4, "form");
  });
  return onMounted(() => {
    watch([c5], () => {
      if (!c5.value || l4.defaultChecked === void 0)
        return;
      function e4() {
        r3(l4.defaultChecked);
      }
      return c5.value.addEventListener("reset", e4), () => {
        var n6;
        (n6 = c5.value) == null || n6.removeEventListener("reset", e4);
      };
    }, { immediate: true });
  }), () => {
    let { id: e4, name: n6, value: L4, form: D, ...R2 } = l4, K3 = { checked: i4.value }, x3 = { id: e4, ref: u6, role: "switch", type: g4.value, tabIndex: 0, "aria-checked": i4.value, "aria-labelledby": t6 == null ? void 0 : t6.labelledby.value, "aria-describedby": t6 == null ? void 0 : t6.describedby.value, onClick: k3, onKeyup: C3, onKeypress: E6 };
    return h(Fragment, [n6 != null && i4.value != null ? h(f2, K({ features: a2.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: i4.value, form: D, name: n6, value: L4 })) : null, H({ ourProps: x3, theirProps: { ...a7, ...T(R2, ["modelValue", "defaultChecked"]) }, slot: K3, attrs: a7, slots: o6, name: "Switch" })]);
  };
} });
var de = T4;
var ce3 = E5;

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/internal/focus-sentinel.js
var d6 = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t6) {
  let n6 = ref(true);
  return () => n6.value ? h(f2, { as: "button", type: "button", features: a2.Focusable, onFocus(o6) {
    o6.preventDefault();
    let e4, a7 = 50;
    function r3() {
      var u6;
      if (a7-- <= 0) {
        e4 && cancelAnimationFrame(e4);
        return;
      }
      if ((u6 = t6.onFocus) != null && u6.call(t6)) {
        n6.value = false, cancelAnimationFrame(e4);
        return;
      }
      e4 = requestAnimationFrame(r3);
    }
    e4 = requestAnimationFrame(r3);
  } }) : null;
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/tabs/tabs.js
var te = ((i4) => (i4[i4.Forwards = 0] = "Forwards", i4[i4.Backwards = 1] = "Backwards", i4))(te || {});
var le2 = ((s2) => (s2[s2.Less = -1] = "Less", s2[s2.Equal = 0] = "Equal", s2[s2.Greater = 1] = "Greater", s2))(le2 || {});
var U3 = Symbol("TabsContext");
function k2(a7) {
  let v4 = inject(U3, null);
  if (v4 === null) {
    let i4 = new Error(`<${a7} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i4, k2), i4;
  }
  return v4;
}
var j3 = Symbol("TabsSSRContext");
var xe = defineComponent({ name: "TabGroup", emits: { change: (a7) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a7, { slots: v4, attrs: i4, emit: s2 }) {
  var P3;
  let l4 = ref((P3 = a7.selectedIndex) != null ? P3 : a7.defaultIndex), n6 = ref([]), o6 = ref([]), h4 = computed(() => a7.selectedIndex !== null), b4 = computed(() => h4.value ? a7.selectedIndex : l4.value);
  function m5(t6) {
    var S5;
    let e4 = O(r3.tabs.value, o2), u6 = O(r3.panels.value, o2), f5 = e4.filter((p8) => {
      var g4;
      return !((g4 = o2(p8)) != null && g4.hasAttribute("disabled"));
    });
    if (t6 < 0 || t6 > e4.length - 1) {
      let p8 = u(l4.value === null ? 0 : Math.sign(t6 - l4.value), { [-1]: () => 1, [0]: () => u(Math.sign(t6), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), g4 = u(p8, { [0]: () => e4.indexOf(f5[0]), [1]: () => e4.indexOf(f5[f5.length - 1]) });
      g4 !== -1 && (l4.value = g4), r3.tabs.value = e4, r3.panels.value = u6;
    } else {
      let p8 = e4.slice(0, t6), G = [...e4.slice(t6), ...p8].find((W2) => f5.includes(W2));
      if (!G)
        return;
      let B2 = (S5 = e4.indexOf(G)) != null ? S5 : r3.selectedIndex.value;
      B2 === -1 && (B2 = r3.selectedIndex.value), l4.value = B2, r3.tabs.value = e4, r3.panels.value = u6;
    }
  }
  let r3 = { selectedIndex: computed(() => {
    var t6, e4;
    return (e4 = (t6 = l4.value) != null ? t6 : a7.defaultIndex) != null ? e4 : null;
  }), orientation: computed(() => a7.vertical ? "vertical" : "horizontal"), activation: computed(() => a7.manual ? "manual" : "auto"), tabs: n6, panels: o6, setSelectedIndex(t6) {
    b4.value !== t6 && s2("change", t6), h4.value || m5(t6);
  }, registerTab(t6) {
    var f5;
    if (n6.value.includes(t6))
      return;
    let e4 = n6.value[l4.value];
    n6.value.push(t6), n6.value = O(n6.value, o2);
    let u6 = (f5 = n6.value.indexOf(e4)) != null ? f5 : l4.value;
    u6 !== -1 && (l4.value = u6);
  }, unregisterTab(t6) {
    let e4 = n6.value.indexOf(t6);
    e4 !== -1 && n6.value.splice(e4, 1);
  }, registerPanel(t6) {
    o6.value.includes(t6) || (o6.value.push(t6), o6.value = O(o6.value, o2));
  }, unregisterPanel(t6) {
    let e4 = o6.value.indexOf(t6);
    e4 !== -1 && o6.value.splice(e4, 1);
  } };
  provide(U3, r3);
  let w4 = ref({ tabs: [], panels: [] }), y4 = ref(false);
  onMounted(() => {
    y4.value = true;
  }), provide(j3, computed(() => y4.value ? null : w4.value));
  let E6 = computed(() => a7.selectedIndex);
  return onMounted(() => {
    watch([E6], () => {
      var t6;
      return m5((t6 = a7.selectedIndex) != null ? t6 : a7.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!h4.value || b4.value == null || r3.tabs.value.length <= 0)
      return;
    let t6 = O(r3.tabs.value, o2);
    t6.some((u6, f5) => o2(r3.tabs.value[f5]) !== o2(u6)) && r3.setSelectedIndex(t6.findIndex((u6) => o2(u6) === o2(r3.tabs.value[b4.value])));
  }), () => {
    let t6 = { selectedIndex: l4.value };
    return h(Fragment, [n6.value.length <= 0 && h(d6, { onFocus: () => {
      for (let e4 of n6.value) {
        let u6 = o2(e4);
        if ((u6 == null ? void 0 : u6.tabIndex) === 0)
          return u6.focus(), true;
      }
      return false;
    } }), H({ theirProps: { ...i4, ...T(a7, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t6, slots: v4, attrs: i4, name: "TabGroup" })]);
  };
} });
var Ie = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a7, { attrs: v4, slots: i4 }) {
  let s2 = k2("TabList");
  return () => {
    let l4 = { selectedIndex: s2.selectedIndex.value }, n6 = { role: "tablist", "aria-orientation": s2.orientation.value };
    return H({ ourProps: n6, theirProps: a7, slot: l4, attrs: v4, slots: i4, name: "TabList" });
  };
} });
var ye3 = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-tabs-tab-${t()}` } }, setup(a7, { attrs: v4, slots: i4, expose: s2 }) {
  let l4 = k2("Tab"), n6 = ref(null);
  s2({ el: n6, $el: n6 }), onMounted(() => l4.registerTab(n6)), onUnmounted(() => l4.unregisterTab(n6));
  let o6 = inject(j3), h4 = computed(() => {
    if (o6.value) {
      let e4 = o6.value.tabs.indexOf(a7.id);
      return e4 === -1 ? o6.value.tabs.push(a7.id) - 1 : e4;
    }
    return -1;
  }), b4 = computed(() => {
    let e4 = l4.tabs.value.indexOf(n6);
    return e4 === -1 ? h4.value : e4;
  }), m5 = computed(() => b4.value === l4.selectedIndex.value);
  function r3(e4) {
    var f5;
    let u6 = e4();
    if (u6 === T2.Success && l4.activation.value === "auto") {
      let S5 = (f5 = m(n6)) == null ? void 0 : f5.activeElement, p8 = l4.tabs.value.findIndex((g4) => o2(g4) === S5);
      p8 !== -1 && l4.setSelectedIndex(p8);
    }
    return u6;
  }
  function w4(e4) {
    let u6 = l4.tabs.value.map((S5) => o2(S5)).filter(Boolean);
    if (e4.key === o.Space || e4.key === o.Enter) {
      e4.preventDefault(), e4.stopPropagation(), l4.setSelectedIndex(b4.value);
      return;
    }
    switch (e4.key) {
      case o.Home:
      case o.PageUp:
        return e4.preventDefault(), e4.stopPropagation(), r3(() => P(u6, N2.First));
      case o.End:
      case o.PageDown:
        return e4.preventDefault(), e4.stopPropagation(), r3(() => P(u6, N2.Last));
    }
    if (r3(() => u(l4.orientation.value, { vertical() {
      return e4.key === o.ArrowUp ? P(u6, N2.Previous | N2.WrapAround) : e4.key === o.ArrowDown ? P(u6, N2.Next | N2.WrapAround) : T2.Error;
    }, horizontal() {
      return e4.key === o.ArrowLeft ? P(u6, N2.Previous | N2.WrapAround) : e4.key === o.ArrowRight ? P(u6, N2.Next | N2.WrapAround) : T2.Error;
    } })) === T2.Success)
      return e4.preventDefault();
  }
  let y4 = ref(false);
  function E6() {
    var e4;
    y4.value || (y4.value = true, !a7.disabled && ((e4 = o2(n6)) == null || e4.focus({ preventScroll: true }), l4.setSelectedIndex(b4.value), t3(() => {
      y4.value = false;
    })));
  }
  function P3(e4) {
    e4.preventDefault();
  }
  let t6 = b2(computed(() => ({ as: a7.as, type: v4.type })), n6);
  return () => {
    var p8;
    let e4 = { selected: m5.value }, { id: u6, ...f5 } = a7, S5 = { ref: n6, onKeydown: w4, onMousedown: P3, onClick: E6, id: u6, role: "tab", type: t6.value, "aria-controls": (p8 = o2(l4.panels.value[b4.value])) == null ? void 0 : p8.id, "aria-selected": m5.value, tabIndex: m5.value ? 0 : -1, disabled: a7.disabled ? true : void 0 };
    return H({ ourProps: S5, theirProps: f5, slot: e4, attrs: v4, slots: i4, name: "Tab" });
  };
} });
var Se4 = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a7, { slots: v4, attrs: i4 }) {
  let s2 = k2("TabPanels");
  return () => {
    let l4 = { selectedIndex: s2.selectedIndex.value };
    return H({ theirProps: a7, ourProps: {}, slot: l4, attrs: i4, slots: v4, name: "TabPanels" });
  };
} });
var ge3 = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-tabs-panel-${t()}` }, tabIndex: { type: Number, default: 0 } }, setup(a7, { attrs: v4, slots: i4, expose: s2 }) {
  let l4 = k2("TabPanel"), n6 = ref(null);
  s2({ el: n6, $el: n6 }), onMounted(() => l4.registerPanel(n6)), onUnmounted(() => l4.unregisterPanel(n6));
  let o6 = inject(j3), h4 = computed(() => {
    if (o6.value) {
      let r3 = o6.value.panels.indexOf(a7.id);
      return r3 === -1 ? o6.value.panels.push(a7.id) - 1 : r3;
    }
    return -1;
  }), b4 = computed(() => {
    let r3 = l4.panels.value.indexOf(n6);
    return r3 === -1 ? h4.value : r3;
  }), m5 = computed(() => b4.value === l4.selectedIndex.value);
  return () => {
    var t6;
    let r3 = { selected: m5.value }, { id: w4, tabIndex: y4, ...E6 } = a7, P3 = { ref: n6, id: w4, role: "tabpanel", "aria-labelledby": (t6 = o2(l4.tabs.value[b4.value])) == null ? void 0 : t6.id, tabIndex: m5.value ? y4 : -1 };
    return !m5.value && a7.unmount && !a7.static ? h(f2, { as: "span", ...P3 }) : H({ ourProps: P3, theirProps: E6, slot: r3, attrs: v4, slots: i4, features: N.Static | N.RenderStrategy, visible: m5.value, name: "TabPanel" });
  };
} });

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/utils/once.js
function l3(r3) {
  let e4 = { called: false };
  return (...t6) => {
    if (!e4.called)
      return e4.called = true, r3(...t6);
  };
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/transitions/utils/transition.js
function m4(e4, ...t6) {
  e4 && t6.length > 0 && e4.classList.add(...t6);
}
function d7(e4, ...t6) {
  e4 && t6.length > 0 && e4.classList.remove(...t6);
}
var g2 = ((i4) => (i4.Finished = "finished", i4.Cancelled = "cancelled", i4))(g2 || {});
function F3(e4, t6) {
  let i4 = o4();
  if (!e4)
    return i4.dispose;
  let { transitionDuration: n6, transitionDelay: a7 } = getComputedStyle(e4), [l4, s2] = [n6, a7].map((o6) => {
    let [u6 = 0] = o6.split(",").filter(Boolean).map((r3) => r3.includes("ms") ? parseFloat(r3) : parseFloat(r3) * 1e3).sort((r3, c5) => c5 - r3);
    return u6;
  });
  return l4 !== 0 ? i4.setTimeout(() => t6("finished"), l4 + s2) : t6("finished"), i4.add(() => t6("cancelled")), i4.dispose;
}
function L2(e4, t6, i4, n6, a7, l4) {
  let s2 = o4(), o6 = l4 !== void 0 ? l3(l4) : () => {
  };
  return d7(e4, ...a7), m4(e4, ...t6, ...i4), s2.nextFrame(() => {
    d7(e4, ...i4), m4(e4, ...n6), s2.add(F3(e4, (u6) => (d7(e4, ...n6, ...t6), m4(e4, ...a7), o6(u6))));
  }), s2.add(() => d7(e4, ...t6, ...i4, ...n6, ...a7)), s2.add(() => o6("cancelled")), s2.dispose;
}

// node_modules/.pnpm/@headlessui+vue@1.7.16_vue@3.3.4/node_modules/@headlessui/vue/dist/components/transitions/transition.js
function g3(e4 = "") {
  return e4.split(" ").filter((t6) => t6.trim().length > 1);
}
var R = Symbol("TransitionContext");
var pe2 = ((a7) => (a7.Visible = "visible", a7.Hidden = "hidden", a7))(pe2 || {});
function me2() {
  return inject(R, null) !== null;
}
function Te() {
  let e4 = inject(R, null);
  if (e4 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e4;
}
function ge4() {
  let e4 = inject(N5, null);
  if (e4 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e4;
}
var N5 = Symbol("NestingContext");
function L3(e4) {
  return "children" in e4 ? L3(e4.children) : e4.value.filter(({ state: t6 }) => t6 === "visible").length > 0;
}
function Q2(e4) {
  let t6 = ref([]), a7 = ref(false);
  onMounted(() => a7.value = true), onUnmounted(() => a7.value = false);
  function s2(n6, r3 = S.Hidden) {
    let l4 = t6.value.findIndex(({ id: f5 }) => f5 === n6);
    l4 !== -1 && (u(r3, { [S.Unmount]() {
      t6.value.splice(l4, 1);
    }, [S.Hidden]() {
      t6.value[l4].state = "hidden";
    } }), !L3(t6) && a7.value && (e4 == null || e4()));
  }
  function h4(n6) {
    let r3 = t6.value.find(({ id: l4 }) => l4 === n6);
    return r3 ? r3.state !== "visible" && (r3.state = "visible") : t6.value.push({ id: n6, state: "visible" }), () => s2(n6, S.Unmount);
  }
  return { children: t6, register: h4, unregister: s2 };
}
var W = N.RenderStrategy;
var he2 = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e4, { emit: t6, attrs: a7, slots: s2, expose: h4 }) {
  let n6 = ref(0);
  function r3() {
    n6.value |= l.Opening, t6("beforeEnter");
  }
  function l4() {
    n6.value &= ~l.Opening, t6("afterEnter");
  }
  function f5() {
    n6.value |= l.Closing, t6("beforeLeave");
  }
  function S5() {
    n6.value &= ~l.Closing, t6("afterLeave");
  }
  if (!me2() && C())
    return () => h(Se5, { ...e4, onBeforeEnter: r3, onAfterEnter: l4, onBeforeLeave: f5, onAfterLeave: S5 }, s2);
  let d8 = ref(null), b4 = computed(() => e4.unmount ? S.Unmount : S.Hidden);
  h4({ el: d8, $el: d8 });
  let { show: v4, appear: A4 } = Te(), { register: D, unregister: H4 } = ge4(), i4 = ref(v4.value ? "visible" : "hidden"), I2 = { value: true }, c5 = t(), y4 = { value: false }, P3 = Q2(() => {
    !y4.value && i4.value !== "hidden" && (i4.value = "hidden", H4(c5), S5());
  });
  onMounted(() => {
    let o6 = D(c5);
    onUnmounted(o6);
  }), watchEffect(() => {
    if (b4.value === S.Hidden && c5) {
      if (v4.value && i4.value !== "visible") {
        i4.value = "visible";
        return;
      }
      u(i4.value, { ["hidden"]: () => H4(c5), ["visible"]: () => D(c5) });
    }
  });
  let j4 = g3(e4.enter), M3 = g3(e4.enterFrom), X2 = g3(e4.enterTo), _3 = g3(e4.entered), Y4 = g3(e4.leave), Z2 = g3(e4.leaveFrom), ee2 = g3(e4.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i4.value === "visible") {
        let o6 = o2(d8);
        if (o6 instanceof Comment && o6.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te2(o6) {
    let E6 = I2.value && !A4.value, p8 = o2(d8);
    !p8 || !(p8 instanceof HTMLElement) || E6 || (y4.value = true, v4.value && r3(), v4.value || f5(), o6(v4.value ? L2(p8, j4, M3, X2, _3, (V4) => {
      y4.value = false, V4 === g2.Finished && l4();
    }) : L2(p8, Y4, Z2, ee2, _3, (V4) => {
      y4.value = false, V4 === g2.Finished && (L3(P3) || (i4.value = "hidden", H4(c5), S5()));
    })));
  }
  return onMounted(() => {
    watch([v4], (o6, E6, p8) => {
      te2(p8), I2.value = false;
    }, { immediate: true });
  }), provide(N5, P3), c(computed(() => u(i4.value, { ["visible"]: l.Open, ["hidden"]: l.Closed }) | n6.value)), () => {
    let { appear: o6, show: E6, enter: p8, enterFrom: V4, enterTo: Ce2, entered: be2, leave: ye4, leaveFrom: Ee2, leaveTo: Ve3, ...U4 } = e4, ne = { ref: d8 }, re3 = { ...U4, ...A4.value && v4.value && c2.isServer ? { class: normalizeClass([a7.class, U4.class, ...j4, ...M3]) } : {} };
    return H({ theirProps: re3, ourProps: ne, slot: {}, slots: s2, attrs: a7, features: W, visible: i4.value === "visible", name: "TransitionChild" });
  };
} });
var ce4 = he2;
var Se5 = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e4, { emit: t6, attrs: a7, slots: s2 }) {
  let h4 = p(), n6 = computed(() => e4.show === null && h4 !== null ? (h4.value & l.Open) === l.Open : e4.show);
  watchEffect(() => {
    if (![true, false].includes(n6.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r3 = ref(n6.value ? "visible" : "hidden"), l4 = Q2(() => {
    r3.value = "hidden";
  }), f5 = ref(true), S5 = { show: n6, appear: computed(() => e4.appear || !f5.value) };
  return onMounted(() => {
    watchEffect(() => {
      f5.value = false, n6.value ? r3.value = "visible" : L3(l4) || (r3.value = "hidden");
    });
  }), provide(N5, l4), provide(R, S5), () => {
    let d8 = T(e4, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b4 = { unmount: e4.unmount };
    return H({ ourProps: { ...b4, as: "template" }, theirProps: {}, slot: {}, slots: { ...s2, default: () => [h(ce4, { onBeforeEnter: () => t6("beforeEnter"), onAfterEnter: () => t6("afterEnter"), onBeforeLeave: () => t6("beforeLeave"), onAfterLeave: () => t6("afterLeave"), ...a7, ...b4, ...d8 }, s2.default)] }, attrs: {}, features: W, visible: r3.value === "visible", name: "Transition" });
  };
} });
export {
  Je as Combobox,
  Ge as ComboboxButton,
  Qe as ComboboxInput,
  We as ComboboxLabel,
  Ye as ComboboxOption,
  Xe as ComboboxOptions,
  Ue as Dialog,
  ze as DialogBackdrop,
  We2 as DialogDescription,
  Ye2 as DialogOverlay,
  Ge2 as DialogPanel,
  Ve as DialogTitle,
  V2 as Disclosure,
  X as DisclosureButton,
  Y2 as DisclosurePanel,
  ce as FocusTrap,
  Be as Listbox,
  Ne as ListboxButton,
  Ke as ListboxLabel,
  Ue2 as ListboxOption,
  He as ListboxOptions,
  Me as Menu,
  Re as MenuButton,
  ye as MenuItem,
  he as MenuItems,
  ye2 as Popover,
  je as PopoverButton,
  Ve2 as PopoverGroup,
  Ae as PopoverOverlay,
  We3 as PopoverPanel,
  U as Portal,
  _2 as PortalGroup,
  ke as RadioGroup,
  Se3 as RadioGroupDescription,
  we as RadioGroupLabel,
  Ee as RadioGroupOption,
  ue2 as Switch,
  ce3 as SwitchDescription,
  ae2 as SwitchGroup,
  de as SwitchLabel,
  ye3 as Tab,
  xe as TabGroup,
  Ie as TabList,
  ge3 as TabPanel,
  Se4 as TabPanels,
  he2 as TransitionChild,
  Se5 as TransitionRoot
};
//# sourceMappingURL=@headlessui_vue.js.map
