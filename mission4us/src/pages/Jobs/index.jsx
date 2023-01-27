import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";
import Body from "../../components/Body";
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
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ModalDelete from "../../components/modal";

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

const columns = [
  { id: "intitule", label: "Intitule", minWidth: 100},
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
  },
];


function createData(intitule, description, secteur) {
  
  return { intitule, description, secteur };
}

const rows = [
  createData('Ingenieur Informatique','loremImpum' , 'Prive'),
  createData('Enseignant','loremImpum' , 'Prive'),
  createData('Plombier','loremImpum' , 'Prive'),
  createData('Ingenieur Informatique','loremImpum' , 'Prive'),
  createData('Enseignant','loremImpum' , 'Prive'),
  createData('Plombier','loremImpum' , 'Prive'),
  createData('Ingenieur Informatique','loremImpum' , 'Prive'),
  createData('Enseignant','loremImpum' , 'Prive'),
  createData('Plombier','loremImpum' , 'Prive'),
  createData('Ingenieur Informatique','loremImpum' , 'Prive'),
  createData('Enseignant','loremImpum' , 'Prive'),
  createData('Plombier','loremImpum' , 'Prive'),


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
  const [ouvrir, setOuvrir] = React.useState(false);
  const handleOuvrir = () => setOuvrir(true);
  const handleFermer = () => setOuvrir(false);
  return (
    <Box className="dashboard">
      <Box
      sx={{
        padding: "10px",
        color: theme.palette.grey[100],
        fontSize: "22px",
        backgroundColor: theme.palette.background.default ,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'

      }}
    >
      <div><p>Jobs</p></div>
      
      <Button variant="contained" 
      endIcon={<AddIcon />} 
      size='medium' 
      style={{backgroundColor:'#237a57'}}
      onClick={()=>navigate("Add Job")  }
      >
        Ajouter
      </Button>
    </Box>
      <Body>
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
                     <StyledTableCell >{row.intitule}</StyledTableCell>
                        <StyledTableCell >{row.description}</StyledTableCell>
                        <StyledTableCell>{row.secteur}</StyledTableCell>
                        
                        <StyledTableCell align="left">
                        <div className={buttonStyle.root}>
                        <Tooltip title="Modifier">
                        <IconButton
                          aria-label="edit"
                          color='primary'
                          onClick={()=>navigate("Update Job")  }
                        >
                          <EditIcon />
                          
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Supprimer">
                        <IconButton 
                        aria-label="delete" 
                        color='secondary'
                        onClick={handleOuvrir}
                        >
                          <DeleteIcon />
                        </IconButton>
                        </Tooltip>
                          </div>
                          </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <ModalDelete
          open={ouvrir}
          onClose={handleFermer}
          title={"Voulez vous supprimer ce job?"}
          
      />
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
