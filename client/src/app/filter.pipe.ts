import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: [], searchStr:string): any[] {
   if(!products){
      return [];
   }
   if(!searchStr){
     return products;
   }
   searchStr = searchStr.toLocaleLowerCase();
   return products.filter((item:any)=>{
     return item.name.toLocaleLowerCase().includes(searchStr)
   })
  }

}
