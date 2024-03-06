import { Image } from 'react-native';

export const CustomLogo = ({ width, height }) => {
  return (
    <Image
      source={require('../../../../assets/Logo.png')}
      style={{
        width: width,
        height: height
      }}
    />
  )
}