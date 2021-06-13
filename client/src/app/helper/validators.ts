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