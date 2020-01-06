import React from "react";
import ExpandableFacet from "./Components/Expandable-Facet"

const Components = {
    expandable: ExpandableFacet
};

export default FacetSelector => {
  if (typeof Components[FacetSelector.type] !== "undefined") {
    return React.createElement(Components[FacetSelector.type], {
      key: FacetSelector._uid,
      facet: FacetSelector
    });
  }
};