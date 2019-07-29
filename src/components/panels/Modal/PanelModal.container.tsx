import * as React from 'react';

import {Panel, IPanelState} from '../../common';
import {PanelModalComponent} from './PanelModal.component';

class PanelModalContainer extends Panel {

  public state: IPanelState = {
    filter: {
      large: false
    }
  };

  public render(): JSX.Element {
    return (
      <PanelModalComponent
        filter={this.state.filter}
        handleChange={this.handleFilterChange}
      />
    );
  }
}

export {PanelModalContainer as PanelModal};
