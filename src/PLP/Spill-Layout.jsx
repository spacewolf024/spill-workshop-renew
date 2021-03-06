import React from "react";
import { PureComponent } from "react";
import SpillList from "./Spill-List";
import FilterHeader from "../Filters/Filter-Header";
import FilterContainer from "../Filters/Filter-Container";
import "../Styles/spill.scss";

class Spill extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      showFilter: false
    };
    this.filterClick = this.filterClick.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  filterClick = (show) => {
    this.setState({showFilter: show});
  }

  updateFilter() {
    this.props.applyFilter();
  }

  render() {
    return (
      <main>
        <article className="spill-container">

          <FilterHeader 
            filterActive={this.state.showFilter} 
            showFilter={this.filterClick} 
            hideFilter={this.filterClick}
            onGridClick={this.props.onGridClick}
            isMobile={this.props.isMobile}
            itemCount={this.props.spillDTO}
            key={this.props.isMobile}
            openModal={this.props.openModal}
            closeModal={this.props.closeModal}
          />

          <FilterContainer 
            showFilter={this.state.showFilter} 
            closeFilter={this.filterClick}
            isMobile={this.props.isMobile}
            filterChange={this.updateFilter}
          />

          <SpillList
            showFilter={this.state.showFilter}
            spillDTO={this.props.spillDTO}
            cols={this.props.cols}
            isMobile={this.props.isMobile}
          />
          
        </article>
      </main>
    );
  }
}

export default Spill;
