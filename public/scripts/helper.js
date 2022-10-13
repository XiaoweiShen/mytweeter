
const getTimeSpan = (time)=>{
  const currentDate = Date.now();
  console.log(currentDate);
  let difference  =0;
  let result ="";
  let diff = currentDate - time;
  if(diff > 86400000){
    difference = Math.floor(diff/(3600*1000*24));
    result = difference + " days ago";
  } else {
    if (diff > (3600*1000)){
      difference = Math.floor(diff/(3600*1000))
      result = difference + " hours ago";
      
    } else {
      if (diff > (60*1000)){
        difference = Math.floor(diff/(60*1000))
        result = difference + " mins ago";
        
    } else {
      difference = Math.floor(diff/(1000))
      result = difference + " secs ago";
      
    }

  }}
  return result;
};

module.exports = {getTimeSpan};