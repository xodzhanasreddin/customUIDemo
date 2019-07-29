import * as React from 'react';

import {Panel, IPanelState} from '../../common';
import {PanelFormControlsComponent} from './PanelFormControls.component';

class PanelFormControlsContainer extends Panel {

  public state: IPanelState = {
    filter: {
      disabled: false,
      error: false,
      tooltip: false
    },
    checkboxChecked: false,
    checkedRadioId: '',
    textInputValue: '',
    selectValue: ''
  };

  public render(): JSX.Element {
    const {checkboxChecked, checkedRadioId, textInputValue, selectValue} = this.state;

    return (
      <PanelFormControlsComponent
        filter={this.state.filter}
        handleChange={this.handleFilterChange}
        handleCheckboxChange={this.handleCheckboxChange}
        handleRadioChange={this.handleRadioChange}
        handleTextInputChange={this.handleTextInputChange}
        handleSelectChange={this.handleSelectChange}
        checkboxChecked={checkboxChecked}
        checkedRadioId={checkedRadioId}
        textInputValue={textInputValue}
        selectValue={selectValue}
      />
    );
  }

  private handleCheckboxChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const checkboxChecked = e.currentTarget.checked;
    this.setState({checkboxChecked});
  }

  private handleRadioChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const checkedRadioId = e.currentTarget.id;
    this.setState({checkedRadioId});
  }

  private handleTextInputChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const textInputValue = e.currentTarget.value;
    this.setState({textInputValue});
  }

  private handleSelectChange = (selectValue: string) => {
    this.setState({selectValue});
  }
}

export {PanelFormControlsContainer as PanelFormControls};
