import { format as format$1, plugins } from 'pretty-format';
import util from 'util';
import loupeImport from 'loupe';

const {
  AsymmetricMatcher,
  DOMCollection,
  DOMElement,
  Immutable,
  ReactElement,
  ReactTestComponent
} = plugins;
const PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
function stringify(object, maxDepth = 10, { maxLength, ...options } = {}) {
  const MAX_LENGTH = maxLength ?? 1e4;
  let result;
  try {
    result = format$1(object, {
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS,
      ...options
    });
  } catch {
    result = format$1(object, {
      callToJSON: false,
      maxDepth,
      escapeString: false,
      // min: true,
      plugins: PLUGINS,
      ...options
    });
  }
  return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object, Math.floor(maxDepth / 2)) : result;
}

const loupe = typeof loupeImport.default === "function" ? loupeImport.default : loupeImport;
function format(...args) {
  return util.format(...args);
}
function utilInspect(item, options) {
  return util.inspect(item, options);
}
function loupeInspect(obj, options = {}) {
  return loupe(obj, {
    depth: 2,
    truncate: options.truncateThreshold === 0 ? Infinity : options.truncateThreshold ?? 40
  });
}
function objDisplay(obj, options = {}) {
  const truncateThreshold = options.truncateThreshold ?? 40;
  const str = loupeInspect(obj, options);
  const type = Object.prototype.toString.call(obj);
  if (truncateThreshold && str.length >= truncateThreshold) {
    if (type === "[object Function]") {
      const fn = obj;
      return !fn.name || fn.name === "" ? "[Function]" : `[Function: ${fn.name}]`;
    } else if (type === "[object Array]") {
      return `[ Array(${obj.length}) ]`;
    } else if (type === "[object Object]") {
      const keys = Object.keys(obj);
      const kstr = keys.length > 2 ? `${keys.splice(0, 2).join(", ")}, ...` : keys.join(", ");
      return `{ Object (${kstr}) }`;
    } else {
      return str;
    }
  }
  return str;
}

export { format as f, loupeInspect as l, objDisplay as o, stringify as s, utilInspect as u };
