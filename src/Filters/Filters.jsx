import React from 'react';
import FacetSelector from './Facet-Selector';

export default class Filters extends React.Component {
    render() {
        return (
            <div>
                {this.props.facets.facetReducer.content.facets.map(facet => FacetSelector(facet))}
            </div>
        )
    }
}