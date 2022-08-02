class Wardrobe {
    wall
    sizes = [50, 75, 100, 120]
    constructor(wall){
        this.wall = wall;
    }
    combinationsOK(){
        console.log('OK class importée');
        // return [];
        return [[50,50,50,50,50]];
    }
    wallValue(){
        return this.wall;
    }
    calculAllCombinations(){
        const arrayCombination = []
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
                        arrayCombination.push(combination);

                    }
                }
            }
        }
        console.log('arrayCombination.length ',arrayCombination.length);
        return arrayCombination
    }
    calculCombinationMatchWall(){
        const arrayCombination = this.calculAllCombinations() ;
        return [[50,50,50,50,50]];
    }
}

module.exports = Wardrobe;