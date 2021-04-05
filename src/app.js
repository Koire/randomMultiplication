import {app, h, text } from "hyperapp"

app({
    init: {},
    node: document.getElementById("app"),
    view: () =>
        h("h1", {}, [text("Hello "), h("i", {}, text("World!"))]),
})