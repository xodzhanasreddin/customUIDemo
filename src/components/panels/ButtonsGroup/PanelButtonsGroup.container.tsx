import React from 'react';

import {Panel, IPanelState} from '../../common';
import {PanelButtonsGroupComponent} from './PanelButtonsGroup.component';

class PanelButtonsGroupContainer extends Panel {

  public state: IPanelState = {
    filter: {
      large: false,
      indented: true
    }
  };

  public render(): JSX.Element {
    return (
      <PanelButtonsGroupComponent
        filter={this.state.filter}
        handleChange={this.handleFilterChange}
      />
    );
  }
}

export {PanelButtonsGroupContainer as PanelButtonsGroup};
