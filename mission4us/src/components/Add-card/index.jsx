import { Box, FormHelperText, Stack, useTheme } from "@mui/material";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useState } from "react";
import Space from "../outils/Space";
import { PrimaryText } from "../utils/typography";
import { Add } from "@material-ui/icons";
import { useCallback } from "react";
import ModalAdd from "../modal/addItemsModel";
import { createExperiences } from "../../Redux/createCv/slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray({
  title,
  onBlur,
  sousTitre,
  addToCv,
  titleModel,
  helperText,
  setFieldValue,
  name,
}) {
  const themes = useTheme();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false); //show model
  const [chipData, setChipData] = useState([]);
  const [valueInput, setValueInput] = useState("");

  //open close
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
    dispatch(
      addToCv((chips) => chips.filter((chip) => chip.key !== chipToDelete.key))
    );
  };

  const onChange = useCallback((val) => {
    setValueInput(val);
  }, []);

  const handleAdd = () => {
    setFieldValue(name,[...chipData, { key: chipData.length + 1, label: valueInput }].toString())
    setChipData([...chipData, { key: chipData.length + 1, label: valueInput }]);
    dispatch(
      addToCv([...chipData, { key: chipData.length + 1, label: valueInput }])
    );
    setValueInput("");
    handleClose();
  };

  useEffect(() => {
   if(chipData.length){
    setFieldValue(name,[...chipData].toString())

   }else{
    setFieldValue(name,'')
  }
  }, [chipData])
  

  return (
    <Box
      component={"div"}
      sx={{
        width: "100%",
        cursor: "pointer",
      }}
      onBlur={onBlur}
    >
      <Space space={"20px"} />

      <Stack direction="row" spacing={2} alignItems="center">
        <PrimaryText
          fontWeight={"600"}
          fontSize={"25px"}
          text={title}
          color={
            helperText
              ? themes.palette.error.main
              : themes.palette.secondary.light
          }
        />
        <Stack
          direction="row"
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          <PrimaryText
            fontWeight={"400"}
            fontSize={"16px"}
            text={"ajouter"}
            color={themes.palette.secondary.main}
            cursor
          />
          <Add style={{ color: themes.palette.grey[700], fontSize: "15px" }} />
        </Stack>
      </Stack>
      <Box component={"div"}>
        {!chipData?.length ? (
          <>
            <Space />
            <PrimaryText
              fontWeight={"400"}
              fontSize={"16px"}
              text={sousTitre}
              color={themes.palette.secondary.light}
              cursor
            />
          </>
        ) : (
          <Box
            elevation={0}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: "10px",
              backgroundColor: "transparent",
            }}
            component="div"
          >
            <>
              {chipData?.map((data) => {
                let icon;
                if (data.label === "React") {
                  icon = <TagFacesIcon />;
                }

                return (
                  <ListItem key={data.key} sx={{ color: "#000" }}>
                    <Chip
                      icon={icon}
                      label={data.label}
                      onDelete={
                        data.label === "React" ? undefined : handleDelete(data)
                      }
                      sx={{
                        bgcolor: themes.palette.secondary.light,
                        fontSize: "15px",
                      }}
                    />
                  </ListItem>
                );
              })}
            </>
          </Box>
        )}
      </Box>
      <FormHelperText sx={{ color: themes.palette.error.main, pl: 0 , fontSize:"14px" }}>
        {helperText}
      </FormHelperText>

      <ModalAdd
        open={open}
        onClose={handleClose}
        title={titleModel}
        Ajouter={handleAdd}
        onChange={onChange}
        disable={valueInput.length <= 2 ? true : false}
        value={valueInput}
        label={title}
      />
    </Box>
  );
}
