

function updateDriverWithKeyAndValue(obj,key,value)  {
  obj[key]=value;
  return obj;
  
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };
 
  newObj[key] = value;
 
  return newObj;
}
function deleteFromDriverByKey(obj,key) {
  delete obj[key];
  return obj;
  
}
function destructivelyDeleteFromDriverByKey(obj,key){
  const obj2 = { ...obj };
 delete obj2[key];
  return obj2;
}
const driver = {
 name: 'Sam', address: '11 Broadway'
  
};
driver = updateDriverWithKeyAndValue(driver,'address',undefined)
driver = destructivelyUpdateDriverWithKeyAndValue(driver,'address','12 Broadway')
driver= deleteFromDriverByKey(driver,'address')
driver = destructivelyDeleteFromDriverByKey(driver,'name')