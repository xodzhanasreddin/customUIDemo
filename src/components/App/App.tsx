import * as React from 'react';
import classNames from 'classnames';

import { Tabs, Tab } from 'customui/core';
import { TabsType } from 'customui/core/lib';
import {
  PanelButtons,
  PanelButtonsGroup,
  PanelFormControls,
  PanelTabs,
  PanelIcons,
  PanelModal
} from '../panels';

interface IAppState {
  isLight: boolean;
}

class App extends React.Component<{}, IAppState> {

  public state = {
    isLight: false
  };

  public render(): JSX.Element {
    const { isLight } = this.state;

    return (
      <div className={classNames('App', isLight ? 'App--light' : 'App--dark bg-dark')}>
        <div className={'App__header'}>
          <button className={'btn App__mode-button'} onClick={this.handleModeToggleButton}>
            {isLight ? 'Dark theme' : 'Light theme'}
          </button>
        </div>
        <div className={'App__body'}>
          <Tabs type={TabsType.PILLS}>
            <Tab withTitle={true} label={'Кнопки'} panel={<PanelButtons />} />
            <Tab withTitle={true} label={'Группа кнопок'} panel={<PanelButtonsGroup />} />
            <Tab withTitle={true} label={'Элементы формы'} panel={<PanelFormControls />} />
            <Tab withTitle={true} label={'Табы'} panel={<PanelTabs />} />
            <Tab withTitle={true} label={'Иконки'} panel={<PanelIcons />} />
            <Tab withTitle={true} label={'Модальное окно'} panel={<PanelModal />} />
          </Tabs>
        </div>
      </div>
    );
  }

  private handleModeToggleButton = () => {
    this.setState({ isLight: !this.state.isLight });
  }

}

export { App };
