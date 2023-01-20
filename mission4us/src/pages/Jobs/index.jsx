import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";
import Body from "../../components/Body";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { useNavigate } from 'react-router-dom';

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
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

function createData(ID, Description, Nom, Prenom, Secteur) {
  return {ID,Description,Nom,Prenom,Secteur};
}

const rows = [
  createData(1, 'front Enginner', 'Kherbouche','Samia' , 'Prive'),
  createData(2, 'fullstack Enginner', 'Bekka','Reda' , 'Prive'),
  
];


const useStyles = makeStyles({
  table: {
  marginTop:100,
  minWidth: 900,
  },
});




const Jobs = () => {
  const theme = useTheme();
  const classes = useStyles();
    const buttonStyle=useButtonStyles()

     let navigate=useNavigate()
  return (
    <Box className="dashboard">
      <Head title='Jobs' />
      <Body>
      
        {/* <div className={buttonStyle.root}> 
        <Button variant="contained" color="primary" >ADD User</Button> 
        </div> */}
         
            <TableContainer component={Paper}>
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
            </TableContainer>
       
        
      </Body>
    </Box>
  );
};

export default Jobs;
