class numGen{
  generateNumber(){
    let num = Math.round(Math.random()*100);
    return num;
  }
}
module.exports = numGen;