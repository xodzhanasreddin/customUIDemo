import React from 'react';

import { Button } from 'customui/core';
import { ButtonIntent, IconName } from 'customui/core/lib';

import { FilterForm } from '../../common';
import { IFilter } from '../../../lib';

interface IPanelButtonsProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  filter: IFilter;
}

const PanelButtonsComponent: React.SFC<IPanelButtonsProps> = (props) => {

  const {
    handleChange,
    filter: { large, withIcon, iconAppend }
  } = props;

  const filter = { large, withIcon, iconAppend };
  const intents = Object.values(ButtonIntent);

  const buttons = intents.map((intent: ButtonIntent, idx) => {
    return (
      <div className={'PanelButtons__item'} key={idx}>
        <p>Простое состояние</p>
        <code>{`.${intent}`}</code>
        <Button
          intent={intent}
          href={intent === ButtonIntent.LINK ? '#' : ''}
          icon={withIcon && IconName.GLOBE}
          iconAppend={iconAppend}
          large={large}
        >
          {intent.replace('btn-', '')}
        </Button>
      </div>
    );
  });

  const buttonsFocused = intents.map((intent: ButtonIntent, idx) => {
    return (
      <div className={'PanelButtons__item'} key={idx}>
        <p>Нажата</p>
        <code>{`.${intent}`}</code>
        <Button
          intent={intent}
          focused={true}
          href={intent === ButtonIntent.LINK ? '#' : ''}
          icon={withIcon && IconName.GLOBE}
          iconAppend={iconAppend}
          large={large}
        >
          {intent.replace('btn-', '')}
        </Button>
      </div>

    );
  });

  const buttonsHovered = intents.map((intent: ButtonIntent, idx) => {
    return (
      <div className={'PanelButtons__item'} key={idx}>
        <p>При наведении</p>
        <p><code>:hover</code> <code>.hover</code></p>
        <Button
          intent={intent}
          hovered={true}
          href={intent === ButtonIntent.LINK ? '#' : ''}
          icon={withIcon && IconName.GLOBE}
          iconAppend={iconAppend}
          large={large}
        >
          {intent.replace('btn-', '')}
        </Button>
      </div>

    );
  });

  const buttonsDisabled = intents.map((intent: ButtonIntent, idx) => {
    return (
      <div className={'PanelButtons__item'} key={idx}>
        <p>Неактивна</p>
        <p><code>[disabled]</code> <code>.disabled</code></p>
        <Button
          intent={intent}
          disabled={true}
          href={intent === ButtonIntent.LINK ? '#' : ''}
          icon={withIcon && IconName.GLOBE}
          iconAppend={iconAppend}
          large={large}
        >
          {intent.replace('btn-', '')}
        </Button>
      </div>

    );
  });

  return (
    <div className="PanelButtons">
      <div className="PanelButtons__header">
        <FilterForm
          filter={filter}
          handleChange={handleChange}
        />
        <p>Общие классы: <code>.btn {large && '.btn-lg'}</code></p>
      </div>
      <div className="PanelButtons__body">
        <section className={'PanelButtons__section'}>
          <h2>default</h2>
          {buttons}
        </section>
        <section className={'PanelButtons__section'}>
          <h2>focus</h2>
          {buttonsFocused}
        </section>
        <section className={'PanelButtons__section'}>
          <h2>hover</h2>
          {buttonsHovered}
        </section>
        <section className={'PanelButtons__section'}>
          <h2>disabled</h2>
          {buttonsDisabled}
        </section>
      </div>
    </div>
  );
};

export { PanelButtonsComponent };
