import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


const styles = theme =>({
    root: {
        width: '100%',
    },
    panel: {
        height: '66px'
    },
    panelTitle: {
        fontWeight: '900'
    }
});

export class Filters extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
            <ExpansionPanel
                defaultExpanded={true}
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}
            >

                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    className={classes.panel}
                >
                    <span className={classes.panelTitle}>Filter by:</span>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        Text goes here
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel
                defaultExpanded={true}
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}
            >
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions2-content"
                    id="additional-actions2-header"
                    className={classes.panel}

                >
                    <span className={classes.panelTitle}>Size</span>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        More Text here
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions3-content"
                    id="additional-actions3-header"
                >
                <span className={classes.panelTitle}>Type</span>


                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions4-content"
                    id="additional-actions4-header"
                    className={classes.panel}
                >
                    <span className={classes.panelTitle}>Color</span>


                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions5-content"
                    id="additional-actions5-header"
                    className={classes.panel}

                >
                    <span className={classes.panelTitle}>Material</span>


                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        more and more text
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions6-content"
                    id="additional-actions6-header"
                    className={classes.panel}

                >
                    <span className={classes.panelTitle}>Price</span>


                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        more and more text
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions7-content"
                    id="additional-actions7-header"
                    className={classes.panel}

                >
                    <span className={classes.panelTitle}>Features</span>


                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        more and more text
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions8-content"
                    id="additional-actions8-header"
                    className={classes.panel}

                >
                    <span className={classes.panelTitle}>Thread Count</span>


                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                    <Typography color="textSecondary">


                        <button onClick={this.props.passer}>Test Me</button>


                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions9-content"
                    id="additional-actions9-header"
                    className={classes.panel}
                >
                    <span className={classes.panelTitle}>Pattern</span>
                    
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        more and more text
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions10-content"
                    id="additional-actions10-header"
                    className={classes.panel}

                >
                    <span className={classes.panelTitle}>Feature X</span>


                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        more and more text
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions11-content"
                    id="additional-actions11-header"
                    className={classes.panel}

                >
                    <span className={classes.panelTitle}>Feature Y</span>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        more and more text
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
                onClick={event => event.stopPropagation()}
                onFocus={event => event.stopPropagation()}>
                <ExpansionPanelSummary
                    expandIcon={<AddIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions12-content"
                    id="additional-actions12-header"
                    className={classes.panel}

                >
                    <span className={classes.panelTitle}>Feature Z</span>


                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography color="textSecondary">
                        more and more text
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
        )
    }
}

Filters.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Filters);
