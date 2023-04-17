// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <>
      <ul className="list">
        {children}
        <GrFormClose className="x-mark" />
      </ul>
    </>
  )
}
export default Notification
