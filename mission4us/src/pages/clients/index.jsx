// import React, { useEffect } from "react";
// import { Box, useTheme } from "@mui/material";

// import Head from "../../components/Head";





// const Clients = () => {
//   const theme = useTheme();
//   return (
//     <Box >
//       <Head title='Clients' />
//     </Box>
//   );
// };

// export default Clients;

import React, { useEffect,useState,useCallback } from "react";
import { Box, useTheme } from "@mui/material";


import Head from "../../components/Head";
import Body from "../../components/Body";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Drawer from "../../components/Drawer/Drawer.jsx";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Paper from '@material-ui/core/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from "../../Redux/clients/slice";

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    
    
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:theme.palette.background.default,
    color: theme.palette.primary.light
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.common.black,
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const columns = [
  { id: "nom", label: "Nom", minWidth: 100},
  {
    id: "prenom",
    label: "Prénom",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "pays",
    label: "Pays",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "email",
    label: "Email",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "tel",
    label: "N° téléphone",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },

];

function createData(nom,prenom,pays,email,tel) {
  
  return { nom,prenom,pays,email,tel};
}

const rows = [
  createData('John Dev','loremImpum','Front-end Engeenier' ,'Bejaia', '0782205066'),
  createData('Jack BK','loremImpum','Full stack Engeenier' ,'Bejaia', '0782205066'),
  createData('John Dev','loremImpum','Front-end Engeenier' ,'Bejaia', '0782205066'),
  createData('Jack BK','loremImpum','Full stack Engeenier' ,'Bejaia', '0782205066'),
  createData('John Dev','loremImpum','Front-end Engeenier' ,'Bejaia', '0782205066'),
  createData('Jack BK','loremImpum','Full stack Engeenier' ,'Bejaia', '0782205066'),
  createData('John Dev','loremImpum','Front-end Engeenier' ,'Bejaia', '0782205066'),
  createData('Jack BK','loremImpum','Full stack Engeenier' ,'Bejaia', '0782205066'),


];




const Clients = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.clients.clients);
  console.log(clients,'clients')
 

  let navigate=useNavigate()
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
  setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
  };
  

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);
  return (
    <Box >
      <Head title='Clients' />
    <Body>
      <Paper >
      <TableContainer sx={{ maxHeight: 440 }} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,index) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <StyledTableCell >{row.nom}</StyledTableCell>
                     <StyledTableCell >{row.prenom}</StyledTableCell>
                        <StyledTableCell >{row.pays}</StyledTableCell>
                        <StyledTableCell >{row.email}</StyledTableCell>
                        <StyledTableCell>{row.tel}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{backgroundColor:theme.palette.background.alt,
        color: theme.palette.primary.light}}
      />
        
    </Paper>
       
      </Body> 
    </Box>
  );
};

export default Clients;

