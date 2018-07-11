var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';

import { TableCell } from '../Table';
import { Text } from '../Text';
import { Box } from '../Box';

import Resizer from './Resizer';
import Searcher from './Searcher';
import Sorter from './Sorter';
import ExpanderCell from './ExpanderCell';
import { StyledDataTableHeader, StyledDataTableRow } from './StyledDataTable';

var Header = function Header(_ref) {
  var columns = _ref.columns,
      filtering = _ref.filtering,
      filters = _ref.filters,
      groups = _ref.groups,
      groupState = _ref.groupState,
      onFilter = _ref.onFilter,
      onFiltering = _ref.onFiltering,
      onResize = _ref.onResize,
      onSort = _ref.onSort,
      onToggle = _ref.onToggle,
      sort = _ref.sort,
      theme = _ref.theme,
      widths = _ref.widths,
      rest = _objectWithoutProperties(_ref, ['columns', 'filtering', 'filters', 'groups', 'groupState', 'onFilter', 'onFiltering', 'onResize', 'onSort', 'onToggle', 'sort', 'theme', 'widths']);

  return React.createElement(
    StyledDataTableHeader,
    rest,
    React.createElement(
      StyledDataTableRow,
      null,
      groups && React.createElement(ExpanderCell, {
        context: 'header',
        expanded: Object.keys(groupState).filter(function (k) {
          return !groupState[k].expanded;
        }).length === 0,
        theme: theme,
        onToggle: onToggle
      }),
      columns.map(function (_ref2) {
        var property = _ref2.property,
            header = _ref2.header,
            align = _ref2.align,
            search = _ref2.search;
        return React.createElement(
          TableCell,
          {
            key: property,
            scope: 'col',
            plain: true,
            verticalAlign: 'bottom',
            style: widths && widths[property] ? { width: widths[property] } : undefined
          },
          React.createElement(
            Resizer,
            { property: property, onResize: onResize, theme: theme },
            React.createElement(
              Box,
              { flex: true },
              React.createElement(
                Box,
                _extends({
                  flex: true,
                  direction: 'row',
                  justify: 'between',
                  align: 'center'
                }, theme.dataTable.header, {
                  pad: undefined
                }),
                React.createElement(
                  Sorter,
                  {
                    align: align,
                    property: property,
                    onSort: onSort,
                    sort: sort,
                    theme: theme
                  },
                  typeof header === 'string' ? React.createElement(
                    Text,
                    null,
                    header
                  ) : header
                ),
                filters && search && React.createElement(Searcher, {
                  filtering: filtering,
                  filters: filters,
                  property: property,
                  onFilter: onFilter,
                  onFiltering: onFiltering
                })
              )
            )
          )
        );
      })
    )
  );
};

export default Header;