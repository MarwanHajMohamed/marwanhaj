import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// eslint-disable-next-line no-unused-vars
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import "../../css/projectModal.css";

export default function ProjectModal({
  title,
  images,
  description,
  open,
  handleClose,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    outline: 0,
    p: 4,
  };

  const imageStyle = {
    position: "absolute",
    top: "0%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    height: 100,
    outline: 0,
  };

  const [openImageIndex, setOpenImageIndex] = useState(null); // Track the index of the clicked image
  const handleOpenImage = (index) => setOpenImageIndex(index); // Update the index of the clicked image
  const handleCloseImage = () => setOpenImageIndex(null); // Close the modal by resetting the index

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="project-modal-container"
    >
      <Box sx={style}>
        <Typography className="title">{title}</Typography>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => {
            // Added index parameter to map
            return (
              <SwiperSlide key={index}>
                {" "}
                {/* Added key */}
                <img
                  src={image}
                  alt=""
                  onClick={() => handleOpenImage(index)} // Pass the index to the handler
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {openImageIndex !== null && ( // Render the modal if an image is clicked
          <Modal
            open={true}
            onClose={handleCloseImage}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="zoom-in-image"
          >
            <Box sx={imageStyle}>
              <img
                src={images[openImageIndex]}
                alt=""
                onClick={handleCloseImage}
              />
            </Box>
          </Modal>
        )}
        <Typography>{description}</Typography>
      </Box>
    </Modal>
  );
}
