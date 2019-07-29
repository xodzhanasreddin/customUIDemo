import * as React from 'react';

import { Modal } from 'customui/core';
import { ButtonIntent } from 'customui/core/lib';

import { FilterForm } from '../../common';
import { IFilter } from '../../../lib';

interface IPanelModalProps {
  handleChange: (e: React.MouseEvent<HTMLInputElement>) => void;
  filter: IFilter;
}

const PanelModalComponent: React.SFC<IPanelModalProps> = (props) => {

  const {
    handleChange,
    filter: { large }
  } = props;

  const filter = { large };
  const intents = Object.values(ButtonIntent);

  const modals = intents.map((intent: ButtonIntent, idx) => {
    return (
      <div className={'PanelModal__item'} key={idx}>
        <Modal
          id={`${idx}`}
          buttonText={'Открыть модальное окно'}
          modalTitle={'Заголовок модального окна'}
          buttonLarge={large}
          buttonIntent={intent}
        >
          Содержиоме модального окна №{idx + 1}
        </Modal>
      </div>
    );
  });

  return (
    <div className="PanelModal">
      <div className="PanelModal__header">
        <FilterForm
          filter={filter}
          handleChange={handleChange}
        />
      </div>
      <div className="PanelModal__body">
        {modals}
      </div>
    </div>
  );

};

export { PanelModalComponent };
