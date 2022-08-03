class Wardrobe {
    wall
    sizes = [50, 75, 100, 120]
    allCombinations = [];
    allCombinationsSumMatchWall = [];
    constructor(wall){
        this.wall = wall;
    }
    combinationsOK(){
        this.calculAllCombinations();
        this.calculCombinationSumMatchWall();
        return this.allCombinationsSumMatchWall;
    }
    wallValue(){
        return this.wall;
    }
    calculAllCombinations(){
        for (let a=0;a<=5;a++){
            for (let b=0;b<=5;b++){
                for (let c=0;c<=5;c++){
                    for (let d=0;d<=5;d++){
                        const combination = [];
                        for (let aa=a;aa>0;aa--){
                            combination.push(this.sizes[0]);
                        }
                        for (let bb=b;bb>0;bb--){
                            combination.push(this.sizes[1]);
                        }
                        for (let cc=c;cc>0;cc--){
                            combination.push(this.sizes[2]);
                        }
                        for (let dd=d;dd>0;dd--){
                            combination.push(this.sizes[3]);
                        }
                        this.allCombinations.push(combination);

                    }
                }
            }
        }
        return this.allCombinations
    }
    calculCombinationSumMatchWall(){
        this.allCombinationsSumMatchWall = this.allCombinations.filter(item =>{
                return this.sumArray(item) === this.wall
            })
        return this.allCombinationsSumMatchWall;
    }
    sumArray(array) {
        let sum = 0;
        array.forEach(item => {
          sum += item;
        });    
        return sum;
      }
}

module.exports = Wardrobe;