import React from 'react';

import { Checkbox, Radio, TextInput, Select, Option } from 'customui/core';

import { FilterForm } from '../../common';
import { IFilter } from '../../../lib';

interface IPanelFormControlsProps {
  filter: IFilter;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleRadioChange: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleTextInputChange: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleSelectChange: (value: string) => void;
  checkboxChecked: boolean;
  checkedRadioId: string;
  textInputValue: string;
  selectValue: string;
}

const PanelFormControlsComponent: React.SFC<IPanelFormControlsProps> = (props) => {

  const {
    filter: { disabled, error, tooltip },
    handleChange,
    handleCheckboxChange,
    handleRadioChange,
    handleTextInputChange,
    handleSelectChange,
    checkboxChecked,
    checkedRadioId,
    textInputValue,
    selectValue
  } = props;

  const values = [
    'Письмо-извещение',
    'Заявление об отпуске',
    'Заявление о переносе/продлении отпуска',
    'Служебная записка о переносе/продлении отпуска',
    'Служебная записка об отзыве из отпуска',
    'Заявление о предоставлении дополнительных оплачиваемых дней отдыха'
  ];

  const options = values.map((value, idx) => <Option key={idx} value={value} />);

  return (
    <div className="PanelFormControls">
      <div className="PanelFormControls__header">
        <FilterForm
          filter={{ disabled }}
          handleChange={handleChange}
        />
      </div>
      <div className="PanelFormControls__body">
        <section className="PanelFormControls__item">
          <h4>Чекбокс</h4>
          <Checkbox
            id={'uniqId-1'}
            labelText={'Some checkbox'}
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
            disabled={disabled}
          />
        </section>
        <section className="PanelFormControls__item">
          <h4>Радиокнопка</h4>
          <div className={'form-inline'}>
            <Radio
              id={'uniqId-2'}
              checked={checkedRadioId === 'uniqId-2'}
              name={'RadioName'}
              labelText={'Some radio'}
              disabled={disabled}
              onChange={handleRadioChange}
            />
            <Radio
              id={'uniqId-3'}
              checked={checkedRadioId === 'uniqId-3'}
              name={'RadioName'}
              labelText={'Some radio'}
              disabled={disabled}
              onChange={handleRadioChange}
            />
          </div>
        </section>
        <section className="PanelFormControls__item">
          <h4>Текстовый ввод</h4>
          <FilterForm
            filter={{ error, tooltip }}
            handleChange={handleChange}
          />
          <TextInput
            onChange={handleTextInputChange}
            // onKeyDown={this.handleKeyDown}
            placeholder={'Placeholder'}
            disabled={disabled}
            hasError={error}
            value={textInputValue}
            helpMessage={
              tooltip && error
                ? 'Сообщение об ошибке'
                : tooltip && !error
                  ? 'Сообщение с подсказкой'
                  : null
            }
          />
        </section>
        <section className="PanelFormControls__item">
          <h4>Выбор из списка</h4>
          <span>без поиска</span>
          <Select
            options={options}
            disabled={disabled}
            handleChange={handleSelectChange}
            value={selectValue}
          />
          <span>с поиском</span>
          <Select
            options={options}
            disabled={disabled}
            handleChange={handleSelectChange}
            value={selectValue}
            withSearch={true}
          />
        </section>
      </div>
    </div>
  );
};

export { PanelFormControlsComponent };
