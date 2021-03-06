import PropTypes from 'prop-types';
import {
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
} from '@material-ui/core';

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {props.contentColumns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{
              minWidth: column.minWidth,
              maxWidth: column.maxWidth,
              fontFamily: 'Stylish',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : 'asc'}
              onClick={createSortHandler(column.id)}
            >
              {column.label}
              {orderBy === column.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
          key={-1}
          align={'right'}
          style={{
            maxWidth: '5px',
            fontFamily: 'Stylish',
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          보기
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  contentColumns: PropTypes.array.isRequired,
};

export default EnhancedTableHead;
