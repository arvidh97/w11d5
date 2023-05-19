import {useState} from 'react'

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating]=useState(0)

  const onMouseEnter = (e) => {
    setActiveRating = e.target
  }
  return (
    <>
    <input
      type="number"
      disabled={disabled}
      value={rating}
      onChange={onChange}
    />
    <div className="rating-input">
      <div className={activeRating >= 1 ? "filled" : "empty"}
      onMouseEnter={()=>setActiveRating(1)}
      onMouseLeave={()=>setActiveRating(0)}>
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 2 ? "filled" : "empty"} 
      onMouseEnter={()=>setActiveRating(2)}
      onMouseLeave={()=>setActiveRating(0)}>
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 3 ? "filled" : "empty"}
      onMouseEnter={()=>setActiveRating(3)}
      onMouseLeave={()=>setActiveRating(0)} >
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 4 ? "filled" : "empty"}
      onMouseEnter={()=>setActiveRating(4)}
      onMouseLeave={()=>setActiveRating(0)}>
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 5 ? "filled" : "empty"}
      onMouseEnter={()=>setActiveRating(5)}
      onMouseLeave={()=>setActiveRating(0)}>
        <i className="fa fa-paw"></i>
      </div>
    </div>
    </>
  );
};

export default PawsRatingInput;