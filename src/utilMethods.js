
/*
* This method returns an array of matching objects. It searches through all of its keys in the first level to see if the string
is included in the string. (ie: values will be converted to string and compared)
*
*/
export const getMatchingObjectsFromString = (object, searchString) => {
    let searchResults = [];
    if (object.length > 0) {
      let taskKeys = Object.keys(object[0]);
      taskKeys = taskKeys.filter(key => {
        return key !== "_id" && key !== "__v";
      });
  
      searchResults = object.filter(task => {
        let containsString = false;
        for (let key of taskKeys) {
          let value = task[key]
          if (value && value.toString().includes(searchString)) {
            containsString = true;
            break;
          }
        }
        return containsString;
      });
    }
  
    return searchResults;
  }
  
  