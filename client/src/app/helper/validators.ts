import {FormGroup, FormControl} from '@angular/forms';

export function isMatch(controlName:string,matchingControleName:string){
    return (fg:FormGroup)=>{
        const firstControl = fg.controls[controlName];
        const matchControl = fg.controls[matchingControleName];
        if(matchControl.errors && !matchControl.errors.isMatch){
            //check if there are other errors beside the isMatch validation
            return;
        }
        if(firstControl.value !=matchControl.value){
            matchControl.setErrors({isMatch:true})
        } else{
            matchControl.setErrors(null);
        }
    }
}
export function validateCreditCard(c: FormControl) {
    const VISA_REGEX = /^4[0-9]{12}(?:[0-9]{3})?$/; // Regular Expression 1
    const MASTERCARD_REGEX = /^5[1-5][0-9]{14}$/; // Regular Expression 1
    const AMEX_REGEX = /^3[47][0-9]{13}$/
    return (VISA_REGEX.test(c.value) || MASTERCARD_REGEX.test(c.value) || AMEX_REGEX.test(c.value)) ? null : {
      validateInput: {
        valid: false
      }
    };
  }