import Single from '../../components/single/single'
import { singleProduct } from '../../data'
import './user.scss'
 const User = () => {

  // fetch data and send to single component
  return (
    <div className="user">

    <Single {...singleProduct}/>

    </div>
  )
}
export default User