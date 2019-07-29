import * as React from 'react';

import {Panel, IPanelState} from '../../common';
import {PanelTabsComponent} from './PanelTabs.component';

class PanelTabsContainer extends Panel {

  public state: IPanelState = {
    filter: {
      large: false,
      withIcon: false
    }
  };

  public render(): JSX.Element {
    return (
      <PanelTabsComponent
        filter={this.state.filter}
        handleChange={this.handleFilterChange}
      />
    );
  }
}

export {PanelTabsContainer as PanelTabs};
