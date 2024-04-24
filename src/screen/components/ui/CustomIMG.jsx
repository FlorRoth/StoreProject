import { Image, StyleSheet } from "react-native";
import apple from "../../../../assets/authApple.png";
import facebook from "../../../../assets/authFacebook.png";
import google from "../../../../assets/authGoogle.png";
import logo from "../../../../assets/authLogo.png";
import check from "../../../../assets/authCheck.png";
import campana from "../../../../assets/campana.png";
import global from "../../../../assets/global.png";
import luna from "../../../../assets/luna.png";
import pregunta from "../../../../assets/pregunta.png";
import logoPerfil from "../../../../assets/logoPerfil.png";
import { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
export const CustomIMG = ({ width, height, img }) => {
  const { theme } = useContext(FormContext);

  let selectedIcon;
  if (img === "authFacebook") {
    selectedIcon = facebook;
  } else if (img === "authGoogle") {
    selectedIcon = google;
  } else if (img === "authApple") {
    selectedIcon = apple;
  } else if (img === "authLogo") {
    selectedIcon = logo;
  } else if (img === "authCheck") {
    selectedIcon = check;
  } else if (img === "campana") {
    selectedIcon = campana;
  } else if (img === "global") {
    selectedIcon = global;
  } else if (img === "luna") {
    selectedIcon = luna;
  } else if (img === "pregunta") {
    selectedIcon = pregunta;
  } else if (img === "logoPerfil") {
    selectedIcon = logoPerfil;
  }
  const styles = StyleSheet.create({
    image: {
      tintColor: (theme == "dark") & (img != "logoPerfil") ? "white" : null, // You can adjust the intensity of the grayscale accoding. value of 0% will produce a normal images.
    },
  });
  return (
    <Image
      source={selectedIcon}
      style={[
        styles.image,
        {
          width: width,
          height: height,
        },
      ]}
    />
  );
};
