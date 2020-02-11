export const el = (el, slot, attrs = null) => {
  return {
    tag: el,
    slot: slot,
    attrs: attrs
  };
};

export const button = (slot, attrs) => {
  return el("B-Button", slot, attrs);
};

export const fullCol = slot => {
  return el("B-Row", [el("B-Col", slot)]);
};

export const multiply = (obj, x) => {
  let out = [];
  for (var i = x - 1; i >= 0; i--) {
    out.push(obj);
  }
  return out;
};

export const h1Row = (slot, attrs) => {
  return el("B-Row", [el("B-Col", [el("h1", slot, attrs)])]);
};

export const h2Row = (slot, attrs) => {
  return el("B-Row", [el("B-Col", [el("h2", slot, attrs)])]);
};

export const h3Row = (slot, attrs) => {
  return el("B-Row", [el("B-Col", [el("h3", slot, attrs)])]);
};

export const h4Row = (slot, attrs) => {
  return el("B-Row", [el("B-Col", [el("h4", slot, attrs)])]);
};

export const h5Row = (slot, attrs) => {
  return el("B-Row", [el("B-Col", [el("h5", slot, attrs)])]);
};

export const h6Row = (slot, attrs) => {
  return el("B-Row", [el("B-Col", [el("h6", slot, attrs)])]);
};

export const topBar = (attrs = null) => {
  return el("B-Row", [
    el("B-Col", "[Logo]"),
    el("B-Col", "[Login/SignUp]", { class: "text-right" }, attrs)
  ]);
};

export const container = (slot, attrs = null) => {
  return el("B-Container", slot, attrs);
};

export const row = (slot, attrs = null) => {
  return el("B-Row", slot, attrs);
};
export const col = (slot, attrs = null) => {
  return el("B-Col", slot, attrs);
};

export const layout = slot => {
  let page = [topBar()];
  page = page.concat(slot);
  page.push(
    el("footer", "[FOOTER]", {
      class: "text-center"
    })
  );
  return el("div", page, { class: "layout" });
};
