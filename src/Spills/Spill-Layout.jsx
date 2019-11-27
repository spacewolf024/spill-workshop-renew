import React from "react";
import { PureComponent } from "react";
import SpillList from "./Spill-List";
import Filters from "../Filters/Filters";
import SortFilter from "../Filters/Sort-Filter";

import "../Styles/spill.scss";

class Spill extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      showFilter: false
    };
    this.filterClick = this.filterClick.bind(this);
  }

  filterClick = (show) => {
    this.setState({showFilter: show});
  }

  render() {
    return (
      <main>
        <article className="spill-container">

          <Filters 
            filterActive={this.state.showFilter} 
            showFilter={this.filterClick} 
            hideFilter={this.filterClick}
            onGridClick={this.props.onGridClick}
            isMobile={this.props.isMobile}
            itemCount={this.props.spillDTO}
            key={this.props.isMobile}
          />

          <SortFilter 
            showFilter={this.state.showFilter} 
            closeFilter={this.filterClick}
            isMobile={this.props.isMobile}

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
