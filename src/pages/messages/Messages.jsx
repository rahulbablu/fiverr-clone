import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Rahul k",
    isSeller: true,
  };

  const message =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consequuntur reiciendis esse iste repudiandae ipsa similique enim sapiente magnam aliquam exercitationem quidem ducimus impedit soluta, quibusdam temporibus fugiat quisquam eum.";

  return (
    <div className="messages">
      <div className="container">
        <h2>Orders</h2>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
       
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
         
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
            
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
            
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
            
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
            
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to='/message/123' >{message.substring(0,100)}...</Link></td>
            <td>2 days ago</td>
            
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
