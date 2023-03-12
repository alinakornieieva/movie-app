import './Preloader.css'
import {BallTriangle} from 'react-loader-spinner'

const Preloader = () => {
    return <div className='preloader'>
        <BallTriangle
           height={100}
           width={100}
           radius={5}
           color="#f0f8ff"
           ariaLabel="ball-triangle-loading"
           wrapperClass={{}}
           wrapperStyle=""
           visible={true}
         />
    </div>
}

export default Preloader