import * as React from 'react';

import {IFilter} from '../../../lib';

interface IPanelState {
  filter?: IFilter;
  [key: string]: any;
}

class Panel extends React.Component<{}, IPanelState>  {

  protected handleFilterChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const type = e.currentTarget.id;
    const value = e.currentTarget.checked;

    this.setState({
      filter: {
        ...this.state.filter,
        [type]: value
      }
    });
  }

}

export {Panel, IPanelState};
