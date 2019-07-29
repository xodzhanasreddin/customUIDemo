import * as React from 'react';

import { Icon } from 'customui/core';
import { IconName } from 'customui/core/lib';

const PanelIcons: React.SFC<{}> = (props) => {

  const icons = Object.values(IconName);

  const iconList = icons.map((icon: IconName, idx) => {
    return (
      <div className={'PanelIcons__item'} key={idx}>
        <Icon iconName={icon} />
        <code>{`IconName.${icon}`}</code>
      </div>
    );
  });

  return (
    <div className="PanelIcons">
      <p>Общий класс: <code>.Icon</code></p>
      <p>Перечисляемый тип: <code>IconName</code></p>
      {iconList}
    </div>
  );

};

export { PanelIcons };
