export function shuffle(array: any[]): any[] {
    if (array.length > 2) {
      let currentIndex = array.length;
      let temporaryValue;
      let randomIndex;
  
      while (0 !== currentIndex) {
  
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    }
  
    return array;
  }