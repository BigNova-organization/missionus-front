import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";
import Body from "../../components/Body";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { useNavigate } from 'react-router-dom';
import { CalendarMonthOutlined } from "@mui/icons-material";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    
    
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#237a57",
    color: theme.palette.common.white,
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



// const rows = [
//   createData(1, 'front Enginner', 'Kherbouche','Samia' , 'Prive'),
//   createData(2, 'fullstack Enginner', 'Bekka','Reda' , 'Prive'),
  
// ];


// const useStyles = makeStyles({
//   table: {
//   marginTop:100,
//   minWidth: 900,
//   },
// });
const columns = [
  { id: "nom", label: "Nom", minWidth: 100},
  { id: "prenom", label: "Prénom", minWidth: 100 },
  {
    id: "description",
    label: "Description",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "secteur",
    label: "Secteur",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "actions",
    label: "Actions",
    format: (value) => value.toLocaleString("en-US"),
    // render: rowData => {
    //   return (
    //     <div>
    //       <IconButton
    //         aria-label="edit"
         
    //       >
    //         <EditIcon />
    //         {/* {loading===rowData.id && (
    //           <CircularProgress
    //             size={38}
    //             className={classes.fabProgress}
    //           />
    //         )} */}
    //       </IconButton>
    //       <IconButton aria-label="delete">
    //         <DeleteIcon />
    //       </IconButton>
    //     </div>
    //   );
    // }
    
  },
  // {
  //   id: "density",
  //   label: "Density",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toFixed(2)
  // }
];


function createData(nom, prenom, description, secteur) {
  
  return { nom, prenom, description, secteur };
}

const rows = [
  createData('Kherbouche','Samia','front-end Enginner' , 'Prive'),
  createData('Bekka','Reda','fullstack Enginner' , 'Prive'),
  createData('Amariche','Zineddine','fullstack Enginner' , 'Prive'),
  createData('Kherbouche','Samia','front-end Enginner' , 'Prive'),
  createData('Bekka','Reda','fullstack Enginner' , 'Prive'),
  createData('Amariche','Zineddine','fullstack Enginner' , 'Prive'),
  createData('Kherbouche','Samia','front-end Enginner' , 'Prive'),
  createData('Bekka','Reda','fullstack Enginner' , 'Prive'),
  createData('Amariche','Zineddine','fullstack Enginner' , 'Prive'),
  createData('Kherbouche','Samia','front-end Enginner' , 'Prive'),
  createData('Bekka','Reda','fullstack Enginner' , 'Prive'),
  createData('Amariche','Zineddine','fullstack Enginner' , 'Prive'),

];



const Jobs = () => {
  const theme = useTheme();
  // const classes = useStyles();
    const buttonStyle=useButtonStyles()

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
  return (
    <Box className="dashboard">
      <Head title='Jobs' />
      <Body>
      
        {/* <div className={buttonStyle.root}> 
        <Button variant="contained" color="primary" >ADD User</Button> 
        </div> */}
         
            {/* <TableContainer component={Paper}>
                <Table  sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="center">Description</StyledTableCell>
                        <StyledTableCell align="center">Nom</StyledTableCell>
                        <StyledTableCell align="center">Prenom</StyledTableCell>
                        <StyledTableCell align="center">Secteur</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.ID}>
                        <StyledTableCell component="th" scope="row">
                            {row.ID}
                        </StyledTableCell>
                        <StyledTableCell align="center">{row.Description}</StyledTableCell>
                        <StyledTableCell align="center">{row.Nom}</StyledTableCell>
                        <StyledTableCell align="center">{row.Prenom}</StyledTableCell>
                        <StyledTableCell align="center">{row.Secteur}</StyledTableCell>
                        <StyledTableCell align="center">
                        <div className={buttonStyle.root}>
                            <ButtonGroup variant="contained"  aria-label="contained primary button group" >
                              <Button color="default" 
                              style={{marginRight:"5px"}}
                              onClick={()=>navigate("Add Job")  }
                              >
                                Ajouter
                              </Button>
                              <Button 
                              color="primary" 
                              style={{marginRight:"5px"}}
                              onClick={()=>navigate("Update Job")  }
                               >Modifier</Button>
                                <Button 
                                color="secondary" 
                               
                                
                                >Supprimer</Button>
                                
                               
                            </ButtonGroup>
                          </div>
                        </StyledTableCell>
                        </StyledTableRow>
                  ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
       <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                     <StyledTableCell >{row.nom}</StyledTableCell>
                        <StyledTableCell>{row.prenom}</StyledTableCell>
                        <StyledTableCell >{row.description}</StyledTableCell>
                        <StyledTableCell>{row.secteur}</StyledTableCell>
                        
                        <StyledTableCell align="left">
                        <div className={buttonStyle.root}>
                        <IconButton
                          aria-label="edit"
                          color='primary'
                          onClick={()=>navigate("Update Job")  }
                        >
                          <EditIcon />
                          
                        </IconButton>
                        <IconButton aria-label="delete" color='secondary'>
                          <DeleteIcon />
                        </IconButton>
                          </div>
                          </StyledTableCell>
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
        style={{backgroundColor:'#34b782'}}
      />
    </Paper>
       
      </Body> 
    </Box>
  );
};

export default Jobs;
