import React, { useState } from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        className="bg-blue-600 hover:bg-blue-700 text-white"
        >
        Abrir Modal
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          className="bg-white w-11/12 md:w-2/3 lg:w-1/3 rounded-lg shadow-xl p-6 relative mx-auto my-20 overflow-hidden"
        >
          {/* Botón de cerrar */}
          <IconButton
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            <CloseIcon />
          </IconButton>
          {/* Título */}
          <Typography
            variant="h6"
            component="h2"
            className="text-center font-semibold mb-4 text-gray-800"
          >
            Modal Personalizado
          </Typography>
          {/* Contenido */}
          <Typography
            variant="body1"
            className="text-center text-gray-600 mb-6"
          >
            Este es un ejemplo de modal estilizado con Material UI y Tailwind
            CSS.
          </Typography>
          {/* Botón de acción */}
          <div className="flex justify-center">
            <Button
              variant="contained"
              onClick={handleClose}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Cerrar Modal
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
