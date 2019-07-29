import React from 'react';

import {IFilter, ICurrentFilter, filterList} from '../../../lib';

interface IFilterFormProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  filter: IFilter;
}

const FilterForm: React.SFC<IFilterFormProps> = (props): JSX.Element => {

  const {handleChange, filter} = props;

  const currentFilterList = Object.keys(filter);
  const currentFilter: ICurrentFilter = {};

  filterList.forEach((filter) => {
    currentFilter[`${filter}Exists`] = currentFilterList.includes(filter);
  });

  const {
    largeExists,
    withIconExists,
    iconAppendExists,
    indentedExists,
    errorExists,
    tooltipExists,
    disabledExists
  } = currentFilter;

  const {
    large,
    withIcon,
    iconAppend,
    indented,
    error,
    tooltip,
    disabled
  } = filter;

  return (
    <div className="FilterForm form-inline">
      {largeExists && (
        <div className="input-group">
          <input type="checkbox" id={'large'} onChange={handleChange} defaultChecked={large} />
          <label htmlFor="large">Большие</label>
        </div>
      )}
      {withIconExists && (
        <div className="input-group form-inline">
          <div className="input-group">
            <input type="checkbox" id={'withIcon'} onChange={handleChange} defaultChecked={withIcon} />
            <label htmlFor="withIcon">С иконкой</label>
          </div>
          {iconAppendExists && withIcon && (
            <div className="input-group">
              <input type="checkbox" id={'iconAppend'} onChange={handleChange} defaultChecked={iconAppend} />
              <label htmlFor="iconAppend">С иконкой справа</label>
            </div>
          )}
        </div>
      )}
      {indentedExists && (
        <div className="input-group">
          <input type="checkbox" id={'indented'} onChange={handleChange} defaultChecked={indented} />
          <label htmlFor="indented">С отступами</label>
        </div>
      )}
      {disabledExists && (
        <div className="input-group">
          <input type="checkbox" id={'disabled'} onChange={handleChange} defaultChecked={disabled} />
          <label htmlFor="disabled">Недоступно</label>
        </div>
      )}
      {errorExists && (
        <div className="input-group">
          <input type="checkbox" id={'error'} onChange={handleChange} defaultChecked={error} />
          <label htmlFor="error">Ошибка</label>
        </div>
      )}
      {tooltipExists && (
        <div className="input-group">
          <input type="checkbox" id={'tooltip'} onChange={handleChange} defaultChecked={tooltip} />
          <label htmlFor="tooltip">Подсказка</label>
        </div>
      )}
    </div>
  );
};

export {FilterForm};
