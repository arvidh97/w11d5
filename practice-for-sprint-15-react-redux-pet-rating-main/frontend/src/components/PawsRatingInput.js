import {useState} from 'react'

const PawsRatingInput = ({ rating, disabled, onChange }) => {
  const [activeRating, setActiveRating]=useState(rating)
  const handleMouseEnter = (i) => {
    if (!disabled) {
      setActiveRating(i);
    }
  }
  const handlePawClick = (num) => {
    onChange(num);
  }


  return (
    <>
    <div className="rating-input">
      <div className={activeRating >= 1 ? "filled" : "empty"}
      onMouseEnter={()=>handleMouseEnter(1)}
      onMouseLeave={()=>setActiveRating(rating)}
      onClick={()=>handlePawClick(1)}>
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 2 ? "filled" : "empty"} 
      onMouseEnter={()=>handleMouseEnter(2)}
      onMouseLeave={()=>setActiveRating(rating)}
      onClick={()=>handlePawClick(2)}>
         <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 3 ? "filled" : "empty"}
      onMouseEnter={()=>handleMouseEnter(3)}
      onMouseLeave={()=>setActiveRating(rating)}
      onClick={()=>handlePawClick(3)}
      >
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 4 ? "filled" : "empty"}
      onMouseEnter={()=>handleMouseEnter(4)}
      onMouseLeave={()=>setActiveRating(rating)}
      onClick={()=>handlePawClick(4)}>
        <i className="fa fa-paw"></i>
      </div>
      <div className={activeRating >= 5 ? "filled" : "empty"}
      onMouseEnter={()=>handleMouseEnter(5)}
      onMouseLeave={()=>setActiveRating(rating)}
      onClick={()=>handlePawClick(5)}
      >
        <i className="fa fa-paw"></i>
      </div>
    </div>
    </>
  );
};

export default PawsRatingInput;