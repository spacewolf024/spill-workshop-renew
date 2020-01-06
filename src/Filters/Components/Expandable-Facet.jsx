import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';

class ExpandableFacet extends React.Component {

    constructor(props){
        super(props);

        this.state = ({
            showMoreBtnText: this.props.facet.filters.length > 4 ? 'Show More': 'Show Less',
            facetStyleArr: this.setHideFilters(), 
            hideShowButton: this.props.facet.filters.length > 4 ? true : false
        });

        this.setHideFilters = this.setHideFilters.bind(this);
        this.handleFilterToggle = this.handleFilterToggle.bind(this);
        this.handleShowMoreToggle = this.handleShowMoreToggle.bind(this);
    }

    handleFilterToggle() {
        
    }

    setHideFilters() {
        const hideShowArray = [];

        for(var i = 0; i < this.props.facet.filters.length; i++) {
            if (i < 4) {
                hideShowArray.push('show-facet');
            } else {
                hideShowArray.push('hide-facet');
            }
        }
        return hideShowArray;
    }

    handleShowMoreToggle() {
        var toggle = !this.state.hideShowButton;
        var hideShowArray = [];
        var buttonText;

        if(toggle) {
            buttonText = 'Show More';
            hideShowArray = this.setHideFilters();

        } else {

            buttonText = 'Show Less';

            for(let i = 0; i < this.props.facet.filters.length; i++) {
                hideShowArray.push('show-facet');
            }
        }
        
        this.setState({
            hideShowButton: toggle, 
            facetStyleArr: hideShowArray, 
            showMoreBtnText: buttonText
        });
    }

    render() {

        const showMoreBtn = this.props.facet.filters.length > 4 ? <button onClick={this.handleShowMoreToggle}>{this.state.showMoreBtnText}</button> : '';

        return (
            <ExpansionPanel
                defaultExpanded={this.props.facet.isExpanded}
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}
                key={this.props.facet._uid}
            >

                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <span>{this.props.facet.title}</span>

                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <ul>
                        {
                        this.props.facet.filters.map((item, index) => {
                            return <li key={item.uid} className={this.state.facetStyleArr[index]}>
                                        <label> 
                                            <input className="facet-checkbox" type="checkbox" onChange={event => this.handleFilterToggle(event, item)} checked={item.isActive}></input> 
                                            <span className="facet-text">{item.text} ({item.count})</span>
                                        </label>
                                    </li>
                            })
                        }
                        {showMoreBtn}
                    </ul>
                    
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default connect()(ExpandableFacet);