import React from 'react'
import { Link } from 'react-router-dom'
import './MyGigs.scss'

const MyGigs = () => {
  return (
    <div className='mygigs'>
      <div className="container">
        <div className="top">
          <h2>Gigs</h2>
          <Link to='/add'><button>Add New Gig</button></Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png'/>
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>165</td>
            <td>
              <img className='delete' src='/img/delete.png' />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png'/>
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>165</td>
            <td>
              <img className='delete' src='/img/delete.png' />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png'/>
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>165</td>
            <td>
              <img className='delete' src='/img/delete.png' />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png'/>
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>165</td>
            <td>
              <img className='delete' src='/img/delete.png' />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png'/>
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>165</td>
            <td>
              <img className='delete' src='/img/delete.png' />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png'/>
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>165</td>
            <td>
              <img className='delete' src='/img/delete.png' />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/428380b5a57fe88deab8c015ce9d490a-1632824335910/29d2c14d-3036-47b2-ac7a-5434ac000b53.png'/>
            </td>
            <td>Gig1</td>
            <td>78</td>
            <td>165</td>
            <td>
              <img className='delete' src='/img/delete.png' />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs