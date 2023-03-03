import React from "react";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Rahul k",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <h2>Orders</h2>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png"
              />
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>John Snow</td>
            <td>
              <img className="message" src="/img/message.png" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png"
              />
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>John Snow</td>
            <td>
              <img className="message" src="/img/message.png" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png"
              />
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>John Snow</td>
            <td>
              <img className="message" src="/img/message.png" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png"
              />
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>John Snow</td>
            <td>
              <img className="message" src="/img/message.png" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png"
              />
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>John Snow</td>
            <td>
              <img className="message" src="/img/message.png" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png"
              />
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>John Snow</td>
            <td>
              <img className="message" src="/img/message.png" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="img"
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png"
              />
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>John Snow</td>
            <td>
              <img className="message" src="/img/message.png" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
