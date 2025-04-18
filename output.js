/** @jsx nodeBuilder */

// ^^ this tells the transpiler to inject calls to an nodeBuilder funtion for each node

// INITIAL SNIPPET

// let foo = <div id="foo">Hello!</div>;

// THE CODE WE SHOUDL RUN

"use strict";

function nodeBuilder(nodeName, attributes) {
  var _ref;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var children = args.length ? (_ref = []).concat.apply(_ref, args) : null;
  return { nodeName: nodeName, attributes: attributes, children: children };
}

/*
NOTES :
...args in our argument means list of other params similar to *args in python

The concat(...args) bit is a spread operator : it takes and array and expand into
arguments to concat()

*/

function render(vnode) {
  // string which convert to #text Nodes :
  if (vnode.split) return document.createTextNode(vnode);

  // create a DOM  element with the nodeName of our VDOM element:
  var n = document.createElement(vnode.nodeName);
  // copy attributes onto the new node :
  var attributes = vnode.attributes || {};
  Object.keys(attributes).forEach(function (key) {
    return n.setAttribute(key, attributes[key]);
  });

  // render and the nappend child nodes:

  (vnode.children || []).forEach(function (child) {
    return n.appendChild(render(child));
  });

  return n;
}

var foo = nodeBuilder("div", { id: "foo" }, "Hello!", "World", "How are you");

var ITEMS = "hello there people".split(" ");

// turn an Array into list items:
var list = function list(items) {
  return items.map(function (p) {
    return nodeBuilder(
      "li",
      null,
      " ",
      p,
      " "
    );
  });
};

// view with a call out ("partial") to generate a list from an Array:
var vdom = nodeBuilder(
  "div",
  { id: "foo" },
  nodeBuilder(
    "p",
    null,
    "Look, a simple JSX DOM renderer!"
  ),
  nodeBuilder(
    "ul",
    null,
    list(ITEMS)
  )
);

// render() converts our "virtual DOM" (see below) to a real DOM tree:
var dom = render(vdom);

// append the new nodes somewhere:
document.body.appendChild(dom);

// Remember that "virtual DOM"? It's just JSON - each "VNode" is an object with 3 properties.
var json = JSON.stringify(vdom, null, "  ");

// The whole process (JSX -> VDOM -> DOM) in one step:
document.body.appendChild(render(nodeBuilder(
  "pre",
  { id: "vdom" },
  json
)));
