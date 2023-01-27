import React, { useEffect,useState,useCallback } from "react";
import { Box, useTheme } from "@mui/material";

import "./styles.css";
import Head from "../../components/Head";
import Body from "../../components/Body";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Drawer from "../../components/Drawer/Drawer.jsx";
import AddMission from "./formAjoutMission";
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
  { id: "client", label: "Client", minWidth: 100},
  {
    id: "intitule",
    label: "Intitulé de la mission",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "job",
    label: "Job",
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
    id: "tel",
    label: "N° téléphone",
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

function createData(client,intitule,job,adresse,tel) {
  
  return { client,intitule,job,adresse,tel };
}

const rows = [
  createData('Samia Kherouche','loremImpum','Front-end Engeenier' ,'Bejaia', '0782205066'),
  createData('Reda Bekka','loremImpum','Full stack Engeenier' ,'Bejaia', '0782205066'),
  createData('Samy Outemzabet','loremImpum','Back-end Engeenier' ,'Bejaia', '0782205066'),
  createData('Samia Kherouche','loremImpum','Front-end Engeenier' ,'Bejaia', '0782205066'),
  createData('Reda Bekka','loremImpum','Full stack Engeenier' ,'Bejaia', '0782205066'),
  createData('Samy Outemzabet','loremImpum','Back-end Engeenier' ,'Bejaia', '0782205066'),
  createData('Samia Kherouche','loremImpum','Front-end Engeenier' ,'Bejaia', '0782205066'),
  createData('Reda Bekka','loremImpum','Full stack Engeenier' ,'Bejaia', '0782205066'),
  createData('Samy Outemzabet','loremImpum','Back-end Engeenier' ,'Bejaia', '0782205066'),

];




const Missions = () => {
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
      <div><p>Missions</p></div>
      <div>
      
      <Button variant="contained" 
      endIcon={<AddIcon />} 
      size='medium' 
      style={{backgroundColor:'#237a57'}}
      onClick={handleOpen}
      >
        Ajouter
      </Button>
      <Drawer anchor="right" open={open}  >
        <AddMission open={open} onClose={handleClose}/>
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
                    <StyledTableCell >{row.client}</StyledTableCell>
                     <StyledTableCell >{row.intitule}</StyledTableCell>
                        <StyledTableCell >{row.job}</StyledTableCell>
                        <StyledTableCell >{row.adresse}</StyledTableCell>
                        <StyledTableCell>{row.tel}</StyledTableCell>
                        
                        <StyledTableCell align="left">
                        <div className={buttonStyle.root}>
                        <Tooltip title="Modifier">
                        <IconButton
                          aria-label="edit"
                          color='primary'
                          onClick={handleOpen}
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
          title={"Voulez vous supprimer cette mission?"}
          
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

export default Missions;
