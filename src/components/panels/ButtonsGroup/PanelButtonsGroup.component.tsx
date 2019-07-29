import React from 'react';

import { Button, ButtonGroup } from 'customui/core';
import { ButtonIntent, IconName } from 'customui/core/lib';

import { FilterForm } from '../../common';
import { IFilter } from '../../../lib';

interface IPanelButtonsGroupComponentProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  filter: IFilter;
}

const PanelButtonsGroupComponent: React.SFC<IPanelButtonsGroupComponentProps> = (props) => {

  const {
    handleChange,
    filter: { large, indented }
  } = props;

  const filter = { large, indented };

  return (
    <div className="PanelButtonsGroup">
      <div className="PanelButtonsGroup__header">
        <FilterForm
          filter={filter}
          handleChange={handleChange}
        />
      </div>
      <div className="PanelButtonsGroup__body">
        <ButtonGroup large={large} indented={indented}>
          <Button
            intent={ButtonIntent.OUTLINE_PRIMARY}
            icon={IconName.GLOBE}
            iconAppend={true}
          >
            {ButtonIntent.OUTLINE_PRIMARY.replace('btn-', '')}
          </Button>
          <Button
            intent={
              indented
                ? ButtonIntent.PRIMARY
                : ButtonIntent.OUTLINE_PRIMARY
            }
            icon={IconName.BOOKING_ROOM}
          >
            {
              (indented
                ? ButtonIntent.PRIMARY
                : ButtonIntent.OUTLINE_PRIMARY)
                .replace('btn-', '')
            }
          </Button>
          <Button
            intent={
              indented
                ? ButtonIntent.OUTLINE_SECONDARY
                : ButtonIntent.OUTLINE_PRIMARY
            }
          >
            {
              (indented
                ? ButtonIntent.OUTLINE_SECONDARY
                : ButtonIntent.OUTLINE_PRIMARY)
                .replace('btn-', '')
            }
          </Button>
          <Button
            intent={
              indented
                ? ButtonIntent.SECONDARY
                : ButtonIntent.OUTLINE_PRIMARY
            }
            icon={IconName.CALENDAR}
          >
            {
              (indented
                ? ButtonIntent.SECONDARY
                : ButtonIntent.OUTLINE_PRIMARY)
                .replace('btn-', '')
            }
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export { PanelButtonsGroupComponent };
