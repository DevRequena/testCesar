import Popup from "reactjs-popup";
import { SocialIcon } from 'react-social-icons';
import './cardImages.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faBuilding  } from "@fortawesome/free-solid-svg-icons";




export const CardImages = ({avatar, name, email, city, company, address, quote}) => {

  return (
    <>     
        <Popup
        trigger={
              <div className='main'>
                      <div className='image'>
                        <img src={`/public/assets/${avatar}.jpg`} className='avatar' alt={`Picture of ${name}`} />
                      </div>              
                      <div className='containerCard'>
                        <div className='title'>
                          {name}
                        </div>
                          <div className='description'> 
                            <FontAwesomeIcon icon={faEnvelope}/>  {email}                            
                          </div>
                          <div className='value'> 
                          <FontAwesomeIcon icon={faLocationDot}/>  {city}
                          </div>
                          <div className='time'> 
                            <FontAwesomeIcon icon={faBuilding}/>   {company}
                          </div>                
                        <div className='socialMedia'>
                              <div className="facebook">
                                <SocialIcon url="https://facebook.com/in/" target="_blank" style={{ height: 25, width: 25 }}/>
                                </div>
                              <div className="linkedin">
                                <SocialIcon url="https://linkedin.com/in/" target="_blank" style={{ height: 25, width: 25 }}/>
                              </div>
                              <div className="twitter">
                                <SocialIcon url="https://twitter.com/in/" target="_blank" style={{ height: 25, width: 25 }}/>
                              </div>
                              <div className="youtube">
                                <SocialIcon url="https://youtube.com/in/" target="_blank" style={{ height: 25, width: 25 }}/>
                              </div>
                          </div>
                      </div>
                    </div>
            }
        modal
      >        
          {close => (
            <div className="modal">
              <div className="ProfileContainer">
                <div>
                  <img src={`../../public/images/${avatar}.jpg`} alt={`Picture of ${name}`} />
                </div>
              </div>
              <div className="modalContent">
                <h1>
                  {name}
                </h1>
                <p>
                  {`${address.street}, ${address.suite}`}
                </p>
              </div>
              <div className="quote">
                <h4>
                  {`${quote.catchPhrase}, ${quote.bs}`}
                </h4>
              </div>
              <div className="buttons">
                <button>Message</button>
                <button>Folowing</button>
              </div>
              <button className="close" onClick={close}>
                &times;
              </button>
              {/* <h1 className="modalHeader"> Modal Title </h1> */}
              <div className="actions">
              </div>
            </div>
          )}
        </Popup>
    </>
  )
}
