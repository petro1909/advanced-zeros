module.exports = function getZerosCount(number, base) {
  // your implementation
    var k=1;
    var sum=0;
    var arr=[];
    var i=2;
    while (i<=base){
     if (base%i==0){
     arr.push([i])
     base=base/i;}
     else {
       i++};};
     
        
    
    var x=Math.max(...arr);
    var y=arr.filter(item => item ==x).length
    var a=arr.filter(item => item ==2).length
    
    while ((Math.floor(number/(Math.pow(x,k))))>=1) {
      sum+=Math.floor(number/(Math.pow(x,k)));
      k++;
 
}; 
     return(Math.floor((sum/y)));
   
};

