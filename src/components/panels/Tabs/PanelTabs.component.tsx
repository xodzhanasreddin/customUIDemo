import * as React from 'react';

import { Tabs, Tab } from 'customui/core';
import { IconName, TabsType } from 'customui/core/lib';

import { IFilter } from '../../../lib';
import { FilterForm } from '../../common';

interface IPanelTabsProps {
  handleChange: (e: React.MouseEvent<HTMLInputElement>) => void;
  filter: IFilter;
}

const PanelTabsComponent: React.SFC<IPanelTabsProps> = (props) => {

  const {
    handleChange,
    filter: { large, withIcon }
  } = props;
  const filter = { large, withIcon };

  return (
    <div className={'PanelTabs'}>
      <div className="PanelTabs__header">
        <FilterForm
          filter={filter}
          handleChange={handleChange}
        />
      </div>
      <div className="PanelTabs__body">
        <Tabs type={TabsType.TABS} large={large}>
          <Tab label={'Последние'} panel={<p>Последние</p>} icon={withIcon && IconName.CALENDAR} />
          <Tab label={'Популярные'} panel={<p>Популярные</p>} icon={withIcon && IconName.CONNECTIONS} />
          <Tab label={'Избранные'} panel={<p>Избранные</p>} icon={withIcon && IconName.BOOKING_ROOM} />
        </Tabs>
      </div>
    </div>
  );
};

export { PanelTabsComponent };
