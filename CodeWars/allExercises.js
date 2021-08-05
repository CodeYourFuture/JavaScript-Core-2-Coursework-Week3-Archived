/*********************************************
 * CodeWars homeworks
 * https://www.codewars.com/collections/cyf-js-2-week-3
************************************************** */




// 1 *********************************
//Job Matching #2
function match(job, candidates) {
  // look at the candidate desiresEquity, if it's true =>
  //job equityMax has to be >0 &
  // candidate currentLocation + desiredLocations have to include some job locationlocation
  // else => just look at the locations
return candidates.filter(candidate =>{
  if(candidate.desiresEquity){
    console.log(job['equityMax'] > 0 && isIncludeLocation(candidate['currentLocation'],candidate['desiredLocations'],job['locations']),"WILLRETURN")
    return job['equityMax'] > 0 && isIncludeLocation(candidate['currentLocation'],candidate['desiredLocations'],job['locations'])
  } else {
    return isIncludeLocation(candidate['currentLocation'],candidate['desiredLocations'],job['locations']);
  }
});

}
//this func will look at the locations
function isIncludeLocation (currLoc,desireLoc,jobLocation){
 const allLoc= desireLoc;
  allLoc.push(currLoc);//current loc is String so put inside the array
  return allLoc.some(elem=>{
    return jobLocation.includes(elem);
  });
}


// 2 *********************************
//Split The Bill
function splitTheBill(obj) {
  let counter=0;
  let totalBill=0;
    for(key in obj){//find avarage
      counter++;
      totalBill +=obj[key];
    }
  const avarageBill = totalBill/counter;
    for(key in obj){//find result and put inside in the object
      obj[key] = Number((Math.round((obj[key] -avarageBill) * 100) / 100).toFixed(2));
    }
  return obj;

}



// 3 *********************************
//Convert the score
function scoreboard(str) {
  const score ={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9, nil:0}
const scoreArr=[];
  for(key in score){
    if(str.indexOf(key)!==-1){
      scoreArr.push(score[key]);
      scoreArr.push(str.indexOf(key));
    }
  }//we took [1(score),3(index),nil(score),8] OR=> [4(score),8]==if score is same
  if(scoreArr.length === 2){// score same return [2,2]
     return [scoreArr[0],scoreArr[0]];
  } else if(scoreArr[1] < scoreArr[3]){ return [scoreArr[0],scoreArr[2]]; }
// look at the score index, return the correct order
  else {return [scoreArr[2],scoreArr[0]];}
  }


  // 4 *********************************
  //Functional Addition
  function add(n) {
    return function(num){
      return num + n
    };//declare new fucntion
  }



  // 5 *********************************
  //Scrabblemania
  function wordscore(word) {
    const letterPoints ={"a" : 1, "b" : 3,"c" : 3,"d" : 2, "e" : 1, "f" : 4,"g" : 2,"h" : 4,"i" : 1,"j" : 8,"k" : 5,"l" : 1,"m" : 3,"n" : 1,"o" : 1,"p" : 3,"q" : 10,"r" : 1,"s" : 1,"t" : 1,"u" : 1,"v" : 4, "w" : 4,"x" : 8,"y" : 4,"z" : 10}
    //find total point of word(letter-by-letter)
    //total*length
    //if length 7 add 50
    let total = 0;
    for(let i = 0; i < word.length; i ++){
      total += letterPoints[word.charAt(i)];
      
    }
    total *= word.length;
    if(word.length === 7){
      return total + 50;
    } else{
      return total;
    }
  }



  // 6 *********************************
  //Who is the killer?
  function killer(suspectInfo, dead) {
    //LOOK AT ALL KEYS,
     //IF ONE OF KEY HAS EVERY DEAD ELEMENT RETURN KEY
     for(personSuspect in suspectInfo){
      if( 
        dead.every(person=> suspectInfo[personSuspect].includes(person)) 
      ) //if condition end 
   //if all dead person inside one of suspectPerson return True
       {return personSuspect; }
     }
   }