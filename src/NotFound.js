import Lottie from 'react-lottie';
import Error from './LottieJSON/404Error';

const NotFound = () => {
  return (
    <Lottie
      options={{ animationData: Error, loop: true }}
      height={'50%'}
      width={'50%'}
    />
  )
}

export default NotFound;