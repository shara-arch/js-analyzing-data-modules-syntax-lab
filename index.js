// This is a function that merges all usernames into one
function combineUsers(...args){
  //Initialize the return object
  let combinedObject = {
    users: []
  }
  //Loop through args and merge arrays
  for (let i = 0; i < args.length; i++){
    let currentArray = args[i];
    consoele.log(`Array at index ${i} : ${currentArray}`);
    combinedObject.users = [...combinedObject.users, ...currentArray]
  
  }


}



module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};