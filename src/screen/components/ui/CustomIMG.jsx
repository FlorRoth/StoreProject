import { Image } from 'react-native';
import apple from '../../../../assets/authApple.png';
import facebook from '../../../../assets/authFacebook.png';
import google from '../../../../assets/authGoogle.png';
import logo from '../../../../assets/authLogo.png';
import check from '../../../../assets/authCheck.png';

export const CustomIMG = ({ width, height, img }) => {
  let selectedIcon;
  if (img === 'authFacebook') {
    selectedIcon = facebook;
  } else if (img === 'authGoogle') {
    selectedIcon = google;
  } else if (img === 'authApple') {
    selectedIcon = apple;
  } else if (img === 'authLogo') {
    selectedIcon = logo;
  } else if (img === 'authCheck') {
    selectedIcon = check;
  }
  return (
    <Image
      source={selectedIcon}
      style={{
        width: width,
        height: height
      }}
    />
  )
}
