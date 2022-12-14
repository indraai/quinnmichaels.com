var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function (global, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ? factory(global, true) : function (w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
        };
    } else {
        factory(global);
    }

    // Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

    // Support: Firefox 18+
    // Can't be in strict mode, several libs including ASP.NET trace
    // the stack via arguments.caller.callee and Firefox dies if
    // you try to trace through "use strict" call chains. (#13335)
    //
    var arr = [];

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var support = {};



    var
    // Use the correct document accordingly with window argument (sandbox)
    document = window.document,

        version = "2.1.4",

        // Define a local copy of jQuery
        jQuery = function (selector, context) {
            // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init(selector, context);
        },

        // Support: Android<4.1
        // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

        // Matches dashed string for camelizing
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,

        // Used by jQuery.camelCase as callback to replace()
        fcamelCase = function (all, letter) {
            return letter.toUpperCase();
        };

    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,

        constructor: jQuery,

        // Start with an empty selector
        selector: "",

        // The default length of a jQuery object is 0
        length: 0,

        toArray: function () {
            return slice.call(this);
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function (num) {
            return num != null ?

            // Return just the one element from the set
            (num < 0 ? this[num + this.length] : this[num]) :

            // Return all the elements in a clean array
            slice.call(this);
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function (elems) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);

            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            ret.context = this.context;

            // Return the newly-formed element set
            return ret;
        },

        // Execute a callback for every element in the matched set.
        // (You can seed the arguments with an array of args, but this is
        // only used internally.)
        each: function (callback, args) {
            return jQuery.each(this, callback, args);
        },

        map: function (callback) {
            return this.pushStack(jQuery.map(this, function (elem, i) {
                return callback.call(elem, i, elem);
            }));
        },

        slice: function () {
            return this.pushStack(slice.apply(this, arguments));
        },

        first: function () {
            return this.eq(0);
        },

        last: function () {
            return this.eq(-1);
        },

        eq: function (i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },

        end: function () {
            return this.prevObject || this.constructor(null);
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };

    jQuery.extend = jQuery.fn.extend = function () {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && jQuery.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = jQuery.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };

    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

        // Assume jQuery is ready without the ready module
        isReady: true,

        error: function (msg) {
            throw new Error(msg);
        },

        noop: function () {},

        isFunction: function (obj) {
            return jQuery.type(obj) === "function";
        },

        isArray: Array.isArray,

        isWindow: function (obj) {
            return obj != null && obj === obj.window;
        },

        isNumeric: function (obj) {
            // parseFloat NaNs numeric-cast false positives (null|true|false|"")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            // adding 1 corrects loss of precision from parseFloat (#15100)
            return !jQuery.isArray(obj) && (obj - parseFloat(obj) + 1) >= 0;
        },

        isPlainObject: function (obj) {
            // Not plain objects:
            // - Any object or value whose internal [[Class]] property is not "[object Object]"
            // - DOM nodes
            // - window
            if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                return false;
            }

            if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                return false;
            }

            // If the function hasn't returned already, we're confident that
            // |obj| is a plain object, created by {} or constructed with new Object
            return true;
        },

        isEmptyObject: function (obj) {
            var name;
            for (name in obj) {
                return false;
            }
            return true;
        },

        type: function (obj) {
            if (obj == null) {
                return obj + "";
            }
            // Support: Android<4.0, iOS<6 (functionish RegExp)
            return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        },

        // Evaluates a script in a global context
        globalEval: function (code) {
            var script, indirect = eval;

            code = jQuery.trim(code);

            if (code) {
                // If the code includes a valid, prologue position
                // strict mode pragma, execute code by injecting a
                // script tag into the document.
                if (code.indexOf("use strict") === 1) {
                    script = document.createElement("script");
                    script.text = code;
                    document.head.appendChild(script).parentNode.removeChild(script);
                } else {
                    // Otherwise, avoid the DOM node creation, insertion
                    // and removal by using an indirect global eval
                    indirect(code);
                }
            }
        },

        // Convert dashed to camelCase; used by the css and data modules
        // Support: IE9-11+
        // Microsoft forgot to hump their vendor prefix (#9572)
        camelCase: function (string) {
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },

        nodeName: function (elem, name) {
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },

        // args is for internal usage only
        each: function (obj, callback, args) {
            var value, i = 0,
                length = obj.length,
                isArray = isArraylike(obj);

            if (args) {
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.apply(obj[i], args);

                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.apply(obj[i], args);

                        if (value === false) {
                            break;
                        }
                    }
                }

                // A special, fast, case for the most common use of each
            } else {
                if (isArray) {
                    for (; i < length; i++) {
                        value = callback.call(obj[i], i, obj[i]);

                        if (value === false) {
                            break;
                        }
                    }
                } else {
                    for (i in obj) {
                        value = callback.call(obj[i], i, obj[i]);

                        if (value === false) {
                            break;
                        }
                    }
                }
            }

            return obj;
        },

        // Support: Android<4.1
        trim: function (text) {
            return text == null ? "" : (text + "").replace(rtrim, "");
        },

        // results is for internal usage only
        makeArray: function (arr, results) {
            var ret = results || [];

            if (arr != null) {
                if (isArraylike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
                } else {
                    push.call(ret, arr);
                }
            }

            return ret;
        },

        inArray: function (elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },

        merge: function (first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;

            for (; j < len; j++) {
                first[i++] = second[j];
            }

            first.length = i;

            return first;
        },

        grep: function (elems, callback, invert) {
            var callbackInverse, matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

            // Go through the array, only saving the items
            // that pass the validator function
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }

            return matches;
        },

        // arg is for internal usage only
        map: function (elems, callback, arg) {
            var value, i = 0,
                length = elems.length,
                isArray = isArraylike(elems),
                ret = [];

            // Go through the array, translating each of the items to their new values
            if (isArray) {
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }

                // Go through every key on the object,
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }
            }

            // Flatten any nested arrays
            return concat.apply([], ret);
        },

        // A global GUID counter for objects
        guid: 1,

        // Bind a function to a context, optionally partially applying any
        // arguments.
        proxy: function (fn, context) {
            var tmp, args, proxy;

            if (typeof context === "string") {
                tmp = fn[context];
                context = fn;
                fn = tmp;
            }

            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            if (!jQuery.isFunction(fn)) {
                return undefined;
            }

            // Simulated bind
            args = slice.call(arguments, 2);
            proxy = function () {
                return fn.apply(context || this, args.concat(slice.call(arguments)));
            };

            // Set the guid of unique handler to the same of original handler, so it can be removed
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;

            return proxy;
        },

        now: Date.now,

        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });

    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function isArraylike(obj) {

        // Support: iOS 8.2 (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = "length" in obj && obj.length,
            type = jQuery.type(obj);

        if (type === "function" || jQuery.isWindow(obj)) {
            return false;
        }

        if (obj.nodeType === 1 && length) {
            return true;
        }

        return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
    }
    var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
    (function (window) {

        var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate,

        // Local document vars
        setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains,

        // Instance-specific data
        expando = "sizzle" + 1 * new Date(),
            preferredDoc = window.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            sortOrder = function (a, b) {
                if (a === b) {
                    hasDuplicate = true;
                }
                return 0;
            },

            // General-purpose constants
            MAX_NEGATIVE = 1 << 31,

            // Instance methods
            hasOwn = ({}).hasOwnProperty,
            arr = [],
            pop = arr.pop,
            push_native = arr.push,
            push = arr.push,
            slice = arr.slice,
            // Use a stripped-down indexOf as it's faster than native
            // http://jsperf.com/thor-indexof-vs-for/5
            indexOf = function (list, elem) {
                var i = 0,
                    len = list.length;
                for (; i < len; i++) {
                    if (list[i] === elem) {
                        return i;
                    }
                }
                return -1;
            },

            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

            // Regular expressions
            // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
            whitespace = "[\\x20\\t\\r\\n\\f]",
            // http://www.w3.org/TR/css3-syntax/#characters
            characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

            // Loosely modeled on CSS identifier characters
            // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
            // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
            identifier = characterEncoding.replace("w", "w#"),

            // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
            attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
            // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace +
            // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",

            pseudos = ":(" + characterEncoding + ")(?:\\((" +
            // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
            // 1. quoted (capture 3; capture 4 or capture 5)
            "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
            // 2. simple (capture 6)
            "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
            // 3. anything else (capture 2)
            ".*" + ")\\)|)",

            // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
            rwhitespace = new RegExp(whitespace + "+", "g"),
            rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),

            rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),

            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),

            matchExpr = {
                "ID": new RegExp("^#(" + characterEncoding + ")"),
                "CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
                "TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                "ATTR": new RegExp("^" + attributes),
                "PSEUDO": new RegExp("^" + pseudos),
                "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                // For use in libraries implementing .is()
                // We use this for POS matching in `select`
                "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            },

            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,

            rnative = /^[^{]+\{\s*\[native \w/,

            // Easily-parseable/retrievable ID or TAG or CLASS selectors
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

            rsibling = /[+~]/,
            rescape = /'|\\/g,

            // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
            runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
            funescape = function (_, escaped, escapedWhitespace) {
                var high = "0x" + escaped - 0x10000;
                // NaN means non-codepoint
                // Support: Firefox<24
                // Workaround erroneous numeric interpretation of +"0x"
                return high !== high || escapedWhitespace ? escaped : high < 0 ?
                // BMP codepoint
                String.fromCharCode(high + 0x10000) :
                // Supplemental Plane codepoint (surrogate pair)
                String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
            },

            // Used for iframes
            // See setDocument()
            // Removing the function wrapper causes a "Permission Denied"
            // error in IE
            unloadHandler = function () {
                setDocument();
            };

        // Optimize for push.apply( _, NodeList )
        try {
            push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
            // Support: Android<4.0
            // Detect silently failing push.apply
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push = {
                apply: arr.length ?

                // Leverage slice if possible


                function (target, els) {
                    push_native.apply(target, slice.call(els));
                } :

                // Support: IE<9
                // Otherwise append directly


                function (target, els) {
                    var j = target.length,
                        i = 0;
                    // Can't trust NodeList.length
                    while ((target[j++] = els[i++])) {}
                    target.length = j - 1;
                }
            };
        }

        function Sizzle(selector, context, results, seed) {
            var match, elem, m, nodeType,
            // QSA vars
            i, groups, old, nid, newContext, newSelector;

            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                setDocument(context);
            }

            context = context || document;
            results = results || [];
            nodeType = context.nodeType;

            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

                return results;
            }

            if (!seed && documentIsHTML) {

                // Try to shortcut find operations when possible (e.g., not under DocumentFragment)
                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                    // Speed-up: Sizzle("#ID")
                    if ((m = match[1])) {
                        if (nodeType === 9) {
                            elem = context.getElementById(m);
                            // Check parentNode to catch when Blackberry 4.6 returns
                            // nodes that are no longer in the document (jQuery #6963)
                            if (elem && elem.parentNode) {
                                // Handle the case where IE, Opera, and Webkit return items
                                // by name instead of ID
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            // Context is not a document
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        }

                        // Speed-up: Sizzle("TAG")
                    } else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results;

                        // Speed-up: Sizzle(".CLASS")
                    } else if ((m = match[3]) && support.getElementsByClassName) {
                        push.apply(results, context.getElementsByClassName(m));
                        return results;
                    }
                }

                // QSA path
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    nid = old = expando;
                    newContext = context;
                    newSelector = nodeType !== 1 && selector;

                    // qSA works strangely on Element-rooted queries
                    // We can work around this by specifying an extra ID on the root
                    // and working up from there (Thanks to Andrew Dupont for the technique)
                    // IE 8 doesn't work on object elements
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        groups = tokenize(selector);

                        if ((old = context.getAttribute("id"))) {
                            nid = old.replace(rescape, "\\$&");
                        } else {
                            context.setAttribute("id", nid);
                        }
                        nid = "[id='" + nid + "'] ";

                        i = groups.length;
                        while (i--) {
                            groups[i] = nid + toSelector(groups[i]);
                        }
                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                        newSelector = groups.join(",");
                    }

                    if (newSelector) {
                        try {
                            push.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {} finally {
                            if (!old) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }

            // All others
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }

        /**
         * Create key-value caches of limited size
         * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
         *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
         *	deleting the oldest entry
         */

        function createCache() {
            var keys = [];

            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                if (keys.push(key + " ") > Expr.cacheLength) {
                    // Only keep the most recent entries
                    delete cache[keys.shift()];
                }
                return (cache[key + " "] = value);
            }
            return cache;
        }

        /**
         * Mark a function for special use by Sizzle
         * @param {Function} fn The function to mark
         */

        function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }

        /**
         * Support testing using an element
         * @param {Function} fn Passed the created div and expects a boolean result
         */

        function assert(fn) {
            var div = document.createElement("div");

            try {
                return !!fn(div);
            } catch (e) {
                return false;
            } finally {
                // Remove from its parent by default
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
                // release memory in IE
                div = null;
            }
        }

        /**
         * Adds the same handler for all of the specified attrs
         * @param {String} attrs Pipe-separated list of attributes
         * @param {Function} handler The method that will be applied
         */

        function addHandle(attrs, handler) {
            var arr = attrs.split("|"),
                i = attrs.length;

            while (i--) {
                Expr.attrHandle[arr[i]] = handler;
            }
        }

        /**
         * Checks document order of two siblings
         * @param {Element} a
         * @param {Element} b
         * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
         */

        function siblingCheck(a, b) {
            var cur = b && a,
                diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

            // Use IE sourceIndex if available on both nodes
            if (diff) {
                return diff;
            }

            // Check if b follows a
            if (cur) {
                while ((cur = cur.nextSibling)) {
                    if (cur === b) {
                        return -1;
                    }
                }
            }

            return a ? 1 : -1;
        }

        /**
         * Returns a function to use in pseudos for input types
         * @param {String} type
         */

        function createInputPseudo(type) {
            return function (elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }

        /**
         * Returns a function to use in pseudos for buttons
         * @param {String} type
         */

        function createButtonPseudo(type) {
            return function (elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }

        /**
         * Returns a function to use in pseudos for positionals
         * @param {Function} fn
         */

        function createPositionalPseudo(fn) {
            return markFunction(function (argument) {
                argument = +argument;
                return markFunction(function (seed, matches) {
                    var j, matchIndexes = fn([], seed.length, argument),
                        i = matchIndexes.length;

                    // Match elements found at the specified indexes
                    while (i--) {
                        if (seed[(j = matchIndexes[i])]) {
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }

        /**
         * Checks a node for validity as a Sizzle context
         * @param {Element|Object=} context
         * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
         */

        function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }

        // Expose support vars for convenience
        support = Sizzle.support = {};

        /**
         * Detects XML nodes
         * @param {Element|Object} elem An element or a document
         * @returns {Boolean} True iff elem is a non-HTML XML node
         */
        isXML = Sizzle.isXML = function (elem) {
            // documentElement is verified for cases where it doesn't yet exist
            // (such as loading iframes in IE - #4833)
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };

        /**
         * Sets document-related variables once based on the current document
         * @param {Element|Object} [doc] An element or document object to use to set the document
         * @returns {Object} Returns the current document
         */
        setDocument = Sizzle.setDocument = function (node) {
            var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;

            // If no document and documentElement is available, return
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                return document;
            }

            // Set our document
            document = doc;
            docElem = doc.documentElement;
            parent = doc.defaultView;

            // Support: IE>8
            // If iframe document is assigned to "document" variable and if iframe has been reloaded,
            // IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
            // IE6-8 do not support the defaultView property so parent will be undefined
            if (parent && parent !== parent.top) {
                // IE11 does not have attachEvent, so all must suffer
                if (parent.addEventListener) {
                    parent.addEventListener("unload", unloadHandler, false);
                } else if (parent.attachEvent) {
                    parent.attachEvent("onunload", unloadHandler);
                }
            }

/* Support tests
	---------------------------------------------------------------------- */
            documentIsHTML = !isXML(doc);

/* Attributes
	---------------------------------------------------------------------- */

            // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties
            // (excepting IE8 booleans)
            support.attributes = assert(function (div) {
                div.className = "i";
                return !div.getAttribute("className");
            });

/* getElement(s)By*
	---------------------------------------------------------------------- */

            // Check if getElementsByTagName("*") returns only elements
            support.getElementsByTagName = assert(function (div) {
                div.appendChild(doc.createComment(""));
                return !div.getElementsByTagName("*").length;
            });

            // Support: IE<9
            support.getElementsByClassName = rnative.test(doc.getElementsByClassName);

            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programatically-set names,
            // so use a roundabout getElementsByName test
            support.getById = assert(function (div) {
                docElem.appendChild(div).id = expando;
                return !doc.getElementsByName || !doc.getElementsByName(expando).length;
            });

            // ID find and filter
            if (support.getById) {
                Expr.find["ID"] = function (id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var m = context.getElementById(id);
                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        return m && m.parentNode ? [m] : [];
                    }
                };
                Expr.filter["ID"] = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    return function (elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else {
                // Support: IE6/7
                // getElementById is not reliable as a find shortcut
                delete Expr.find["ID"];

                Expr.filter["ID"] = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    return function (elem) {
                        var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node && node.value === attrId;
                    };
                };
            }

            // Tag
            Expr.find["TAG"] = support.getElementsByTagName ?
            function (tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                    return context.getElementsByTagName(tag);

                    // DocumentFragment nodes don't have gEBTN
                } else if (support.qsa) {
                    return context.querySelectorAll(tag);
                }
            } :

            function (tag, context) {
                var elem, tmp = [],
                    i = 0,
                    // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                    results = context.getElementsByTagName(tag);

                // Filter out possible comments
                if (tag === "*") {
                    while ((elem = results[i++])) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem);
                        }
                    }

                    return tmp;
                }
                return results;
            };

            // Class
            Expr.find["CLASS"] = support.getElementsByClassName &&
            function (className, context) {
                if (documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            };

/* QSA/matchesSelector
	---------------------------------------------------------------------- */

            // QSA and matchesSelector support
            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            rbuggyMatches = [];

            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See http://bugs.jquery.com/ticket/13378
            rbuggyQSA = [];

            if ((support.qsa = rnative.test(doc.querySelectorAll))) {
                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                assert(function (div) {
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // http://bugs.jquery.com/ticket/12359
                    docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";

                    // Support: IE8, Opera 11-12.16
                    // Nothing should be selected when empty strings follow ^= or $= or *=
                    // The test attribute must be unknown in Opera but "safe" for WinRT
                    // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                    if (div.querySelectorAll("[msallowcapture^='']").length) {
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }

                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    if (!div.querySelectorAll("[selected]").length) {
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }

                    // Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
                    if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
                        rbuggyQSA.push("~=");
                    }

                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    if (!div.querySelectorAll(":checked").length) {
                        rbuggyQSA.push(":checked");
                    }

                    // Support: Safari 8+, iOS 8+
                    // https://bugs.webkit.org/show_bug.cgi?id=136851
                    // In-page `selector#id sibing-combinator selector` fails
                    if (!div.querySelectorAll("a#" + expando + "+*").length) {
                        rbuggyQSA.push(".#.+[+~]");
                    }
                });

                assert(function (div) {
                    // Support: Windows 8 Native Apps
                    // The type and name attributes are restricted during .innerHTML assignment
                    var input = doc.createElement("input");
                    input.setAttribute("type", "hidden");
                    div.appendChild(input).setAttribute("name", "D");

                    // Support: IE8
                    // Enforce case-sensitivity of name attribute
                    if (div.querySelectorAll("[name=d]").length) {
                        rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    }

                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    if (!div.querySelectorAll(":enabled").length) {
                        rbuggyQSA.push(":enabled", ":disabled");
                    }

                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    div.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }

            if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {

                assert(function (div) {
                    // Check to see if it's possible to do matchesSelector
                    // on a disconnected node (IE 9)
                    support.disconnectedMatch = matches.call(div, "div");

                    // This should fail with an exception
                    // Gecko does not error, returns false instead
                    matches.call(div, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos);
                });
            }

            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

/* Contains
	---------------------------------------------------------------------- */
            hasCompare = rnative.test(docElem.compareDocumentPosition);

            // Element contains another
            // Purposefully does not implement inclusive descendent
            // As in, an element does not contain itself
            contains = hasCompare || rnative.test(docElem.contains) ?
            function (a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a,
                    bup = b && b.parentNode;
                return a === bup || !! (bup && bup.nodeType === 1 && (
                adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function (a, b) {
                if (b) {
                    while ((b = b.parentNode)) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };

/* Sorting
	---------------------------------------------------------------------- */

            // Document order sorting
            sortOrder = hasCompare ?
            function (a, b) {

                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }

                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                    return compare;
                }

                // Calculate position if both inputs belong to the same document
                compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

                // Otherwise we know they are disconnected
                1;

                // Disconnected nodes
                if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

                    // Choose the first element that is related to our preferred document
                    if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                        return -1;
                    }
                    if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                        return 1;
                    }

                    // Maintain original order
                    return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
                }

                return compare & 4 ? -1 : 1;
            } : function (a, b) {
                // Exit early if the nodes are identical
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }

                var cur, i = 0,
                    aup = a.parentNode,
                    bup = b.parentNode,
                    ap = [a],
                    bp = [b];

                // Parentless nodes are either documents or disconnected
                if (!aup || !bup) {
                    return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;

                    // If the nodes are siblings, we can do a quick check
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }

                // Otherwise we need full lists of their ancestors for comparison
                cur = a;
                while ((cur = cur.parentNode)) {
                    ap.unshift(cur);
                }
                cur = b;
                while ((cur = cur.parentNode)) {
                    bp.unshift(cur);
                }

                // Walk down the tree looking for a discrepancy
                while (ap[i] === bp[i]) {
                    i++;
                }

                return i ?
                // Do a sibling check if the nodes have a common ancestor
                siblingCheck(ap[i], bp[i]) :

                // Otherwise nodes in our document sort first
                ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
            };

            return doc;
        };

        Sizzle.matches = function (expr, elements) {
            return Sizzle(expr, null, null, elements);
        };

        Sizzle.matchesSelector = function (elem, expr) {
            // Set document vars if needed
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }

            // Make sure that attribute selectors are quoted
            expr = expr.replace(rattributeQuotes, "='$1']");

            if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

                try {
                    var ret = matches.call(elem, expr);

                    // IE 9's matchesSelector returns false on disconnected nodes
                    if (ret || support.disconnectedMatch ||
                    // As well, disconnected nodes are said to be in a document
                    // fragment in IE 9
                    elem.document && elem.document.nodeType !== 11) {
                        return ret;
                    }
                } catch (e) {}
            }

            return Sizzle(expr, document, null, [elem]).length > 0;
        };

        Sizzle.contains = function (context, elem) {
            // Set document vars if needed
            if ((context.ownerDocument || context) !== document) {
                setDocument(context);
            }
            return contains(context, elem);
        };

        Sizzle.attr = function (elem, name) {
            // Set document vars if needed
            if ((elem.ownerDocument || elem) !== document) {
                setDocument(elem);
            }

            var fn = Expr.attrHandle[name.toLowerCase()],
                // Don't get fooled by Object.prototype properties (jQuery #13807)
                val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

            return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };

        Sizzle.error = function (msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };

        /**
         * Document sorting and removing duplicates
         * @param {ArrayLike} results
         */
        Sizzle.uniqueSort = function (results) {
            var elem, duplicates = [],
                j = 0,
                i = 0;

            // Unless we *know* we can detect duplicates, assume their presence
            hasDuplicate = !support.detectDuplicates;
            sortInput = !support.sortStable && results.slice(0);
            results.sort(sortOrder);

            if (hasDuplicate) {
                while ((elem = results[i++])) {
                    if (elem === results[i]) {
                        j = duplicates.push(i);
                    }
                }
                while (j--) {
                    results.splice(duplicates[j], 1);
                }
            }

            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;

            return results;
        };

        /**
         * Utility function for retrieving the text value of an array of DOM nodes
         * @param {Array|Element} elem
         */
        getText = Sizzle.getText = function (elem) {
            var node, ret = "",
                i = 0,
                nodeType = elem.nodeType;

            if (!nodeType) {
                // If no nodeType, this is expected to be an array
                while ((node = elem[i++])) {
                    // Do not traverse comment nodes
                    ret += getText(node);
                }
            } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                // Use textContent for elements
                // innerText usage removed for consistency of new lines (jQuery #11153)
                if (typeof elem.textContent === "string") {
                    return elem.textContent;
                } else {
                    // Traverse its children
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        ret += getText(elem);
                    }
                }
            } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
            }
            // Do not include comment or processing instruction nodes
            return ret;
        };

        Expr = Sizzle.selectors = {

            // Can be adjusted by the user
            cacheLength: 50,

            createPseudo: markFunction,

            match: matchExpr,

            attrHandle: {},

            find: {},

            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },

            preFilter: {
                "ATTR": function (match) {
                    match[1] = match[1].replace(runescape, funescape);

                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

                    if (match[2] === "~=") {
                        match[3] = " " + match[3] + " ";
                    }

                    return match.slice(0, 4);
                },

                "CHILD": function (match) {
/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
                    match[1] = match[1].toLowerCase();

                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) {
                            Sizzle.error(match[0]);
                        }

                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +((match[7] + match[8]) || match[3] === "odd");

                        // other types prohibit arguments
                    } else if (match[3]) {
                        Sizzle.error(match[0]);
                    }

                    return match;
                },

                "PSEUDO": function (match) {
                    var excess, unquoted = !match[6] && match[2];

                    if (matchExpr["CHILD"].test(match[0])) {
                        return null;
                    }

                    // Accept quoted arguments as-is
                    if (match[3]) {
                        match[2] = match[4] || match[5] || "";

                        // Strip excess characters from unquoted arguments
                    } else if (unquoted && rpseudo.test(unquoted) &&
                    // Get excess from tokenize (recursively)
                    (excess = tokenize(unquoted, true)) &&
                    // advance to the next closing parenthesis
                    (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }

                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },

            filter: {

                "TAG": function (nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ?
                    function () {
                        return true;
                    } : function (elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },

                "CLASS": function (className) {
                    var pattern = classCache[className + " "];

                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    });
                },

                "ATTR": function (name, operator, check) {
                    return function (elem) {
                        var result = Sizzle.attr(elem, name);

                        if (result == null) {
                            return operator === "!=";
                        }
                        if (!operator) {
                            return true;
                        }

                        result += "";

                        return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    };
                },

                "CHILD": function (type, what, argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth",
                        forward = type.slice(-4) !== "last",
                        ofType = what === "of-type";

                    return first === 1 && last === 0 ?

                    // Shortcut for :nth-*(n)


                    function (elem) {
                        return !!elem.parentNode;
                    } :

                    function (elem, context, xml) {
                        var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                            parent = elem.parentNode,
                            name = ofType && elem.nodeName.toLowerCase(),
                            useCache = !xml && !ofType;

                        if (parent) {

                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while ((node = node[dir])) {
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            return false;
                                        }
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }

                            start = [forward ? parent.firstChild : parent.lastChild];

                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                outerCache = parent[expando] || (parent[expando] = {});
                                cache = outerCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = cache[0] === dirruns && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];

                                while ((node = ++nodeIndex && node && node[dir] ||

                                // Fallback to seeking `elem` from the start
                                (diff = nodeIndex = 0) || start.pop())) {

                                    // When found, cache indexes on `parent` and break
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        outerCache[type] = [dirruns, nodeIndex, diff];
                                        break;
                                    }
                                }

                                // Use previously-cached element index if available
                            } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                diff = cache[1];

                                // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
                            } else {
                                // Use the same loop as above to seek `elem` from the start
                                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {

                                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                        // Cache the index of each encountered element
                                        if (useCache) {
                                            (node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
                                        }

                                        if (node === elem) {
                                            break;
                                        }
                                    }
                                }
                            }

                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || (diff % first === 0 && diff / first >= 0);
                        }
                    };
                },

                "PSEUDO": function (pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    if (fn[expando]) {
                        return fn(argument);
                    }

                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        args = [pseudo, pseudo, "", argument];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                            var idx, matched = fn(seed, argument),
                                i = matched.length;
                            while (i--) {
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : function (elem) {
                            return fn(elem, 0, args);
                        };
                    }

                    return fn;
                }
            },

            pseudos: {
                // Potentially complex pseudos
                "not": markFunction(function (selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [],
                        results = [],
                        matcher = compile(selector.replace(rtrim, "$1"));

                    return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []),
                            i = seed.length;

                        // Match elements unmatched by `matcher`
                        while (i--) {
                            if ((elem = unmatched[i])) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : function (elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element (issue #299)
                        input[0] = null;
                        return !results.pop();
                    };
                }),

                "has": markFunction(function (selector) {
                    return function (elem) {
                        return Sizzle(selector, elem).length > 0;
                    };
                }),

                "contains": markFunction(function (text) {
                    text = text.replace(runescape, funescape);
                    return function (elem) {
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),

                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                "lang": markFunction(function (lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) {
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function (elem) {
                        var elemLang;
                        do {
                            if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                                elemLang = elemLang.toLowerCase();
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while ((elem = elem.parentNode) && elem.nodeType === 1);
                        return false;
                    };
                }),

                // Miscellaneous
                "target": function (elem) {
                    var hash = window.location && window.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },

                "root": function (elem) {
                    return elem === docElem;
                },

                "focus": function (elem) {
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !! (elem.type || elem.href || ~elem.tabIndex);
                },

                // Boolean properties
                "enabled": function (elem) {
                    return elem.disabled === false;
                },

                "disabled": function (elem) {
                    return elem.disabled === true;
                },

                "checked": function (elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var nodeName = elem.nodeName.toLowerCase();
                    return (nodeName === "input" && !! elem.checked) || (nodeName === "option" && !! elem.selected);
                },

                "selected": function (elem) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if (elem.parentNode) {
                        elem.parentNode.selectedIndex;
                    }

                    return elem.selected === true;
                },

                // Contents
                "empty": function (elem) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        if (elem.nodeType < 6) {
                            return false;
                        }
                    }
                    return true;
                },

                "parent": function (elem) {
                    return !Expr.pseudos["empty"](elem);
                },

                // Element/input types
                "header": function (elem) {
                    return rheader.test(elem.nodeName);
                },

                "input": function (elem) {
                    return rinputs.test(elem.nodeName);
                },

                "button": function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },

                "text": function (elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" &&

                    // Support: IE<8
                    // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                    ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },

                // Position-in-collection
                "first": createPositionalPseudo(function () {
                    return [0];
                }),

                "last": createPositionalPseudo(function (matchIndexes, length) {
                    return [length - 1];
                }),

                "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
                    return [argument < 0 ? argument + length : argument];
                }),

                "even": createPositionalPseudo(function (matchIndexes, length) {
                    var i = 0;
                    for (; i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),

                "odd": createPositionalPseudo(function (matchIndexes, length) {
                    var i = 1;
                    for (; i < length; i += 2) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),

                "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (; --i >= 0;) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                }),

                "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
                    var i = argument < 0 ? argument + length : argument;
                    for (; ++i < length;) {
                        matchIndexes.push(i);
                    }
                    return matchIndexes;
                })
            }
        };

        Expr.pseudos["nth"] = Expr.pseudos["eq"];

        // Add button/input type pseudos
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            Expr.pseudos[i] = createInputPseudo(i);
        }
        for (i in {
            submit: true,
            reset: true
        }) {
            Expr.pseudos[i] = createButtonPseudo(i);
        }

        // Easy API for creating new setFilters


        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();

        tokenize = Sizzle.tokenize = function (selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];

            if (cached) {
                return parseOnly ? 0 : cached.slice(0);
            }

            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;

            while (soFar) {

                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                        // Don't consume trailing commas as valid
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    groups.push((tokens = []));
                }

                matched = false;

                // Combinators
                if ((match = rcombinators.exec(soFar))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }

                // Filters
                for (type in Expr.filter) {
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            type: type,
                            matches: match
                        });
                        soFar = soFar.slice(matched.length);
                    }
                }

                if (!matched) {
                    break;
                }
            }

            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
            // Cache the tokens
            tokenCache(selector, groups).slice(0);
        };

        function toSelector(tokens) {
            var i = 0,
                len = tokens.length,
                selector = "";
            for (; i < len; i++) {
                selector += tokens[i].value;
            }
            return selector;
        }

        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir,
                checkNonElements = base && dir === "parentNode",
                doneName = done++;

            return combinator.first ?
            // Check against closest ancestor/preceding element


            function (elem, context, xml) {
                while ((elem = elem[dir])) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml);
                    }
                }
            } :

            // Check against all ancestor/preceding elements


            function (elem, context, xml) {
                var oldCache, outerCache, newCache = [dirruns, doneName];

                // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
                if (xml) {
                    while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});
                            if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

                                // Assign to newCache so results back-propagate to previous elements
                                return (newCache[2] = oldCache[2]);
                            } else {
                                // Reuse newcache so results back-propagate to previous elements
                                outerCache[dir] = newCache;

                                // A match means we're done; a fail means we have to keep checking
                                if ((newCache[2] = matcher(elem, context, xml))) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }

        function elementMatcher(matchers) {
            return matchers.length > 1 ?
            function (elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } : matchers[0];
        }

        function multipleContexts(selector, contexts, results) {
            var i = 0,
                len = contexts.length;
            for (; i < len; i++) {
                Sizzle(selector, contexts[i], results);
            }
            return results;
        }

        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [],
                i = 0,
                len = unmatched.length,
                mapped = map != null;

            for (; i < len; i++) {
                if ((elem = unmatched[i])) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) {
                            map.push(i);
                        }
                    }
                }
            }

            return newUnmatched;
        }

        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
            }
            if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            return markFunction(function (seed, results, context, xml) {
                var temp, i, elem, preMap = [],
                    postMap = [],
                    preexisting = results.length,

                    // Get initial elements from seed or context
                    elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

                    // Prefilter to get matcher input, preserving a map for seed-results synchronization
                    matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,

                    matcherOut = matcher ?
                    // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                    postFinder || (seed ? preFilter : preexisting || postFilter) ?

                    // ...intermediate processing is necessary
                    [] :

                    // ...otherwise use results directly
                    results : matcherIn;

                // Find primary matches
                if (matcher) {
                    matcher(matcherIn, matcherOut, context, xml);
                }

                // Apply postFilter
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);

                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length;
                    while (i--) {
                        if ((elem = temp[i])) {
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }

                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i])) {
                                    // Restore matcherIn since elem is not yet a final match
                                    temp.push((matcherIn[i] = elem));
                                }
                            }
                            postFinder(null, (matcherOut = []), temp, xml);
                        }

                        // Move matched elements from seed to results to keep them synchronized
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }

                    // Add elements to results, through postFinder if defined
                } else {
                    matcherOut = condense(
                    matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) {
                        postFinder(null, results, matcherOut, xml);
                    } else {
                        push.apply(results, matcherOut);
                    }
                }
            });
        }

        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length,
                leadingRelative = Expr.relative[tokens[0].type],
                implicitRelative = leadingRelative || Expr.relative[" "],
                i = leadingRelative ? 1 : 0,

                // The foundational matcher ensures that elements are reachable from top-level context(s)
                matchContext = addCombinator(function (elem) {
                    return elem === checkContext;
                }, implicitRelative, true),
                matchAnyContext = addCombinator(function (elem) {
                    return indexOf(checkContext, elem) > -1;
                }, implicitRelative, true),
                matchers = [function (elem, context, xml) {
                    var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    // Avoid hanging onto element (issue #299)
                    checkContext = null;
                    return ret;
                }];

            for (; i < len; i++) {
                if ((matcher = Expr.relative[tokens[i].type])) {
                    matchers = [addCombinator(elementMatcher(matchers), matcher)];
                } else {
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

                    // Return special upon seeing a positional matcher
                    if (matcher[expando]) {
                        // Find the next relative operator (if any) for proper handling
                        j = ++i;
                        for (; j < len; j++) {
                            if (Expr.relative[tokens[j].type]) {
                                break;
                            }
                        }
                        return setMatcher(
                        i > 1 && elementMatcher(matchers), i > 1 && toSelector(
                        // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
                    }
                    matchers.push(matcher);
                }
            }

            return elementMatcher(matchers);
        }

        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0,
                byElement = elementMatchers.length > 0,
                superMatcher = function (seed, context, xml, results, outermost) {
                    var elem, j, matcher, matchedCount = 0,
                        i = "0",
                        unmatched = seed && [],
                        setMatched = [],
                        contextBackup = outermostContext,
                        // We must always have either seed elements or outermost context
                        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                        // Use integer dirruns iff this is the outermost matcher
                        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                        len = elems.length;

                    if (outermost) {
                        outermostContext = context !== document && context;
                    }

                    // Add elements passing elementMatchers directly to results
                    // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
                    // Support: IE<9, Safari
                    // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                    for (; i !== len && (elem = elems[i]) != null; i++) {
                        if (byElement && elem) {
                            j = 0;
                            while ((matcher = elementMatchers[j++])) {
                                if (matcher(elem, context, xml)) {
                                    results.push(elem);
                                    break;
                                }
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                            }
                        }

                        // Track unmatched elements for set filters
                        if (bySet) {
                            // They will have gone through all possible matchers
                            if ((elem = !matcher && elem)) {
                                matchedCount--;
                            }

                            // Lengthen the array for every element, matched or not
                            if (seed) {
                                unmatched.push(elem);
                            }
                        }
                    }

                    // Apply set filters to unmatched elements
                    matchedCount += i;
                    if (bySet && i !== matchedCount) {
                        j = 0;
                        while ((matcher = setMatchers[j++])) {
                            matcher(unmatched, setMatched, context, xml);
                        }

                        if (seed) {
                            // Reintegrate element matches to eliminate the need for sorting
                            if (matchedCount > 0) {
                                while (i--) {
                                    if (!(unmatched[i] || setMatched[i])) {
                                        setMatched[i] = pop.call(results);
                                    }
                                }
                            }

                            // Discard index placeholder values to get only actual matches
                            setMatched = condense(setMatched);
                        }

                        // Add matches to results
                        push.apply(results, setMatched);

                        // Seedless set matches succeeding multiple successful matchers stipulate sorting
                        if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {

                            Sizzle.uniqueSort(results);
                        }
                    }

                    // Override manipulation of globals by nested matchers
                    if (outermost) {
                        dirruns = dirrunsUnique;
                        outermostContext = contextBackup;
                    }

                    return unmatched;
                };

            return bySet ? markFunction(superMatcher) : superMatcher;
        }

        compile = Sizzle.compile = function (selector, match /* Internal Use Only */ ) {
            var i, setMatchers = [],
                elementMatchers = [],
                cached = compilerCache[selector + " "];

            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                if (!match) {
                    match = tokenize(selector);
                }
                i = match.length;
                while (i--) {
                    cached = matcherFromTokens(match[i]);
                    if (cached[expando]) {
                        setMatchers.push(cached);
                    } else {
                        elementMatchers.push(cached);
                    }
                }

                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

                // Save selector and tokenization
                cached.selector = selector;
            }
            return cached;
        };

        /**
         * A low-level selection function that works with Sizzle's compiled
         *  selector functions
         * @param {String|Function} selector A selector or a pre-compiled
         *  selector function built with Sizzle.compile
         * @param {Element} context
         * @param {Array} [results]
         * @param {Array} [seed] A set of elements to match against
         */
        select = Sizzle.select = function (selector, context, results, seed) {
            var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
                match = !seed && tokenize((selector = compiled.selector || selector));

            results = results || [];

            // Try to minimize operations if there is no seed and only one group
            if (match.length === 1) {

                // Take a shortcut and set the context if the root selector is an ID
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) {
                        return results;

                        // Precompiled matchers will still verify ancestry, so step up a level
                    } else if (compiled) {
                        context = context.parentNode;
                    }

                    selector = selector.slice(tokens.shift().value.length);
                }

                // Fetch a seed set for right-to-left matching
                i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while (i--) {
                    token = tokens[i];

                    // Abort if we hit a combinator
                    if (Expr.relative[(type = token.type)]) {
                        break;
                    }
                    if ((find = Expr.find[type])) {
                        // Search, expanding context for leading sibling combinators
                        if ((seed = find(
                        token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {

                            // If seed is empty or no tokens remain, we can return early
                            tokens.splice(i, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push.apply(results, seed);
                                return results;
                            }

                            break;
                        }
                    }
                }
            }

            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(
            seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        };

        // One-time assignments
        // Sort stability
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

        // Support: Chrome 14-35+
        // Always assume duplicates if they aren't passed to the comparison function
        support.detectDuplicates = !! hasDuplicate;

        // Initialize against the default document
        setDocument();

        // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*
        support.sortDetached = assert(function (div1) {
            // Should return 1, but returns 4 (following)
            return div1.compareDocumentPosition(document.createElement("div")) & 1;
        });

        // Support: IE<8
        // Prevent attribute/property "interpolation"
        // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
        if (!assert(function (div) {
            div.innerHTML = "<a href='#'></a>";
            return div.firstChild.getAttribute("href") === "#";
        })) {
            addHandle("type|href|height|width", function (elem, name, isXML) {
                if (!isXML) {
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }

        // Support: IE<9
        // Use defaultValue in place of getAttribute("value")
        if (!support.attributes || !assert(function (div) {
            div.innerHTML = "<input/>";
            div.firstChild.setAttribute("value", "");
            return div.firstChild.getAttribute("value") === "";
        })) {
            addHandle("value", function (elem, name, isXML) {
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    return elem.defaultValue;
                }
            });
        }

        // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies
        if (!assert(function (div) {
            return div.getAttribute("disabled") == null;
        })) {
            addHandle(booleans, function (elem, name, isXML) {
                var val;
                if (!isXML) {
                    return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                }
            });
        }

        return Sizzle;

    })(window);



    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;



    var rneedsContext = jQuery.expr.match.needsContext;

    var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



    var risSimple = /^.[^:#\[\.,]*$/;

    // Implement the identical functionality for filter and not


    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) {
            return jQuery.grep(elements, function (elem, i) { /* jshint -W018 */
                return !!qualifier.call(elem, i, elem) !== not;
            });

        }

        if (qualifier.nodeType) {
            return jQuery.grep(elements, function (elem) {
                return (elem === qualifier) !== not;
            });

        }

        if (typeof qualifier === "string") {
            if (risSimple.test(qualifier)) {
                return jQuery.filter(qualifier, elements, not);
            }

            qualifier = jQuery.filter(qualifier, elements);
        }

        return jQuery.grep(elements, function (elem) {
            return (indexOf.call(qualifier, elem) >= 0) !== not;
        });
    }

    jQuery.filter = function (expr, elems, not) {
        var elem = elems[0];

        if (not) {
            expr = ":not(" + expr + ")";
        }

        return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
            return elem.nodeType === 1;
        }));
    };

    jQuery.fn.extend({
        find: function (selector) {
            var i, len = this.length,
                ret = [],
                self = this;

            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function () {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }

            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }

            // Needed because $( selector, context ) becomes $( context ).find( selector )
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            return ret;
        },
        filter: function (selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function (selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function (selector) {
            return !!winnow(
            this,

            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });


    // Initialize a jQuery object

    // A central reference to the root jQuery(document)
    var rootjQuery,

    // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

        init = jQuery.fn.init = function (selector, context) {
            var match, elem;

            // HANDLE: $(""), $(null), $(undefined), $(false)
            if (!selector) {
                return this;
            }

            // Handle HTML strings
            if (typeof selector === "string") {
                if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [null, selector, null];

                } else {
                    match = rquickExpr.exec(selector);
                }

                // Match html or make sure no context is specified for #id
                if (match && (match[1] || !context)) {

                    // HANDLE: $(html) -> $(array)
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;

                        // Option to run scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge(this, jQuery.parseHTML(
                        match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

                        // HANDLE: $(html, props)
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {
                                // Properties of context are called as methods if possible
                                if (jQuery.isFunction(this[match])) {
                                    this[match](context[match]);

                                    // ...and otherwise set as attributes
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }

                        return this;

                        // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById(match[2]);

                        // Support: Blackberry 4.6
                        // gEBID returns nodes no longer in the document (#6963)
                        if (elem && elem.parentNode) {
                            // Inject the element directly into the jQuery object
                            this.length = 1;
                            this[0] = elem;
                        }

                        this.context = document;
                        this.selector = selector;
                        return this;
                    }

                    // HANDLE: $(expr, $(...))
                } else if (!context || context.jquery) {
                    return (context || rootjQuery).find(selector);

                    // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor(context).find(selector);
                }

                // HANDLE: $(DOMElement)
            } else if (selector.nodeType) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;

                // HANDLE: $(function)
                // Shortcut for document ready
            } else if (jQuery.isFunction(selector)) {
                return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) :
                // Execute immediately if ready is not present
                selector(jQuery);
            }

            if (selector.selector !== undefined) {
                this.selector = selector.selector;
                this.context = selector.context;
            }

            return jQuery.makeArray(selector, this);
        };

    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;

    // Initialize central reference
    rootjQuery = jQuery(document);


    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
        // Methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };

    jQuery.extend({
        dir: function (elem, dir, until) {
            var matched = [],
                truncate = until !== undefined;

            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) {
                        break;
                    }
                    matched.push(elem);
                }
            }
            return matched;
        },

        sibling: function (n, elem) {
            var matched = [];

            for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                    matched.push(n);
                }
            }

            return matched;
        }
    });

    jQuery.fn.extend({
        has: function (target) {
            var targets = jQuery(target, this),
                l = targets.length;

            return this.filter(function () {
                var i = 0;
                for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },

        closest: function (selectors, context) {
            var cur, i = 0,
                l = this.length,
                matched = [],
                pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

            for (; i < l; i++) {
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    // Always skip document fragments
                    if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

                    // Don't pass non-elements to Sizzle
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

                        matched.push(cur);
                        break;
                    }
                }
            }

            return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
        },

        // Determine the position of an element within the set
        index: function (elem) {

            // No argument, return index in parent
            if (!elem) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
            }

            // Index in selector
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
            }

            // Locate the position of the desired element
            return indexOf.call(this,

            // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem);
        },

        add: function (selector, context) {
            return this.pushStack(
            jQuery.unique(
            jQuery.merge(this.get(), jQuery(selector, context))));
        },

        addBack: function (selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });

    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {}
        return cur;
    }

    jQuery.each({
        parent: function (elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function (elem) {
            return jQuery.dir(elem, "parentNode");
        },
        parentsUntil: function (elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
        },
        next: function (elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function (elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function (elem) {
            return jQuery.dir(elem, "nextSibling");
        },
        prevAll: function (elem) {
            return jQuery.dir(elem, "previousSibling");
        },
        nextUntil: function (elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
        },
        prevUntil: function (elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
        },
        siblings: function (elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        children: function (elem) {
            return jQuery.sibling(elem.firstChild);
        },
        contents: function (elem) {
            return elem.contentDocument || jQuery.merge([], elem.childNodes);
        }
    }, function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
            var matched = jQuery.map(this, fn, until);

            if (name.slice(-5) !== "Until") {
                selector = until;
            }

            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
            }

            if (this.length > 1) {
                // Remove duplicates
                if (!guaranteedUnique[name]) {
                    jQuery.unique(matched);
                }

                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) {
                    matched.reverse();
                }
            }

            return this.pushStack(matched);
        };
    });
    var rnotwhite = (/\S+/g);



    // String to Object options format cache
    var optionsCache = {};

    // Convert String-formatted options into Object-formatted ones and store in cache


    function createOptions(options) {
        var object = optionsCache[options] = {};
        jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
            object[flag] = true;
        });
        return object;
    }

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
    jQuery.Callbacks = function (options) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? (optionsCache[options] || createOptions(options)) : jQuery.extend({}, options);

        var // Last fire value (for non-forgettable lists)
        memory,
        // Flag to know if list was already fired
        fired,
        // Flag to know if list is currently firing
        firing,
        // First callback to fire (used internally by add and fireWith)
        firingStart,
        // End of the loop when firing
        firingLength,
        // Index of currently firing callback (modified by remove if needed)
        firingIndex,
        // Actual callback list
        list = [],
            // Stack of fire calls for repeatable lists
            stack = !options.once && [],
            // Fire callbacks
            fire = function (data) {
                memory = options.memory && data;
                fired = true;
                firingIndex = firingStart || 0;
                firingStart = 0;
                firingLength = list.length;
                firing = true;
                for (; list && firingIndex < firingLength; firingIndex++) {
                    if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                        memory = false; // To prevent further calls using add
                        break;
                    }
                }
                firing = false;
                if (list) {
                    if (stack) {
                        if (stack.length) {
                            fire(stack.shift());
                        }
                    } else if (memory) {
                        list = [];
                    } else {
                        self.disable();
                    }
                }
            },
            // Actual Callbacks object
            self = {
                // Add a callback or a collection of callbacks to the list
                add: function () {
                    if (list) {
                        // First, we save the current length
                        var start = list.length;
                        (function add(args) {
                            jQuery.each(args, function (_, arg) {
                                var type = jQuery.type(arg);
                                if (type === "function") {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && type !== "string") {
                                    // Inspect recursively
                                    add(arg);
                                }
                            });
                        })(arguments);
                        // Do we need to add the callbacks to the
                        // current firing batch?
                        if (firing) {
                            firingLength = list.length;
                            // With memory, if we're not firing then
                            // we should call right away
                        } else if (memory) {
                            firingStart = start;
                            fire(memory);
                        }
                    }
                    return this;
                },
                // Remove a callback from the list
                remove: function () {
                    if (list) {
                        jQuery.each(arguments, function (_, arg) {
                            var index;
                            while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                list.splice(index, 1);
                                // Handle firing indexes
                                if (firing) {
                                    if (index <= firingLength) {
                                        firingLength--;
                                    }
                                    if (index <= firingIndex) {
                                        firingIndex--;
                                    }
                                }
                            }
                        });
                    }
                    return this;
                },
                // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function (fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : !! (list && list.length);
                },
                // Remove all callbacks from the list
                empty: function () {
                    list = [];
                    firingLength = 0;
                    return this;
                },
                // Have the list do nothing anymore
                disable: function () {
                    list = stack = memory = undefined;
                    return this;
                },
                // Is it disabled?
                disabled: function () {
                    return !list;
                },
                // Lock the list in its current state
                lock: function () {
                    stack = undefined;
                    if (!memory) {
                        self.disable();
                    }
                    return this;
                },
                // Is it locked?
                locked: function () {
                    return !stack;
                },
                // Call all callbacks with the given context and arguments
                fireWith: function (context, args) {
                    if (list && (!fired || stack)) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        if (firing) {
                            stack.push(args);
                        } else {
                            fire(args);
                        }
                    }
                    return this;
                },
                // Call all the callbacks with the given arguments
                fire: function () {
                    self.fireWith(this, arguments);
                    return this;
                },
                // To know if the callbacks have already been called at least once
                fired: function () {
                    return !!fired;
                }
            };

        return self;
    };


    jQuery.extend({

        Deferred: function (func) {
            var tuples = [
            // action, add listener, listener list, final state
            ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                ["notify", "progress", jQuery.Callbacks("memory")]
            ],
                state = "pending",
                promise = {
                    state: function () {
                        return state;
                    },
                    always: function () {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    then: function ( /* fnDone, fnFail, fnProgress */ ) {
                        var fns = arguments;
                        return jQuery.Deferred(function (newDefer) {
                            jQuery.each(tuples, function (i, tuple) {
                                var fn = jQuery.isFunction(fns[i]) && fns[i];
                                // deferred[ done | fail | progress ] for forwarding actions to newDefer
                                deferred[tuple[1]](function () {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && jQuery.isFunction(returned.promise)) {
                                        returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                                    } else {
                                        newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function (obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise;
                    }
                },
                deferred = {};

            // Keep pipe for back-compat
            promise.pipe = promise.then;

            // Add list-specific methods
            jQuery.each(tuples, function (i, tuple) {
                var list = tuple[2],
                    stateString = tuple[3];

                // promise[ done | fail | progress ] = list.add
                promise[tuple[1]] = list.add;

                // Handle state
                if (stateString) {
                    list.add(function () {
                        // state = [ resolved | rejected ]
                        state = stateString;

                        // [ reject_list | resolve_list ].disable; progress_list.lock
                    }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }

                // deferred[ resolve | reject | notify ]
                deferred[tuple[0]] = function () {
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    return this;
                };
                deferred[tuple[0] + "With"] = list.fireWith;
            });

            // Make the deferred a promise
            promise.promise(deferred);

            // Call given func if any
            if (func) {
                func.call(deferred, deferred);
            }

            // All done!
            return deferred;
        },

        // Deferred helper
        when: function (subordinate /* , ..., subordinateN */ ) {
            var i = 0,
                resolveValues = slice.call(arguments),
                length = resolveValues.length,

                // the count of uncompleted subordinates
                remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,

                // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
                deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

                // Update function for both resolve and progress values
                updateFunc = function (i, contexts, values) {
                    return function (value) {
                        contexts[i] = this;
                        values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                        if (values === progressValues) {
                            deferred.notifyWith(contexts, values);
                        } else if (!(--remaining)) {
                            deferred.resolveWith(contexts, values);
                        }
                    };
                },

                progressValues, progressContexts, resolveContexts;

            // Add listeners to Deferred subordinates; treat others as resolved
            if (length > 1) {
                progressValues = new Array(length);
                progressContexts = new Array(length);
                resolveContexts = new Array(length);
                for (; i < length; i++) {
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
                    } else {
                        --remaining;
                    }
                }
            }

            // If we're not waiting on anything, resolve the master
            if (!remaining) {
                deferred.resolveWith(resolveContexts, resolveValues);
            }

            return deferred.promise();
        }
    });


    // The deferred used on DOM ready
    var readyList;

    jQuery.fn.ready = function (fn) {
        // Add the callback
        jQuery.ready.promise().done(fn);

        return this;
    };

    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,

        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,

        // Hold (or release) the ready event
        holdReady: function (hold) {
            if (hold) {
                jQuery.readyWait++;
            } else {
                jQuery.ready(true);
            }
        },

        // Handle when the DOM is ready
        ready: function (wait) {

            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }

            // Remember that the DOM is ready
            jQuery.isReady = true;

            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }

            // If there are functions bound, to execute
            readyList.resolveWith(document, [jQuery]);

            // Trigger any bound ready events
            if (jQuery.fn.triggerHandler) {
                jQuery(document).triggerHandler("ready");
                jQuery(document).off("ready");
            }
        }
    });

    /**
     * The ready event handler and self cleanup method
     */

    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, false);
        window.removeEventListener("load", completed, false);
        jQuery.ready();
    }

    jQuery.ready.promise = function (obj) {
        if (!readyList) {

            readyList = jQuery.Deferred();

            // Catch cases where $(document).ready() is called after the browser event has already occurred.
            // We once tried to use readyState "interactive" here, but it caused issues like the one
            // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
            if (document.readyState === "complete") {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                setTimeout(jQuery.ready);

            } else {

                // Use the handy event callback
                document.addEventListener("DOMContentLoaded", completed, false);

                // A fallback to window.onload, that will always work
                window.addEventListener("load", completed, false);
            }
        }
        return readyList.promise(obj);
    };

    // Kick off the DOM ready check even if the user does not
    jQuery.ready.promise();




    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            len = elems.length,
            bulk = key == null;

        // Sets many values
        if (jQuery.type(key) === "object") {
            chainable = true;
            for (i in key) {
                jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
            }

            // Sets one value
        } else if (value !== undefined) {
            chainable = true;

            if (!jQuery.isFunction(value)) {
                raw = true;
            }

            if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;

                    // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function (elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }

            if (fn) {
                for (; i < len; i++) {
                    fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                }
            }
        }

        return chainable ? elems :

        // Gets
        bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
    };


    /**
     * Determines whether an object can have data
     */
    jQuery.acceptData = function (owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        /* jshint -W018 */
        return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
    };


    function Data() {
        // Support: Android<4,
        // Old WebKit does not have Object.preventExtensions/freeze method,
        // return new empty object instead with no [[set]] accessor
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {};
            }
        });

        this.expando = jQuery.expando + Data.uid++;
    }

    Data.uid = 1;
    Data.accepts = jQuery.acceptData;

    Data.prototype = {
        key: function (owner) {
            // We can accept data for non-element nodes in modern browsers,
            // but we should not, see #8335.
            // Always return the key for a frozen object.
            if (!Data.accepts(owner)) {
                return 0;
            }

            var descriptor = {},
                // Check if the owner object already has a cache key
                unlock = owner[this.expando];

            // If not, create one
            if (!unlock) {
                unlock = Data.uid++;

                // Secure it in a non-enumerable, non-writable property
                try {
                    descriptor[this.expando] = {
                        value: unlock
                    };
                    Object.defineProperties(owner, descriptor);

                    // Support: Android<4
                    // Fallback to a less secure definition
                } catch (e) {
                    descriptor[this.expando] = unlock;
                    jQuery.extend(owner, descriptor);
                }
            }

            // Ensure the cache object
            if (!this.cache[unlock]) {
                this.cache[unlock] = {};
            }

            return unlock;
        },
        set: function (owner, data, value) {
            var prop,
            // There may be an unlock assigned to this node,
            // if there is no entry for this "owner", create one inline
            // and set the unlock as though an owner entry had always existed
            unlock = this.key(owner),
                cache = this.cache[unlock];

            // Handle: [ owner, key, value ] args
            if (typeof data === "string") {
                cache[data] = value;

                // Handle: [ owner, { properties } ] args
            } else {
                // Fresh assignments by object are shallow copied
                if (jQuery.isEmptyObject(cache)) {
                    jQuery.extend(this.cache[unlock], data);
                    // Otherwise, copy the properties one-by-one to the cache object
                } else {
                    for (prop in data) {
                        cache[prop] = data[prop];
                    }
                }
            }
            return cache;
        },
        get: function (owner, key) {
            // Either a valid cache is found, or will be created.
            // New caches will be created and the unlock returned,
            // allowing direct access to the newly created
            // empty data object. A valid owner object must be provided.
            var cache = this.cache[this.key(owner)];

            return key === undefined ? cache : cache[key];
        },
        access: function (owner, key, value) {
            var stored;
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || ((key && typeof key === "string") && value === undefined)) {

                stored = this.get(owner, key);

                return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
            }

            // [*]When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);

            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function (owner, key) {
            var i, name, camel, unlock = this.key(owner),
                cache = this.cache[unlock];

            if (key === undefined) {
                this.cache[unlock] = {};

            } else {
                // Support array or space separated string of keys
                if (jQuery.isArray(key)) {
                    // If "name" is an array of keys...
                    // When data is initially created, via ("key", "val") signature,
                    // keys will be converted to camelCase.
                    // Since there is no way to tell _how_ a key was added, remove
                    // both plain key and camelCase key. #12786
                    // This will only penalize the array argument path.
                    name = key.concat(key.map(jQuery.camelCase));
                } else {
                    camel = jQuery.camelCase(key);
                    // Try the string as a key before any manipulation
                    if (key in cache) {
                        name = [key, camel];
                    } else {
                        // If a key with the spaces exists, use it.
                        // Otherwise, create an array by matching non-whitespace
                        name = camel;
                        name = name in cache ? [name] : (name.match(rnotwhite) || []);
                    }
                }

                i = name.length;
                while (i--) {
                    delete cache[name[i]];
                }
            }
        },
        hasData: function (owner) {
            return !jQuery.isEmptyObject(
            this.cache[owner[this.expando]] || {});
        },
        discard: function (owner) {
            if (owner[this.expando]) {
                delete this.cache[owner[this.expando]];
            }
        }
    };
    var data_priv = new Data();

    var data_user = new Data();



    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /([A-Z])/g;

    function dataAttr(elem, key, data) {
        var name;

        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            data = elem.getAttribute(name);

            if (typeof data === "string") {
                try {
                    data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
                    // Only convert to a number if it doesn't change the string
                    + data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
                } catch (e) {}

                // Make sure we set the data so it isn't changed later
                data_user.set(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }

    jQuery.extend({
        hasData: function (elem) {
            return data_user.hasData(elem) || data_priv.hasData(elem);
        },

        data: function (elem, name, data) {
            return data_user.access(elem, name, data);
        },

        removeData: function (elem, name) {
            data_user.remove(elem, name);
        },

        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to data_priv methods, these can be deprecated.
        _data: function (elem, name, data) {
            return data_priv.access(elem, name, data);
        },

        _removeData: function (elem, name) {
            data_priv.remove(elem, name);
        }
    });

    jQuery.fn.extend({
        data: function (key, value) {
            var i, name, data, elem = this[0],
                attrs = elem && elem.attributes;

            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = data_user.get(elem);

                    if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {

                            // Support: IE11+
                            // The attrs elements can be null (#14894)
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = jQuery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        data_priv.set(elem, "hasDataAttrs", true);
                    }
                }

                return data;
            }

            // Sets multiple values
            if (typeof key === "object") {
                return this.each(function () {
                    data_user.set(this, key);
                });
            }

            return access(this, function (value) {
                var data, camelKey = jQuery.camelCase(key);

                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {
                    // Attempt to get data from the cache
                    // with the key as-is
                    data = data_user.get(elem, key);
                    if (data !== undefined) {
                        return data;
                    }

                    // Attempt to get data from the cache
                    // with the key camelized
                    data = data_user.get(elem, camelKey);
                    if (data !== undefined) {
                        return data;
                    }

                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, camelKey, undefined);
                    if (data !== undefined) {
                        return data;
                    }

                    // We tried really hard, but the data doesn't exist.
                    return;
                }

                // Set the data...
                this.each(function () {
                    // First, attempt to store a copy or reference of any
                    // data that might've been store with a camelCased key.
                    var data = data_user.get(this, camelKey);

                    // For HTML5 data-* attribute interop, we have to
                    // store property names with dashes in a camelCase form.
                    // This might not apply to all properties...*
                    data_user.set(this, camelKey, value);

                    // *... In the case of properties that might _actually_
                    // have dashes, we need to also store a copy of that
                    // unchanged property.
                    if (key.indexOf("-") !== -1 && data !== undefined) {
                        data_user.set(this, key, value);
                    }
                });
            }, null, value, arguments.length > 1, null, true);
        },

        removeData: function (key) {
            return this.each(function () {
                data_user.remove(this, key);
            });
        }
    });


    jQuery.extend({
        queue: function (elem, type, data) {
            var queue;

            if (elem) {
                type = (type || "fx") + "queue";
                queue = data_priv.get(elem, type);

                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || jQuery.isArray(data)) {
                        queue = data_priv.access(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },

        dequeue: function (elem, type) {
            type = type || "fx";

            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function () {
                    jQuery.dequeue(elem, type);
                };

            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }

            if (fn) {

                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") {
                    queue.unshift("inprogress");
                }

                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }

            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },

        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function (elem, type) {
            var key = type + "queueHooks";
            return data_priv.get(elem, key) || data_priv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function () {
                    data_priv.remove(elem, [type + "queue", key]);
                })
            });
        }
    });

    jQuery.fn.extend({
        queue: function (type, data) {
            var setter = 2;

            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }

            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }

            return data === undefined ? this : this.each(function () {
                var queue = jQuery.queue(this, type, data);

                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);

                if (type === "fx" && queue[0] !== "inprogress") {
                    jQuery.dequeue(this, type);
                }
            });
        },
        dequeue: function (type) {
            return this.each(function () {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function (type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function (type, obj) {
            var tmp, count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function () {
                    if (!(--count)) {
                        defer.resolveWith(elements, [elements]);
                    }
                };

            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";

            while (i--) {
                tmp = data_priv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

    var cssExpand = ["Top", "Right", "Bottom", "Left"];

    var isHidden = function (elem, el) {
        // isHidden might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    };

    var rcheckableType = (/^(?:checkbox|radio)$/i);



    (function () {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input");

        // Support: Safari<=5.1
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");

        div.appendChild(input);

        // Support: Safari<=5.1, Android<4.2
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

        // Support: IE<=11+
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !! div.cloneNode(true).lastChild.defaultValue;
    })();
    var strundefined = typeof undefined;



    support.focusinBubbles = "onfocusin" in window;


    var
    rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
        rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    }

    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {}
    }

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
    jQuery.event = {

        global: {},

        add: function (elem, types, handler, data, selector) {

            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.get(elem);

            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if (!elemData) {
                return;
            }

            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }

            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function (e) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
                };
            }

            // Handle multiple events separated by a space
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();

                // There *must* be a type, no attaching namespace-only handlers
                if (!type) {
                    continue;
                }

                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};

                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;

                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};

                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);

                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;

                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle, false);
                        }
                    }
                }

                if (special.add) {
                    special.add.call(elem, handleObj);

                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add to the element's handler list, delegates in front
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }

                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }

        },

        // Detach an event or set of events from an element
        remove: function (elem, types, handler, selector, mappedTypes) {

            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = data_priv.hasData(elem) && data_priv.get(elem);

            if (!elemData || !(events = elemData.events)) {
                return;
            }

            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnotwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();

                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }

                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

                // Remove matching events
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];

                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);

                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }

                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }

                    delete events[type];
                }
            }

            // Remove the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) {
                delete elemData.handle;
                data_priv.remove(elem, "events");
            }
        },

        trigger: function (event, data, elem, onlyHandlers) {

            var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document],
                type = hasOwn.call(event, "type") ? event.type : event,
                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

            cur = tmp = elem = elem || document;

            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }

            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }

            if (type.indexOf(".") >= 0) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;

            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);

            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }

            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [event] : jQuery.makeArray(data, [event]);

            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }

            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }

                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }

            // Fire handlers on the event path
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

                event.type = i > 1 ? bubbleType : special.bindType || type;

                // jQuery handler
                handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }

                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && jQuery.acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;

            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {

                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {

                    // Call a native DOM method on the target with the same name name as the event.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];

                        if (tmp) {
                            elem[ontype] = null;
                        }

                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        elem[type]();
                        jQuery.event.triggered = undefined;

                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }

            return event.result;
        },

        dispatch: function (event) {

            // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(event);

            var i, j, ret, matched, handleObj, handlerQueue = [],
                args = slice.call(arguments),
                handlers = (data_priv.get(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {};

            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            event.delegateTarget = this;

            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }

            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);

            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;

                j = 0;
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

                    // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                    // a subset or equal to those in the bound event (both can have no namespace).
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

                        event.handleObj = handleObj;
                        event.data = handleObj.data;

                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }

            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }

            return event.result;
        },

        handlers: function (event, handlers) {
            var i, matches, sel, handleObj, handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;

            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            // Avoid non-left-click bubbling in Firefox (#3861)
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

                for (; cur !== this; cur = cur.parentNode || this) {

                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if (cur.disabled !== true || event.type !== "click") {
                        matches = [];
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];

                            // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";

                            if (matches[sel] === undefined) {
                                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
                            }
                            if (matches[sel]) {
                                matches.push(handleObj);
                            }
                        }
                        if (matches.length) {
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }

            // Add the remaining (directly-bound) handlers
            if (delegateCount < handlers.length) {
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }

            return handlerQueue;
        },

        // Includes some event props shared by KeyEvent and MouseEvent
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

        fixHooks: {},

        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (event, original) {

                // Add which for key events
                if (event.which == null) {
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }

                return event;
            }
        },

        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (event, original) {
                var eventDoc, doc, body, button = original.button;

                // Calculate pageX/Y if missing and clientX/Y available
                if (event.pageX == null && original.clientX != null) {
                    eventDoc = event.target.ownerDocument || document;
                    doc = eventDoc.documentElement;
                    body = eventDoc.body;

                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }

                // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                if (!event.which && button !== undefined) {
                    event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
                }

                return event;
            }
        },

        fix: function (event) {
            if (event[jQuery.expando]) {
                return event;
            }

            // Create a writable copy of the event object and normalize some properties
            var i, prop, copy, type = event.type,
                originalEvent = event,
                fixHook = this.fixHooks[type];

            if (!fixHook) {
                this.fixHooks[type] = fixHook =
                rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
            }
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

            event = new jQuery.Event(originalEvent);

            i = copy.length;
            while (i--) {
                prop = copy[i];
                event[prop] = originalEvent[prop];
            }

            // Support: Cordova 2.5 (WebKit) (#13255)
            // All events should have a target; Cordova deviceready doesn't
            if (!event.target) {
                event.target = document;
            }

            // Support: Safari 6.0+, Chrome<28
            // Target should not be a text node (#504, #13143)
            if (event.target.nodeType === 3) {
                event.target = event.target.parentNode;
            }

            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },

        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: {
                // Fire native event if possible so blur/focus sequence is correct
                trigger: function () {
                    if (this !== safeActiveElement() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {
                // For checkbox, fire native event so checked state will be right
                trigger: function () {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                },

                // For cross-browser consistency, don't fire native .click() on links
                _default: function (event) {
                    return jQuery.nodeName(event.target, "a");
                }
            },

            beforeunload: {
                postDispatch: function (event) {

                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },

        simulate: function (type, elem, event, bubble) {
            // Piggyback on a donor event to simulate a different one.
            // Fake originalEvent to avoid donor's stopPropagation, but if the
            // simulated event prevents default then we do the same on the donor.
            var e = jQuery.extend(
            new jQuery.Event(), event, {
                type: type,
                isSimulated: true,
                originalEvent: {}
            });
            if (bubble) {
                jQuery.event.trigger(e, null, elem);
            } else {
                jQuery.event.dispatch.call(elem, e);
            }
            if (e.isDefaultPrevented()) {
                event.preventDefault();
            }
        }
    };

    jQuery.removeEvent = function (elem, type, handle) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle, false);
        }
    };

    jQuery.Event = function (src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }

        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
            // Support: Android<4.0
            src.returnValue === false ? returnTrue : returnFalse;

            // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if (props) {
            jQuery.extend(this, props);
        }

        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || jQuery.now();

        // Mark it as fixed
        this[jQuery.expando] = true;
    };

    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,

        preventDefault: function () {
            var e = this.originalEvent;

            this.isDefaultPrevented = returnTrue;

            if (e && e.preventDefault) {
                e.preventDefault();
            }
        },
        stopPropagation: function () {
            var e = this.originalEvent;

            this.isPropagationStopped = returnTrue;

            if (e && e.stopPropagation) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;

            this.isImmediatePropagationStopped = returnTrue;

            if (e && e.stopImmediatePropagation) {
                e.stopImmediatePropagation();
            }

            this.stopPropagation();
        }
    };

    // Create mouseenter/leave events using mouseover/out and event-time checks
    // Support: Chrome 15+
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,

            handle: function (event) {
                var ret, target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;

                // For mousenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || (related !== target && !jQuery.contains(target, related))) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });

    // Support: Firefox, Chrome, Safari
    // Create "bubbling" focus and blur events
    if (!support.focusinBubbles) {
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function (orig, fix) {

            // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function (event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };

            jQuery.event.special[fix] = {
                setup: function () {
                    var doc = this.ownerDocument || this,
                        attaches = data_priv.access(doc, fix);

                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    data_priv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function () {
                    var doc = this.ownerDocument || this,
                        attaches = data_priv.access(doc, fix) - 1;

                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        data_priv.remove(doc, fix);

                    } else {
                        data_priv.access(doc, fix, attaches);
                    }
                }
            };
        });
    }

    jQuery.fn.extend({

        on: function (types, selector, data, fn, /*INTERNAL*/ one) {
            var origFn, type;

            // Types can be a map of types/handlers
            if (typeof types === "object") {
                // ( types-Object, selector, data )
                if (typeof selector !== "string") {
                    // ( types-Object, data )
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) {
                    this.on(type, selector, data, types[type], one);
                }
                return this;
            }

            if (data == null && fn == null) {
                // ( types, fn )
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    // ( types, selector, fn )
                    fn = data;
                    data = undefined;
                } else {
                    // ( types, data, fn )
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) {
                fn = returnFalse;
            } else if (!fn) {
                return this;
            }

            if (one === 1) {
                origFn = fn;
                fn = function (event) {
                    // Can use an empty set, since event contains the info
                    jQuery().off(event);
                    return origFn.apply(this, arguments);
                };
                // Use same guid so caller can remove using origFn
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return this.each(function () {
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        one: function (types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1);
        },
        off: function (types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                // ( types-object [, selector] )
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function () {
                jQuery.event.remove(this, types, fn, selector);
            });
        },

        trigger: function (type, data) {
            return this.each(function () {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function (type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });


    var
    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        rtagName = /<([\w:]+)/,
        rhtml = /<|&#?\w+;/,
        rnoInnerhtml = /<(?:script|style|link)/i,
        // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptType = /^$|\/(?:java|ecma)script/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

        // We have to close these tags to support XHTML (#13200)
        wrapMap = {

            // Support: IE9
            option: [1, "<select multiple='multiple'>", "</select>"],

            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

            _default: [0, "", ""]
        };

    // Support: IE9
    wrapMap.optgroup = wrapMap.option;

    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    // Support: 1.x compatibility
    // Manipulating tables requires a tbody


    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ?

        elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
    }

    // Replace/restore the type attribute of script elements for safe DOM manipulation


    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }

    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);

        if (match) {
            elem.type = match[1];
        } else {
            elem.removeAttribute("type");
        }

        return elem;
    }

    // Mark scripts as having already been evaluated


    function setGlobalEval(elems, refElements) {
        var i = 0,
            l = elems.length;

        for (; i < l; i++) {
            data_priv.set(
            elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
        }
    }

    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

        if (dest.nodeType !== 1) {
            return;
        }

        // 1. Copy private data: events, handlers, etc.
        if (data_priv.hasData(src)) {
            pdataOld = data_priv.access(src);
            pdataCur = data_priv.set(dest, pdataOld);
            events = pdataOld.events;

            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};

                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
        }

        // 2. Copy user data
        if (data_user.hasData(src)) {
            udataOld = data_user.access(src);
            udataCur = jQuery.extend({}, udataOld);

            data_user.set(dest, udataCur);
        }
    }

    function getAll(context, tag) {
        var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];

        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
    }

    // Fix IE bugs, see support tests


    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();

        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;

            // Fails to return the selected option to the default selected state when cloning options
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }

    jQuery.extend({
        clone: function (elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements, clone = elem.cloneNode(true),
                inPage = jQuery.contains(elem.ownerDocument, elem);

            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

                // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);

                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            }

            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);

                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }

            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }

            // Return the cloned set
            return clone;
        },

        buildFragment: function (elems, context, scripts, selection) {
            var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(),
                nodes = [],
                i = 0,
                l = elems.length;

            for (; i < l; i++) {
                elem = elems[i];

                if (elem || elem === 0) {

                    // Add nodes directly
                    if (jQuery.type(elem) === "object") {
                        // Support: QtWebKit, PhantomJS
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

                        // Convert non-html into a text node
                    } else if (!rhtml.test(elem)) {
                        nodes.push(context.createTextNode(elem));

                        // Convert html into DOM nodes
                    } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));

                        // Deserialize a standard representation
                        tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

                        // Descend through wrappers to the right content
                        j = wrap[0];
                        while (j--) {
                            tmp = tmp.lastChild;
                        }

                        // Support: QtWebKit, PhantomJS
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(nodes, tmp.childNodes);

                        // Remember the top-level container
                        tmp = fragment.firstChild;

                        // Ensure the created nodes are orphaned (#12392)
                        tmp.textContent = "";
                    }
                }
            }

            // Remove wrapper from fragment
            fragment.textContent = "";

            i = 0;
            while ((elem = nodes[i++])) {

                // #4087 - If origin and destination elements are the same, and this is
                // that element, do not do anything
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    continue;
                }

                contains = jQuery.contains(elem.ownerDocument, elem);

                // Append to fragment
                tmp = getAll(fragment.appendChild(elem), "script");

                // Preserve script evaluation history
                if (contains) {
                    setGlobalEval(tmp);
                }

                // Capture executables
                if (scripts) {
                    j = 0;
                    while ((elem = tmp[j++])) {
                        if (rscriptType.test(elem.type || "")) {
                            scripts.push(elem);
                        }
                    }
                }
            }

            return fragment;
        },

        cleanData: function (elems) {
            var data, elem, type, key, special = jQuery.event.special,
                i = 0;

            for (;
            (elem = elems[i]) !== undefined; i++) {
                if (jQuery.acceptData(elem)) {
                    key = elem[data_priv.expando];

                    if (key && (data = data_priv.cache[key])) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);

                                    // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        if (data_priv.cache[key]) {
                            // Discard any remaining `private` data
                            delete data_priv.cache[key];
                        }
                    }
                }
                // Discard any remaining `user` data
                delete data_user.cache[elem[data_user.expando]];
            }
        }
    });

    jQuery.fn.extend({
        text: function (value) {
            return access(this, function (value) {
                return value === undefined ? jQuery.text(this) : this.empty().each(function () {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = value;
                    }
                });
            }, null, value, arguments.length);
        },

        append: function () {
            return this.domManip(arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },

        prepend: function () {
            return this.domManip(arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },

        before: function () {
            return this.domManip(arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },

        after: function () {
            return this.domManip(arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },

        remove: function (selector, keepData /* Internal Use Only */ ) {
            var elem, elems = selector ? jQuery.filter(selector, this) : this,
                i = 0;

            for (;
            (elem = elems[i]) != null; i++) {
                if (!keepData && elem.nodeType === 1) {
                    jQuery.cleanData(getAll(elem));
                }

                if (elem.parentNode) {
                    if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                        setGlobalEval(getAll(elem, "script"));
                    }
                    elem.parentNode.removeChild(elem);
                }
            }

            return this;
        },

        empty: function () {
            var elem, i = 0;

            for (;
            (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {

                    // Prevent memory leaks
                    jQuery.cleanData(getAll(elem, false));

                    // Remove any remaining nodes
                    elem.textContent = "";
                }
            }

            return this;
        },

        clone: function (dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

            return this.map(function () {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },

        html: function (value) {
            return access(this, function (value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;

                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                }

                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                    value = value.replace(rxhtmlTag, "<$1></$2>");

                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {};

                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }

                        elem = 0;

                        // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {}
                }

                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },

        replaceWith: function () {
            var arg = arguments[0];

            // Make the changes, replacing each context element with the new content
            this.domManip(arguments, function (elem) {
                arg = this.parentNode;

                jQuery.cleanData(getAll(this));

                if (arg) {
                    arg.replaceChild(elem, this);
                }
            });

            // Force removal if there was no new content (e.g., from empty arguments)
            return arg && (arg.length || arg.nodeType) ? this : this.remove();
        },

        detach: function (selector) {
            return this.remove(selector, true);
        },

        domManip: function (args, callback) {

            // Flatten any nested arrays
            args = concat.apply([], args);

            var fragment, first, scripts, hasScripts, node, doc, i = 0,
                l = this.length,
                set = this,
                iNoClone = l - 1,
                value = args[0],
                isFunction = jQuery.isFunction(value);

            // We can't cloneNode fragments that contain checked, in WebKit
            if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
                return this.each(function (index) {
                    var self = set.eq(index);
                    if (isFunction) {
                        args[0] = value.call(this, index, self.html());
                    }
                    self.domManip(args, callback);
                });
            }

            if (l) {
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
                first = fragment.firstChild;

                if (fragment.childNodes.length === 1) {
                    fragment = first;
                }

                if (first) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;

                    // Use the original fragment for the last item instead of the first because it can end up
                    // being emptied incorrectly in certain situations (#8070).
                    for (; i < l; i++) {
                        node = fragment;

                        if (i !== iNoClone) {
                            node = jQuery.clone(node, true, true);

                            // Keep references to cloned scripts for later restoration
                            if (hasScripts) {
                                // Support: QtWebKit
                                // jQuery.merge because push.apply(_, arraylike) throws
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }

                        callback.call(this[i], node, i);
                    }

                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;

                        // Reenable scripts
                        jQuery.map(scripts, restoreScript);

                        // Evaluate executable scripts on first document insertion
                        for (i = 0; i < hasScripts; i++) {
                            node = scripts[i];
                            if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {

                                if (node.src) {
                                    // Optional AJAX dependency, but won't run scripts if not present
                                    if (jQuery._evalUrl) {
                                        jQuery._evalUrl(node.src);
                                    }
                                } else {
                                    jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
                                }
                            }
                        }
                    }
                }
            }

            return this;
        }
    });

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (name, original) {
        jQuery.fn[name] = function (selector) {
            var elems, ret = [],
                insert = jQuery(selector),
                last = insert.length - 1,
                i = 0;

            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);

                // Support: QtWebKit
                // .get() because push.apply(_, arraylike) throws
                push.apply(ret, elems.get());
            }

            return this.pushStack(ret);
        };
    });


    var iframe, elemdisplay = {};

    /**
     * Retrieve the actual display of a element
     * @param {String} name nodeName of the element
     * @param {Object} doc Document object
     */
    // Called only from within defaultDisplay


    function actualDisplay(name, doc) {
        var style, elem = jQuery(doc.createElement(name)).appendTo(doc.body),

            // getDefaultComputedStyle might be reliably used only on attached element
            display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ?

            // Use of this method is a temporary fix (more like optimization) until something better comes along,
            // since it was removed from specification and supported only in FF
            style.display : jQuery.css(elem[0], "display");

        // We don't have any data stored on the element,
        // so use "detach" method as fast way to get rid of the element
        elem.detach();

        return display;
    }

    /**
     * Try to determine the default display value of an element
     * @param {String} nodeName
     */

    function defaultDisplay(nodeName) {
        var doc = document,
            display = elemdisplay[nodeName];

        if (!display) {
            display = actualDisplay(nodeName, doc);

            // If the simple way fails, read from inside an iframe
            if (display === "none" || !display) {

                // Use the already-created iframe if possible
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                doc = iframe[0].contentDocument;

                // Support: IE
                doc.write();
                doc.close();

                display = actualDisplay(nodeName, doc);
                iframe.detach();
            }

            // Store the correct default display
            elemdisplay[nodeName] = display;
        }

        return display;
    }
    var rmargin = (/^margin/);

    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

    var getStyles = function (elem) {
        // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        if (elem.ownerDocument.defaultView.opener) {
            return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
        }

        return window.getComputedStyle(elem, null);
    };



    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, style = elem.style;

        computed = computed || getStyles(elem);

        // Support: IE9
        // getPropertyValue is only needed for .css('filter') (#12537)
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
        }

        if (computed) {

            if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name);
            }

            // Support: iOS < 6
            // A tribute to the "awesome hack by Dean Edwards"
            // iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
            // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
            if (rnumnonpx.test(ret) && rmargin.test(name)) {

                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;

                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;

                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }

        return ret !== undefined ?
        // Support: IE
        // IE returns zIndex value as an integer.
        ret + "" : ret;
    }


    function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function () {
                if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }

                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }


    (function () {
        var pixelPositionVal, boxSizingReliableVal, docElem = document.documentElement,
            container = document.createElement("div"),
            div = document.createElement("div");

        if (!div.style) {
            return;
        }

        // Support: IE9-11+
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";

        container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
        container.appendChild(div);

        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.


        function computePixelPositionAndBoxSizingReliable() {
            div.style.cssText =
            // Support: Firefox<29, Android 2.3
            // Vendor-prefix box-sizing
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
            div.innerHTML = "";
            docElem.appendChild(container);

            var divStyle = window.getComputedStyle(div, null);
            pixelPositionVal = divStyle.top !== "1%";
            boxSizingReliableVal = divStyle.width === "4px";

            docElem.removeChild(container);
        }

        // Support: node.js jsdom
        // Don't assume that getComputedStyle is a property of the global object
        if (window.getComputedStyle) {
            jQuery.extend(support, {
                pixelPosition: function () {

                    // This test is executed only once but we still do memoizing
                    // since we can use the boxSizingReliable pre-computing.
                    // No need to check if the test was already performed, though.
                    computePixelPositionAndBoxSizingReliable();
                    return pixelPositionVal;
                },
                boxSizingReliable: function () {
                    if (boxSizingReliableVal == null) {
                        computePixelPositionAndBoxSizingReliable();
                    }
                    return boxSizingReliableVal;
                },
                reliableMarginRight: function () {

                    // Support: Android 2.3
                    // Check if div with explicit width and no margin-right incorrectly
                    // gets computed margin-right based on width of container. (#3333)
                    // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                    // This support function is only executed once so no memoizing is needed.
                    var ret, marginDiv = div.appendChild(document.createElement("div"));

                    // Reset CSS: box-sizing; display; margin; border; padding
                    marginDiv.style.cssText = div.style.cssText =
                    // Support: Firefox<29, Android 2.3
                    // Vendor-prefix box-sizing
                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                    marginDiv.style.marginRight = marginDiv.style.width = "0";
                    div.style.width = "1px";
                    docElem.appendChild(container);

                    ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);

                    docElem.removeChild(container);
                    div.removeChild(marginDiv);

                    return ret;
                }
            });
        }
    })();


    // A method for quickly swapping in/out CSS properties to get correct calculations.
    jQuery.swap = function (elem, options, callback, args) {
        var ret, name, old = {};

        // Remember the old values, and insert the new ones
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }

        ret = callback.apply(elem, args || []);

        // Revert the old values
        for (name in options) {
            elem.style[name] = old[name];
        }

        return ret;
    };


    var
    // Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
        rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),

        cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },

        cssPrefixes = ["Webkit", "O", "Moz", "ms"];

    // Return a css property mapped to a potentially vendor prefixed property


    function vendorPropName(style, name) {

        // Shortcut for names that are not vendor prefixed
        if (name in style) {
            return name;
        }

        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1),
            origName = name,
            i = cssPrefixes.length;

        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in style) {
                return name;
            }
        }

        return origName;
    }

    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ?
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
    }

    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        var i = extra === (isBorderBox ? "border" : "content") ?
        // If we already have the right measurement, avoid augmentation
        4 :
        // Otherwise initialize for horizontal or vertical properties
        name === "width" ? 1 : 0,

            val = 0;

        for (; i < 4; i += 2) {
            // Both box models exclude margin, so add it if we want it
            if (extra === "margin") {
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }

            if (isBorderBox) {
                // border-box includes padding, so remove it if we want content
                if (extra === "content") {
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }

                // At this point, extra isn't border nor margin, so remove border
                if (extra !== "margin") {
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else {
                // At this point, extra isn't content, so add padding
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

                // At this point, extra isn't content nor padding, so add border
                if (extra !== "padding") {
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }

        return val;
    }

    function getWidthOrHeight(elem, name, extra) {

        // Start with offset property, which is equivalent to the border-box value
        var valueIsBorderBox = true,
            val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
            styles = getStyles(elem),
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

        // Some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        if (val <= 0 || val == null) {
            // Fall back to computed then uncomputed css if necessary
            val = curCSS(elem, name, styles);
            if (val < 0 || val == null) {
                val = elem.style[name];
            }

            // Computed unit is not pixels. Stop here and return.
            if (rnumnonpx.test(val)) {
                return val;
            }

            // Check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

            // Normalize "", auto, and prepare for extra
            val = parseFloat(val) || 0;
        }

        // Use the active box-sizing model to add/subtract irrelevant styles
        return (val + augmentWidthOrHeight(
        elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
    }

    function showHide(elements, show) {
        var display, elem, hidden, values = [],
            index = 0,
            length = elements.length;

        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }

            values[index] = data_priv.get(elem, "olddisplay");
            display = elem.style.display;
            if (show) {
                // Reset the inline display of this element to learn if it is
                // being hidden by cascaded rules or not
                if (!values[index] && display === "none") {
                    elem.style.display = "";
                }

                // Set elements which have been overridden with display: none
                // in a stylesheet to whatever the default browser style is
                // for such an element
                if (elem.style.display === "" && isHidden(elem)) {
                    values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
                }
            } else {
                hidden = isHidden(elem);

                if (display !== "none" || !hidden) {
                    data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                }
            }
        }

        // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        for (index = 0; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                elem.style.display = show ? values[index] || "" : "none";
            }
        }

        return elements;
    }

    jQuery.extend({

        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function (elem, computed) {
                    if (computed) {

                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },

        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
            "float": "cssFloat"
        },

        // Get and set the style property on a DOM Node
        style: function (elem, name, value, extra) {

            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, hooks, origName = jQuery.camelCase(name),
                style = elem.style;

            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;

                // Convert "+=" or "-=" to relative numbers (#7345)
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    // Fixes bug #9237
                    type = "number";
                }

                // Make sure that null and NaN values aren't set (#7116)
                if (value == null || value !== value) {
                    return;
                }

                // If a number, add 'px' to the (except for certain CSS properties)
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    value += "px";
                }

                // Support: IE9-11+
                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    style[name] = value;
                }

            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[name];
            }
        },

        css: function (elem, name, extra, styles) {
            var val, num, hooks, origName = jQuery.camelCase(name);

            // Make sure that we're working with the right name
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }

            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }

            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }

            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
            }
            return val;
        }
    });

    jQuery.each(["height", "width"], function (i, name) {
        jQuery.cssHooks[name] = {
            get: function (elem, computed, extra) {
                if (computed) {

                    // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
                        return getWidthOrHeight(elem, name, extra);
                    }) : getWidthOrHeight(elem, name, extra);
                }
            },

            set: function (elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(
                elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
            }
        };
    });

    // Support: Android 2.3
    jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
        if (computed) {
            return jQuery.swap(elem, {
                "display": "inline-block"
            }, curCSS, [elem, "marginRight"]);
        }
    });

    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function (value) {
                var i = 0,
                    expanded = {},

                    // Assumes a single number if not a string
                    parts = typeof value === "string" ? value.split(" ") : [value];

                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] =
                    parts[i] || parts[i - 2] || parts[0];
                }

                return expanded;
            }
        };

        if (!rmargin.test(prefix)) {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });

    jQuery.fn.extend({
        css: function (name, value) {
            return access(this, function (elem, name, value) {
                var styles, len, map = {},
                    i = 0;

                if (jQuery.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;

                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }

                    return map;
                }

                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        },
        show: function () {
            return showHide(this, true);
        },
        hide: function () {
            return showHide(this);
        },
        toggle: function (state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }

            return this.each(function () {
                if (isHidden(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });


    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;

    Tween.prototype = {
        constructor: Tween,
        init: function (elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || "swing";
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function () {
            var hooks = Tween.propHooks[this.prop];

            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function (percent) {
            var eased, hooks = Tween.propHooks[this.prop];

            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](
                percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;

            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }

            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };

    Tween.prototype.init.prototype = Tween.prototype;

    Tween.propHooks = {
        _default: {
            get: function (tween) {
                var result;

                if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    return tween.elem[tween.prop];
                }

                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function (tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };

    // Support: IE9
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function (tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };

    jQuery.easing = {
        linear: function (p) {
            return p;
        },
        swing: function (p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        }
    };

    jQuery.fx = Tween.prototype.init;

    // Back Compat <1.8 extension point
    jQuery.fx.step = {};




    var
    fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
        rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
        rrun = /queueHooks$/,
        animationPrefilters = [defaultPrefilter],
        tweeners = {
            "*": [function (prop, value) {
                var tween = this.createTween(prop, value),
                    target = tween.cur(),
                    parts = rfxnum.exec(value),
                    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

                    // Starting value computation is required for potential unit mismatches
                    start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
                    scale = 1,
                    maxIterations = 20;

                if (start && start[3] !== unit) {
                    // Trust units reported by jQuery.css
                    unit = unit || start[3];

                    // Make sure we update the tween properties later on
                    parts = parts || [];

                    // Iteratively approximate from a nonzero starting point
                    start = +target || 1;

                    do {
                        // If previous iteration zeroed out, double until we get *something*.
                        // Use string for doubling so we don't accidentally see scale as unchanged below
                        scale = scale || ".5";

                        // Adjust and apply
                        start = start / scale;
                        jQuery.style(tween.elem, prop, start + unit);

                        // Update scale, tolerating zero or NaN from tween.cur(),
                        // break the loop if scale is unchanged or perfect, or if we've just had enough
                    } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
                }

                // Update tween properties
                if (parts) {
                    start = tween.start = +start || +target || 0;
                    tween.unit = unit;
                    // If a +=/-= token was provided, we're doing a relative animation
                    tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
                }

                return tween;
            }]
        };

    // Animations created synchronously will run synchronously


    function createFxNow() {
        setTimeout(function () {
            fxNow = undefined;
        });
        return (fxNow = jQuery.now());
    }

    // Generate parameters to create a standard animation


    function genFx(type, includeWidth) {
        var which, i = 0,
            attrs = {
                height: type
            };

        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }

        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }

        return attrs;
    }

    function createTween(value, prop, animation) {
        var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]),
            index = 0,
            length = collection.length;
        for (; index < length; index++) {
            if ((tween = collection[index].call(animation, prop, value))) {

                // We're done with this property
                return tween;
            }
        }
    }

    function defaultPrefilter(elem, props, opts) { /* jshint validthis: true */
        var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHidden(elem),
            dataShow = data_priv.get(elem, "fxshow");

        // Handle queue: false promises
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function () {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;

            anim.always(function () {
                // Ensure the complete handler is called before this completes
                anim.always(function () {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }

        // Height/width overflow pass
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            // Make sure that nothing sneaks out
            // Record all 3 overflow attributes because IE9-10 do not
            // change the overflow attribute when overflowX and
            // overflowY are set to the same value
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];

            // Set display property to inline-block for height/width
            // animations on inline elements that are having width/height animated
            display = jQuery.css(elem, "display");

            // Test default display if display is currently "none"
            checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

            if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
                style.display = "inline-block";
            }
        }

        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function () {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }

        // show/hide pass
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.exec(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {

                    // If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

                // Any non-fx value stops us from restoring the original display value
            } else {
                display = undefined;
            }
        }

        if (!jQuery.isEmptyObject(orig)) {
            if (dataShow) {
                if ("hidden" in dataShow) {
                    hidden = dataShow.hidden;
                }
            } else {
                dataShow = data_priv.access(elem, "fxshow", {});
            }

            // Store state if its toggle - enables .stop().toggle() to "reverse"
            if (toggle) {
                dataShow.hidden = !hidden;
            }
            if (hidden) {
                jQuery(elem).show();
            } else {
                anim.done(function () {
                    jQuery(elem).hide();
                });
            }
            anim.done(function () {
                var prop;

                data_priv.remove(elem, "fxshow");
                for (prop in orig) {
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            for (prop in orig) {
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

                if (!(prop in dataShow)) {
                    dataShow[prop] = tween.start;
                    if (hidden) {
                        tween.end = tween.start;
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }

            // If this is a noop like .hide().hide(), restore an overwritten display value
        } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
            style.display = display;
        }
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;

        // camelCase, specialEasing and expand cssHook pass
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (jQuery.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }

            if (index !== name) {
                props[name] = value;
                delete props[index];
            }

            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];

                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }

    function Animation(elem, properties, options) {
        var result, stopped, index = 0,
            length = animationPrefilters.length,
            deferred = jQuery.Deferred().always(function () {
                // Don't match elem in the :animated selector
                delete tick.elem;
            }),
            tick = function () {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                    // Support: Android 2.3
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;

                for (; index < length; index++) {
                    animation.tweens[index].run(percent);
                }

                deferred.notifyWith(elem, [animation, percent, remaining]);

                if (percent < 1 && length) {
                    return remaining;
                } else {
                    deferred.resolveWith(elem, [animation]);
                    return false;
                }
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {}
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function (prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function (gotoEnd) {
                    var index = 0,
                        // If we are going to the end, we want to run all the tweens
                        // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1);
                    }

                    // Resolve when we played the last frame; otherwise, reject
                    if (gotoEnd) {
                        deferred.resolveWith(elem, [animation, gotoEnd]);
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd]);
                    }
                    return this;
                }
            }),
            props = animation.props;

        propFilter(props, animation.opts.specialEasing);

        for (; index < length; index++) {
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                return result;
            }
        }

        jQuery.map(props, createTween, animation);

        if (jQuery.isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }

        jQuery.fx.timer(
        jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));

        // attach callbacks from options
        return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    }

    jQuery.Animation = jQuery.extend(Animation, {

        tweener: function (props, callback) {
            if (jQuery.isFunction(props)) {
                callback = props;
                props = ["*"];
            } else {
                props = props.split(" ");
            }

            var prop, index = 0,
                length = props.length;

            for (; index < length; index++) {
                prop = props[index];
                tweeners[prop] = tweeners[prop] || [];
                tweeners[prop].unshift(callback);
            }
        },

        prefilter: function (callback, prepend) {
            if (prepend) {
                animationPrefilters.unshift(callback);
            } else {
                animationPrefilters.push(callback);
            }
        }
    });

    jQuery.speed = function (speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };

        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }

        // Queueing
        opt.old = opt.complete;

        opt.complete = function () {
            if (jQuery.isFunction(opt.old)) {
                opt.old.call(this);
            }

            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };

        return opt;
    };

    jQuery.fn.extend({
        fadeTo: function (speed, to, easing, callback) {

            // Show any hidden elements after setting opacity to 0
            return this.filter(isHidden).css("opacity", 0).show()

            // Animate to the value specified
            .end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function (prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function () {
                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation(this, jQuery.extend({}, prop), optall);

                    // Empty animations, or finishing resolves immediately
                    if (empty || data_priv.get(this, "finish")) {
                        anim.stop(true);
                    }
                };
            doAnimation.finish = doAnimation;

            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function (type, clearQueue, gotoEnd) {
            var stopQueue = function (hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };

            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }

            return this.each(function () {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = data_priv.get(this);

                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }

                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }

                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function (type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function () {
                var index, data = data_priv.get(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;

                // Enable finishing flag on private data
                data.finish = true;

                // Empty the queue first
                jQuery.queue(this, type, []);

                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }

                // Look for any active animations, and finish them
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }

                // Look for any animations in the old queue and finish them
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }

                // Turn off finishing flag
                delete data.finish;
            });
        }
    });

    jQuery.each(["toggle", "show", "hide"], function (i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function (speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });

    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });

    jQuery.timers = [];
    jQuery.fx.tick = function () {
        var timer, i = 0,
            timers = jQuery.timers;

        fxNow = jQuery.now();

        for (; i < timers.length; i++) {
            timer = timers[i];
            // Checks the timer has not already been removed
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }

        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };

    jQuery.fx.timer = function (timer) {
        jQuery.timers.push(timer);
        if (timer()) {
            jQuery.fx.start();
        } else {
            jQuery.timers.pop();
        }
    };

    jQuery.fx.interval = 13;

    jQuery.fx.start = function () {
        if (!timerId) {
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };

    jQuery.fx.stop = function () {
        clearInterval(timerId);
        timerId = null;
    };

    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };


    // Based off of the plugin by Clint Helfers, with permission.
    // http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function (time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";

        return this.queue(type, function (next, hooks) {
            var timeout = setTimeout(next, time);
            hooks.stop = function () {
                clearTimeout(timeout);
            };
        });
    };


    (function () {
        var input = document.createElement("input"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));

        input.type = "checkbox";

        // Support: iOS<=5.1, Android<=4.2+
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";

        // Support: IE<=11+
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;

        // Support: Android<=2.3
        // Options inside disabled selects are incorrectly marked as disabled
        select.disabled = true;
        support.optDisabled = !opt.disabled;

        // Support: IE<=11+
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();


    var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle;

    jQuery.fn.extend({
        attr: function (name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },

        removeAttr: function (name) {
            return this.each(function () {
                jQuery.removeAttr(this, name);
            });
        }
    });

    jQuery.extend({
        attr: function (elem, name, value) {
            var hooks, ret, nType = elem.nodeType;

            // don't get/set attributes on text, comment and attribute nodes
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }

            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === strundefined) {
                return jQuery.prop(elem, name, value);
            }

            // All attributes are lowercase
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                name = name.toLowerCase();
                hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }

            if (value !== undefined) {

                if (value === null) {
                    jQuery.removeAttr(elem, name);

                } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;

                } else {
                    elem.setAttribute(name, value + "");
                    return value;
                }

            } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;

            } else {
                ret = jQuery.find.attr(elem, name);

                // Non-existent attributes return null, we normalize to undefined
                return ret == null ? undefined : ret;
            }
        },

        removeAttr: function (elem, value) {
            var name, propName, i = 0,
                attrNames = value && value.match(rnotwhite);

            if (attrNames && elem.nodeType === 1) {
                while ((name = attrNames[i++])) {
                    propName = jQuery.propFix[name] || name;

                    // Boolean attributes get special treatment (#10870)
                    if (jQuery.expr.match.bool.test(name)) {
                        // Set corresponding property to false
                        elem[propName] = false;
                    }

                    elem.removeAttribute(name);
                }
            }
        },

        attrHooks: {
            type: {
                set: function (elem, value) {
                    if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        }
    });

    // Hooks for boolean attributes
    boolHook = {
        set: function (elem, value, name) {
            if (value === false) {
                // Remove boolean attributes when set to false
                jQuery.removeAttr(elem, name);
            } else {
                elem.setAttribute(name, name);
            }
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;

        attrHandle[name] = function (elem, name, isXML) {
            var ret, handle;
            if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[name];
                attrHandle[name] = ret;
                ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                attrHandle[name] = handle;
            }
            return ret;
        };
    });




    var rfocusable = /^(?:input|select|textarea|button)$/i;

    jQuery.fn.extend({
        prop: function (name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },

        removeProp: function (name) {
            return this.each(function () {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });

    jQuery.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },

        prop: function (elem, name, value) {
            var ret, hooks, notxml, nType = elem.nodeType;

            // Don't get/set properties on text, comment and attribute nodes
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                return;
            }

            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

            if (notxml) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }

            if (value !== undefined) {
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : (elem[name] = value);

            } else {
                return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
            }
        },

        propHooks: {
            tabIndex: {
                get: function (elem) {
                    return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
                }
            }
        }
    });

    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function (elem) {
                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            }
        };
    }

    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        jQuery.propFix[this.toLowerCase()] = this;
    });




    var rclass = /[\t\r\n\f]/g;

    jQuery.fn.extend({
        addClass: function (value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = typeof value === "string" && value,
                i = 0,
                len = this.length;

            if (jQuery.isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }

            if (proceed) {
                // The disjunction here is for better compressibility (see removeClass)
                classes = (value || "").match(rnotwhite) || [];

                for (; i < len; i++) {
                    elem = this[i];
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }

                        // only assign if different to avoid unneeded rendering.
                        finalValue = jQuery.trim(cur);
                        if (elem.className !== finalValue) {
                            elem.className = finalValue;
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function (value) {
            var classes, elem, cur, clazz, j, finalValue, proceed = arguments.length === 0 || typeof value === "string" && value,
                i = 0,
                len = this.length;

            if (jQuery.isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            if (proceed) {
                classes = (value || "").match(rnotwhite) || [];

                for (; i < len; i++) {
                    elem = this[i];
                    // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {
                            // Remove *all* instances
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }

                        // Only assign if different to avoid unneeded rendering.
                        finalValue = value ? jQuery.trim(cur) : "";
                        if (elem.className !== finalValue) {
                            elem.className = finalValue;
                        }
                    }
                }
            }

            return this;
        },

        toggleClass: function (value, stateVal) {
            var type = typeof value;

            if (typeof stateVal === "boolean" && type === "string") {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }

            if (jQuery.isFunction(value)) {
                return this.each(function (i) {
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }

            return this.each(function () {
                if (type === "string") {
                    // Toggle individual class names
                    var className, i = 0,
                        self = jQuery(this),
                        classNames = value.match(rnotwhite) || [];

                    while ((className = classNames[i++])) {
                        // Check each className given, space separated list
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }

                    // Toggle whole class name
                } else if (type === strundefined || type === "boolean") {
                    if (this.className) {
                        // store className if set
                        data_priv.set(this, "__className__", this.className);
                    }

                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
                }
            });
        },

        hasClass: function (selector) {
            var className = " " + selector + " ",
                i = 0,
                l = this.length;
            for (; i < l; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    return true;
                }
            }

            return false;
        }
    });




    var rreturn = /\r/g;

    jQuery.fn.extend({
        val: function (value) {
            var hooks, ret, isFunction, elem = this[0];

            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        return ret;
                    }

                    ret = elem.value;

                    return typeof ret === "string" ?
                    // Handle most common string cases
                    ret.replace(rreturn, "") :
                    // Handle cases where value is null/undef or number
                    ret == null ? "" : ret;
                }

                return;
            }

            isFunction = jQuery.isFunction(value);

            return this.each(function (i) {
                var val;

                if (this.nodeType !== 1) {
                    return;
                }

                if (isFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                    val = "";

                } else if (typeof val === "number") {
                    val += "";

                } else if (jQuery.isArray(val)) {
                    val = jQuery.map(val, function (value) {
                        return value == null ? "" : value + "";
                    });
                }

                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });

    jQuery.extend({
        valHooks: {
            option: {
                get: function (elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val :
                    // Support: IE10-11+
                    // option.text throws exceptions (#14686, #14858)
                    jQuery.trim(jQuery.text(elem));
                }
            },
            select: {
                get: function (elem) {
                    var value, option, options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one" || index < 0,
                        values = one ? null : [],
                        max = one ? index + 1 : options.length,
                        i = index < 0 ? max : one ? index : 0;

                    // Loop through all the selected options
                    for (; i < max; i++) {
                        option = options[i];

                        // IE6-9 doesn't update selected after form reset (#2551)
                        if ((option.selected || i === index) &&
                        // Don't return options that are disabled or in a disabled optgroup
                        (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

                            // Get the specific value for the option
                            value = jQuery(option).val();

                            // We don't need an array for one selects
                            if (one) {
                                return value;
                            }

                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }

                    return values;
                },

                set: function (elem, value) {
                    var optionSet, option, options = elem.options,
                        values = jQuery.makeArray(value),
                        i = options.length;

                    while (i--) {
                        option = options[i];
                        if ((option.selected = jQuery.inArray(option.value, values) >= 0)) {
                            optionSet = true;
                        }
                    }

                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    });

    // Radios and checkboxes getter/setter
    jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {
            set: function (elem, value) {
                if (jQuery.isArray(value)) {
                    return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function (elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });




    // Return jQuery for attributes-only inclusion

    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

        // Handle event binding
        jQuery.fn[name] = function (data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });

    jQuery.fn.extend({
        hover: function (fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },

        bind: function (types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function (types, fn) {
            return this.off(types, null, fn);
        },

        delegate: function (selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function (selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });


    var nonce = jQuery.now();

    var rquery = (/\?/);



    // Support: Android 2.3
    // Workaround failure to string-cast null input
    jQuery.parseJSON = function (data) {
        return JSON.parse(data + "");
    };


    // Cross-browser xml parsing
    jQuery.parseXML = function (data) {
        var xml, tmp;
        if (!data || typeof data !== "string") {
            return null;
        }

        // Support: IE9
        try {
            tmp = new DOMParser();
            xml = tmp.parseFromString(data, "text/xml");
        } catch (e) {
            xml = undefined;
        }

        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };


    var
    rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
        prefilters = {},

/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
        transports = {},

        // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat("*"),

        // Document location
        ajaxLocation = window.location.href,

        // Segment location into parts
        ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport


    function addToPrefiltersOrTransports(structure) {

        // dataTypeExpression is optional and defaults to "*"
        return function (dataTypeExpression, func) {

            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType, i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

            if (jQuery.isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while ((dataType = dataTypes[i++])) {
                    // Prepend if requested
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);

                        // Otherwise append
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }

    // Base inspection function for prefilters and transports


    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

        var inspected = {},
            seekingTransport = (structure === transports);

        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }

    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887


    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }

        return target;
    }

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */

    function ajaxHandleResponses(s, jqXHR, responses) {

        var ct, type, finalDataType, firstDataType, contents = s.contents,
            dataTypes = s.dataTypes;

        // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }

        // Check if we're dealing with a known content-type
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {
            // Try convertible dataTypes
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */

    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {},
            // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice();

        // Create converters map with lowercased keys
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }

        current = dataTypes.shift();

        // Convert to each sequential dataType
        while (current) {

            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }

            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }

            prev = current;
            current = dataTypes.shift();

            if (current) {

                // There's only work to do if current dataType is non-auto
                if (current === "*") {

                    current = prev;

                    // Convert response if prev dataType is non-auto and differs from current
                } else if (prev !== "*" && prev !== current) {

                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];

                    // If none found, seek a pair
                    if (!conv) {
                        for (conv2 in converters) {

                            // If conv2 outputs current
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {

                                // If prev can be converted to accepted input
                                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                if (conv) {
                                    // Condense equivalence converters
                                    if (conv === true) {
                                        conv = converters[conv2];

                                        // Otherwise, insert the intermediate dataType
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    // Apply converter (if not an equivalence)
                    if (conv !== true) {

                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s["throws"]) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }

        return {
            state: "success",
            data: response
        };
    }

    jQuery.extend({

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },

            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },

            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {

                // Convert anything to text
                "* text": String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": jQuery.parseJSON,

                // Parse text as xml
                "text xml": jQuery.parseXML
            },

            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function (target, settings) {
            return settings ?

            // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

            // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },

        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),

        // Main method
        ajax: function (url, options) {

            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var transport,
            // URL without anti-cache param
            cacheURL,
            // Response headers
            responseHeadersString, responseHeaders,
            // timeout handle
            timeoutTimer,
            // Cross-domain detection vars
            parts,
            // To know if global events are to be dispatched
            fireGlobals,
            // Loop variable
            i,
            // Create the final options object
            s = jQuery.ajaxSetup({}, options),
                // Callbacks context
                callbackContext = s.context || s,
                // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),
                // Status-dependent callbacks
                statusCode = s.statusCode || {},
                // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},
                // The jqXHR state
                state = 0,
                // Default abort message
                strAbort = "canceled",
                // Fake xhr
                jqXHR = {
                    readyState: 0,

                    // Builds headers hashtable if needed
                    getResponseHeader: function (key) {
                        var match;
                        if (state === 2) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while ((match = rheaders.exec(responseHeadersString))) {
                                    responseHeaders[match[1].toLowerCase()] = match[2];
                                }
                            }
                            match = responseHeaders[key.toLowerCase()];
                        }
                        return match == null ? null : match;
                    },

                    // Raw string
                    getAllResponseHeaders: function () {
                        return state === 2 ? responseHeadersString : null;
                    },

                    // Caches the header
                    setRequestHeader: function (name, value) {
                        var lname = name.toLowerCase();
                        if (!state) {
                            name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    },

                    // Overrides response content-type header
                    overrideMimeType: function (type) {
                        if (!state) {
                            s.mimeType = type;
                        }
                        return this;
                    },

                    // Status-dependent callbacks
                    statusCode: function (map) {
                        var code;
                        if (map) {
                            if (state < 2) {
                                for (code in map) {
                                    // Lazy-add the new callback in a way that preserves old ones
                                    statusCode[code] = [statusCode[code], map[code]];
                                }
                            } else {
                                // Execute the appropriate callbacks
                                jqXHR.always(map[jqXHR.status]);
                            }
                        }
                        return this;
                    },

                    // Cancel the request
                    abort: function (statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                };

            // Attach deferreds
            deferred.promise(jqXHR).complete = completeDeferred.add;
            jqXHR.success = jqXHR.done;
            jqXHR.error = jqXHR.fail;

            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;

            // Extract dataTypes list
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

            // A cross-domain request is in order when we have a protocol:host:port mismatch
            if (s.crossDomain == null) {
                parts = rurl.exec(s.url.toLowerCase());
                s.crossDomain = !! (parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }

            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }

            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

            // If request was aborted inside a prefilter, stop there
            if (state === 2) {
                return jqXHR;
            }

            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global;

            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);

            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            cacheURL = s.url;

            // More options handling for requests with no content
            if (!s.hasContent) {

                // If data is available, append data to url
                if (s.data) {
                    cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }

                // Add anti-cache in url if needed
                if (s.cache === false) {
                    s.url = rts.test(cacheURL) ?

                    // If there is already a '_' parameter, set its value
                    cacheURL.replace(rts, "$1_=" + nonce++) :

                    // Otherwise add one to the end
                    cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
                }
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }

            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

            // Check for headers option
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }

            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                // Abort if not done already and return
                return jqXHR.abort();
            }

            // Aborting is no longer a cancellation
            strAbort = "abort";

            // Install callbacks on deferreds
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                jqXHR[i](s[i]);
            }

            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

            // If no transport, we auto-abort
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;

                // Send global event
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                }
                // Timeout
                if (s.async && s.timeout > 0) {
                    timeoutTimer = setTimeout(function () {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }

                try {
                    state = 1;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    // Propagate exception as error if not done
                    if (state < 2) {
                        done(-1, e);
                        // Simply rethrow otherwise
                    } else {
                        throw e;
                    }
                }
            }

            // Callback for when everything is done


            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;

                // Called once
                if (state === 2) {
                    return;
                }

                // State is "done" now
                state = 2;

                // Clear timeout if it exists
                if (timeoutTimer) {
                    clearTimeout(timeoutTimer);
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;

                // Get response data
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }

                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);

                // If successful, handle type chaining
                if (isSuccess) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }

                    // if no content
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";

                        // if not modified
                    } else if (status === 304) {
                        statusText = "notmodified";

                        // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";

                // Success/Error
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                }

                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;

                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
                }

                // Complete
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                    // Handle the global AJAX counter
                    if (!(--jQuery.active)) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }

            return jqXHR;
        },

        getJSON: function (url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },

        getScript: function (url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });

    jQuery.each(["get", "post"], function (i, method) {
        jQuery[method] = function (url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            return jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            });
        };
    });


    jQuery._evalUrl = function (url) {
        return jQuery.ajax({
            url: url,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        });
    };


    jQuery.fn.extend({
        wrapAll: function (html) {
            var wrap;

            if (jQuery.isFunction(html)) {
                return this.each(function (i) {
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }

            if (this[0]) {

                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }

                wrap.map(function () {
                    var elem = this;

                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                    }

                    return elem;
                }).append(this);
            }

            return this;
        },

        wrapInner: function (html) {
            if (jQuery.isFunction(html)) {
                return this.each(function (i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }

            return this.each(function () {
                var self = jQuery(this),
                    contents = self.contents();

                if (contents.length) {
                    contents.wrapAll(html);

                } else {
                    self.append(html);
                }
            });
        },

        wrap: function (html) {
            var isFunction = jQuery.isFunction(html);

            return this.each(function (i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },

        unwrap: function () {
            return this.parent().each(function () {
                if (!jQuery.nodeName(this, "body")) {
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });


    jQuery.expr.filters.hidden = function (elem) {
        // Support: Opera <= 12.12
        // Opera reports offsetWidths and offsetHeights less than zero on some elements
        return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
    };
    jQuery.expr.filters.visible = function (elem) {
        return !jQuery.expr.filters.hidden(elem);
    };




    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
        var name;

        if (jQuery.isArray(obj)) {
            // Serialize array item.
            jQuery.each(obj, function (i, v) {
                if (traditional || rbracket.test(prefix)) {
                    // Treat each array item as a scalar.
                    add(prefix, v);

                } else {
                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });

        } else if (!traditional && jQuery.type(obj) === "object") {
            // Serialize object item.
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }

        } else {
            // Serialize scalar item.
            add(prefix, obj);
        }
    }

    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function (a, traditional) {
        var prefix, s = [],
            add = function (key, value) {
                // If value is a function, invoke it and return its value
                value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
                s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
            };

        // Set traditional to true for jQuery <= 1.3.2 behavior.
        if (traditional === undefined) {
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }

        // If an array was passed in, assume that it is an array of form elements.
        if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
            // Serialize the form elements
            jQuery.each(a, function () {
                add(this.name, this.value);
            });

        } else {
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }

        // Return the resulting serialization
        return s.join("&").replace(r20, "+");
    };

    jQuery.fn.extend({
        serialize: function () {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function () {
                var type = this.type;

                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function (i, elem) {
                var val = jQuery(this).val();

                return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });


    jQuery.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };

    var xhrId = 0,
        xhrCallbacks = {},
        xhrSuccessStatus = {
            // file protocol always yields status code 0, assume 200
            0: 200,
            // Support: IE9
            // #1450: sometimes IE returns 1223 when it should be 204
            1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();

    // Support: IE9
    // Open requests must be manually aborted on unload (#5280)
    // See https://support.microsoft.com/kb/2856746 for more info
    if (window.attachEvent) {
        window.attachEvent("onunload", function () {
            for (var key in xhrCallbacks) {
                xhrCallbacks[key]();
            }
        });
    }

    support.cors = !! xhrSupported && ("withCredentials" in xhrSupported);
    support.ajax = xhrSupported = !! xhrSupported;

    jQuery.ajaxTransport(function (options) {
        var callback;

        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function (headers, complete) {
                    var i, xhr = options.xhr(),
                        id = ++xhrId;

                    xhr.open(options.type, options.url, options.async, options.username, options.password);

                    // Apply custom fields if provided
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    }

                    // Override mime type if needed
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    }

                    // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    }

                    // Set headers
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    }

                    // Callback
                    callback = function (type) {
                        return function () {
                            if (callback) {
                                delete xhrCallbacks[id];
                                callback = xhr.onload = xhr.onerror = null;

                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") {
                                    complete(
                                    // file: protocol always yields status 0; see #8605, #14207
                                    xhr.status, xhr.statusText);
                                } else {
                                    complete(
                                    xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,
                                    // Support: IE9
                                    // Accessing binary-data responseText throws an exception
                                    // (#11426)
                                    typeof xhr.responseText === "string" ? {
                                        text: xhr.responseText
                                    } : undefined, xhr.getAllResponseHeaders());
                                }
                            }
                        };
                    };

                    // Listen to events
                    xhr.onload = callback();
                    xhr.onerror = callback("error");

                    // Create the abort callback
                    callback = xhrCallbacks[id] = callback("abort");

                    try {
                        // Do send the request (this may raise an exception)
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) {
                        // #14683: Only rethrow if this hasn't been notified as an error yet
                        if (callback) {
                            throw e;
                        }
                    }
                },

                abort: function () {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });




    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });

    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    });

    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function (s) {
        // This transport only deals with cross domain requests
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function (_, complete) {
                    script = jQuery("<script>").prop({
                        async: true,
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function (evt) {
                        script.remove();
                        callback = null;
                        if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type);
                        }
                    });
                    document.head.appendChild(script[0]);
                },
                abort: function () {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });




    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;

    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
            this[callback] = true;
            return callback;
        }
    });

    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {

            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

            // Insert callback into url or form data
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }

            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function () {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };

            // force json dataType
            s.dataTypes[0] = "json";

            // Install callback
            overwritten = window[callbackName];
            window[callbackName] = function () {
                responseContainer = arguments;
            };

            // Clean-up function (fires after converters)
            jqXHR.always(function () {
                // Restore preexisting value
                window[callbackName] = overwritten;

                // Save back as free
                if (s[callbackName]) {
                    // make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    // save the callback name for future use
                    oldCallbacks.push(callbackName);
                }

                // Call if it was a function and we have a response
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }

                responseContainer = overwritten = undefined;
            });

            // Delegate to script
            return "script";
        }
    });




    // data: string of html
    // context (optional): If specified, the fragment will be created in this context, defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function (data, context, keepScripts) {
        if (!data || typeof data !== "string") {
            return null;
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        context = context || document;

        var parsed = rsingleTag.exec(data),
            scripts = !keepScripts && [];

        // Single tag
        if (parsed) {
            return [context.createElement(parsed[1])];
        }

        parsed = jQuery.buildFragment([data], context, scripts);

        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }

        return jQuery.merge([], parsed.childNodes);
    };


    // Keep a copy of the old load method
    var _load = jQuery.fn.load;

    /**
     * Load a url into a page
     */
    jQuery.fn.load = function (url, params, callback) {
        if (typeof url !== "string" && _load) {
            return _load.apply(this, arguments);
        }

        var selector, type, response, self = this,
            off = url.indexOf(" ");

        if (off >= 0) {
            selector = jQuery.trim(url.slice(off));
            url = url.slice(0, off);
        }

        // If it's a function
        if (jQuery.isFunction(params)) {

            // We assume that it's the callback
            callback = params;
            params = undefined;

            // Otherwise, build a param string
        } else if (params && typeof params === "object") {
            type = "POST";
        }

        // If we have elements to modify, make the request
        if (self.length > 0) {
            jQuery.ajax({
                url: url,

                // if "type" variable is undefined, then "GET" method will be used
                type: type,
                dataType: "html",
                data: params
            }).done(function (responseText) {

                // Save response for use in complete callback
                response = arguments;

                self.html(selector ?

                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

                // Otherwise use the full result
                responseText);

            }).complete(callback &&
            function (jqXHR, status) {
                self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
            });
        }

        return this;
    };




    // Attach a bunch of functions for handling common AJAX events
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
        jQuery.fn[type] = function (fn) {
            return this.on(type, fn);
        };
    });




    jQuery.expr.filters.animated = function (elem) {
        return jQuery.grep(jQuery.timers, function (fn) {
            return elem === fn.elem;
        }).length;
    };




    var docElem = window.document.documentElement;

    /**
     * Gets a window from an element
     */

    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    jQuery.offset = {
        setOffset: function (elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                curElem = jQuery(elem),
                props = {};

            // Set position first, in-case top/left are set even on static elem
            if (position === "static") {
                elem.style.position = "relative";
            }

            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;

            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }

            if (jQuery.isFunction(options)) {
                options = options.call(elem, i, curOffset);
            }

            if (options.top != null) {
                props.top = (options.top - curOffset.top) + curTop;
            }
            if (options.left != null) {
                props.left = (options.left - curOffset.left) + curLeft;
            }

            if ("using" in options) {
                options.using.call(elem, props);

            } else {
                curElem.css(props);
            }
        }
    };

    jQuery.fn.extend({
        offset: function (options) {
            if (arguments.length) {
                return options === undefined ? this : this.each(function (i) {
                    jQuery.offset.setOffset(this, options, i);
                });
            }

            var docElem, win, elem = this[0],
                box = {
                    top: 0,
                    left: 0
                },
                doc = elem && elem.ownerDocument;

            if (!doc) {
                return;
            }

            docElem = doc.documentElement;

            // Make sure it's not a disconnected DOM node
            if (!jQuery.contains(docElem, elem)) {
                return box;
            }

            // Support: BlackBerry 5, iOS 3 (original iPhone)
            // If we don't have gBCR, just use 0,0 rather than error
            if (typeof elem.getBoundingClientRect !== strundefined) {
                box = elem.getBoundingClientRect();
            }
            win = getWindow(doc);
            return {
                top: box.top + win.pageYOffset - docElem.clientTop,
                left: box.left + win.pageXOffset - docElem.clientLeft
            };
        },

        position: function () {
            if (!this[0]) {
                return;
            }

            var offsetParent, offset, elem = this[0],
                parentOffset = {
                    top: 0,
                    left: 0
                };

            // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
            if (jQuery.css(elem, "position") === "fixed") {
                // Assume getBoundingClientRect is there when computed position is fixed
                offset = elem.getBoundingClientRect();

            } else {
                // Get *real* offsetParent
                offsetParent = this.offsetParent();

                // Get correct offsets
                offset = this.offset();
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    parentOffset = offsetParent.offset();
                }

                // Add offsetParent borders
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }

            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },

        offsetParent: function () {
            return this.map(function () {
                var offsetParent = this.offsetParent || docElem;

                while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
                    offsetParent = offsetParent.offsetParent;
                }

                return offsetParent || docElem;
            });
        }
    });

    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (method, prop) {
        var top = "pageYOffset" === prop;

        jQuery.fn[method] = function (val) {
            return access(this, function (elem, method, val) {
                var win = getWindow(elem);

                if (val === undefined) {
                    return win ? win[prop] : elem[method];
                }

                if (win) {
                    win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);

                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length, null);
        };
    });

    // Support: Safari<7+, Chrome<37+
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });


    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function (name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function (defaultExtra, funcName) {
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function (margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

                return access(this, function (elem, type, value) {
                    var doc;

                    if (jQuery.isWindow(elem)) {
                        // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                        // isn't a whole lot we can do. See pull request at this URL for discussion:
                        // https://github.com/jquery/jquery/pull/764
                        return elem.document.documentElement["client" + name];
                    }

                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;

                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(
                        elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }

                    return value === undefined ?
                    // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type, extra) :

                    // Set width or height on the element
                    jQuery.style(elem, type, value, extra);
                }, type, chainable ? margin : undefined, chainable, null);
            };
        });
    });


    // The number of elements contained in the matched element set
    jQuery.fn.size = function () {
        return this.length;
    };

    jQuery.fn.andSelf = jQuery.fn.addBack;




    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function () {
            return jQuery;
        });
    }




    var
    // Map over jQuery in case of overwrite
    _jQuery = window.jQuery,

        // Map over the $ in case of overwrite
        _$ = window.$;

    jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }

        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }

        return jQuery;
    };

    // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (typeof noGlobal === strundefined) {
        window.jQuery = window.$ = jQuery;
    }




    return jQuery;

}));

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;
(function () {

    /**
     * Block-Level Grammar
     */

    var block = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: noop,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: noop,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: noop,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };

    block.bullet = /(?:[*+-]|\d+\.)/;
    block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
    block.item = replace(block.item, 'gm')(/bull/g, block.bullet)();

    block.list = replace(block.list)(/bull/g, block.bullet)('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')('def', '\\n+(?=' + block.def.source + ')')();

    block.blockquote = replace(block.blockquote)('def', block.def)();

    block._tag = '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code' + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo' + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

    block.html = replace(block.html)('comment', /<!--[\s\S]*?-->/)('closed', /<(tag)[\s\S]+?<\/\1>/)('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();

    block.paragraph = replace(block.paragraph)('hr', block.hr)('heading', block.heading)('lheading', block.lheading)('blockquote', block.blockquote)('tag', '<' + block._tag)('def', block.def)();

    /**
     * Normal Block Grammar
     */

    block.normal = merge({}, block);

    /**
     * GFM Block Grammar
     */

    block.gfm = merge({}, block.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
    });

    block.gfm.paragraph = replace(block.paragraph)('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|')();

    /**
     * GFM + Tables Block Grammar
     */

    block.tables = merge({}, block.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    });

    /**
     * Block Lexer
     */

    function Lexer(options) {
        this.tokens = [];
        this.tokens.links = {};
        this.options = options || marked.defaults;
        this.rules = block.normal;

        if (this.options.gfm) {
            if (this.options.tables) {
                this.rules = block.tables;
            } else {
                this.rules = block.gfm;
            }
        }
    }

    /**
     * Expose Block Rules
     */

    Lexer.rules = block;

    /**
     * Static Lex Method
     */

    Lexer.lex = function (src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src);
    };

    /**
     * Preprocessing
     */

    Lexer.prototype.lex = function (src) {
        src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');

        return this.token(src, true);
    };

    /**
     * Lexing
     */

    Lexer.prototype.token = function (src, top, bq) {
        var src = src.replace(/^ +$/gm, ''),
            next, loose, cap, bull, b, item, space, i, l;

        while (src) {
            // newline
            if (cap = this.rules.newline.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[0].length > 1) {
                    this.tokens.push({
                        type: 'space'
                    });
                }
            }

            // code
            if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                cap = cap[0].replace(/^ {4}/gm, '');
                this.tokens.push({
                    type: 'code',
                    text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
                });
                continue;
            }

            // fences (gfm)
            if (cap = this.rules.fences.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'code',
                    lang: cap[2],
                    text: cap[3]
                });
                continue;
            }

            // heading
            if (cap = this.rules.heading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'heading',
                    depth: cap[1].length,
                    text: cap[2]
                });
                continue;
            }

            // table no leading pipe (gfm)
            if (top && (cap = this.rules.nptable.exec(src))) {
                src = src.substring(cap[0].length);

                item = {
                    type: 'table',
                    header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: cap[3].replace(/\n$/, '').split('\n')
                };

                for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    } else {
                        item.align[i] = null;
                    }
                }

                for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = item.cells[i].split(/ *\| */);
                }

                this.tokens.push(item);

                continue;
            }

            // lheading
            if (cap = this.rules.lheading.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'heading',
                    depth: cap[2] === '=' ? 1 : 2,
                    text: cap[1]
                });
                continue;
            }

            // hr
            if (cap = this.rules.hr.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'hr'
                });
                continue;
            }

            // blockquote
            if (cap = this.rules.blockquote.exec(src)) {
                src = src.substring(cap[0].length);

                this.tokens.push({
                    type: 'blockquote_start'
                });

                cap = cap[0].replace(/^ *> ?/gm, '');

                // Pass `top` to keep the current
                // "toplevel" state. This is exactly
                // how markdown.pl works.
                this.token(cap, top, true);

                this.tokens.push({
                    type: 'blockquote_end'
                });

                continue;
            }

            // list
            if (cap = this.rules.list.exec(src)) {
                src = src.substring(cap[0].length);
                bull = cap[2];

                this.tokens.push({
                    type: 'list_start',
                    ordered: bull.length > 1
                });

                // Get each top-level item.
                cap = cap[0].match(this.rules.item);

                next = false;
                l = cap.length;
                i = 0;

                for (; i < l; i++) {
                    item = cap[i];

                    // Remove the list item's bullet
                    // so it is seen as the next token.
                    space = item.length;
                    item = item.replace(/^ *([*+-]|\d+\.) +/, '');

                    // Outdent whatever the
                    // list item contains. Hacky.
                    if (~item.indexOf('\n ')) {
                        space -= item.length;
                        item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
                    }

                    // Determine whether the next list item belongs here.
                    // Backpedal if it does not belong in this list.
                    if (this.options.smartLists && i !== l - 1) {
                        b = block.bullet.exec(cap[i + 1])[0];
                        if (bull !== b && !(bull.length > 1 && b.length > 1)) {
                            src = cap.slice(i + 1).join('\n') + src;
                            i = l - 1;
                        }
                    }

                    // Determine whether item is loose or not.
                    // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
                    // for discount behavior.
                    loose = next || /\n\n(?!\s*$)/.test(item);
                    if (i !== l - 1) {
                        next = item.charAt(item.length - 1) === '\n';
                        if (!loose) loose = next;
                    }

                    this.tokens.push({
                        type: loose ? 'loose_item_start' : 'list_item_start'
                    });

                    // Recurse.
                    this.token(item, false, bq);

                    this.tokens.push({
                        type: 'list_item_end'
                    });
                }

                this.tokens.push({
                    type: 'list_end'
                });

                continue;
            }

            // html
            if (cap = this.rules.html.exec(src)) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: this.options.sanitize ? 'paragraph' : 'html',
                    pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
                    text: cap[0]
                });
                continue;
            }

            // def
            if ((!bq && top) && (cap = this.rules.def.exec(src))) {
                src = src.substring(cap[0].length);
                this.tokens.links[cap[1].toLowerCase()] = {
                    href: cap[2],
                    title: cap[3]
                };
                continue;
            }

            // table (gfm)
            if (top && (cap = this.rules.table.exec(src))) {
                src = src.substring(cap[0].length);

                item = {
                    type: 'table',
                    header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
                    align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                    cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
                };

                for (i = 0; i < item.align.length; i++) {
                    if (/^ *-+: *$/.test(item.align[i])) {
                        item.align[i] = 'right';
                    } else if (/^ *:-+: *$/.test(item.align[i])) {
                        item.align[i] = 'center';
                    } else if (/^ *:-+ *$/.test(item.align[i])) {
                        item.align[i] = 'left';
                    } else {
                        item.align[i] = null;
                    }
                }

                for (i = 0; i < item.cells.length; i++) {
                    item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, '').split(/ *\| */);
                }

                this.tokens.push(item);

                continue;
            }

            // top-level paragraph
            if (top && (cap = this.rules.paragraph.exec(src))) {
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'paragraph',
                    text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
                });
                continue;
            }

            // text
            if (cap = this.rules.text.exec(src)) {
                // Top-level should never reach here.
                src = src.substring(cap[0].length);
                this.tokens.push({
                    type: 'text',
                    text: cap[0]
                });
                continue;
            }

            if (src) {
                throw new
                Error('Infinite loop on byte: ' + src.charCodeAt(0));
            }
        }

        return this.tokens;
    };

    /**
     * Inline-Level Grammar
     */

    var inline = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: noop,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: noop,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
    };

    inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
    inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

    inline.link = replace(inline.link)('inside', inline._inside)('href', inline._href)();

    inline.reflink = replace(inline.reflink)('inside', inline._inside)();

    /**
     * Normal Inline Grammar
     */

    inline.normal = merge({}, inline);

    /**
     * Pedantic Inline Grammar
     */

    inline.pedantic = merge({}, inline.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    });

    /**
     * GFM Inline Grammar
     */

    inline.gfm = merge({}, inline.normal, {
        escape: replace(inline.escape)('])', '~|])')(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: replace(inline.text)(']|', '~]|')('|', '|https?://|')()
    });

    /**
     * GFM + Line Breaks Inline Grammar
     */

    inline.breaks = merge({}, inline.gfm, {
        br: replace(inline.br)('{2,}', '*')(),
        text: replace(inline.gfm.text)('{2,}', '*')()
    });

    /**
     * Inline Lexer & Compiler
     */

    function InlineLexer(links, options) {
        this.options = options || marked.defaults;
        this.links = links;
        this.rules = inline.normal;
        this.renderer = this.options.renderer || new Renderer;
        this.renderer.options = this.options;

        if (!this.links) {
            throw new
            Error('Tokens array requires a `links` property.');
        }

        if (this.options.gfm) {
            if (this.options.breaks) {
                this.rules = inline.breaks;
            } else {
                this.rules = inline.gfm;
            }
        } else if (this.options.pedantic) {
            this.rules = inline.pedantic;
        }
    }

    /**
     * Expose Inline Rules
     */

    InlineLexer.rules = inline;

    /**
     * Static Lexing/Compiling Method
     */

    InlineLexer.output = function (src, links, options) {
        var inline = new InlineLexer(links, options);
        return inline.output(src);
    };

    /**
     * Lexing/Compiling
     */

    InlineLexer.prototype.output = function (src) {
        var out = '',
            link, text, href, cap;

        while (src) {
            // escape
            if (cap = this.rules.escape.exec(src)) {
                src = src.substring(cap[0].length);
                out += cap[1];
                continue;
            }

            // autolink
            if (cap = this.rules.autolink.exec(src)) {
                src = src.substring(cap[0].length);
                if (cap[2] === '@') {
                    text = cap[1].charAt(6) === ':' ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
                    href = this.mangle('mailto:') + text;
                } else {
                    text = escape(cap[1]);
                    href = text;
                }
                out += this.renderer.link(href, null, text);
                continue;
            }

            // url (gfm)
            if (!this.inLink && (cap = this.rules.url.exec(src))) {
                src = src.substring(cap[0].length);
                text = escape(cap[1]);
                href = text;
                out += this.renderer.link(href, null, text);
                continue;
            }

            // tag
            if (cap = this.rules.tag.exec(src)) {
                if (!this.inLink && /^<a /i.test(cap[0])) {
                    this.inLink = true;
                } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
                    this.inLink = false;
                }
                src = src.substring(cap[0].length);
                out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
                continue;
            }

            // link
            if (cap = this.rules.link.exec(src)) {
                src = src.substring(cap[0].length);
                this.inLink = true;
                out += this.outputLink(cap, {
                    href: cap[2],
                    title: cap[3]
                });
                this.inLink = false;
                continue;
            }

            // reflink, nolink
            if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
                src = src.substring(cap[0].length);
                link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
                link = this.links[link.toLowerCase()];
                if (!link || !link.href) {
                    out += cap[0].charAt(0);
                    src = cap[0].substring(1) + src;
                    continue;
                }
                this.inLink = true;
                out += this.outputLink(cap, link);
                this.inLink = false;
                continue;
            }

            // strong
            if (cap = this.rules.strong.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.strong(this.output(cap[2] || cap[1]));
                continue;
            }

            // em
            if (cap = this.rules.em.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.em(this.output(cap[2] || cap[1]));
                continue;
            }

            // code
            if (cap = this.rules.code.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.codespan(escape(cap[2], true));
                continue;
            }

            // br
            if (cap = this.rules.br.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.br();
                continue;
            }

            // del (gfm)
            if (cap = this.rules.del.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.del(this.output(cap[1]));
                continue;
            }

            // text
            if (cap = this.rules.text.exec(src)) {
                src = src.substring(cap[0].length);
                out += this.renderer.text(escape(this.smartypants(cap[0])));
                continue;
            }

            if (src) {
                throw new
                Error('Infinite loop on byte: ' + src.charCodeAt(0));
            }
        }

        return out;
    };

    /**
     * Compile Link
     */

    InlineLexer.prototype.outputLink = function (cap, link) {
        var href = escape(link.href),
            title = link.title ? escape(link.title) : null;

        return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
    };

    /**
     * Smartypants Transformations
     */

    InlineLexer.prototype.smartypants = function (text) {
        if (!this.options.smartypants) return text;
        return text
        // em-dashes
        .replace(/---/g, '\u2014')
        // en-dashes
        .replace(/--/g, '\u2013')
        // opening singles
        .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
        // closing singles & apostrophes
        .replace(/'/g, '\u2019')
        // opening doubles
        .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
        // closing doubles
        .replace(/"/g, '\u201d')
        // ellipses
        .replace(/\.{3}/g, '\u2026');
    };

    /**
     * Mangle Links
     */

    InlineLexer.prototype.mangle = function (text) {
        if (!this.options.mangle) return text;
        var out = '',
            l = text.length,
            i = 0,
            ch;

        for (; i < l; i++) {
            ch = text.charCodeAt(i);
            if (Math.random() > 0.5) {
                ch = 'x' + ch.toString(16);
            }
            out += '&#' + ch + ';';
        }

        return out;
    };

    /**
     * Renderer
     */

    function Renderer(options) {
        this.options = options || {};
    }

    Renderer.prototype.code = function (code, lang, escaped) {
        if (this.options.highlight) {
            var out = this.options.highlight(code, lang);
            if (out != null && out !== code) {
                escaped = true;
                code = out;
            }
        }

        if (!lang) {
            return '<pre><code>' + (escaped ? code : escape(code, true)) + '\n</code></pre>';
        }

        return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '\n</code></pre>\n';
    };

    Renderer.prototype.blockquote = function (quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    Renderer.prototype.html = function (html) {
        return html;
    };

    Renderer.prototype.heading = function (text, level, raw) {
        return '<h' + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n';
    };

    Renderer.prototype.hr = function () {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    Renderer.prototype.list = function (body, ordered) {
        var type = ordered ? 'ol' : 'ul';
        return '<' + type + '>\n' + body + '</' + type + '>\n';
    };

    Renderer.prototype.listitem = function (text) {
        return '<li>' + text + '</li>\n';
    };

    Renderer.prototype.paragraph = function (text) {
        return '<p>' + text + '</p>\n';
    };

    Renderer.prototype.table = function (header, body) {
        return '<table>\n' + '<thead>\n' + header + '</thead>\n' + '<tbody>\n' + body + '</tbody>\n' + '</table>\n';
    };

    Renderer.prototype.tablerow = function (content) {
        return '<tr>\n' + content + '</tr>\n';
    };

    Renderer.prototype.tablecell = function (content, flags) {
        var type = flags.header ? 'th' : 'td';
        var tag = flags.align ? '<' + type + ' style="text-align:' + flags.align + '">' : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
    };

    // span level renderer
    Renderer.prototype.strong = function (text) {
        return '<strong>' + text + '</strong>';
    };

    Renderer.prototype.em = function (text) {
        return '<em>' + text + '</em>';
    };

    Renderer.prototype.codespan = function (text) {
        return '<code>' + text + '</code>';
    };

    Renderer.prototype.br = function () {
        return this.options.xhtml ? '<br/>' : '<br>';
    };

    Renderer.prototype.del = function (text) {
        return '<del>' + text + '</del>';
    };

    Renderer.prototype.link = function (href, title, text) {
        if (this.options.sanitize) {
            try {
                var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
            } catch (e) {
                return '';
            }
            if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
                return '';
            }
        }
        var out = '<a href="' + href + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += '>' + text + '</a>';
        return out;
    };

    Renderer.prototype.image = function (href, title, text) {
        var out = '<img src="' + href + '" alt="' + text + '"';
        if (title) {
            out += ' title="' + title + '"';
        }
        out += this.options.xhtml ? '/>' : '>';
        return out;
    };

    Renderer.prototype.text = function (text) {
        return text;
    };

    /**
     * Parsing & Compiling
     */

    function Parser(options) {
        this.tokens = [];
        this.token = null;
        this.options = options || marked.defaults;
        this.options.renderer = this.options.renderer || new Renderer;
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
    }

    /**
     * Static Parse Method
     */

    Parser.parse = function (src, options, renderer) {
        var parser = new Parser(options, renderer);
        return parser.parse(src);
    };

    /**
     * Parse Loop
     */

    Parser.prototype.parse = function (src) {
        this.inline = new InlineLexer(src.links, this.options, this.renderer);
        this.tokens = src.reverse();

        var out = '';
        while (this.next()) {
            out += this.tok();
        }

        return out;
    };

    /**
     * Next Token
     */

    Parser.prototype.next = function () {
        return this.token = this.tokens.pop();
    };

    /**
     * Preview Next Token
     */

    Parser.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0;
    };

    /**
     * Parse Text Tokens
     */

    Parser.prototype.parseText = function () {
        var body = this.token.text;

        while (this.peek().type === 'text') {
            body += '\n' + this.next().text;
        }

        return this.inline.output(body);
    };

    /**
     * Parse Current Token
     */

    Parser.prototype.tok = function () {
        switch (this.token.type) {
        case 'space':
            {
                return '';
            }
        case 'hr':
            {
                return this.renderer.hr();
            }
        case 'heading':
            {
                return this.renderer.heading(
                this.inline.output(this.token.text), this.token.depth, this.token.text);
            }
        case 'code':
            {
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
            }
        case 'table':
            {
                var header = '',
                    body = '',
                    i, row, cell, flags, j;

                // header
                cell = '';
                for (i = 0; i < this.token.header.length; i++) {
                    flags = {
                        header: true,
                        align: this.token.align[i]
                    };
                    cell += this.renderer.tablecell(
                    this.inline.output(this.token.header[i]), {
                        header: true,
                        align: this.token.align[i]
                    });
                }
                header += this.renderer.tablerow(cell);

                for (i = 0; i < this.token.cells.length; i++) {
                    row = this.token.cells[i];

                    cell = '';
                    for (j = 0; j < row.length; j++) {
                        cell += this.renderer.tablecell(
                        this.inline.output(row[j]), {
                            header: false,
                            align: this.token.align[j]
                        });
                    }

                    body += this.renderer.tablerow(cell);
                }
                return this.renderer.table(header, body);
            }
        case 'blockquote_start':
            {
                var body = '';

                while (this.next().type !== 'blockquote_end') {
                    body += this.tok();
                }

                return this.renderer.blockquote(body);
            }
        case 'list_start':
            {
                var body = '',
                    ordered = this.token.ordered;

                while (this.next().type !== 'list_end') {
                    body += this.tok();
                }

                return this.renderer.list(body, ordered);
            }
        case 'list_item_start':
            {
                var body = '';

                while (this.next().type !== 'list_item_end') {
                    body += this.token.type === 'text' ? this.parseText() : this.tok();
                }

                return this.renderer.listitem(body);
            }
        case 'loose_item_start':
            {
                var body = '';

                while (this.next().type !== 'list_item_end') {
                    body += this.tok();
                }

                return this.renderer.listitem(body);
            }
        case 'html':
            {
                var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
                return this.renderer.html(html);
            }
        case 'paragraph':
            {
                return this.renderer.paragraph(this.inline.output(this.token.text));
            }
        case 'text':
            {
                return this.renderer.paragraph(this.parseText());
            }
        }
    };

    /**
     * Helpers
     */

    function escape(html, encode) {
        return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function unescape(html) {
        return html.replace(/&([#\w]+);/g, function (_, n) {
            n = n.toLowerCase();
            if (n === 'colon') return ':';
            if (n.charAt(0) === '#') {
                return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
            }
            return '';
        });
    }

    function replace(regex, opt) {
        regex = regex.source;
        opt = opt || '';
        return function self(name, val) {
            if (!name) return new RegExp(regex, opt);
            val = val.source || val;
            val = val.replace(/(^|[^\[])\^/g, '$1');
            regex = regex.replace(name, val);
            return self;
        };
    }

    function noop() {}
    noop.exec = noop;

    function merge(obj) {
        var i = 1,
            target, key;

        for (; i < arguments.length; i++) {
            target = arguments[i];
            for (key in target) {
                if (Object.prototype.hasOwnProperty.call(target, key)) {
                    obj[key] = target[key];
                }
            }
        }

        return obj;
    }


    /**
     * Marked
     */

    function marked(src, opt, callback) {
        if (callback || typeof opt === 'function') {
            if (!callback) {
                callback = opt;
                opt = null;
            }

            opt = merge({}, marked.defaults, opt || {});

            var highlight = opt.highlight,
                tokens, pending, i = 0;

            try {
                tokens = Lexer.lex(src, opt)
            } catch (e) {
                return callback(e);
            }

            pending = tokens.length;

            var done = function (err) {
                if (err) {
                    opt.highlight = highlight;
                    return callback(err);
                }

                var out;

                try {
                    out = Parser.parse(tokens, opt);
                } catch (e) {
                    err = e;
                }

                opt.highlight = highlight;

                return err ? callback(err) : callback(null, out);
            };

            if (!highlight || highlight.length < 3) {
                return done();
            }

            delete opt.highlight;

            if (!pending) return done();

            for (; i < tokens.length; i++) {
                (function (token) {
                    if (token.type !== 'code') {
                        return --pending || done();
                    }
                    return highlight(token.text, token.lang, function (err, code) {
                        if (err) return done(err);
                        if (code == null || code === token.text) {
                            return --pending || done();
                        }
                        token.text = code;
                        token.escaped = true;
                        --pending || done();
                    });
                })(tokens[i]);
            }

            return;
        }
        try {
            if (opt) opt = merge({}, marked.defaults, opt);
            return Parser.parse(Lexer.lex(src, opt), opt);
        } catch (e) {
            e.message += '\nPlease report this to https://github.com/chjj/marked.';
            if ((opt || marked.defaults).silent) {
                return '<p>An error occured:</p><pre>' + escape(e.message + '', true) + '</pre>';
            }
            throw e;
        }
    }

    /**
     * Options
     */

    marked.options =
    marked.setOptions = function (opt) {
        merge(marked.defaults, opt);
        return marked;
    };

    marked.defaults = {
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        sanitizer: null,
        mangle: true,
        smartLists: false,
        silent: false,
        highlight: null,
        langPrefix: 'lang-',
        smartypants: false,
        headerPrefix: '',
        renderer: new Renderer,
        xhtml: false
    };

    /**
     * Expose
     */

    marked.Parser = Parser;
    marked.parser = Parser.parse;

    marked.Renderer = Renderer;

    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;

    marked.InlineLexer = InlineLexer;
    marked.inlineLexer = InlineLexer.output;

    marked.parse = marked;

    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = marked;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return marked;
        });
    } else {
        this.marked = marked;
    }

}).call(function () {
    return this || (typeof window !== 'undefined' ? window : global);
}());

