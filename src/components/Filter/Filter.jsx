import React from "react";
import './filter.css'

export const Filter = ({data, setDataFilter}) => {

  
  
  const handleChange = (e) => {
    const filter = data.filter(cardInfo => ((cardInfo.name).toLowerCase()).includes((e.target.value).toLowerCase()))
    setDataFilter(filter);
    setNoPersonaje(e.target.value)
  }



  return (
    <>
      <div className="input-container">
          <form className="center">
            <input
                    className="inputStyle"
                    type="text" 
                    name=""
                    onChange={(e) => handleChange(e)}
                    placeholder="Find your Profile"
                    />
              <button type="submit" disabled={true}><img src="/public/images/lupa.png"/></button>
          </form>
        <div className="sticks"></div>
    </div>
    </>
  )
};
