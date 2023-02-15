import React, { useEffect,useState,useCallback } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";
import Body from "../../components/Body";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Drawer from "../../components/Drawer/Drawer.jsx";
// import AddMission from "./formAjoutMission";
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
import Tooltip from '@material-ui/core/Tooltip';
import ModalDelete from "../../components/modal";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { Visibility } from "@material-ui/icons";
import AddUser from "./formAddUser";
// import DevisMission from "./formDevis";
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
  { id: "type", label: "Type", minWidth: 100},
  {
    id: "nom",
    label: "Nom complet",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "numtel",
    label: "N° téléphone",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "adresse",
    label: "Adresse",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "compte",
    label: "Compte bancaire",
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

function createData(type,nom,numtel,adresse,compte) {
  
  return {type,nom,numtel,adresse,compte};
}

const rows = [
  createData('Fournisseur','Samia Kherouche','0782205066','Bejaia','dkdkkdfhs1234'),
  createData('Fournisseur','Reda Bekka','0782205066','Bejaia','dkdkkdfhs1234'),
  createData('Client','Mira Bekka','0782205066','Bejaia','dkdkkdfhs1234'),
  createData('Client','Adam Bekka','0782205066','Bejaia','dkdkkdfhs1234'),


];




const Users = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);
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

  const [openDevis, setOpenDevis] = useState(false);

  const handleOpenVisu = useCallback(() => setOpenDevis(true), []);

  const handleCloseVisu= useCallback(() => setOpenDevis(false), []);
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
      <div style={{backgroundColor:theme.palette.background.default, color: theme.palette.primary.light}}><p>Utilisateurs</p></div>
      <div>
      
      <Button variant="contained" 
      endIcon={<AddIcon />} 
      size='medium' 
      style={{backgroundColor:theme.palette.primary.light,color:theme.palette.background.default}}
      onClick={handleOpen}
      >
        Ajouter
      </Button>
      <Drawer anchor="right" open={open}  >
        <AddUser open={open} onClose={handleClose}/>
      </Drawer>
      </div>
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
                    <StyledTableCell >{row.type}</StyledTableCell>
                     <StyledTableCell >{row.nom}</StyledTableCell>
                        <StyledTableCell >{row.numtel}</StyledTableCell>
                        <StyledTableCell >{row.adresse}</StyledTableCell>
                        <StyledTableCell>{row.compte}</StyledTableCell>
                        
                        <StyledTableCell align="left">
                        <div className={buttonStyle.root}>
                        <Tooltip title="Modifier">
                        <IconButton
                          aria-label="edit"
                          color='primary'
                          // onClick={handleOpen}
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

                        <Tooltip title="Visualiser">
                        <IconButton 
                        aria-label="visualiser" 
                        // color='secondary'
                        onClick={handleOpenVisu}
                        >
                          <Visibility />
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
      <Drawer anchor="right" open={openDevis} >
        {/* <DevisMission open ={openDevis} onClose={handleCloseDevis}/> */}
      </Drawer>
      <ModalDelete
          open={ouvrir}
          onClose={handleFermer}
          title={"Voulez vous supprimer cet utilisateur?"}
          
      />
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

export default Users;