/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;
(function ($, window, document, undefined) {

    var drag, state, e;

    /**
     * Template for status information about drag and touch events.
     * @private
     */
    drag = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    };

    /**
     * Template for some status informations.
     * @private
     */
    state = {
        isTouch: false,
        isScrolling: false,
        isSwiping: false,
        direction: false,
        inMotion: false
    };

    /**
     * Event functions references.
     * @private
     */
    e = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    };

    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */

    function Owl(element, options) {

        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Caches informations about drag and touch events.
         */
        this.drag = $.extend({}, drag);

        /**
         * Caches some status informations.
         * @protected
         */
        this.state = $.extend({}, state);

        /**
         * @protected
         * @todo Must be documented
         */
        this.e = $.extend({}, e);

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from beeing retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        $.each(Owl.Plugins, $.proxy(function (key, plugin) {
            this._plugins[key[0].toLowerCase() + key.slice(1)] = new plugin(this);
        }, this));

        $.each(Owl.Pipe, $.proxy(function (priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        responsiveClass: false,

        fallbackEasing: 'swing',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        // Classes and Names
        themeClass: 'owl-theme',
        baseClass: 'owl-carousel',
        itemClass: 'owl-item',
        centerClass: 'center',
        activeClass: 'active'
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * Update pipe.
     */
    Owl.Pipe = [{
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    },
    {
        filter: ['items', 'settings'],
        run: function () {
            var cached = this._clones,
                clones = this.$stage.children('.cloned');

            if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
                this.$stage.children('.cloned').remove();
                this._clones = [];
            }
        }
    },
    {
        filter: ['items', 'settings'],
        run: function () {
            var i, n, clones = this._clones,
                items = this._items,
                delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

            for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
                if (delta > 0) {
                    this.$stage.children().eq(items.length + clones.length - 1).remove();
                    clones.pop();
                    this.$stage.children().eq(0).remove();
                    clones.pop();
                } else {
                    clones.push(clones.length / 2);
                    this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
                    clones.push(items.length - 1 - (clones.length - 1) / 2);
                    this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
                }
            }
        }
    },
    {
        filter: ['width', 'items', 'settings'],
        run: function () {
            var rtl = (this.settings.rtl ? 1 : -1),
                width = (this.width() / this.settings.items).toFixed(3),
                coordinate = 0,
                merge, i, n;

            this._coordinates = [];
            for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
                merge = this._mergers[this.relative(i)];
                merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
                coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

                this._coordinates.push(coordinate);
            }
        }
    },
    {
        filter: ['width', 'items', 'settings'],
        run: function () {
            var i, n, width = (this.width() / this.settings.items).toFixed(3),
                css = {
                    'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
                    'padding-left': this.settings.stagePadding || '',
                    'padding-right': this.settings.stagePadding || ''
                };

            this.$stage.css(css);

            css = {
                'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin
            };
            css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

            if (!this.settings.autoWidth && $.grep(this._mergers, function (v) {
                return v > 1
            }).length > 0) {
                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
                    this.$stage.children().eq(i).css(css);
                }
            } else {
                this.$stage.children().css(css);
            }
        }
    },
    {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            cache.current && this.reset(this.$stage.children().index(cache.current));
        }
    },
    {
        filter: ['position'],
        run: function () {
            this.animate(this.coordinates(this._current));
        }
    },
    {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [],
                i, n;

            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;

                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }

            this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

            if (this.settings.center) {
                this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
                this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
            }
        }
    }];

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function () {
        this.trigger('initialize');

        this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass('owl-rtl', this.settings.rtl);

        // check support
        this.browserSupport();

        if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
                return false;
            }
        }

        this.$element.addClass('owl-loading');

        // create stage
        this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">');

        // append stage
        this.$element.append(this.$stage.parent());

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // set view width
        this._width = this.$element.width();

        // update view
        this.refresh();

        this.$element.removeClass('owl-loading').addClass('owl-loaded');

        // attach generic events
        this.eventsCall();

        // attach generic events
        this.internalEvents();

        // attach custom control events
        this.addTriggerableEvents();

        this.trigger('initialized');
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function () {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function (breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr('class', function (i, c) {
                    return c.replace(/\b owl-responsive-\S+/g, '');
                }).addClass('owl-responsive-' + match);
            }
        }

        if (this.settings === null || this._breakpoint !== match) {
            this.trigger('change', {
                property: {
                    name: 'settings',
                    value: settings
                }
            });
            this._breakpoint = match;
            this.settings = settings;
            this.invalidate('settings');
            this.trigger('changed', {
                property: {
                    name: 'settings',
                    value: this.settings
                }
            });
        }
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function () {
        // Toggle Center class
        this.$element.toggleClass('owl-center', this.settings.center);

        // if items number is less than in body
        if (this.settings.loop && this._items.length < this.settings.items) {
            this.settings.loop = false;
        }

        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function (item) {
        var event = this.trigger('prepare', {
            content: item
        });

        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>').addClass(this.settings.itemClass).append(item)
        }

        this.trigger('prepared', {
            content: event.data
        });

        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function () {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function (p) {
                return this[p]
            }, this._invalidated),
            cache = {};

        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function (dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
        case Owl.Width.Inner:
        case Owl.Width.Outer:
            return this._width;
        default:
            return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function () {
        if (this._items.length === 0) {
            return false;
        }

        var start = new Date().getTime();

        this.trigger('refresh');

        this.setup();

        this.optionsLogic();

        // hide and show methods helps here to set a proper widths,
        // this prevents scrollbar to be calculated in stage width
        this.$stage.addClass('owl-refresh');

        this.update();

        this.$stage.removeClass('owl-refresh');

        this.state.orientation = window.orientation;

        this.watchVisibility();

        this.trigger('refreshed');
    };

    /**
     * Save internal event references and add event based functions.
     * @protected
     */
    Owl.prototype.eventsCall = function () {
        // Save events references
        this.e._onDragStart = $.proxy(function (e) {
            this.onDragStart(e);
        }, this);
        this.e._onDragMove = $.proxy(function (e) {
            this.onDragMove(e);
        }, this);
        this.e._onDragEnd = $.proxy(function (e) {
            this.onDragEnd(e);
        }, this);
        this.e._onResize = $.proxy(function (e) {
            this.onResize(e);
        }, this);
        this.e._transitionEnd = $.proxy(function (e) {
            this.transitionEnd(e);
        }, this);
        this.e._preventClick = $.proxy(function (e) {
            this.preventClick(e);
        }, this);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function () {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function () {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (this.trigger('resize').isDefaultPrevented()) {
            return false;
        }

        this._width = this.$element.width();

        this.invalidate('width');

        this.refresh();

        this.trigger('resized');
    };

    /**
     * Checks for touch/mouse drag event type and add run event handlers.
     * @protected
     */
    Owl.prototype.eventsRouter = function (event) {
        var type = event.type;

        if (type === "mousedown" || type === "touchstart") {
            this.onDragStart(event);
        } else if (type === "mousemove" || type === "touchmove") {
            this.onDragMove(event);
        } else if (type === "mouseup" || type === "touchend") {
            this.onDragEnd(event);
        } else if (type === "touchcancel") {
            this.onDragEnd(event);
        }
    };

    /**
     * Checks for touch/mouse drag options and add necessery event handlers.
     * @protected
     */
    Owl.prototype.internalEvents = function () {
        var isTouch = isTouchSupport(),
            isTouchIE = isTouchSupportIE();

        if (this.settings.mouseDrag) {
            this.$stage.on('mousedown', $.proxy(function (event) {
                this.eventsRouter(event)
            }, this));
            this.$stage.on('dragstart', function () {
                return false
            });
            this.$stage.get(0).onselectstart = function () {
                return false
            };
        } else {
            this.$element.addClass('owl-text-select-on');
        }

        if (this.settings.touchDrag && !isTouchIE) {
            this.$stage.on('touchstart touchcancel', $.proxy(function (event) {
                this.eventsRouter(event)
            }, this));
        }

        // catch transitionEnd event
        if (this.transitionEndVendor) {
            this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
        }

        // responsive
        if (this.settings.responsive !== false) {
            this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
        }
    };

    /**
     * Handles touchstart/mousedown event.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function (event) {
        var ev, isTouchEvent, pageX, pageY, animatedPos;

        ev = event.originalEvent || event || window.event;

        // prevent right click
        if (ev.which === 3 || this.state.isTouch) {
            return false;
        }

        if (ev.type === 'mousedown') {
            this.$stage.addClass('owl-grab');
        }

        this.trigger('drag');
        this.drag.startTime = new Date().getTime();
        this.speed(0);
        this.state.isTouch = true;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        this.drag.distance = 0;

        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;

        // get stage position left
        this.drag.offsetX = this.$stage.position().left;
        this.drag.offsetY = this.$stage.position().top;

        if (this.settings.rtl) {
            this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin;
        }

        // catch position // ie to fix
        if (this.state.inMotion && this.support3d) {
            animatedPos = this.getTransformProperty();
            this.drag.offsetX = animatedPos;
            this.animate(animatedPos);
            this.state.inMotion = true;
        } else if (this.state.inMotion && !this.support3d) {
            this.state.inMotion = false;
            return false;
        }

        this.drag.startX = pageX - this.drag.offsetX;
        this.drag.startY = pageY - this.drag.offsetY;

        this.drag.start = pageX - this.drag.startX;
        this.drag.targetEl = ev.target || ev.srcElement;
        this.drag.updatedX = this.drag.start;

        // to do/check
        // prevent links and images dragging;
        if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
            this.drag.targetEl.draggable = false;
        }

        $(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function (event) {
            this.eventsRouter(event)
        }, this));
    };

    /**
     * Handles the touchmove/mousemove events.
     * @todo Simplify
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function (event) {
        var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

        if (!this.state.isTouch) {
            return;
        }

        if (this.state.isScrolling) {
            return;
        }

        ev = event.originalEvent || event || window.event;

        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;

        // Drag Direction
        this.drag.currentX = pageX - this.drag.startX;
        this.drag.currentY = pageY - this.drag.startY;
        this.drag.distance = this.drag.currentX - this.drag.offsetX;

        // Check move direction
        if (this.drag.distance < 0) {
            this.state.direction = this.settings.rtl ? 'right' : 'left';
        } else if (this.drag.distance > 0) {
            this.state.direction = this.settings.rtl ? 'left' : 'right';
        }
        // Loop
        if (this.settings.loop) {
            if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
                this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            } else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
                this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            }
        } else {
            // pull
            minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
            this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
        }

        // Lock browser if swiping horizontal
        if ((this.drag.distance > 8 || this.drag.distance < -8)) {
            if (ev.preventDefault !== undefined) {
                ev.preventDefault();
            } else {
                ev.returnValue = false;
            }
            this.state.isSwiping = true;
        }

        this.drag.updatedX = this.drag.currentX;

        // Lock Owl if scrolling
        if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
            this.state.isScrolling = true;
            this.drag.updatedX = this.drag.start;
        }

        this.animate(this.drag.updatedX);
    };

    /**
     * Handles the touchend/mouseup events.
     * @protected
     */
    Owl.prototype.onDragEnd = function (event) {
        var compareTimes, distanceAbs, closest;

        if (!this.state.isTouch) {
            return;
        }

        if (event.type === 'mouseup') {
            this.$stage.removeClass('owl-grab');
        }

        this.trigger('dragged');

        // prevent links and images dragging;
        this.drag.targetEl.removeAttribute("draggable");

        // remove drag event listeners
        this.state.isTouch = false;
        this.state.isScrolling = false;
        this.state.isSwiping = false;

        // to check
        if (this.drag.distance === 0 && this.state.inMotion !== true) {
            this.state.inMotion = false;
            return false;
        }

        // prevent clicks while scrolling
        this.drag.endTime = new Date().getTime();
        compareTimes = this.drag.endTime - this.drag.startTime;
        distanceAbs = Math.abs(this.drag.distance);

        // to test
        if (distanceAbs > 3 || compareTimes > 300) {
            this.removeClick(this.drag.targetEl);
        }

        closest = this.closest(this.drag.updatedX);

        this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
        this.current(closest);
        this.invalidate('position');
        this.update();

        // if pullDrag is off then fire transitionEnd event manually when stick
        // to border
        if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
            this.transitionEnd();
        }

        this.drag.distance = 0;

        $(document).off('.owl.dragEvents');
    };

    /**
     * Attaches `preventClick` to disable link while swipping.
     * @protected
     * @param {HTMLElement} [target] - The target of the `click` event.
     */
    Owl.prototype.removeClick = function (target) {
        this.drag.targetEl = target;
        $(target).on('click.preventClick', this.e._preventClick);
        // to make sure click is removed:
        window.setTimeout(function () {
            $(target).off('click.preventClick');
        }, 300);
    };

    /**
     * Suppresses click event.
     * @protected
     * @param {Event} ev - The event arguments.
     */
    Owl.prototype.preventClick = function (ev) {
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            ev.returnValue = false;
        }
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        $(ev.target).off('click.preventClick');
    };

    /**
     * Catches stage position while animate (only CSS3).
     * @protected
     * @returns
     */
    Owl.prototype.getTransformProperty = function () {
        var transform, matrix3d;

        transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
        // var transform = this.$stage.css(this.vendorName + 'transform')
        transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
        matrix3d = transform.length === 16;

        return matrix3d !== true ? transform[4] : transform[12];
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function (coordinate) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(coordinates, $.proxy(function (index, value) {
                if (coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                } else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = this.state.direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function (coordinate) {
        this.trigger('translate');
        this.state.inMotion = this.speed() > 0;

        if (this.support3d) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
                transition: (this.speed() / 1000) + 's'
            });
        } else if (this.state.isTouch) {
            this.$stage.css({
                left: coordinate + 'px'
            });
        } else {
            this.$stage.animate({
                left: coordinate
            }, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function () {
                if (this.state.inMotion) {
                    this.transitionEnd();
                }
            }, this));
        }
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function (position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger('change', {
                property: {
                    name: 'position',
                    value: position
                }
            });

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate('position');

            this.trigger('changed', {
                property: {
                    name: 'position',
                    value: this._current
                }
            });
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} part - The part to invalidate.
     */
    Owl.prototype.invalidate = function (part) {
        this._invalidated[part] = true;
    }

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function (position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress(['translate', 'translated']);

        this.animate(this.coordinates(position));

        this.release(['translate', 'translated']);
    };

    /**
     * Normalizes an absolute or a relative position for an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function (position, relative) {
        var n = (relative ? this._items.length : this._items.length + this._clones.length);

        if (!$.isNumeric(position) || n < 1) {
            return undefined;
        }

        if (this._clones.length) {
            position = ((position % n) + n) % n;
        } else {
            position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
        }

        return position;
    };

    /**
     * Converts an absolute position for an item into a relative position.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function (position) {
        position = this.normalize(position);
        position = position - this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for an item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function (relative) {
        var maximum, width, i = 0,
            coordinate, settings = this.settings;

        if (relative) {
            return this._items.length - 1;
        }

        if (!settings.loop && settings.center) {
            maximum = this._items.length - 1;
        } else if (!settings.loop && !settings.center) {
            maximum = this._items.length - settings.items;
        } else if (settings.loop || settings.center) {
            maximum = this._items.length + settings.items;
        } else if (settings.autoWidth || settings.merge) {
            revert = settings.rtl ? 1 : -1;
            width = this.$stage.width() - this.$element.width();
            while (coordinate = this.coordinates(i)) {
                if (coordinate * revert >= width) {
                    break;
                }
                maximum = ++i;
            }
        } else {
            throw 'Can not detect maximum absolute position.'
        }

        return maximum;
    };

    /**
     * Gets the minimum position for an item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function (relative) {
        if (relative) {
            return 0;
        }

        return this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function (position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function (position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function (position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function (index) {
                return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
            };

        if (position === undefined) {
            return $.map(this._clones, function (v, i) {
                return map(i)
            });
        }

        return $.map(this._clones, function (v, i) {
            return v === position ? map(i) : null
        });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function (speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function (position) {
        var coordinate = null;

        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function (coordinate, index) {
                return this.coordinates(index);
            }, this));
        }

        if (this.settings.center) {
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
        } else {
            coordinate = this._coordinates[position - 1] || 0;
        }

        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function (from, to, factor) {
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function (position, speed) {
        if (this.settings.loop) {
            var distance = position - this.relative(this.current()),
                revert = this.current(),
                before = this.current(),
                after = this.current() + distance,
                direction = before - after < 0 ? true : false,
                items = this._clones.length + this._items.length;

            if (after < this.settings.items && direction === false) {
                revert = before + this._items.length;
                this.reset(revert);
            } else if (after >= items - this.settings.items && direction === true) {
                revert = before - this._items.length;
                this.reset(revert);
            }
            window.clearTimeout(this.e._goToLoop);
            this.e._goToLoop = window.setTimeout($.proxy(function () {
                this.speed(this.duration(this.current(), revert + distance, speed));
                this.current(revert + distance);
                this.update();
            }, this), 30);
        } else {
            this.speed(this.duration(this.current(), position, speed));
            this.current(position);
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.transitionEnd = function (event) {

        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }

        this.state.inMotion = false;
        this.trigger('translated');
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function () {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            throw 'Can not detect viewport width.';
        }
        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function (content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }

        content.filter(function () {
            return this.nodeType === 1;
        }).each($.proxy(function (index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));

        this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

        this.invalidate('items');
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function (content, position) {
        position = position === undefined ? this._items.length : this.normalize(position, true);

        this.trigger('add', {
            content: content,
            position: position
        });

        if (this._items.length === 0 || position === this._items.length) {
            this.$stage.append(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }

        this.invalidate('items');

        this.trigger('added', {
            content: content,
            position: position
        });
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function (position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger('remove', {
            content: this._items[position],
            position: position
        });

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate('items');

        this.trigger('removed', {
            content: null,
            position: position
        });
    };

    /**
     * Adds triggerable events.
     * @protected
     */
    Owl.prototype.addTriggerableEvents = function () {
        var handler = $.proxy(function (callback, event) {
            return $.proxy(function (e) {
                if (e.relatedTarget !== this) {
                    this.suppress([event]);
                    callback.apply(this, [].slice.call(arguments, 1));
                    this.release([event]);
                }
            }, this);
        }, this);

        $.each({
            'next': this.next,
            'prev': this.prev,
            'to': this.to,
            'destroy': this.destroy,
            'refresh': this.refresh,
            'replace': this.replace,
            'add': this.add,
            'remove': this.remove
        }, $.proxy(function (event, callback) {
            this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
        }, this));

    };

    /**
     * Watches the visibility of the carousel element.
     * @protected
     */
    Owl.prototype.watchVisibility = function () {

        // test on zepto
        if (!isElVisible(this.$element.get(0))) {
            this.$element.addClass('owl-hidden');
            window.clearInterval(this.e._checkVisibile);
            this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
        }

        function isElVisible(el) {
            return el.offsetWidth > 0 && el.offsetHeight > 0;
        }

        function checkVisible() {
            if (isElVisible(this.$element.get(0))) {
                this.$element.removeClass('owl-hidden');
                this.refresh();
                window.clearInterval(this.e._checkVisibile);
            }
        }
    };

    /**
     * Preloads images with auto width.
     * @protected
     * @todo Still to test
     */
    Owl.prototype.preloadAutoWidthImages = function (imgs) {
        var loaded, that, $el, img;

        loaded = 0;
        that = this;
        imgs.each(function (i, el) {
            $el = $(el);
            img = new Image();

            img.onload = function () {
                loaded++;
                $el.attr('src', img.src);
                $el.css('opacity', 1);
                if (loaded >= imgs.length) {
                    that.state.imagesLoaded = true;
                    that.initialize();
                }
            };

            img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
        });
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function () {

        if (this.$element.hasClass(this.settings.themeClass)) {
            this.$element.removeClass(this.settings.themeClass);
        }

        if (this.settings.responsive !== false) {
            $(window).off('resize.owl.carousel');
        }

        if (this.transitionEndVendor) {
            this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        if (this.settings.mouseDrag || this.settings.touchDrag) {
            this.$stage.off('mousedown touchstart touchcancel');
            $(document).off('.owl.dragEvents');
            this.$stage.get(0).onselectstart = function () {};
            this.$stage.off('dragstart', function () {
                return false
            });
        }

        // remove event handlers in the ".owl.carousel" namespace
        this.$element.off('.owl');

        this.$stage.children('.cloned').remove();
        this.e = null;
        this.$element.removeData('owlCarousel');

        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.unwrap();
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
        case '<':
            return rtl ? a > b : a < b;
        case '>':
            return rtl ? a < b : a > b;
        case '>=':
            return rtl ? a <= b : a >= b;
        case '<=':
            return rtl ? a >= b : a <= b;
        default:
            break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function (element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function (element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };

    /**
     * Triggers an public event.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=.owl.carousel] - The event namespace.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function (name, data, namespace) {
        var status = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        },
            handler = $.camelCase(
            $.grep(['on', name, namespace], function (v) {
                return v
            }).join('-').toLowerCase()),
            event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({
                relatedTarget: this
            }, status, data));

        if (!this._supress[name]) {
            $.each(this._plugins, function (name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].apply(this, event);
            }
        }

        return event;
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function (events) {
        $.each(events, $.proxy(function (index, event) {
            this._supress[event] = true;
        }, this));
    }

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function (events) {
        $.each(events, $.proxy(function (index, event) {
            delete this._supress[event];
        }, this));
    }

    /**
     * Checks the availability of some browser features.
     * @protected
     */
    Owl.prototype.browserSupport = function () {
        this.support3d = isPerspective();

        if (this.support3d) {
            this.transformVendor = isTransform();

            // take transitionend event name by detecting transition
            var endVendors = ['transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd'];
            this.transitionEndVendor = endVendors[isTransition()];

            // take vendor name from transform name
            this.vendorName = this.transformVendor.replace(/Transform/i, '');
            this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
        }

        this.state.orientation = window.orientation;
    };

    /**
     * Get touch/drag coordinats.
     * @private
     * @param {event} - mousedown/touchstart event
     * @returns {object} - Contains X and Y of current mouse/touch position
     */

    function getTouches(event) {
        if (event.touches !== undefined) {
            return {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY
            };
        }

        if (event.touches === undefined) {
            if (event.pageX !== undefined) {
                return {
                    x: event.pageX,
                    y: event.pageY
                };
            }

            if (event.pageX === undefined) {
                return {
                    x: event.clientX,
                    y: event.clientY
                };
            }
        }
    }

    /**
     * Checks for CSS support.
     * @private
     * @param {Array} array - The CSS properties to check for.
     * @returns {Array} - Contains the supported CSS property name and its index or `false`.
     */

    function isStyleSupported(array) {
        var p, s, fake = document.createElement('div'),
            list = array;
        for (p in list) {
            s = list[p];
            if (typeof fake.style[s] !== 'undefined') {
                fake = null;
                return [s, p];
            }
        }
        return [false];
    }

    /**
     * Checks for CSS transition support.
     * @private
     * @todo Realy bad design
     * @returns {Number}
     */

    function isTransition() {
        return isStyleSupported(['transition', 'WebkitTransition', 'MozTransition', 'OTransition'])[1];
    }

    /**
     * Checks for CSS transform support.
     * @private
     * @returns {String} The supported property name or false.
     */

    function isTransform() {
        return isStyleSupported(['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'])[0];
    }

    /**
     * Checks for CSS perspective support.
     * @private
     * @returns {String} The supported property name or false.
     */

    function isPerspective() {
        return isStyleSupported(['perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective'])[0];
    }

    /**
     * Checks wether touch is supported or not.
     * @private
     * @returns {Boolean}
     */

    function isTouchSupport() {
        return 'ontouchstart' in window || !! (navigator.msMaxTouchPoints);
    }

    /**
     * Checks wether touch is supported or not for IE.
     * @private
     * @returns {Boolean}
     */

    function isTouchSupportIE() {
        return window.navigator.msPointerEnabled;
    }

    /**
     * The jQuery Plugin for the Owl Carousel
     * @public
     */
    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if (!$(this).data('owlCarousel')) {
                $(this).data('owlCarousel', new Owl(this, options));
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {

    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function (carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel': $.proxy(function (e) {
                if (!e.namespace) {
                    return;
                }

                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }

                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = ((e.property && e.property.value) || this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function (i, v) {
                            this.load(v)
                        }, this);

                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position++)), load);
                    }
                }
            }, this)
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    }

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false
    }

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function (position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each($.proxy(function (index, element) {
            var $element = $(element),
                image, url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

            this._core.trigger('load', {
                element: $element,
                url: url
            }, 'lazy');

            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function () {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, 'lazy');
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function () {
                    $element.css({
                        'background-image': 'url(' + url + ')',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', {
                        element: $element,
                        url: url
                    }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));

        this._loaded.push($item.get(0));
    }

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {

    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function () {
                if (this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.autoHeight && e.property.name == 'position') {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function (e) {
                if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current())) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function () {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function () {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {

    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * Whether this is in fullscreen or not.
         * @protected
         * @type {Boolean}
         */
        this._fullscreen = false;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'resize.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.video && !this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refresh.owl.carousel changed.owl.carousel': $.proxy(function (e) {
                if (this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                var $element = $(e.content).find('.owl-video');
                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
            this.play(e);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function (target, item) {

        var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');

        if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr('data-video', url);

        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function (target, video) {

        var tnLink, icon, path, dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function (path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === 'youtube') {
            path = "https://web.archive.org/web/20160324165701/http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: 'https://web.archive.org/web/20160324165701/http://vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function () {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} ev - The event arguments.
     */
    Video.prototype.play = function (ev) {
        this._core.trigger('play', null, 'video');

        if (this._playing) {
            this.stop();
        }

        var target = $(ev.target || ev.srcElement),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html, wrap;

        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="https://web.archive.org/web/20160324165701/http://www.youtube.com/embed/' + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            html = '<iframe src="https://web.archive.org/web/20160324165701/http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width + '" height="' + height + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }

        item.addClass('owl-video-playing');
        this._playing = item;

        wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">' + html + '</div>');
        target.after(wrap);
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function () {

        // if Vimeo Fullscreen mode
        var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

        if (element && $(element).parent().hasClass('owl-video-frame')) {
            this._core.speed(0);
            this._fullscreen = true;
        }

        if (element && this._fullscreen && this._playing) {
            return false;
        }

        // comming back from fullscreen
        if (this._fullscreen) {
            this._fullscreen = false;
            return false;
        }

        // check full screen mode and window orientation
        if (this._playing) {
            if (this._core.state.orientation !== window.orientation) {
                this._core.state.orientation = window.orientation;
                return false;
            }
        }

        return true;
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function () {
        var handler, property;

        this._core.$element.off('click.owl.video');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {

    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            'change.owl.carousel': $.proxy(function (e) {
                if (e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
                this.swapping = e.type == 'translated';
            }, this),
            'translate.owl.carousel': $.proxy(function (e) {
                if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function () {

        if (this.core.settings.items !== 1 || !this.core.support3d) {
            return;
        }

        this.core.speed(0);

        var left, clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.css({
                'left': left + 'px'
            }).addClass('animated owl-animated-out').addClass(outgoing).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
        }

        if (incoming) {
            next.addClass('animated owl-animated-in').addClass(incoming).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
        }
    };

    Animate.prototype.clear = function (e) {
        $(e.target).css({
            'left': ''
        }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.transitionEnd();
    }

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {

    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

        this.handlers = {
            'translated.owl.carousel refreshed.owl.carousel': $.proxy(function () {
                this.autoplay();
            }, this),
            'play.owl.autoplay': $.proxy(function (e, t, s) {
                this.play(t, s);
            }, this),
            'stop.owl.autoplay': $.proxy(function () {
                this.stop();
            }, this),
            'mouseover.owl.autoplay': $.proxy(function () {
                if (this.core.settings.autoplayHoverPause) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function () {
                if (this.core.settings.autoplayHoverPause) {
                    this.autoplay();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

    /**
     * @protected
     * @todo Must be documented.
     */
    Autoplay.prototype.autoplay = function () {
        if (this.core.settings.autoplay && !this.core.state.videoPlay) {
            window.clearInterval(this.interval);

            this.interval = window.setInterval($.proxy(function () {
                this.play();
            }, this), this.core.settings.autoplayTimeout);
        } else {
            window.clearInterval(this.interval);
        }
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - ...
     * @param {Number} [speed] - ...
     * @returns {Boolean|undefined} - ...
     * @todo Must be documented.
     */
    Autoplay.prototype.play = function (timeout, speed) {
        // if tab is inactive - doesnt work in <IE10
        if (document.hidden === true) {
            return;
        }

        if (this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion) {
            return;
        }

        if (this.core.settings.autoplay === false) {
            window.clearInterval(this.interval);
            return;
        }

        this.core.next(this.core.settings.autoplaySpeed);
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function () {
        window.clearInterval(this.interval);
    };

    /**
     * Pauses the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function () {
        window.clearInterval(this.interval);
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function () {
        var handler, property;

        window.clearInterval(this.interval);

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
    'use strict';

    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.dotsData) {
                    this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                }
            }, this),
            'add.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                }
            }, this),
            'remove.owl.carousel prepared.owl.carousel': $.proxy(function (e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'change.owl.carousel': $.proxy(function (e) {
                if (e.property.name == 'position') {
                    if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var current = this._core.current(),
                            maximum = this._core.maximum(),
                            minimum = this._core.minimum();
                        e.data = e.property.value > maximum ? current >= maximum ? minimum : maximum : e.property.value < minimum ? maximum : e.property.value;
                    }
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function () {
                if (!this._initialized) {
                    this.initialize();
                    this._initialized = true;
                }
                this._core.trigger('refresh', null, 'navigation');
                this.update();
                this.draw();
                this._core.trigger('refreshed', null, 'navigation');
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

        // register event handlers
        this.$element.on(this._handlers);
    }

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navRewind: true,
        navText: ['prev', 'next'],
        navSpeed: false,
        navElement: 'div',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: ['owl-prev', 'owl-next'],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotData: false,
        dotsSpeed: false,
        dotsContainer: false,
        controlsClass: 'owl-controls'
    }

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function () {
        var $container, override, options = this._core.settings;

        // create the indicator template
        if (!options.dotsData) {
            this._templates = [$('<div>').addClass(options.dotClass).append($('<span>')).prop('outerHTML')];
        }

        // create controls container if needed
        if (!options.navContainer || !options.dotsContainer) {
            this._controls.$container = $('<div>').addClass(options.controlsClass).appendTo(this.$element);
        }

        // create DOM structure for absolute navigation
        this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer) : $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

        this._controls.$indicators.on('click', 'div', $.proxy(function (e) {
            var index = $(e.target).parent().is(this._controls.$indicators) ? $(e.target).index() : $(e.target).parent().index();

            e.preventDefault();

            this.to(index, options.dotsSpeed);
        }, this));

        // create DOM structure for relative navigation
        $container = options.navContainer ? $(options.navContainer) : $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

        this._controls.$next = $('<' + options.navElement + '>');
        this._controls.$previous = this._controls.$next.clone();

        this._controls.$previous.addClass(options.navClass[0]).html(options.navText[0]).hide().prependTo($container).on('click', $.proxy(function (e) {
            this.prev(options.navSpeed);
        }, this));
        this._controls.$next.addClass(options.navClass[1]).html(options.navText[1]).hide().appendTo($container).on('click', $.proxy(function (e) {
            this.next(options.navSpeed);
        }, this));

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    }

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function () {
        var handler, control, property, override;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function () {
        var i, j, k, options = this._core.settings,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            size = options.center || options.autoWidth || options.dotData ? 1 : options.dotsEach || options.items;

        if (options.slideBy !== 'page') {
            options.slideBy = Math.min(options.slideBy, options.items);
        }

        if (options.dots || options.slideBy == 'page') {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: i - lower,
                        end: i - lower + size - 1
                    });
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    }

    /**
     * Draws the user interface.
     * @todo The option `dotData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function () {
        var difference, i, html = '',
            options = this._core.settings,
            $items = this._core.$stage.children(),
            index = this._core.relative(this._core.current());

        if (options.nav && !options.loop && !options.navRewind) {
            this._controls.$previous.toggleClass('disabled', index <= 0);
            this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
        }

        this._controls.$previous.toggle(options.nav);
        this._controls.$next.toggle(options.nav);

        if (options.dots) {
            difference = this._pages.length - this._controls.$indicators.children().length;

            if (options.dotData && difference !== 0) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) {
                    html += this._templates[this._core.relative(i)];
                }
                this._controls.$indicators.html(html);
            } else if (difference > 0) {
                html = new Array(difference + 1).join(this._templates[0]);
                this._controls.$indicators.append(html);
            } else if (difference < 0) {
                this._controls.$indicators.children().slice(difference).remove();
            }

            this._controls.$indicators.find('.active').removeClass('active');
            this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }

        this._controls.$indicators.toggle(options.dots);
    }

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function (event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotData ? 1 : settings.dotsEach || settings.items)
        };
    }

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function () {
        var index = this._core.relative(this._core.current());
        return $.grep(this._pages, function (o) {
            return o.start <= index && o.end >= index;
        }).pop();
    }

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function (successor) {
        var position, length, options = this._core.settings;

        if (options.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += options.slideBy : position -= options.slideBy;
        }
        return position;
    }

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    }

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    }

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function (position, speed, standard) {
        var length;

        if (!standard) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    }

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;
(function ($, window, document, undefined) {
    'use strict';

    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash table for the hashes.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function () {
                if (this._core.settings.startPosition == 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
                this._hashes[hash] = e.content;
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on('hashchange.owl.navigation', $.proxy(function () {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

            if (!hash) {
                return false;
            }

            this._core.to(position, false, true);
        }, this));
    }

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false
    }

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function () {
        var handler, property;

        $(window).off('hashchange.owl.navigation');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

(function ($) {
    $.fn.dataIcon = function (callback) {
        'use strict';
        $(this).each(function () {
            $(this).append($('<i/>', {
                class: 'aio-icn-' + $(this).data('icon')
            }));
        });
        if (typeof(callback) === 'function') {
            return callback.call(this);
        }
    };
})(jQuery);

(function ($) {
    $.fn.gallery = function (config, callback) {
        'use strict';
        config = config || {};
        config.interval = config.interval || 5000;

        var $t = $(this),
            $first = $t.find('section:first-child');

        $first.addClass('active'); // add active to first children
        var loopGallery = setInterval(function () {
            var $active = $t.find('.active'),
                $next = $active.next().length ? $active.next('section') : $t.find(':first-child');

            $next.addClass('active');
            $active.removeClass('active');

        }, config.interval);

        if (typeof(callback) === 'function') {
            return callback.call(this);
        }
    };
})(jQuery);

(function ($) {
    $.fn.listImages = function (callback) {
        'use strict';
        var imgs = data.assets.images,
            _this = [],
            _li = [],
            $ul = $('<div/>', {
                class: 'img-box'
            });

        for (var x in imgs) {
            var img = imgs[x],
                $li = $('<div/>', {
                    class: 'aio-index-img'
                }),
                _ins = [];

            for (var y in img) {
                var _val = img[y],
                    $ins = $('<div/>', {
                        class: 'aio-img-' + y
                    }).html(_val);

                if (y === 'img3') {
                    _val = 'img/' + img[y];
                    $ins = $('<img/>', {
                        src: _val
                    });
                }
                _ins.push($ins);
            }
            $li.html(_ins);
            _li.push($li);
        }
        $(this).html($ul.html(_li));
        if (typeof(callback) === 'function') {
            return callback.call(this);
        }
    };
})(jQuery);

(function ($) {
    $.fn.loadHTML = function (disp, callback) {
        'use strict';
        var md;
        // get model.  this is used as a base function to getDisplay and getAsset.


        function getModel(dsp, dat) {
            var model = dsp.split('.'),
                modelData = dat;
            for (var x in model) {
                modelData = modelData[model[x]];
            }
            return modelData.html || modelData;
        }

        // get display gets a display element from the data model.


        function getDisplay(dsp) {
            return getModel(dsp, data.display);
        }

        // get asset elements from the data model


        function getList(lst) {
            return getModel(lst, data.lists);
        }
        // build the menus.  Menus are always ul/li/a inside a box container.  the box container is the one that holds the menu attribute.
        // menu data is passed in and looped over.  from there we return the build html from the object.


        function buildMenu(menuData) {
            var $menu = $('<ul/>'),
                $item = $('<li/>'),
                $href = $('<a/>', {
                    href: '#'
                }),
                _items = [];

            for (var mnu in menuData) {
                var _cur = menuData[mnu],
                    _href = $href.clone().html(_cur.item);

                switch (_cur.type) {
                case "main":
                    _href.attr('data-main', _cur.value);
                    break;
                case "link":
                    _href.attr('href', _cur.value);

                }
                _items.push($item.clone().html(_href));
            }
            return $menu.html(_items);
        }

        // display triggers are attributes that are accepts.  This is used as a helper-match to the case switch below.


        function getDisplayTrigger(mt) {
            for (var x in triggers) {
                if (mt.hasOwnProperty(triggers[x])) return triggers[x];
            }
            return false;
        }

        // aData: is the data that is being looped over.
        // aChild is the view/display structure for that data.


        function setList(aData) {
            var _list = getList(aData.list),
                _display = JSON.stringify(aData.listDisplay),
                _output = [];


            for (var x in _list) {
                var _cur = _list[x],
                    _aDisplay = _display.replace(/!!(.*?)!!/g, function (str, group1, group2) {
                        if (group1 === 'idx') return x;
                        if (_cur.hasOwnProperty(group1)) return _cur[group1];
                        return str;
                    });
                _output.push(JSON.parse(_aDisplay)[0]);
            }
            return _output;
        }

        // the base of the functionaliy.  Everything starts by getting passed into here.
        // it needs a cool name to go by.


        function amenti(mdata) {
            var retArr = [],
                triggers = 'menu,text,main,markdown,display,list,children,modal'.split(','),
                triggerMap = {
                    menu: function (el, itm) {
                        return el.html(buildMenu(getDisplay('menus.' + itm.menu)));
                    },
                    text: function (el, itm) {
                        return el.html(itm.text);
                    },
                    display: function (el, itm) {
                        // calls amenti again so it processes any linked data
                        return el.html(amenti(getDisplay(itm.display)));
                    },
                    list: function (el, itm) {
                        return el.html(amenti(setList(itm)));
                    },
                    children: function (el, itm) {
                        return el.html(amenti(itm.children));
                    },
                    modal: function (el, itm) {
                        return el.attr({
                            'data-modal': itm.modal
                        });
                    },
                    main: function (el, itm) {
                        return el.attr({
                            'data-main': itm.main
                        });
                    },
                    markdown: function (el, itm) {
                        return el.attr({
                            'data-markdown': itm.markdown
                        });
                    }
                };

            for (var x in mdata) {
                var _cur = mdata[x],
                    tmp = $('<' + _cur.tag + '/>', _cur.attr);

                triggers.forEach(function (idx) {
                    if (_cur.hasOwnProperty(idx)) {
                        triggerMap[idx](tmp, _cur);
                    }
                });
                retArr.push(tmp);
            }
            return retArr;
        }

        $(this).each(function () {
            var $t = $(this),
                _disp = disp || $t.data('display'),
                _layout = $t.data('layout') ? 'layout.' + $t.data('layout') : false;
            _disp = (_disp || _layout || 'index');
            $t.html(amenti(getDisplay(_disp)));
        });
        if (typeof(callback) === 'function') {
            return callback.call(this);
        }
    };
})(jQuery);

var data = {
    "display": {
        "content": {
            "art": {
                "html": [{
                    "tag": "div",
                    "attr": {
                        "class": "aio-container"
                    },
                    "children": [{
                        "tag": "div",
                        "attr": {
                            "class": "aio-row"
                        },
                        "children": [{
                            "tag": "div",
                            "markdown": "art",
                            "attr": {
                                "class": "aio-col-xs-12 center p-max-900"
                            }
                        }]
                    },
                    {
                        "tag": "div",
                        "attr": {
                            "class": "aio-row"
                        },
                        "children": [{
                            "tag": "div",
                            "attr": {
                                "class": "aio-art",
                                "data-carousel": "true"
                            },
                            "list": "art",
                            "listDisplay": [{
                                "tag": "div",
                                "children": [{
                                    "tag": "img",
                                    "attr": {
                                        "src": "!!imgFile!!",
                                        "data-modal": "content.viewer",
                                        "data-image": "!!imgFile!!",
                                        "data-title": "!!title!!"
                                    }
                                }]
                            }]
                        }]
                    }]
                }]
            },
            "contact": {
                "html": [{
                    "tag": "div",
                    "attr": {
                        "class": "aio-container"
                    },
                    "children": [{
                        "tag": "div",
                        "attr": {
                            "class": "aio-row"
                        },
                        "children": [{
                            "tag": "div",
                            "markdown": "contact",
                            "attr": {
                                "class": "aio-col-xs-12 center p-max-900"
                            }
                        }]
                    }]
                }]
            },
            "gallery": {
                "html": [{
                    "tag": "div",
                    "attr": {
                        "class": "slides",
                        "data-gallery": "true"
                    },
                    "list": "gallery.index",
                    "listDisplay": [{
                        "tag": "section",
                        "children": [{
                            "tag": "figure",
                            "attr": {
                                "class": "!!class!!"
                            },
                            "children": [{
                                "tag": "div",
                                "attr": {
                                    "class": "copy"
                                },
                                "children": [{
                                    "tag": "h2",
                                    "text": "!!text!!"
                                }]
                            }]
                        }]
                    }]
                }]
            },
            "resume": {
                "html": [{
                    "tag": "div",
                    "attr": {
                        "class": "aio-container"
                    },
                    "children": [{
                        "tag": "div",
                        "attr": {
                            "class": "aio-row"
                        },
                        "children": [{
                            "tag": "div",
                            "markdown": "resume",
                            "attr": {
                                "class": "aio-col-xs-12 center p-max-900"
                            }
                        }]
                    }]
                }]
            },
            "videos": {
                "html": [{
                    "tag": "div",
                    "attr": {
                        "class": "aio-container"
                    },
                    "children": [{
                        "tag": "div",
                        "attr": {
                            "class": "aio-row"
                        },
                        "children": [{
                            "tag": "div",
                            "markdown": "videos",
                            "attr": {
                                "class": "aio-col-xs-12 center p-max-900"
                            }
                        }]
                    }]
                }]
            },
            "viewer": {
                "html": [{
                    "tag": "button",
                    "attr": {
                        "class": "aio-modal-close"
                    }
                },
                {
                    "tag": "div",
                    "attr": {
                        "class": "img-box"
                    },
                    "children": [{
                        "tag": "img",
                        "attr": {
                            "src": "",
                            "class": "img"
                        }
                    },
                    {
                        "tag": "h1"
                    }]
                }]
            },
            "work": {
                "gallery": {
                    "html": [{
                        "tag": "div",
                        "attr": {
                            "class": "slides",
                            "data-gallery": "true"
                        },
                        "list": "gallery.work",
                        "listDisplay": [{
                            "tag": "section",
                            "children": [{
                                "tag": "figure",
                                "attr": {
                                    "class": "!!class!!"
                                },
                                "children": [{
                                    "tag": "div",
                                    "attr": {
                                        "class": "copy"
                                    },
                                    "children": [{
                                        "tag": "h2",
                                        "text": "!!text!!"
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                "index": {
                    "html": [{
                        "tag": "div",
                        "attr": {
                            "class": "aio-container"
                        },
                        "children": [{
                            "tag": "div",
                            "attr": {
                                "class": "aio-row"
                            },
                            "children": [{
                                "tag": "div",
                                "markdown": "work/index",
                                "attr": {
                                    "class": "aio-col-xs-12 center p-max-900"
                                }
                            }]
                        }]
                    }]
                },
                "page": {
                    "html": [{
                        "tag": "section",
                        "display": "content.work.gallery",
                        "attr": {
                            "class": "aio-gallery"
                        }
                    },
                    {
                        "tag": "section",
                        "markdown": "work/introduction",
                        "attr": {
                            "class": "aio-section aio-work intro aio-bg-wht90 center"
                        }
                    },
                    {
                        "tag": "section",
                        "markdown": "work/architecture",
                        "attr": {
                            "class": "aio-section aio-work architecture center"
                        }
                    },
                    {
                        "tag": "section",
                        "markdown": "work/technology",
                        "attr": {
                            "class": "aio-section aio-work technology center"
                        }
                    },
                    {
                        "tag": "section",
                        "markdown": "work/components",
                        "attr": {
                            "class": "aio-section aio-work components center"
                        }
                    },
                    {
                        "tag": "section",
                        "markdown": "work/results",
                        "attr": {
                            "class": "aio-section aio-work results center"
                        }
                    },
                    {
                        "tag": "section",
                        "markdown": "work/next",
                        "attr": {
                            "class": "aio-section aio-work next center"
                        }
                    }]
                }
            }
        },
        "layout": {
            "footer": {
                "html": [{
                    "tag": "div",
                    "text": "&copy; 2015 Quinn Michaels, All Rights Reserved."
                }]
            },
            "header": {
                "html": [{
                    "tag": "div",
                    "menu": "header"
                }]
            },
            "index": {
                "html": [{
                    "tag": "section",
                    "display": "content.gallery",
                    "attr": {
                        "class": "aio-gallery"
                    }
                },
                {
                    "tag": "section",
                    "display": "content.work.index",
                    "attr": {
                        "class": "aio-section work aio-bg-wht90"
                    }
                },
                {
                    "tag": "section",
                    "display": "content.art",
                    "attr": {
                        "class": "aio-section art"
                    }
                },
                {
                    "tag": "section",
                    "display": "content.videos",
                    "attr": {
                        "class": "aio-section videos"
                    }
                },
                {
                    "tag": "section",
                    "display": "content.resume",
                    "attr": {
                        "class": "aio-section resume"
                    }
                },
                {
                    "tag": "section",
                    "display": "content.contact",
                    "attr": {
                        "class": "aio-section contact"
                    }
                }]
            },
            "paintings": {
                "html": [{
                    "tag": "div",
                    "attr": {
                        "class": "aio-container"
                    },
                    "children": [{
                        "tag": "div",
                        "attr": {
                            "class": "aio-row"
                        },
                        "children": [{
                            "tag": "div",
                            "attr": {
                                "class": "aio-art"
                            },
                            "list": "paintings",
                            "listDisplay": [{
                                "tag": "div",
                                "children": [{
                                    "tag": "img",
                                    "attr": {
                                        "src": "!!imgFile!!"
                                    }
                                }]
                            }]
                        }]
                    }]
                }]
            }
        },
        "menus": {
            "header": [{
                "item": "Quinn Michaels",
                "type": "main",
                "value": ""
            }]
        }
    },
    "lists": {
        "art": [{
            "id": "900",
            "title": "Inner Mind",
            "tag": "Digital Painting",
            "description": "",
            "imgFile": "assets/img/artwork/inner-mind.jpg",
            "viewCount": "1802",
            "viewLast": "2014-11-26 18:44:21",
            "imgDate": "2012-08-28 00:00:00",
            "created": "2014-06-12 17:13:55",
            "modified": "2014-06-12 01:47:16"
        },
        {
            "id": "866",
            "title": "Avalokitesvara",
            "tag": "Digital Painting",
            "description": "The Lotus S?tra is generally accepted to be the earliest literature teaching about the doctrines of Avalokite?vara. These are found in the Lotus S?tra chapter 25, The Universal Gateway of Avalokitasvara Bodhisattva . This chapter is devoted to Avalokitasvara, describing him as a compassionate bodhisattva who hears the cries of sentient beings, and who works tirelessly to help those who call upon his name. A total of 33 different manifestations of Avalokitasvara are described, including female manifestations, all to suit the minds of various beings. The chapter consists of both a prose and a verse section. This earliest source often circulates separately as its own s?tra, called the Avalokitasvara S?tra, and is commonly recited or chanted at Buddhist temples in East Asia.",
            "imgFile": "assets/img/artwork/447B532A05E01465D2535B6C31F99581.png",
            "viewCount": "20208",
            "viewLast": "2014-11-25 03:41:23",
            "imgDate": "2011-09-15 00:00:00",
            "created": "2011-09-15 19:46:01",
            "modified": "2012-09-06 01:47:59"
        },
        {
            "id": "858",
            "title": "Spyral",
            "tag": "Digital Painting",
            "description": "",
            "imgFile": "assets/img/artwork/CC34D1C9FE8271FE8A259828168B09EF.png",
            "viewCount": "2160",
            "viewLast": "2014-11-22 18:33:55",
            "imgDate": "2011-09-08 00:00:00",
            "created": "2011-09-08 08:13:35",
            "modified": "2012-09-06 01:48:18"
        },
        {
            "id": "809",
            "title": "#fastball",
            "tag": "Digital Painting",
            "description": "With the #TigerBloodIntern going on I just couldn't resist myself with this one.  ",
            "imgFile": "assets/img/artwork/2AD3C74A193DF1195A57A8904F010866.jpg",
            "viewCount": "506",
            "viewLast": "2012-09-06 13:35:36",
            "imgDate": "2011-03-28 00:00:00",
            "created": "2011-03-28 19:13:22",
            "modified": "2011-03-28 19:13:22"
        },
        {
            "id": "808",
            "title": "Maitreya",
            "tag": "Digital Painting",
            "description": "#prayforjapan #art #painting \n\nMaitreya resides in the Tu'ita Heaven, said to be reachable through meditation.",
            "imgFile": "assets/img/artwork/02CF30D130C6259F9865D048803996EF.jpg",
            "viewCount": "3897",
            "viewLast": "2014-11-26 23:57:43",
            "imgDate": "2011-03-23 00:00:00",
            "created": "2011-03-23 23:19:00",
            "modified": "2012-09-06 01:48:50"
        },
        {
            "id": "785",
            "title": "Pray For Japan",
            "tag": "Digital Painting",
            "description": "#prayformjapan #art #painting \n\nDigital Painting for Japan.",
            "imgFile": "assets/img/artwork/3B891888F2F9631892FEB50A93FC4512.png",
            "viewCount": "9200",
            "viewLast": "2014-11-27 04:26:58",
            "imgDate": "2011-03-18 00:00:00",
            "created": "2011-03-18 09:41:03",
            "modified": "2012-09-06 01:49:06"
        },
        {
            "id": "762",
            "title": "Girl With Pearl Earing",
            "tag": "Digital Painting",
            "description": "#art #painting Vermeer's masterwork enters to rid the land of some TROLLS.  Those pesky TROLLS never knew what hit em.",
            "imgFile": "assets/img/artwork/138FBDCB8C6525D15847ED29761BB2E1.png",
            "viewCount": "5225",
            "viewLast": "2014-11-22 19:49:43",
            "imgDate": "2011-03-12 00:00:00",
            "created": "2011-03-12 01:46:46",
            "modified": "2012-09-06 01:49:28"
        },
        {
            "id": "755",
            "title": "Persistence Of Memory",
            "tag": "Digital Painting",
            "description": "#art #painting\n\nI went at it again, and this time making a version of Dali's Persistence of Memory.",
            "imgFile": "assets/img/artwork/B84D1A6E4098F336344FB770D62A1691.png",
            "viewCount": "7683",
            "viewLast": "2014-11-27 11:54:07",
            "imgDate": "2011-02-27 00:00:00",
            "created": "2011-02-27 20:15:10",
            "modified": "2012-09-06 01:49:40"
        },
        {
            "id": "752",
            "title": "Starry Night Mermaid",
            "tag": "Digital Painting",
            "description": "#art #painting #disney #ladygaga\n\nIn this digital painting we've mixed Disney's Little Mermaid and Van Gogh's Starry Night.  What can I say all the Van Gogh quotes have been inspiring lately.",
            "imgFile": "assets/img/artwork/AD3A0D6DF3AEE29572A66CC809765C98.jpg",
            "viewCount": "6688",
            "viewLast": "2014-11-27 13:27:52",
            "imgDate": "2011-02-17 00:00:00",
            "created": "2011-02-17 16:25:03",
            "modified": "2012-09-06 01:49:55"
        },
        {
            "id": "725",
            "title": "Distance",
            "tag": "Digital Painting",
            "description": "#art #painting\n\nThere has been only one truly perfect moment in my life, and I constantly find myself re-painting that moment in an effort that it might bring about another.",
            "imgFile": "assets/img/artwork/A017B9754C3E0867217CABADB8190B37.jpg",
            "viewCount": "7549",
            "viewLast": "2014-11-23 19:19:33",
            "imgDate": "2011-02-03 00:00:00",
            "created": "2011-02-03 17:05:52",
            "modified": "2012-09-06 01:50:09"
        },
        {
            "id": "690",
            "title": "The Indigo",
            "tag": "Digital Painting",
            "description": "#art #painting ::::: Indigo children is a pseudoscientific label given to children who are claimed to possess special, unusual and/or supernatural traits or abilities. The concept of indigo children gained popular interest with the publication of a series of books in the late 1990s and the release of several films in the following decade. \n\nhttp://en.wikipedia.org/wiki/Indigo_children",
            "imgFile": "assets/img/artwork/D303863E9B5604CFD918DD54881DEDFE.jpg",
            "viewCount": "5012",
            "viewLast": "2014-11-26 18:16:36",
            "imgDate": "2010-12-16 00:00:00",
            "created": "2010-12-16 13:49:29",
            "modified": "2012-09-06 01:50:58"
        },
        {
            "id": "680",
            "title": "Shrek and Donkey",
            "tag": "Digital Painting",
            "description": "Yet another digital painting... Shrek and Donkey.",
            "imgFile": "assets/img/artwork/3420E14E35DE917BC403F2CDA07B9E9B.jpg",
            "viewCount": "6243",
            "viewLast": "2014-11-22 15:21:09",
            "imgDate": "2010-12-08 00:00:00",
            "created": "2010-12-08 01:42:59",
            "modified": "2012-09-06 01:51:17"
        },
        {
            "id": "675",
            "title": "Megamind",
            "tag": "Digital Painting",
            "description": "Big Blue Headed Megamind",
            "imgFile": "assets/img/artwork/485C1E4E62B7170281CF51372607A851.jpg",
            "viewCount": "6602",
            "viewLast": "2014-11-25 03:40:50",
            "imgDate": "2010-11-26 00:00:00",
            "created": "2010-11-26 22:46:14",
            "modified": "2012-09-06 01:51:30"
        },
        {
            "id": "673",
            "title": "The Nightmare Before Christmas",
            "tag": "Digital Painting",
            "description": "Digital Painting of The Nightmare Before Christmas.",
            "imgFile": "assets/img/artwork/0B528C9657AD738D2467A5FEEB66D778.jpg",
            "viewCount": "6965",
            "viewLast": "2014-11-23 03:24:27",
            "imgDate": "2010-11-25 00:00:00",
            "created": "2010-11-25 11:27:51",
            "modified": "2012-09-06 01:51:48"
        },
        {
            "id": "628",
            "title": "The Stars",
            "tag": "Digital Painting",
            "description": "You ever have one of those dreams?  This is one of those.",
            "imgFile": "assets/img/artwork/4094E9B06A40E618D3CB08EC3AEDAC3F.jpg",
            "viewCount": "6841",
            "viewLast": "2014-11-25 03:42:16",
            "imgDate": "2010-10-17 00:00:00",
            "created": "2010-10-17 19:40:36",
            "modified": "2012-09-06 01:52:11"
        },
        {
            "id": "618",
            "title": "Meditating Garden",
            "tag": "Digital Painting",
            "description": "A monk in a meditating garden.",
            "imgFile": "assets/img/artwork/6D04A3F9E5712BB96E3176911E5C9E49.jpg",
            "viewCount": "9604",
            "viewLast": "2014-11-26 22:54:25",
            "imgDate": "2010-10-02 00:00:00",
            "created": "2010-10-02 18:32:05",
            "modified": "2011-02-25 18:13:37"
        },
        {
            "id": "606",
            "title": "Meditating Buddha",
            "tag": "Digital Painting",
            "description": "Meditating Buddha sitting on a Lotus Petal in a field of Emerald.",
            "imgFile": "assets/img/artwork/3DEB2ED311FE329CDF855D8DB7D48D9A.jpg",
            "viewCount": "8260",
            "viewLast": "2014-11-25 03:44:37",
            "imgDate": "2010-09-26 00:00:00",
            "created": "2010-09-26 13:53:46",
            "modified": "2012-09-06 01:52:46"
        },
        {
            "id": "582",
            "title": "Gagaverse",
            "tag": "Digital Painting",
            "description": "The Gagaverse.  Sometimes I do drawing inspired by celebrities.",
            "imgFile": "assets/img/artwork/09998F3ABC33A524F6482BBF3922B4E5.jpg",
            "viewCount": "5261",
            "viewLast": "2014-11-26 13:12:19",
            "imgDate": "2010-09-20 00:00:00",
            "created": "2010-09-20 09:18:21",
            "modified": "2012-09-06 01:53:21"
        },
        {
            "id": "575",
            "title": "The Entry",
            "tag": "Digital Painting",
            "description": "Just when you think your at the end... another door opens to introduce some new friends.",
            "imgFile": "assets/img/artwork/FFDB1A39579985405D5FB572508C8BBC.jpg",
            "viewCount": "4144",
            "viewLast": "2014-11-27 10:08:29",
            "imgDate": "2010-09-16 00:00:00",
            "created": "2010-09-16 19:38:32",
            "modified": "2012-09-06 01:53:46"
        },
        {
            "id": "571",
            "title": "The Jetson's",
            "tag": "Digital Painting",
            "description": "A drawing of The Jetson's.",
            "imgFile": "assets/img/artwork/B58307244C66ABAD6EBEB36A4B4AE7C1.jpg",
            "viewCount": "4400",
            "viewLast": "2014-11-27 06:32:16",
            "imgDate": "2010-09-12 00:00:00",
            "created": "2010-09-12 22:04:33",
            "modified": "2011-02-25 18:16:12"
        },
        {
            "id": "570",
            "title": "Avatar State Spiderman",
            "tag": "Digital Painting",
            "description": "Digital painting of Spiderman in the Last Air Bender Avatar State.",
            "imgFile": "assets/img/artwork/70E9642153085AFC48455AB6325D8E42.jpg",
            "viewCount": "3842",
            "viewLast": "2014-11-26 01:25:16",
            "imgDate": "2010-09-10 00:00:00",
            "created": "2010-09-10 22:33:44",
            "modified": "2011-02-25 18:46:14"
        },
        {
            "id": "569",
            "title": "Cat In The Hat",
            "tag": "Digital Painting",
            "description": "Cat in the Hat digital Painting.",
            "imgFile": "assets/img/artwork/5D08904657F8E0983F35C9C6888065F7.jpg",
            "viewCount": "3956",
            "viewLast": "2014-11-27 09:36:54",
            "imgDate": "2010-09-09 00:00:00",
            "created": "2010-09-09 12:11:22",
            "modified": "2011-02-25 18:17:07"
        },
        {
            "id": "568",
            "title": "JFK",
            "tag": "Digital Painting",
            "description": "Digital Painting of John F. Kennedy.",
            "imgFile": "assets/img/artwork/0036013B57356DCC097E346F411D9C71.jpg",
            "viewCount": "4261",
            "viewLast": "2014-11-26 20:18:49",
            "imgDate": "2010-09-08 00:00:00",
            "created": "2010-09-08 08:47:14",
            "modified": "2011-02-25 18:17:56"
        },
        {
            "id": "565",
            "title": "Gumby & Pokey",
            "tag": "Digital Painting",
            "description": "Digital painting of Gumby and Pokey",
            "imgFile": "assets/img/artwork/2C71E9E48C619D0304E0625B9445298B.jpg",
            "viewCount": "5213",
            "viewLast": "2014-11-26 16:32:03",
            "imgDate": "2010-09-03 00:00:00",
            "created": "2010-09-03 14:29:16",
            "modified": "2011-02-25 18:40:01"
        },
        {
            "id": "549",
            "title": "The Family Guy",
            "tag": "Digital Painting",
            "description": "Think, The Family Guy meets The Blue Dragon and you'll have this picture in your head.",
            "imgFile": "assets/img/artwork/CCB9C72C39E62F8733ADEC919DAD14B9.jpg",
            "viewCount": "3818",
            "viewLast": "2014-11-26 20:43:33",
            "imgDate": "2010-08-22 00:00:00",
            "created": "2010-08-22 19:51:53",
            "modified": "2011-02-25 18:40:17"
        },
        {
            "id": "540",
            "title": "Blue Dragon",
            "tag": "Digital Painting",
            "description": "This is my blue dragon.  Yeah that's right I have a real dragon.",
            "imgFile": "assets/img/artwork/7694135B8B1C64F03EE5FA9D69480BA0.jpg",
            "viewCount": "3918",
            "viewLast": "2014-11-26 16:51:54",
            "imgDate": "2010-08-14 00:00:00",
            "created": "2010-08-14 18:29:11",
            "modified": "2011-02-25 18:40:31"
        },
        {
            "id": "535",
            "title": "The Mona Lisa",
            "tag": "Digital Painting",
            "description": "Yes... The Mona Lisa.  Instead of ripping off some cartoon today.  Thought I'd spend a few hours painting the Mona Lisa.",
            "imgFile": "assets/img/artwork/E33719026E346DF18CE1ECF9831AF915.jpg",
            "viewCount": "4803",
            "viewLast": "2014-11-26 06:27:16",
            "imgDate": "2010-08-07 00:00:00",
            "created": "2010-08-07 16:43:13",
            "modified": "2011-02-25 18:40:48"
        },
        {
            "id": "534",
            "title": "This Simpsons",
            "tag": "Digital Painting",
            "description": "The Simpsons Family Portrait.  Hmmm looks like they are about to go on a ride.",
            "imgFile": "assets/img/artwork/519A0542FEB7EC54FB05C2BB1CDDE2B4.jpg",
            "viewCount": "4777",
            "viewLast": "2014-11-23 19:19:20",
            "imgDate": "2010-08-06 00:00:00",
            "created": "2010-08-06 12:02:45",
            "modified": "2011-02-25 18:41:02"
        },
        {
            "id": "522",
            "title": "Monsters Inc.",
            "tag": "Digital Painting",
            "description": "Sulley and Mike went on an adventure and low and behold... Mike has an idea.",
            "imgFile": "assets/img/artwork/0C9FD33A7F5262A6481E6B8D34792268.jpg",
            "viewCount": "3176",
            "viewLast": "2014-11-26 02:05:39",
            "imgDate": "2010-07-27 00:00:00",
            "created": "2010-07-27 16:40:23",
            "modified": "2011-02-25 18:44:11"
        },
        {
            "id": "516",
            "title": "Buzz Lightyear & Woody",
            "tag": "Digital Painting",
            "description": "Buzz Lightyear and Woody playing games with Mr. Potato head again.",
            "imgFile": "assets/img/artwork/AD1B76EC8F9829E9E72EA00B20EDA178.jpg",
            "viewCount": "5163",
            "viewLast": "2014-11-27 11:26:24",
            "imgDate": "2010-07-24 00:00:00",
            "created": "2010-07-24 20:46:17",
            "modified": "2011-02-25 18:44:30"
        },
        {
            "id": "514",
            "title": "Finding Nemo",
            "tag": "Digital Painting",
            "description": "Nemo and his dad are going on another adventure into the depths of a new land.",
            "imgFile": "assets/img/artwork/54E184655EF9CCCF3EF8FD7EC89DAC96.jpg",
            "viewCount": "3962",
            "viewLast": "2014-11-27 00:24:18",
            "imgDate": "2010-07-22 00:00:00",
            "created": "2010-07-22 15:58:18",
            "modified": "2011-02-25 18:44:46"
        },
        {
            "id": "513",
            "title": "The Genie",
            "tag": "Digital Painting",
            "description": "The Aladdin Genie coming to the rescue.",
            "imgFile": "assets/img/artwork/82A0536CE8FC327A6734A624130040C9.jpg",
            "viewCount": "2915",
            "viewLast": "2014-11-26 19:21:19",
            "imgDate": "2010-07-21 00:00:00",
            "created": "2010-07-21 18:44:57",
            "modified": "2011-02-25 18:45:05"
        },
        {
            "id": "506",
            "title": "My Mickey Mouse",
            "tag": "Digital Painting",
            "description": "It's time to put Mickey Mouse into Quinnland.",
            "imgFile": "assets/img/artwork/D72E7EED3B314EC8CC63C382E3F022D9.jpg",
            "viewCount": "3534",
            "viewLast": "2014-11-26 16:39:26",
            "imgDate": "2010-07-20 00:00:00",
            "created": "2010-07-20 00:28:15",
            "modified": "2011-02-25 18:45:19"
        }],
        "gallery": {
            "index": [{
                "class": "slide-01",
                "text": "Quinn Michaels<br>Loves writing code"
            },
            {
                "class": "slide-02",
                "text": "Quinn Michaels<br>Has lots of color"
            },
            {
                "class": "slide-03",
                "text": "Quinn Michaels<br>Likes to draw"
            },
            {
                "class": "slide-04",
                "text": "Quinn Michaels<br>Made you look"
            }],
            "work": [{
                "class": "nsg-01",
                "text": "NSG<br>Nike Styleguide"
            },
            {
                "class": "nsg-02",
                "text": "Nike.com"
            },
            {
                "class": "nsg-03",
                "text": "Jordan.com"
            },
            {
                "class": "nsg-04",
                "text": "Hurley.com"
            }]
        },
        "paintings": [{
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0552.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0553.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0554.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0555.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0556.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0557.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0558.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0559.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0560.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0561.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0562.jpg"
        },
        {
            "title": "",
            "imgFile": "assets/img/paintings/IMG_0563.jpg"
        }]
    },
    "style": {
        "config": {
            "prefix": "aio-",
            "grids": {
                "gutter": 30,
                "cols": 12
            },
            "screens": {
                "xs": "360px",
                "sm": "650px",
                "md": "800px",
                "lg": "1100px",
                "xl": "1300px",
                "xxl": "1600px"
            }
        },
        "themes": {
            "default": {
                "colors": {
                    "wht": {
                        "type": "dark",
                        "value": "#fff",
                        "classes": {
                            "text": "aio-txt-wht",
                            "border": "aio-bdr-wht",
                            "background": "aio-bg-wht"
                        }
                    },
                    "wht95": {
                        "type": "dark",
                        "value": "#f5f5f5",
                        "classes": {
                            "text": "aio-txt-wht95",
                            "border": "aio-bdr-wht95",
                            "background": "aio-bg-wht95"
                        }
                    },
                    "wht90": {
                        "type": "dark",
                        "value": "#e5e5e5",
                        "classes": {
                            "text": "aio-txt-wht90",
                            "border": "aio-bdr-wht90",
                            "background": "aio-bg-wht90"
                        }
                    },
                    "wht85": {
                        "type": "dark",
                        "value": "#e1e1e1",
                        "classes": {
                            "text": "aio-txt-wht85",
                            "border": "aio-bdr-wht85",
                            "background": "aio-bg-wht85"
                        }
                    },
                    "wht80": {
                        "type": "dark",
                        "value": "#ccc",
                        "classes": {
                            "text": "aio-txt-wht80",
                            "border": "aio-bdr-wht80",
                            "background": "aio-bg-wht80"
                        }
                    },
                    "wht70": {
                        "type": "dark",
                        "value": "#b3b3b3",
                        "classes": {
                            "text": "aio-txt-wht70",
                            "border": "aio-bdr-wht70",
                            "background": "aio-bg-wht70"
                        }
                    },
                    "wht60": {
                        "type": "dark",
                        "value": "#999",
                        "classes": {
                            "text": "aio-txt-wht60",
                            "border": "aio-bdr-wht60",
                            "background": "aio-bg-wht60"
                        }
                    },
                    "wht50": {
                        "type": "dark",
                        "value": "#808080",
                        "classes": {
                            "text": "aio-txt-wht50",
                            "border": "aio-bdr-wht50",
                            "background": "aio-bg-wht50"
                        }
                    },
                    "wht40": {
                        "type": "dark",
                        "value": "#666",
                        "classes": {
                            "text": "aio-txt-wht40",
                            "border": "aio-bdr-wht40",
                            "background": "aio-bg-wht40"
                        }
                    },
                    "wht30": {
                        "type": "dark",
                        "value": "#4d4d4d",
                        "classes": {
                            "text": "aio-txt-wht30",
                            "border": "aio-bdr-wht30",
                            "background": "aio-bg-wht30"
                        }
                    },
                    "wht20": {
                        "type": "dark",
                        "value": "#333",
                        "classes": {
                            "text": "aio-txt-wht20",
                            "border": "aio-bdr-wht20",
                            "background": "aio-bg-wht20"
                        }
                    },
                    "wht10": {
                        "type": "dark",
                        "value": "#1a1a1a",
                        "classes": {
                            "text": "aio-txt-wht10",
                            "border": "aio-bdr-wht10",
                            "background": "aio-bg-wht10"
                        }
                    },
                    "blk": {
                        "type": "dark",
                        "value": "#000",
                        "classes": {
                            "text": "aio-txt-blk",
                            "border": "aio-bdr-blk",
                            "background": "aio-bg-blk"
                        }
                    },
                    "accent": {
                        "type": "dark",
                        "value": "#ff8a00",
                        "classes": {
                            "text": "aio-txt-accent",
                            "border": "aio-bdr-accent",
                            "background": "aio-bg-accent"
                        }
                    }
                },
                "components": {
                    "button": {
                        "&": {
                            "background-color": "#ff8a00",
                            "color": "#fff",
                            "display": "inline-block",
                            "padding": "6px 12px",
                            "margin-bottom": "5px",
                            "font-size": "1em",
                            "font-weight": "400",
                            "line-height": "1.5",
                            "text-align": "center",
                            "white-space": "nowrap",
                            "vertical-align": "middle",
                            "-ms-touch-action": "manipulation",
                            "touch-action": "manipulation",
                            "cursor": "pointer",
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "user-select": "none",
                            "background-image": "none",
                            "border": "1px solid transparent",
                            "border-radius": "3px"
                        }
                    },
                    "footer": {
                        "&": {
                            "> div": {
                                "line-height": "2",
                                "color": "#fff",
                                "font-size": ".75em",
                                "text-align": "right",
                                "padding-right": "20px"
                            }
                        }
                    },
                    "gallery": {
                        "&": {
                            "position": "relative",
                            "z-index": "1",
                            "padding-bottom": "51.3889%"
                        },
                        ".copy": {
                            "position": "absolute",
                            "z-index": "1000",
                            "width": "100%",
                            "top": "52%",
                            "-webkit-transform": "translateY(-50%)",
                            "-ms-transform": "translateY(-50%)",
                            "transform": "translateY(-50%)",
                            "> h2": {
                                "text-align": "center",
                                "margin": "0 25px",
                                "letter-spacing": "-1px",
                                "line-height": "1.0526"
                            }
                        },
                        ".slides": {
                            "section": {
                                "position": "absolute",
                                "z-index": "1",
                                "top": "0",
                                "bottom": "0",
                                "left": "0",
                                "right": "0",
                                "-webkit-transform": "translateZ(0)",
                                "transform": "translateZ(0)",
                                "opacity": "0",
                                "transition": "opacity 2s",
                                "&.active": {
                                    "transition": "opacity 1s",
                                    "opacity": "1",
                                    "z-index": "2"
                                },
                                "figure": {
                                    "margin": "0 auto",
                                    "background-repeat": "no-repeat",
                                    "height": "auto",
                                    "width": "100%",
                                    "max-width": "100%",
                                    "padding-bottom": "51.3889%",
                                    "background-position": "50% 50%",
                                    "background-size": "100% auto",
                                    "&.slide-01": {
                                        "background-image": "url(assets/img/gallery/slide-01.jpg)"
                                    },
                                    "&.slide-02": {
                                        "background-image": "url(assets/img/gallery/slide-02.jpg)"
                                    },
                                    "&.slide-03": {
                                        "background-image": "url(assets/img/gallery/slide-03.jpg)"
                                    },
                                    "&.slide-04": {
                                        "background-image": "url(assets/img/gallery/slide-04.jpg)"
                                    },
                                    "&.slide-05": {
                                        "background-image": "url(assets/img/gallery/slide-05.jpg)"
                                    },
                                    "&.nsg-01": {
                                        "background-image": "url(assets/img/gallery/nsg-01.jpg)"
                                    },
                                    "&.nsg-02": {
                                        "background-image": "url(assets/img/gallery/nsg-02.jpg)"
                                    },
                                    "&.nsg-03": {
                                        "background-image": "url(assets/img/gallery/nsg-03.jpg)"
                                    },
                                    "&.nsg-04": {
                                        "background-image": "url(assets/img/gallery/nsg-04.jpg)"
                                    }
                                }
                            }
                        }
                    },
                    "header": {
                        "&": {
                            "position": "fixed",
                            "top": "0",
                            "right": "0",
                            "left": "0",
                            "z-index": "9999",
                            "display": "block",
                            "margin": "0",
                            "width": "100%",
                            "height": "44px",
                            "max-height": "44px",
                            "background": "rgba(0,0,0,0.8)",
                            "font-size": "18px"
                        },
                        "> div": {
                            "position": "relative",
                            "margin": "0 auto",
                            "padding": "0 22px",
                            "> ul": {
                                "list-style": "none",
                                "cursor": "default",
                                "margin": "0 -10px",
                                "padding": "0",
                                "width": "auto",
                                "height": "44px",
                                "text-align": "center",
                                "> li": {
                                    "display": "inline-block",
                                    "position": "relative",
                                    "height": "44px",
                                    "z-index": "1",
                                    "vertical-align": "top",
                                    "text-align": "center",
                                    "> a": {
                                        "font-size": "1em",
                                        "line-height": "2.75",
                                        "font-weight": "400",
                                        "letter-spacing": "normal",
                                        "opacity": "1",
                                        "color": "#fff",
                                        "position": "relative",
                                        "z-index": "1",
                                        "display": "inline-block",
                                        "padding": "0 10px",
                                        "height": "44px",
                                        "background": "no-repeat",
                                        "text-decoration": "none",
                                        "white-space": "nowrap",
                                        "-webkit-transition": "opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",
                                        "transition": "opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",
                                        "-webkit-tap-highlight-color": "transparent",
                                        "outline-offset": "-7px"
                                    }
                                }
                            }
                        }
                    },
                    "index": {
                        "&": {
                            "margin": "auto"
                        }
                    },
                    "modal": {
                        "&": {
                            "transition": "opacity .5s",
                            "-webkit-transition": "opacity .5s",
                            "-webkit-transform": "translateY(0);",
                            "-webkit-backface-visibility": "none",
                            "z-index": "10",
                            "position": "fixed",
                            "background-color": "rgba(0,0,0,.95)",
                            "height": "100%",
                            "top": "100%",
                            "left": "0",
                            "right": "0",
                            "opacity": "0.25",
                            "overflow": "scroll"
                        },
                        "&.open": {
                            "display": "block",
                            "top": "0",
                            "bottom": "0",
                            "opacity": "1",
                            "z-index": "100000"
                        },
                        "&-close": {
                            "background-color": "transparent",
                            "color": "#fff",
                            "display": "inline-block",
                            "line-height": "0",
                            "text-align": "center",
                            "vertical-align": "middle",
                            "-ms-touch-action": "manipulation",
                            "touch-action": "manipulation",
                            "cursor": "pointer",
                            "-webkit-user-select": "none",
                            "-moz-user-select": "none",
                            "-ms-user-select": "none",
                            "user-select": "none",
                            "background-image": "none",
                            "border": "1px solid transparent",
                            "font-family": "icons",
                            "font-style": "normal",
                            "font-weight": "normal",
                            "position": "absolute",
                            "top": "10px",
                            "right": "10px",
                            "width": "50px",
                            "height": "50px",
                            "border-radius": "50%",
                            "box-shadow": "0 1px 3px rgba(0,0,0,.4)",
                            "z-index": "1",
                            "&:before": {
                                "content": "'\f00d'"
                            },
                            "&,&:active,&:hover,&:visited,&:focus": {
                                "outline": "0"
                            }
                        },
                        ".img-box": {
                            "color": "#fff",
                            "text-align": "center",
                            "margin-top": "10%",
                            "img": {
                                "box-shadow": "0px 3px 18px #000",
                                "max-width": "100%"
                            },
                            "h1": {
                                "text-shadow": "0px 3px 18px #000"
                            }
                        }
                    },
                    "section": {
                        "&": {
                            "padding": "3em",
                            "border-top": "1px solid #808080"
                        },
                        "&.work": {
                            "img": {
                                "max-width": "90%",
                                "display": "block",
                                "margin": "auto"
                            }
                        }
                    },
                    "work": {
                        "text-align": "center",
                        "p": {
                            "max-width": "900px",
                            "margin-left": "auto",
                            "margin-right": "auto"
                        },
                        "img": {
                            "max-width": "90%"
                        },
                        "&.intro": {
                            "img": {
                                "display": "block",
                                "width": "75%",
                                "margin": "auto"
                            }
                        },
                        "&.components": {
                            "p": {
                                "img": {
                                    "max-width": "80%",
                                    "box-shadow": "0 1px 13px #b3b3b3",
                                    "border-radius": "3px"
                                }
                            }
                        },
                        "h4": {
                            "margin-top": "3em"
                        }
                    }
                },
                "global": {
                    "*": {
                        "box-sizing": "border-box",
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "user-select": "none"
                    },
                    "body": {
                        "font-family": "brandon-grotesque, Helvetica, Arial, sans-serif",
                        "font-weight": "100",
                        "font-size": "16px",
                        "background-color": "#fff",
                        "color": "#333",
                        "&.modal-open": {
                            "overflow": "hidden"
                        },
                        "@media min-width:650px": {
                            "font-size": "18px"
                        },
                        "@media min-width:800px": {
                            "font-size": "20px"
                        },
                        "@media min-width: 1100px": {
                            "font-size": "23px"
                        },
                        "@media min-width: 1300px": {
                            "font-size": "27px"
                        },
                        "@media min-width: 1600px": {
                            "font-size": "33px"
                        }
                    },
                    "h1,h2,h3,h4,h5,h6": {
                        "font-family": "brandon-grotesque, Helvetica, Arial, sans-serif",
                        "font-weight": "100",
                        "margin": "0.2em 0 0"
                    },
                    "h1": {
                        "font-size": "2.5em"
                    },
                    "h2": {
                        "font-size": "2em"
                    },
                    "h3": {
                        "font-size": "1.7em"
                    },
                    "h4": {
                        "font-size": "1.4em"
                    },
                    "h5": {
                        "font-size": "1.2em"
                    },
                    "h6": {
                        "font-size": "1em"
                    },
                    "p": {
                        "font-size": "1em"
                    },
                    "a": {
                        "color": "#fa5400",
                        "text-decoration": "none",
                        "&:hover": {
                            "color": "#336699",
                            "text-decoration": "underline"
                        }
                    },
                    ".owl-controls": {
                        "font-family": "icons",
                        "font-size": "45px",
                        "top": "calc(50% - 30px)",
                        "left": "-45px",
                        "right": "-45px"
                    },
                    ".owl-nav": {
                        "> div": {
                            "position": "absolute",
                            "padding": "5px",
                            "top": "calc(50% - 30px)"
                        }
                    },
                    ".owl-prev": {
                        "float": "left",
                        "left": "-50px"
                    },
                    ".owl-next": {
                        "float": "right",
                        "right": "-50px"
                    },
                    "[data-modal]": {
                        "&:hover": {
                            "cursor": "pointer"
                        }
                    },
                    "[data-image]": {
                        "position": "relative",
                        "&:after": {
                            "font-family": "icons",
                            "content": "",
                            "display": "block",
                            "position": "absolute",
                            "left": "0",
                            "top": "0",
                            "right": "0",
                            "bottom": "0",
                            "background-color": "rgba(0,0,0,.5)"
                        }
                    }
                },
                "icons": {
                    "config": {
                        "family": "icons",
                        "file": "../../../../fonts/icons/fontawesome-webfont",
                        "ver": "v=4.3.0"
                    },
                    "chrMap": {
                        "glass": "f000",
                        "music": "f001",
                        "search": "f002",
                        "envelope-o": "f003",
                        "heart": "f004",
                        "star": "f005",
                        "star-o": "f006",
                        "user": "f007",
                        "film": "f008",
                        "th-large": "f009",
                        "th": "f00a",
                        "th-list": "f00b",
                        "check": "f00c",
                        "remove": "f00d",
                        "close": ":f00d",
                        "times": "f00d",
                        "search-plus": "f00e",
                        "search-minus": "f010",
                        "power-off": "f011",
                        "signal": "f012",
                        "gear": "f013",
                        "trash-o": "f014",
                        "home": "f015",
                        "file-o": "f016",
                        "clock-o": "f017",
                        "road": "f018",
                        "download": "f019",
                        "arrow-circle-o-down": "f01a",
                        "arrow-circle-o-up": "f01b",
                        "inbox": "f01c",
                        "play-circle-o": "f01d",
                        "repeat": "f01e",
                        "refresh": "f021",
                        "list-alt": "f022",
                        "lock": "f023",
                        "flag": "f024",
                        "headphones": "f025",
                        "volume-off": "f026",
                        "volume-down": "f027",
                        "volume-up": "f028",
                        "qrcode": "f029",
                        "barcode": "f02a",
                        "tag": "f02b",
                        "tags": "f02c",
                        "book": "f02d",
                        "bookmark": "f02e",
                        "print": "f02f",
                        "camera": "f030",
                        "font": "f031",
                        "bold": "f032",
                        "italic": "f033",
                        "text-height": "f034",
                        "text-width": "f035",
                        "align-left": "f036",
                        "align-center": "f037",
                        "align-right": "f038",
                        "align-justify": "f039",
                        "list": "f03a",
                        "outdent": "f03b",
                        "indent": "f03c",
                        "video-camera": "f03d",
                        "photo": "f03e",
                        "pencil": "f040",
                        "map-marker": "f041",
                        "adjust": "f042",
                        "tint": "f043",
                        "edit": "f044",
                        "share-square-o": "f045",
                        "check-square-o": "f046",
                        "arrows": "f047",
                        "step-backward": "f048",
                        "fast-backward": "f049",
                        "backward": "f04a",
                        "play": "f04b",
                        "pause": "f04c",
                        "stop": "f04d",
                        "forward": "f04e",
                        "fast-forward": "f050",
                        "step-forward": "f051",
                        "eject": "f052",
                        "chevron-left": "f053",
                        "chevron-right": "f054",
                        "plus-circle": "f055",
                        "minus-circle": "f056",
                        "times-circle": "f057",
                        "check-circle": "f058",
                        "question-circle": "f059",
                        "info-circle": "f05a",
                        "crosshairs": "f05b",
                        "times-circle-o": "f05c",
                        "check-circle-o": "f05d",
                        "ban": "f05e",
                        "arrow-left": "f060",
                        "arrow-right": "f061",
                        "arrow-up": "f062",
                        "arrow-down": "f063",
                        "share": "f064",
                        "expand": "f065",
                        "compress": "f066",
                        "plus": "f067",
                        "minus": "f068",
                        "asterisk": "f069",
                        "exclamation-circle": "f06a",
                        "gift": "f06b",
                        "leaf": "f06c",
                        "fire": "f06d",
                        "eye": "f06e",
                        "eye-slash": "f070",
                        "warning": "f071",
                        "plane": "f072",
                        "calendar": "f073",
                        "random": "f074",
                        "comment": "f075",
                        "magnet": "f076",
                        "chevron-up": "f077",
                        "chevron-down": "f078",
                        "retweet": "f079",
                        "shopping-cart": "f07a",
                        "folder": "f07b",
                        "folder-open": "f07c",
                        "arrows-v": "f07d",
                        "arrows-h": "f07e",
                        "bar-chart": "f080",
                        "twitter-square": "f081",
                        "facebook-square": "f082",
                        "camera-retro": "f083",
                        "key": "f084",
                        "gears": "f085",
                        "comments": "f086",
                        "thumbs-o-up": "f087",
                        "thumbs-o-down": "f088",
                        "star-half": "f123",
                        "heart-o": "f08a",
                        "sign-out": "f08b",
                        "linkedin-square": "f08c",
                        "thumb-tack": "f08d",
                        "external-link": "f08e",
                        "sign-in": "f090",
                        "trophy": "f091",
                        "github-square": "f092",
                        "upload": "f093",
                        "lemon-o": "f094",
                        "phone": "f095",
                        "square-o": "f096",
                        "bookmark-o": "f097",
                        "phone-square": "f098",
                        "twitter": "f099",
                        "facebook": "f09a",
                        "github": "f09b",
                        "unlock": "f09c",
                        "credit-card": "f09d",
                        "rss": "f09e",
                        "hdd-o": "f0a0",
                        "bullhorn": "f0a1",
                        "bell": "f0f3",
                        "certificate": "f0a3",
                        "hand-o-right": "f0a4",
                        "hand-o-left": "f0a5",
                        "hand-o-up": "f0a6",
                        "hand-o-down": "f0a7",
                        "arrow-circle-left": "f0a8",
                        "arrow-circle-right": "f0a9",
                        "arrow-circle-up": "f0aa",
                        "arrow-circle-down": "f0ab",
                        "globe": "f0ac",
                        "wrench": "f0ad",
                        "tasks": "f0ae",
                        "filter": "f0b0",
                        "briefcase": "f0b1",
                        "arrows-alt": "f0b2",
                        "users": "f0c0",
                        "link": "f0c1",
                        "cloud": "f0c2",
                        "flask": "f0c3",
                        "cut": "f0c4",
                        "copy": "f0c5",
                        "paperclip": "f0c6",
                        "save": "f0c7",
                        "square": "f0c8",
                        "bars": "f0c9",
                        "list-ul": "f0ca",
                        "list-ol": "f0cb",
                        "strikethrough": "f0cc",
                        "underline": "f0cd",
                        "table": "f0ce",
                        "magic": "f0d0",
                        "truck": "f0d1",
                        "pinterest": "f0d2",
                        "pinterest-square": "f0d3",
                        "google-plus-square": "f0d4",
                        "google-plus": "f0d5",
                        "money": "f0d6",
                        "caret-down": "f0d7",
                        "caret-up": "f0d8",
                        "caret-left": "f0d9",
                        "caret-right": "f0da",
                        "columns": "f0db",
                        "sort": "f0dc",
                        "sort-desc": "f0dd",
                        "sort-asc": "f0de",
                        "envelope": "f0e0",
                        "linkedin": "f0e1",
                        "undo": "f0e2",
                        "legal": "f0e3",
                        "dashboard": "f0e4",
                        "comment-o": "f0e5",
                        "comments-o": "f0e6",
                        "flash": "f0e7",
                        "sitemap": "f0e8",
                        "umbrella": "f0e9",
                        "paste": "f0ea",
                        "lightbulb-o": "f0eb",
                        "exchange": "f0ec",
                        "cloud-download": "f0ed",
                        "cloud-upload": "f0ee",
                        "user-md": "f0f0",
                        "stethoscope": "f0f1",
                        "suitcase": "f0f2",
                        "bell-o": "f0a2",
                        "coffee": "f0f4",
                        "cutlery": "f0f5",
                        "file-text-o": "f0f6",
                        "building-o": "f0f7",
                        "hospital-o": "f0f8",
                        "ambulance": "f0f9",
                        "medkit": "f0fa",
                        "fighter-jet": "f0fb",
                        "beer": "f0fc",
                        "h-square": "f0fd",
                        "plus-square": "f0fe",
                        "angle-double-left": "f100",
                        "angle-double-right": "f101",
                        "angle-double-up": "f102",
                        "angle-double-down": "f103",
                        "angle-left": "f104",
                        "angle-right": "f105",
                        "angle-up": "f106",
                        "angle-down": "f107",
                        "desktop": "f108",
                        "laptop": "f109",
                        "tablet": "f10a",
                        "mobile": "f10b",
                        "circle-o": "f10c",
                        "quote-left": "f10d",
                        "quote-right": "f10e",
                        "spinner": "f110",
                        "circle": "f111",
                        "reply": "f112",
                        "github-alt": "f113",
                        "folder-o": "f114",
                        "folder-open-o": "f115",
                        "smile-o": "f118",
                        "frown-o": "f119",
                        "meh-o": "f11a",
                        "gamepad": "f11b",
                        "keyboard-o": "f11c",
                        "flag-o": "f11d",
                        "flag-checkered": "f11e",
                        "terminal": "f120",
                        "code": "f121",
                        "reply-all": "f122",
                        "location-arrow": "f124",
                        "crop": "f125",
                        "code-fork": "f126",
                        "unlink": "f127",
                        "question": "f128",
                        "info": "f129",
                        "exclamation": "f12a",
                        "superscript": "f12b",
                        "subscript": "f12c",
                        "eraser": "f12d",
                        "puzzle-piece": "f12e",
                        "microphone": "f130",
                        "microphone-slash": "f131",
                        "shield": "f132",
                        "calendar-o": "f133",
                        "fire-extinguisher": "f134",
                        "rocket": "f135",
                        "maxcdn": "f136",
                        "chevron-circle-left": "f137",
                        "chevron-circle-right": "f138",
                        "chevron-circle-up": "f139",
                        "chevron-circle-down": "f13a",
                        "html5": "f13b",
                        "css3": "f13c",
                        "anchor": "f13d",
                        "unlock-alt": "f13e",
                        "bullseye": "f140",
                        "ellipsis-h": "f141",
                        "ellipsis-v": "f142",
                        "rss-square": "f143",
                        "play-circle": "f144",
                        "ticket": "f145",
                        "minus-square": "f146",
                        "minus-square-o": "f147",
                        "level-up": "f148",
                        "level-down": "f149",
                        "check-square": "f14a",
                        "pencil-square": "f14b",
                        "external-link-square": "f14c",
                        "share-square": "f14d",
                        "compass": "f14e",
                        "toggle-down": "f150",
                        "toggle-up": "f151",
                        "toggle-right": "f152",
                        "euro": "f153",
                        "gbp": "f154",
                        "dollar": "f155",
                        "rupee": "f156",
                        "yen": "f157",
                        "ruble": "f158",
                        "won": "f159",
                        "bitcoin": "f15a",
                        "file": "f15b",
                        "file-text": "f15c",
                        "sort-alpha-asc": "f15d",
                        "sort-alpha-desc": "f15e",
                        "sort-amount-asc": "f160",
                        "sort-amount-desc": "f161",
                        "sort-numeric-asc": "f162",
                        "sort-numeric-desc": "f163",
                        "thumbs-up": "f164",
                        "thumbs-down": "f165",
                        "youtube-square": "f166",
                        "youtube": "f167",
                        "xing": "f168",
                        "xing-square": "f169",
                        "youtube-play": "f16a",
                        "dropbox": "f16b",
                        "stack-overflow": "f16c",
                        "instagram": "f16d",
                        "flickr": "f16e",
                        "adn": "f170",
                        "bitbucket": "f171",
                        "bitbucket-square": "f172",
                        "tumblr": "f173",
                        "tumblr-square": "f174",
                        "long-arrow-down": "f175",
                        "long-arrow-up": "f176",
                        "long-arrow-left": "f177",
                        "long-arrow-right": "f178",
                        "apple": "f179",
                        "windows": "f17a",
                        "android": "f17b",
                        "linux": "f17c",
                        "dribbble": "f17d",
                        "skype": "f17e",
                        "foursquare": "f180",
                        "trello": "f181",
                        "female": "f182",
                        "male": "f183",
                        "gratipay": "f184",
                        "sun-o": "f185",
                        "moon-o": "f186",
                        "archive": "f187",
                        "bug": "f188",
                        "vk": "f189",
                        "weibo": "f18a",
                        "renren": "f18b",
                        "pagelines": "f18c",
                        "stack-exchange": "f18d",
                        "arrow-circle-o-right": "f18e",
                        "arrow-circle-o-left": "f190",
                        "toggle-left": "f191",
                        "dot-circle-o": "f192",
                        "wheelchair": "f193",
                        "vimeo-square": "f194",
                        "turkish-lira": "f195",
                        "plus-square-o": "f196",
                        "space-shuttle": "f197",
                        "slack": "f198",
                        "envelope-square": "f199",
                        "wordpress": "f19a",
                        "openid": "f19b",
                        "institution": "f19c",
                        "graduation-cap": "f19d",
                        "yahoo": "f19e",
                        "google": "f1a0",
                        "reddit": "f1a1",
                        "reddit-square": "f1a2",
                        "stumbleupon-circle": "f1a3",
                        "stumbleupon": "f1a4",
                        "delicious": "f1a5",
                        "digg": "f1a6",
                        "pied-piper": "f1a7",
                        "pied-piper-alt": "f1a8",
                        "drupal": "f1a9",
                        "joomla": "f1aa",
                        "language": "f1ab",
                        "fax": "f1ac",
                        "building": "f1ad",
                        "child": "f1ae",
                        "paw": "f1b0",
                        "spoon": "f1b1",
                        "cube": "f1b2",
                        "cubes": "f1b3",
                        "behance": "f1b4",
                        "behance-square": "f1b5",
                        "steam": "f1b6",
                        "steam-square": "f1b7",
                        "recycle": "f1b8",
                        "car": "f1b9",
                        "taxi": "f1ba",
                        "tree": "f1bb",
                        "spotify": "f1bc",
                        "deviantart": "f1bd",
                        "soundcloud": "f1be",
                        "database": "f1c0",
                        "file-pdf-o": "f1c1",
                        "file-word-o": "f1c2",
                        "file-excel-o": "f1c3",
                        "file-powerpoint-o": "f1c4",
                        "file-image-o": "f1c5",
                        "file-zip-o": "f1c6",
                        "file-audio-o": "f1c7",
                        "file-video-o": "f1c8",
                        "file-code-o": "f1c9",
                        "vine": "f1ca",
                        "codepen": "f1cb",
                        "jsfiddle": "f1cc",
                        "life-saver": "f1cd",
                        "circle-o-notch": "f1ce",
                        "ra": "f1d0",
                        "empire": "f1d1",
                        "git-square": "f1d2",
                        "git": "f1d3",
                        "hacker-news": "f1d4",
                        "tencent-weibo": "f1d5",
                        "qq": "f1d6",
                        "wechat": "f1d7",
                        "send": "f1d8",
                        "send-o": "f1d9",
                        "history": "f1da",
                        "circle-thin": "f1db",
                        "header": "f1dc",
                        "paragraph": "f1dd",
                        "sliders": "f1de",
                        "share-alt": "f1e0",
                        "share-alt-square": "f1e1",
                        "bomb": "f1e2",
                        "soccer-ball-o": "f1e3",
                        "tty": "f1e4",
                        "binoculars": "f1e5",
                        "plug": "f1e6",
                        "slideshare": "f1e7",
                        "twitch": "f1e8",
                        "yelp": "f1e9",
                        "newspaper-o": "f1ea",
                        "wifi": "f1eb",
                        "calculator": "f1ec",
                        "paypal": "f1ed",
                        "google-wallet": "f1ee",
                        "cc-visa": "f1f0",
                        "cc-mastercard": "f1f1",
                        "cc-discover": "f1f2",
                        "cc-amex": "f1f3",
                        "cc-paypal": "f1f4",
                        "cc-stripe": "f1f5",
                        "bell-slash": "f1f6",
                        "bell-slash-o": "f1f7",
                        "trash": "f1f8",
                        "copyright": "f1f9",
                        "at": "f1fa",
                        "eyedropper": "f1fb",
                        "paint-brush": "f1fc",
                        "birthday-cake": "f1fd",
                        "area-chart": "f1fe",
                        "pie-chart": "f200",
                        "line-chart": "f201",
                        "lastfm": "f202",
                        "lastfm-square": "f203",
                        "toggle-off": "f204",
                        "toggle-on": "f205",
                        "bicycle": "f206",
                        "bus": "f207",
                        "ioxhost": "f208",
                        "angellist": "f209",
                        "cc": "f20a",
                        "sheqel": "f20b",
                        "meanpath": "f20c",
                        "buysellads": "f20d",
                        "connectdevelop": "f20e",
                        "dashcube": "f210",
                        "forumbee": "f211",
                        "leanpub": "f212",
                        "sellsy": "f213",
                        "shirtsinbulk": "f214",
                        "simplybuilt": "f215",
                        "skyatlas": "f216",
                        "cart-plus": "f217",
                        "cart-arrow-down": "f218",
                        "diamond": "f219",
                        "ship": "f21a",
                        "user-secret": "f21b",
                        "motorcycle": "f21c",
                        "street-view": "f21d",
                        "heartbeat": "f21e",
                        "venus": "f221",
                        "mars": "f222",
                        "mercury": "f223",
                        "transgender": "f224",
                        "transgender-alt": "f225",
                        "venus-double": "f226",
                        "mars-double": "f227",
                        "venus-mars": "f228",
                        "mars-stroke": "f229",
                        "mars-stroke-v": "f22a",
                        "mars-stroke-h": "f22b",
                        "neuter": "f22c",
                        "facebook-official": "f230",
                        "pinterest-p": "f231",
                        "whatsapp": "f232",
                        "server": "f233",
                        "user-plus": "f234",
                        "user-times": "f235",
                        "hotel": "f236",
                        "viacoin": "f237",
                        "train": "f238",
                        "subway": "f239",
                        "medium": "f23a"
                    }
                },
                "util": {
                    ".v-top": {
                        "vertical-align": "top"
                    },
                    ".v-mid": {
                        "vertical-align": "middle"
                    },
                    ".v-bot": {
                        "vertical-align": "bottom"
                    },
                    ".pad5": {
                        "padding": "5px"
                    },
                    ".pad10": {
                        "padding": "10px"
                    },
                    ".pad15": {
                        "padding": "15px"
                    },
                    ".pad20": {
                        "padding": "20px"
                    },
                    ".float-r": {
                        "float": "right !important"
                    },
                    ".float-l": {
                        "float": "left !important"
                    },
                    ".loading": {
                        "display": "none"
                    },
                    ".left": {
                        "text-align": "left"
                    },
                    ".center": {
                        "text-align": "center"
                    },
                    ".right": {
                        "text-align": "right"
                    },
                    ".p-max-900": {
                        "> p": {
                            "max-width": "900px",
                            "margin-left": "auto",
                            "margin-right": "auto"
                        }
                    },
                    ".videoWrapper": {
                        "position": "relative",
                        "padding-bottom": "56.25%",
                        "padding-top": "25px",
                        "iframe": {
                            "position": "absolute",
                            "top": "0",
                            "left": "0",
                            "width": "100%",
                            "height": "100%"
                        }
                    }
                },
                "vars": {
                    "nav": {
                        "height": "40px"
                    },
                    "header": {
                        "height": "44px",
                        "minWidth": "1024px",
                        "background": "rgba(0,0,0,0.8)"
                    },
                    "footer": {
                        "height": "40px"
                    },
                    "fonts": {
                        "heading": "brandon-grotesque, Helvetica, Arial, sans-serif",
                        "default": "brandon-grotesque, Helvetica, Arial, sans-serif"
                    },
                    "colors": {
                        "links": {
                            "default": "#fa5400",
                            "hover": "#336699",
                            "active": "#333",
                            "visited": "#336699"
                        }
                    }
                }
            }
        },
        "theme": {
            "colors": {
                "wht": {
                    "type": "dark",
                    "value": "#fff",
                    "classes": {
                        "text": "aio-txt-wht",
                        "border": "aio-bdr-wht",
                        "background": "aio-bg-wht"
                    }
                },
                "wht95": {
                    "type": "dark",
                    "value": "#f5f5f5",
                    "classes": {
                        "text": "aio-txt-wht95",
                        "border": "aio-bdr-wht95",
                        "background": "aio-bg-wht95"
                    }
                },
                "wht90": {
                    "type": "dark",
                    "value": "#e5e5e5",
                    "classes": {
                        "text": "aio-txt-wht90",
                        "border": "aio-bdr-wht90",
                        "background": "aio-bg-wht90"
                    }
                },
                "wht85": {
                    "type": "dark",
                    "value": "#e1e1e1",
                    "classes": {
                        "text": "aio-txt-wht85",
                        "border": "aio-bdr-wht85",
                        "background": "aio-bg-wht85"
                    }
                },
                "wht80": {
                    "type": "dark",
                    "value": "#ccc",
                    "classes": {
                        "text": "aio-txt-wht80",
                        "border": "aio-bdr-wht80",
                        "background": "aio-bg-wht80"
                    }
                },
                "wht70": {
                    "type": "dark",
                    "value": "#b3b3b3",
                    "classes": {
                        "text": "aio-txt-wht70",
                        "border": "aio-bdr-wht70",
                        "background": "aio-bg-wht70"
                    }
                },
                "wht60": {
                    "type": "dark",
                    "value": "#999",
                    "classes": {
                        "text": "aio-txt-wht60",
                        "border": "aio-bdr-wht60",
                        "background": "aio-bg-wht60"
                    }
                },
                "wht50": {
                    "type": "dark",
                    "value": "#808080",
                    "classes": {
                        "text": "aio-txt-wht50",
                        "border": "aio-bdr-wht50",
                        "background": "aio-bg-wht50"
                    }
                },
                "wht40": {
                    "type": "dark",
                    "value": "#666",
                    "classes": {
                        "text": "aio-txt-wht40",
                        "border": "aio-bdr-wht40",
                        "background": "aio-bg-wht40"
                    }
                },
                "wht30": {
                    "type": "dark",
                    "value": "#4d4d4d",
                    "classes": {
                        "text": "aio-txt-wht30",
                        "border": "aio-bdr-wht30",
                        "background": "aio-bg-wht30"
                    }
                },
                "wht20": {
                    "type": "dark",
                    "value": "#333",
                    "classes": {
                        "text": "aio-txt-wht20",
                        "border": "aio-bdr-wht20",
                        "background": "aio-bg-wht20"
                    }
                },
                "wht10": {
                    "type": "dark",
                    "value": "#1a1a1a",
                    "classes": {
                        "text": "aio-txt-wht10",
                        "border": "aio-bdr-wht10",
                        "background": "aio-bg-wht10"
                    }
                },
                "blk": {
                    "type": "dark",
                    "value": "#000",
                    "classes": {
                        "text": "aio-txt-blk",
                        "border": "aio-bdr-blk",
                        "background": "aio-bg-blk"
                    }
                },
                "accent": {
                    "type": "dark",
                    "value": "#ff8a00",
                    "classes": {
                        "text": "aio-txt-accent",
                        "border": "aio-bdr-accent",
                        "background": "aio-bg-accent"
                    }
                }
            },
            "components": {
                "button": {
                    "&": {
                        "background-color": "#ff8a00",
                        "color": "#fff",
                        "display": "inline-block",
                        "padding": "6px 12px",
                        "margin-bottom": "5px",
                        "font-size": "1em",
                        "font-weight": "400",
                        "line-height": "1.5",
                        "text-align": "center",
                        "white-space": "nowrap",
                        "vertical-align": "middle",
                        "-ms-touch-action": "manipulation",
                        "touch-action": "manipulation",
                        "cursor": "pointer",
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "user-select": "none",
                        "background-image": "none",
                        "border": "1px solid transparent",
                        "border-radius": "3px"
                    }
                },
                "footer": {
                    "&": {
                        "> div": {
                            "line-height": "2",
                            "color": "#fff",
                            "font-size": ".75em",
                            "text-align": "right",
                            "padding-right": "20px"
                        }
                    }
                },
                "gallery": {
                    "&": {
                        "position": "relative",
                        "z-index": "1",
                        "padding-bottom": "51.3889%"
                    },
                    ".copy": {
                        "position": "absolute",
                        "z-index": "1000",
                        "width": "100%",
                        "top": "52%",
                        "-webkit-transform": "translateY(-50%)",
                        "-ms-transform": "translateY(-50%)",
                        "transform": "translateY(-50%)",
                        "> h2": {
                            "text-align": "center",
                            "margin": "0 25px",
                            "letter-spacing": "-1px",
                            "line-height": "1.0526"
                        }
                    },
                    ".slides": {
                        "section": {
                            "position": "absolute",
                            "z-index": "1",
                            "top": "0",
                            "bottom": "0",
                            "left": "0",
                            "right": "0",
                            "-webkit-transform": "translateZ(0)",
                            "transform": "translateZ(0)",
                            "opacity": "0",
                            "transition": "opacity 2s",
                            "&.active": {
                                "transition": "opacity 1s",
                                "opacity": "1",
                                "z-index": "2"
                            },
                            "figure": {
                                "margin": "0 auto",
                                "background-repeat": "no-repeat",
                                "height": "auto",
                                "width": "100%",
                                "max-width": "100%",
                                "padding-bottom": "51.3889%",
                                "background-position": "50% 50%",
                                "background-size": "100% auto",
                                "&.slide-01": {
                                    "background-image": "url(/img/gallery/slide-01.jpg)"
                                },
                                "&.slide-02": {
                                    "background-image": "url(/img/gallery/slide-02.jpg)"
                                },
                                "&.slide-03": {
                                    "background-image": "url(/img/gallery/slide-03.jpg)"
                                },
                                "&.slide-04": {
                                    "background-image": "url(/img/gallery/slide-04.jpg)"
                                },
                                "&.slide-05": {
                                    "background-image": "url(/img/gallery/slide-05.jpg)"
                                },
                                "&.nsg-01": {
                                    "background-image": "url(/img/gallery/nsg-01.jpg)"
                                },
                                "&.nsg-02": {
                                    "background-image": "url(/img/gallery/nsg-02.jpg)"
                                },
                                "&.nsg-03": {
                                    "background-image": "url(/img/gallery/nsg-03.jpg)"
                                },
                                "&.nsg-04": {
                                    "background-image": "url(/img/gallery/nsg-04.jpg)"
                                }
                            }
                        }
                    }
                },
                "header": {
                    "&": {
                        "position": "fixed",
                        "top": "0",
                        "right": "0",
                        "left": "0",
                        "z-index": "9999",
                        "display": "block",
                        "margin": "0",
                        "width": "100%",
                        "height": "44px",
                        "max-height": "44px",
                        "background": "rgba(0,0,0,0.8)",
                        "font-size": "18px"
                    },
                    "> div": {
                        "position": "relative",
                        "margin": "0 auto",
                        "padding": "0 22px",
                        "> ul": {
                            "list-style": "none",
                            "cursor": "default",
                            "margin": "0 -10px",
                            "padding": "0",
                            "width": "auto",
                            "height": "44px",
                            "text-align": "center",
                            "> li": {
                                "display": "inline-block",
                                "position": "relative",
                                "height": "44px",
                                "z-index": "1",
                                "vertical-align": "top",
                                "text-align": "center",
                                "> a": {
                                    "font-size": "1em",
                                    "line-height": "2.75",
                                    "font-weight": "400",
                                    "letter-spacing": "normal",
                                    "opacity": "1",
                                    "color": "#fff",
                                    "position": "relative",
                                    "z-index": "1",
                                    "display": "inline-block",
                                    "padding": "0 10px",
                                    "height": "44px",
                                    "background": "no-repeat",
                                    "text-decoration": "none",
                                    "white-space": "nowrap",
                                    "-webkit-transition": "opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",
                                    "transition": "opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",
                                    "-webkit-tap-highlight-color": "transparent",
                                    "outline-offset": "-7px"
                                }
                            }
                        }
                    }
                },
                "index": {
                    "&": {
                        "margin": "auto"
                    }
                },
                "modal": {
                    "&": {
                        "transition": "opacity .5s",
                        "-webkit-transition": "opacity .5s",
                        "-webkit-transform": "translateY(0);",
                        "-webkit-backface-visibility": "none",
                        "z-index": "10",
                        "position": "fixed",
                        "background-color": "rgba(0,0,0,.95)",
                        "height": "100%",
                        "top": "100%",
                        "left": "0",
                        "right": "0",
                        "opacity": "0.25",
                        "overflow": "scroll"
                    },
                    "&.open": {
                        "display": "block",
                        "top": "0",
                        "bottom": "0",
                        "opacity": "1",
                        "z-index": "100000"
                    },
                    "&-close": {
                        "background-color": "transparent",
                        "color": "#fff",
                        "display": "inline-block",
                        "line-height": "0",
                        "text-align": "center",
                        "vertical-align": "middle",
                        "-ms-touch-action": "manipulation",
                        "touch-action": "manipulation",
                        "cursor": "pointer",
                        "-webkit-user-select": "none",
                        "-moz-user-select": "none",
                        "-ms-user-select": "none",
                        "user-select": "none",
                        "background-image": "none",
                        "border": "1px solid transparent",
                        "font-family": "icons",
                        "font-style": "normal",
                        "font-weight": "normal",
                        "position": "absolute",
                        "top": "10px",
                        "right": "10px",
                        "width": "50px",
                        "height": "50px",
                        "border-radius": "50%",
                        "box-shadow": "0 1px 3px rgba(0,0,0,.4)",
                        "z-index": "1",
                        "&:before": {
                            "content": "'\f00d'"
                        },
                        "&,&:active,&:hover,&:visited,&:focus": {
                            "outline": "0"
                        }
                    },
                    ".img-box": {
                        "color": "#fff",
                        "text-align": "center",
                        "margin-top": "10%",
                        "img": {
                            "box-shadow": "0px 3px 18px #000",
                            "max-width": "100%"
                        },
                        "h1": {
                            "text-shadow": "0px 3px 18px #000"
                        }
                    }
                },
                "section": {
                    "&": {
                        "padding": "3em",
                        "border-top": "1px solid #808080"
                    },
                    "&.work": {
                        "img": {
                            "max-width": "90%",
                            "display": "block",
                            "margin": "auto"
                        }
                    }
                },
                "work": {
                    "text-align": "center",
                    "p": {
                        "max-width": "900px",
                        "margin-left": "auto",
                        "margin-right": "auto"
                    },
                    "img": {
                        "max-width": "90%"
                    },
                    "&.intro": {
                        "img": {
                            "display": "block",
                            "width": "75%",
                            "margin": "auto"
                        }
                    },
                    "&.components": {
                        "p": {
                            "img": {
                                "max-width": "80%",
                                "box-shadow": "0 1px 13px #b3b3b3",
                                "border-radius": "3px"
                            }
                        }
                    },
                    "h4": {
                        "margin-top": "3em"
                    }
                }
            },
            "global": {
                "*": {
                    "box-sizing": "border-box",
                    "-webkit-user-select": "none",
                    "-moz-user-select": "none",
                    "-ms-user-select": "none",
                    "user-select": "none"
                },
                "body": {
                    "font-family": "brandon-grotesque, Helvetica, Arial, sans-serif",
                    "font-weight": "100",
                    "font-size": "16px",
                    "background-color": "#fff",
                    "color": "#333",
                    "&.modal-open": {
                        "overflow": "hidden"
                    },
                    "@media min-width:650px": {
                        "font-size": "18px"
                    },
                    "@media min-width:800px": {
                        "font-size": "20px"
                    },
                    "@media min-width: 1100px": {
                        "font-size": "23px"
                    },
                    "@media min-width: 1300px": {
                        "font-size": "27px"
                    },
                    "@media min-width: 1600px": {
                        "font-size": "33px"
                    }
                },
                "h1,h2,h3,h4,h5,h6": {
                    "font-family": "brandon-grotesque, Helvetica, Arial, sans-serif",
                    "font-weight": "100",
                    "margin": "0.2em 0 0"
                },
                "h1": {
                    "font-size": "2.5em"
                },
                "h2": {
                    "font-size": "2em"
                },
                "h3": {
                    "font-size": "1.7em"
                },
                "h4": {
                    "font-size": "1.4em"
                },
                "h5": {
                    "font-size": "1.2em"
                },
                "h6": {
                    "font-size": "1em"
                },
                "p": {
                    "font-size": "1em"
                },
                "a": {
                    "color": "#fa5400",
                    "text-decoration": "none",
                    "&:hover": {
                        "color": "#336699",
                        "text-decoration": "underline"
                    }
                },
                ".owl-controls": {
                    "font-family": "icons",
                    "font-size": "45px",
                    "top": "calc(50% - 30px)",
                    "left": "-45px",
                    "right": "-45px"
                },
                ".owl-nav": {
                    "> div": {
                        "position": "absolute",
                        "padding": "5px",
                        "top": "calc(50% - 30px)"
                    }
                },
                ".owl-prev": {
                    "float": "left",
                    "left": "-50px"
                },
                ".owl-next": {
                    "float": "right",
                    "right": "-50px"
                },
                "[data-modal]": {
                    "&:hover": {
                        "cursor": "pointer"
                    }
                },
                "[data-image]": {
                    "position": "relative",
                    "&:after": {
                        "font-family": "icons",
                        "content": "",
                        "display": "block",
                        "position": "absolute",
                        "left": "0",
                        "top": "0",
                        "right": "0",
                        "bottom": "0",
                        "background-color": "rgba(0,0,0,.5)"
                    }
                }
            },
            "icons": {
                "config": {
                    "family": "icons",
                    "file": "../../../../fonts/icons/fontawesome-webfont",
                    "ver": "v=4.3.0"
                },
                "chrMap": {
                    "glass": "f000",
                    "music": "f001",
                    "search": "f002",
                    "envelope-o": "f003",
                    "heart": "f004",
                    "star": "f005",
                    "star-o": "f006",
                    "user": "f007",
                    "film": "f008",
                    "th-large": "f009",
                    "th": "f00a",
                    "th-list": "f00b",
                    "check": "f00c",
                    "remove": "f00d",
                    "close": ":f00d",
                    "times": "f00d",
                    "search-plus": "f00e",
                    "search-minus": "f010",
                    "power-off": "f011",
                    "signal": "f012",
                    "gear": "f013",
                    "trash-o": "f014",
                    "home": "f015",
                    "file-o": "f016",
                    "clock-o": "f017",
                    "road": "f018",
                    "download": "f019",
                    "arrow-circle-o-down": "f01a",
                    "arrow-circle-o-up": "f01b",
                    "inbox": "f01c",
                    "play-circle-o": "f01d",
                    "repeat": "f01e",
                    "refresh": "f021",
                    "list-alt": "f022",
                    "lock": "f023",
                    "flag": "f024",
                    "headphones": "f025",
                    "volume-off": "f026",
                    "volume-down": "f027",
                    "volume-up": "f028",
                    "qrcode": "f029",
                    "barcode": "f02a",
                    "tag": "f02b",
                    "tags": "f02c",
                    "book": "f02d",
                    "bookmark": "f02e",
                    "print": "f02f",
                    "camera": "f030",
                    "font": "f031",
                    "bold": "f032",
                    "italic": "f033",
                    "text-height": "f034",
                    "text-width": "f035",
                    "align-left": "f036",
                    "align-center": "f037",
                    "align-right": "f038",
                    "align-justify": "f039",
                    "list": "f03a",
                    "outdent": "f03b",
                    "indent": "f03c",
                    "video-camera": "f03d",
                    "photo": "f03e",
                    "pencil": "f040",
                    "map-marker": "f041",
                    "adjust": "f042",
                    "tint": "f043",
                    "edit": "f044",
                    "share-square-o": "f045",
                    "check-square-o": "f046",
                    "arrows": "f047",
                    "step-backward": "f048",
                    "fast-backward": "f049",
                    "backward": "f04a",
                    "play": "f04b",
                    "pause": "f04c",
                    "stop": "f04d",
                    "forward": "f04e",
                    "fast-forward": "f050",
                    "step-forward": "f051",
                    "eject": "f052",
                    "chevron-left": "f053",
                    "chevron-right": "f054",
                    "plus-circle": "f055",
                    "minus-circle": "f056",
                    "times-circle": "f057",
                    "check-circle": "f058",
                    "question-circle": "f059",
                    "info-circle": "f05a",
                    "crosshairs": "f05b",
                    "times-circle-o": "f05c",
                    "check-circle-o": "f05d",
                    "ban": "f05e",
                    "arrow-left": "f060",
                    "arrow-right": "f061",
                    "arrow-up": "f062",
                    "arrow-down": "f063",
                    "share": "f064",
                    "expand": "f065",
                    "compress": "f066",
                    "plus": "f067",
                    "minus": "f068",
                    "asterisk": "f069",
                    "exclamation-circle": "f06a",
                    "gift": "f06b",
                    "leaf": "f06c",
                    "fire": "f06d",
                    "eye": "f06e",
                    "eye-slash": "f070",
                    "warning": "f071",
                    "plane": "f072",
                    "calendar": "f073",
                    "random": "f074",
                    "comment": "f075",
                    "magnet": "f076",
                    "chevron-up": "f077",
                    "chevron-down": "f078",
                    "retweet": "f079",
                    "shopping-cart": "f07a",
                    "folder": "f07b",
                    "folder-open": "f07c",
                    "arrows-v": "f07d",
                    "arrows-h": "f07e",
                    "bar-chart": "f080",
                    "twitter-square": "f081",
                    "facebook-square": "f082",
                    "camera-retro": "f083",
                    "key": "f084",
                    "gears": "f085",
                    "comments": "f086",
                    "thumbs-o-up": "f087",
                    "thumbs-o-down": "f088",
                    "star-half": "f123",
                    "heart-o": "f08a",
                    "sign-out": "f08b",
                    "linkedin-square": "f08c",
                    "thumb-tack": "f08d",
                    "external-link": "f08e",
                    "sign-in": "f090",
                    "trophy": "f091",
                    "github-square": "f092",
                    "upload": "f093",
                    "lemon-o": "f094",
                    "phone": "f095",
                    "square-o": "f096",
                    "bookmark-o": "f097",
                    "phone-square": "f098",
                    "twitter": "f099",
                    "facebook": "f09a",
                    "github": "f09b",
                    "unlock": "f09c",
                    "credit-card": "f09d",
                    "rss": "f09e",
                    "hdd-o": "f0a0",
                    "bullhorn": "f0a1",
                    "bell": "f0f3",
                    "certificate": "f0a3",
                    "hand-o-right": "f0a4",
                    "hand-o-left": "f0a5",
                    "hand-o-up": "f0a6",
                    "hand-o-down": "f0a7",
                    "arrow-circle-left": "f0a8",
                    "arrow-circle-right": "f0a9",
                    "arrow-circle-up": "f0aa",
                    "arrow-circle-down": "f0ab",
                    "globe": "f0ac",
                    "wrench": "f0ad",
                    "tasks": "f0ae",
                    "filter": "f0b0",
                    "briefcase": "f0b1",
                    "arrows-alt": "f0b2",
                    "users": "f0c0",
                    "link": "f0c1",
                    "cloud": "f0c2",
                    "flask": "f0c3",
                    "cut": "f0c4",
                    "copy": "f0c5",
                    "paperclip": "f0c6",
                    "save": "f0c7",
                    "square": "f0c8",
                    "bars": "f0c9",
                    "list-ul": "f0ca",
                    "list-ol": "f0cb",
                    "strikethrough": "f0cc",
                    "underline": "f0cd",
                    "table": "f0ce",
                    "magic": "f0d0",
                    "truck": "f0d1",
                    "pinterest": "f0d2",
                    "pinterest-square": "f0d3",
                    "google-plus-square": "f0d4",
                    "google-plus": "f0d5",
                    "money": "f0d6",
                    "caret-down": "f0d7",
                    "caret-up": "f0d8",
                    "caret-left": "f0d9",
                    "caret-right": "f0da",
                    "columns": "f0db",
                    "sort": "f0dc",
                    "sort-desc": "f0dd",
                    "sort-asc": "f0de",
                    "envelope": "f0e0",
                    "linkedin": "f0e1",
                    "undo": "f0e2",
                    "legal": "f0e3",
                    "dashboard": "f0e4",
                    "comment-o": "f0e5",
                    "comments-o": "f0e6",
                    "flash": "f0e7",
                    "sitemap": "f0e8",
                    "umbrella": "f0e9",
                    "paste": "f0ea",
                    "lightbulb-o": "f0eb",
                    "exchange": "f0ec",
                    "cloud-download": "f0ed",
                    "cloud-upload": "f0ee",
                    "user-md": "f0f0",
                    "stethoscope": "f0f1",
                    "suitcase": "f0f2",
                    "bell-o": "f0a2",
                    "coffee": "f0f4",
                    "cutlery": "f0f5",
                    "file-text-o": "f0f6",
                    "building-o": "f0f7",
                    "hospital-o": "f0f8",
                    "ambulance": "f0f9",
                    "medkit": "f0fa",
                    "fighter-jet": "f0fb",
                    "beer": "f0fc",
                    "h-square": "f0fd",
                    "plus-square": "f0fe",
                    "angle-double-left": "f100",
                    "angle-double-right": "f101",
                    "angle-double-up": "f102",
                    "angle-double-down": "f103",
                    "angle-left": "f104",
                    "angle-right": "f105",
                    "angle-up": "f106",
                    "angle-down": "f107",
                    "desktop": "f108",
                    "laptop": "f109",
                    "tablet": "f10a",
                    "mobile": "f10b",
                    "circle-o": "f10c",
                    "quote-left": "f10d",
                    "quote-right": "f10e",
                    "spinner": "f110",
                    "circle": "f111",
                    "reply": "f112",
                    "github-alt": "f113",
                    "folder-o": "f114",
                    "folder-open-o": "f115",
                    "smile-o": "f118",
                    "frown-o": "f119",
                    "meh-o": "f11a",
                    "gamepad": "f11b",
                    "keyboard-o": "f11c",
                    "flag-o": "f11d",
                    "flag-checkered": "f11e",
                    "terminal": "f120",
                    "code": "f121",
                    "reply-all": "f122",
                    "location-arrow": "f124",
                    "crop": "f125",
                    "code-fork": "f126",
                    "unlink": "f127",
                    "question": "f128",
                    "info": "f129",
                    "exclamation": "f12a",
                    "superscript": "f12b",
                    "subscript": "f12c",
                    "eraser": "f12d",
                    "puzzle-piece": "f12e",
                    "microphone": "f130",
                    "microphone-slash": "f131",
                    "shield": "f132",
                    "calendar-o": "f133",
                    "fire-extinguisher": "f134",
                    "rocket": "f135",
                    "maxcdn": "f136",
                    "chevron-circle-left": "f137",
                    "chevron-circle-right": "f138",
                    "chevron-circle-up": "f139",
                    "chevron-circle-down": "f13a",
                    "html5": "f13b",
                    "css3": "f13c",
                    "anchor": "f13d",
                    "unlock-alt": "f13e",
                    "bullseye": "f140",
                    "ellipsis-h": "f141",
                    "ellipsis-v": "f142",
                    "rss-square": "f143",
                    "play-circle": "f144",
                    "ticket": "f145",
                    "minus-square": "f146",
                    "minus-square-o": "f147",
                    "level-up": "f148",
                    "level-down": "f149",
                    "check-square": "f14a",
                    "pencil-square": "f14b",
                    "external-link-square": "f14c",
                    "share-square": "f14d",
                    "compass": "f14e",
                    "toggle-down": "f150",
                    "toggle-up": "f151",
                    "toggle-right": "f152",
                    "euro": "f153",
                    "gbp": "f154",
                    "dollar": "f155",
                    "rupee": "f156",
                    "yen": "f157",
                    "ruble": "f158",
                    "won": "f159",
                    "bitcoin": "f15a",
                    "file": "f15b",
                    "file-text": "f15c",
                    "sort-alpha-asc": "f15d",
                    "sort-alpha-desc": "f15e",
                    "sort-amount-asc": "f160",
                    "sort-amount-desc": "f161",
                    "sort-numeric-asc": "f162",
                    "sort-numeric-desc": "f163",
                    "thumbs-up": "f164",
                    "thumbs-down": "f165",
                    "youtube-square": "f166",
                    "youtube": "f167",
                    "xing": "f168",
                    "xing-square": "f169",
                    "youtube-play": "f16a",
                    "dropbox": "f16b",
                    "stack-overflow": "f16c",
                    "instagram": "f16d",
                    "flickr": "f16e",
                    "adn": "f170",
                    "bitbucket": "f171",
                    "bitbucket-square": "f172",
                    "tumblr": "f173",
                    "tumblr-square": "f174",
                    "long-arrow-down": "f175",
                    "long-arrow-up": "f176",
                    "long-arrow-left": "f177",
                    "long-arrow-right": "f178",
                    "apple": "f179",
                    "windows": "f17a",
                    "android": "f17b",
                    "linux": "f17c",
                    "dribbble": "f17d",
                    "skype": "f17e",
                    "foursquare": "f180",
                    "trello": "f181",
                    "female": "f182",
                    "male": "f183",
                    "gratipay": "f184",
                    "sun-o": "f185",
                    "moon-o": "f186",
                    "archive": "f187",
                    "bug": "f188",
                    "vk": "f189",
                    "weibo": "f18a",
                    "renren": "f18b",
                    "pagelines": "f18c",
                    "stack-exchange": "f18d",
                    "arrow-circle-o-right": "f18e",
                    "arrow-circle-o-left": "f190",
                    "toggle-left": "f191",
                    "dot-circle-o": "f192",
                    "wheelchair": "f193",
                    "vimeo-square": "f194",
                    "turkish-lira": "f195",
                    "plus-square-o": "f196",
                    "space-shuttle": "f197",
                    "slack": "f198",
                    "envelope-square": "f199",
                    "wordpress": "f19a",
                    "openid": "f19b",
                    "institution": "f19c",
                    "graduation-cap": "f19d",
                    "yahoo": "f19e",
                    "google": "f1a0",
                    "reddit": "f1a1",
                    "reddit-square": "f1a2",
                    "stumbleupon-circle": "f1a3",
                    "stumbleupon": "f1a4",
                    "delicious": "f1a5",
                    "digg": "f1a6",
                    "pied-piper": "f1a7",
                    "pied-piper-alt": "f1a8",
                    "drupal": "f1a9",
                    "joomla": "f1aa",
                    "language": "f1ab",
                    "fax": "f1ac",
                    "building": "f1ad",
                    "child": "f1ae",
                    "paw": "f1b0",
                    "spoon": "f1b1",
                    "cube": "f1b2",
                    "cubes": "f1b3",
                    "behance": "f1b4",
                    "behance-square": "f1b5",
                    "steam": "f1b6",
                    "steam-square": "f1b7",
                    "recycle": "f1b8",
                    "car": "f1b9",
                    "taxi": "f1ba",
                    "tree": "f1bb",
                    "spotify": "f1bc",
                    "deviantart": "f1bd",
                    "soundcloud": "f1be",
                    "database": "f1c0",
                    "file-pdf-o": "f1c1",
                    "file-word-o": "f1c2",
                    "file-excel-o": "f1c3",
                    "file-powerpoint-o": "f1c4",
                    "file-image-o": "f1c5",
                    "file-zip-o": "f1c6",
                    "file-audio-o": "f1c7",
                    "file-video-o": "f1c8",
                    "file-code-o": "f1c9",
                    "vine": "f1ca",
                    "codepen": "f1cb",
                    "jsfiddle": "f1cc",
                    "life-saver": "f1cd",
                    "circle-o-notch": "f1ce",
                    "ra": "f1d0",
                    "empire": "f1d1",
                    "git-square": "f1d2",
                    "git": "f1d3",
                    "hacker-news": "f1d4",
                    "tencent-weibo": "f1d5",
                    "qq": "f1d6",
                    "wechat": "f1d7",
                    "send": "f1d8",
                    "send-o": "f1d9",
                    "history": "f1da",
                    "circle-thin": "f1db",
                    "header": "f1dc",
                    "paragraph": "f1dd",
                    "sliders": "f1de",
                    "share-alt": "f1e0",
                    "share-alt-square": "f1e1",
                    "bomb": "f1e2",
                    "soccer-ball-o": "f1e3",
                    "tty": "f1e4",
                    "binoculars": "f1e5",
                    "plug": "f1e6",
                    "slideshare": "f1e7",
                    "twitch": "f1e8",
                    "yelp": "f1e9",
                    "newspaper-o": "f1ea",
                    "wifi": "f1eb",
                    "calculator": "f1ec",
                    "paypal": "f1ed",
                    "google-wallet": "f1ee",
                    "cc-visa": "f1f0",
                    "cc-mastercard": "f1f1",
                    "cc-discover": "f1f2",
                    "cc-amex": "f1f3",
                    "cc-paypal": "f1f4",
                    "cc-stripe": "f1f5",
                    "bell-slash": "f1f6",
                    "bell-slash-o": "f1f7",
                    "trash": "f1f8",
                    "copyright": "f1f9",
                    "at": "f1fa",
                    "eyedropper": "f1fb",
                    "paint-brush": "f1fc",
                    "birthday-cake": "f1fd",
                    "area-chart": "f1fe",
                    "pie-chart": "f200",
                    "line-chart": "f201",
                    "lastfm": "f202",
                    "lastfm-square": "f203",
                    "toggle-off": "f204",
                    "toggle-on": "f205",
                    "bicycle": "f206",
                    "bus": "f207",
                    "ioxhost": "f208",
                    "angellist": "f209",
                    "cc": "f20a",
                    "sheqel": "f20b",
                    "meanpath": "f20c",
                    "buysellads": "f20d",
                    "connectdevelop": "f20e",
                    "dashcube": "f210",
                    "forumbee": "f211",
                    "leanpub": "f212",
                    "sellsy": "f213",
                    "shirtsinbulk": "f214",
                    "simplybuilt": "f215",
                    "skyatlas": "f216",
                    "cart-plus": "f217",
                    "cart-arrow-down": "f218",
                    "diamond": "f219",
                    "ship": "f21a",
                    "user-secret": "f21b",
                    "motorcycle": "f21c",
                    "street-view": "f21d",
                    "heartbeat": "f21e",
                    "venus": "f221",
                    "mars": "f222",
                    "mercury": "f223",
                    "transgender": "f224",
                    "transgender-alt": "f225",
                    "venus-double": "f226",
                    "mars-double": "f227",
                    "venus-mars": "f228",
                    "mars-stroke": "f229",
                    "mars-stroke-v": "f22a",
                    "mars-stroke-h": "f22b",
                    "neuter": "f22c",
                    "facebook-official": "f230",
                    "pinterest-p": "f231",
                    "whatsapp": "f232",
                    "server": "f233",
                    "user-plus": "f234",
                    "user-times": "f235",
                    "hotel": "f236",
                    "viacoin": "f237",
                    "train": "f238",
                    "subway": "f239",
                    "medium": "f23a"
                }
            },
            "util": {
                ".v-top": {
                    "vertical-align": "top"
                },
                ".v-mid": {
                    "vertical-align": "middle"
                },
                ".v-bot": {
                    "vertical-align": "bottom"
                },
                ".pad5": {
                    "padding": "5px"
                },
                ".pad10": {
                    "padding": "10px"
                },
                ".pad15": {
                    "padding": "15px"
                },
                ".pad20": {
                    "padding": "20px"
                },
                ".float-r": {
                    "float": "right !important"
                },
                ".float-l": {
                    "float": "left !important"
                },
                ".loading": {
                    "display": "none"
                },
                ".left": {
                    "text-align": "left"
                },
                ".center": {
                    "text-align": "center"
                },
                ".right": {
                    "text-align": "right"
                },
                ".p-max-900": {
                    "> p": {
                        "max-width": "900px",
                        "margin-left": "auto",
                        "margin-right": "auto"
                    }
                },
                ".videoWrapper": {
                    "position": "relative",
                    "padding-bottom": "56.25%",
                    "padding-top": "25px",
                    "iframe": {
                        "position": "absolute",
                        "top": "0",
                        "left": "0",
                        "width": "100%",
                        "height": "100%"
                    }
                }
            },
            "vars": {
                "nav": {
                    "height": "40px"
                },
                "header": {
                    "height": "44px",
                    "minWidth": "1024px",
                    "background": "rgba(0,0,0,0.8)"
                },
                "footer": {
                    "height": "40px"
                },
                "fonts": {
                    "heading": "brandon-grotesque, Helvetica, Arial, sans-serif",
                    "default": "brandon-grotesque, Helvetica, Arial, sans-serif"
                },
                "colors": {
                    "links": {
                        "default": "#fa5400",
                        "hover": "#336699",
                        "active": "#333",
                        "visited": "#336699"
                    }
                }
            }
        }
    }
};
var aio = {
    hash: function () {
        var _t = this,
            $modal = $('.aio-modal'),
            $body = $('body'),
            hsh = window.location.hash;

        hsh = hsh.slice(1);
        if (!hsh.length) hsh = 'layout.index';

        $('main.aio-main').loadHTML(hsh, function () {
            _t.events.trigger.main();
        });
    },
    carousel: function (el) {
        return el.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ['&#xf137;', '&#xf138;'],
            singleItem: false,
            items: 3,
            slideSpeed: 3000,
            paginationSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                350: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
    },
    gallery: function (el) {
        return el.gallery()
    },
    markdown: function () {
        function getMarkdown(el, mdFile) {
            $.get(mdFile, function (data) {
                el.html(marked(data));
            });
        }

        $('[data-markdown]').each(function () {
            var $t = $(this),
                md = $t.data('markdown'),
                mdFile = 'assets/md/' + md + '.md';
            getMarkdown($t, mdFile);
        });
        return;
    },
    events: {
        trigger: {
            main: function () {
                aio.carousel($('[data-carousel=true]'));
                aio.gallery($('[data-gallery=true]'));
                return $(document).trigger('main-loaded');
            }
        },
        actions: {
            main: function () {
                aio.markdown();
            }
        }
    },

    modal: {
        classes: {
            open: 'open',
            body: 'modal-open'
        },
        get: function () {
            return $('.aio-modal');
        },
        open: function (data) {
            var $modal = aio.modal.get(),
                $body = $('body');

            $modal.loadHTML(data.modal, function () {
                $modal.addClass(aio.modal.classes.open);
                $body.addClass(aio.modal.classes.body);
                $('.img-box img').attr({
                    'src': data.image
                });
                $('.img-box h1').text(data.title);
            });
        },
        close: function (data) {
            var $modal = aio.modal.get(),
                $body = $('body');

            $modal.removeClass(aio.modal.classes.open);
            $body.removeClass(aio.modal.classes.body);
        }
    },

    init: function () {
        'use strict';
        var _t = this;
        //load data layout templates
        $('[data-layout]').loadHTML();
        _t.events.trigger.main();

        // setup event handlers for data-main
        $(document).on('touchend click', '[data-main]', function (e) {
            e.preventDefault();
            window.location.hash = $(this).data('main');
            aio.hash();
        }).on('touchend click', '[data-modal]', function (e) {
            e.preventDefault();
            _t.modal.open($(this).data());
        }).on('touchend click', '.aio-modal-close', function (e) {
            e.preventDefault();
            _t.modal.close();
        }).on('touchend click', '[data-link]', function (e) {
            e.preventDefault();
            location.href = $(this).data('link');
        });

        $(window).on('hashchange', function (e) {
            _t.hash();
        });

    }
};

$(function () {
    aio.init();
});


$(document).on('main-loaded', function () {
    aio.events.actions.main();
    $('[data-icon]').dataIcon();
    $('.container .cta .aio-btn').hover(

    function () {
        $(this).parents('.container').addClass('hover');
    }, function () {
        $(this).parents('.container').removeClass('hover');
    });
});

}
