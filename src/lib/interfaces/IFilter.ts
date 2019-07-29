export interface IFilter {
  large?: boolean;
  withIcon?: boolean;
  iconAppend?: boolean;
  indented?: boolean;
  error?: boolean;
  tooltip?: boolean;
  disabled?: boolean;
}

export interface ICurrentFilter {
  largeExists?: boolean;
  withIconExists?: boolean;
  iconAppendExists?: boolean;
  indentedExists?: boolean;
  errorExists?: boolean;
  tooltipExists?: boolean;
  disabledExists?: boolean;
}

export const filterList = [
  'large',
  'withIcon',
  'iconAppend',
  'indented',
  'error',
  'tooltip',
  'disabled'
];
