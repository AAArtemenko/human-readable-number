module.exports = function toReadable (number) {
  const units = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const dec = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const ten = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let length = number.toString().length;
  switch (length) {
    case 1: 
        return units[number];
        break;  
    case 2:
        let i_d = +(number.toString().split('').pop());
        let j_d = +(number.toString().split('').shift());
        if (number >= 11 && number <= 19) {            
            return dec[i_d-1];
        }
        else if (number % 10 == 0) {            
            return ten[j_d-1];
        }
        else {
            return `${ten[j_d-1]} ${units[i_d]}`;
        }
        break;
    case 3:
        let i_h = +(number.toString().split('').shift());
        let k_h = +(number.toString().split('')[1]); 
        let j_h = +(number.toString().split('').pop());
        let dec_h = +(k_h.toString() + j_h.toString());
        if (number % 100 == 0) {
            return `${units[i_h]} hundred`;
        } 
        else if (number % 10 == 0){
            return `${units[i_h]} hundred ${ten[k_h-1]}`;
        }
        else if (dec_h >= 11 && dec_h <= 19) {
            return `${units[i_h]} hundred ${dec[j_h-1]}`;
        }
        else if (k_h == 0) {
            return `${units[i_h]} hundred ${units[j_h]}`
        }
        else {
            return `${units[i_h]} hundred ${ten[k_h-1]} ${units[j_h]}`
        }        
        break;
    default: 
        return NaN;
        break;
  }
}