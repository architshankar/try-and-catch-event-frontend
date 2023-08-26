import React, { useState } from "react";
import upload from "../assets/gallery.png";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import "../styles/Card.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


const Card = (props) => {
    const [spinner, setSpinner] = useState(false);
    const [submitTxt, setSubmitTxt] = useState("Submit");
    const [formFields, setFormFields] = useState({
      image: upload,
      studentName: "",
      itemTitle: "",
      itemDescription: "",
      email: "",
      lostLocation: "",
      category: "",
    });
  
    const handleImage = async (event) => {

    };
  
    const handleFieldChange = (event) => {

    };
  
    const handleFormSubmit = async (event) => {

    };
  
    return (
      <div className="lostContainerOuter">
        <div className="lostContainer">
          <div
            className="closeIcon"
            onClick={() => {
              props.updateItem();
            }}
          >
            <CloseIcon />
          </div>
          <div className="uploadImg">
            <div></div>
            <img src={formFields.image} alt="logo" width={100} id="imager" />
            <div className="uploadImgInput">
              <input
                type="file"
                name=""
                id=""
                accept="image/*"
                className="btnGraphic fileInput bg-grad"
                style={{ paddingLeft: "10px", paddingRight: "0" }}
                onChange={handleImage}
              />
            </div>
          </div>
          <div className="divider"></div>
          <div className="details">
            <div>
              <div className="heading">Report an item !</div>
              <div className="titleInfo">
                Enter necessary details related to your item.
              </div>
            </div>
            <form method="POST" onSubmit={handleFormSubmit}>
              {[
                {
                  icon: <PersonIcon />,
                  name: "studentName",
                  placeholder: "Name",
                },
                {
                  icon: <TitleIcon />,
                  name: "itemTitle",
                  placeholder: "Item Name",
                },
                {
                  icon: <DescriptionIcon />,
                  name: "itemDescription",
                  placeholder: "Item Description",
                },
                { icon: <EmailIcon />, name: "email", placeholder: "Email" },
                {
                  icon: <LocationOnIcon />,
                  name: "lostLocation",
                  placeholder: "Location",
                },
              ].map((inputField, index) => (
                <div className="inputField" key={index}>
                  {inputField.icon}
                  <input
                    type="text"
                    name={inputField.name}
                    placeholder={inputField.placeholder}
                    value={formFields[inputField.name]}
                    onChange={handleFieldChange}
                  />
                </div>
              ))}
  
              <div className="inputField">
                <CategoryIcon />
                <select
                  className="select"
                  defaultValue=""
                  name="category"
                  onChange={handleFieldChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="LOST">Lost</option>
                  <option value="FOUND">Found</option>
                </select>
              </div>
              <div className="submitBtn">
                <div className="btnOuter">
                  <ThreeDots
                    height="30"
                    width="30"
                    color="#fff"
                    ariaLabel="three-dots-loading"
                    visible={spinner}
                  />
                  <button className="btnGraphic" type="submit">
                    {submitTxt}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  