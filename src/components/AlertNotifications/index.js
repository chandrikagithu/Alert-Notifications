// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="notification-container">
        <h1 className="alert-notification">Alert Notifications</h1>
        <Notification>
          <li className="list-container">
            <div className="left-container">
              <div className="success">
                <AiFillCheckCircle className="react-icon" />
              </div>
              <div className="status">
                <h1 className="title1 ">Success</h1>
                <p className="description">
                  you can access all the files in the folder
                </p>
              </div>
            </div>
          </li>
        </Notification>
        <Notification>
          <li className="list-container">
            <div className="left-container">
              <div className="success">
                <RiErrorWarningFill className="react-icon2" />
              </div>
              <div className="status">
                <h1 className="title2 ">Error</h1>
                <p className="description">
                  Sorry, you are not authorized to have access to delete the
                  file.
                </p>
              </div>
            </div>
          </li>
        </Notification>
        <Notification>
          <li className="list-container">
            <div className="left-container">
              <div className="success">
                <MdWarning className="react-icon3" />
              </div>
              <div className="status">
                <h1 className="title3 ">Warning</h1>
                <p className="description">
                  Viewers of this file can see comments and suggestions
                </p>
              </div>
            </div>
          </li>
        </Notification>
        <Notification>
          <li className="list-container">
            <div className="left-container">
              <div className="success">
                <MdInfo className="react-icon4" />
              </div>
              <div className="status">
                <h1 className="title4 ">Info</h1>
                <p className="description">
                  Anyone on the internet can view these files
                </p>
              </div>
            </div>
          </li>
        </Notification>
      </div>
    )
  }
}
export default AlertNotifications
