import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePaginationUI from './components/TablePagination';
import { episodeOptions, locationOptions } from '../../data';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    textTransform: 'uppercase',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles2 = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function TableUI({
  numPage = 1,
  count = 0,
  numRowsPerPage = 5,
  rows = [],
  episode = false,
  location = false,
  handleChangePage,
}) {
  const classes = useStyles2();

  const [rowsPerPage, setRowsPerPage] = React.useState(numRowsPerPage);

  const emptyRows = rowsPerPage - rows.length;

  // const handleChangePage = (event, newPage) => {
  //   console.log('newPage', newPage);
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // console.log(Object.keys(rows[0]));
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {episode
              ? episodeOptions.map((option) => (
                  <StyledTableCell key={option} align="left">
                    {option}
                  </StyledTableCell>
                ))
              : location &&
                locationOptions.map((option) => (
                  <StyledTableCell key={option} align="left">
                    {option}
                  </StyledTableCell>
                ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row, index) => (
              <TableRow key={`${row.id}_${index}`}>
                {episode ? (
                  <>
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                  </>
                ) : (
                  location && (
                    <>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.type}</TableCell>
                      <TableCell align="left">{row.dimension}</TableCell>
                    </>
                  )
                )}
              </TableRow>
            ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[rowsPerPage]}
              colSpan={3}
              count={count}
              rowsPerPage={rowsPerPage}
              page={numPage}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              // onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationUI}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
