import React from 'react';

import {Panel, IPanelState} from '../../common';
import {PanelButtonsComponent} from './PanelButtons.component';

class PanelButtonsContainer extends Panel {

  public state: IPanelState = {
    filter: {
      large: false,
      withIcon: false,
      iconAppend: false
    }
  };

  public render(): JSX.Element {
    return (
      <PanelButtonsComponent
        filter={this.state.filter}
        handleChange={this.handleFilterChange}
      />
    );
  }
}

export {PanelButtonsContainer as PanelButtons};
