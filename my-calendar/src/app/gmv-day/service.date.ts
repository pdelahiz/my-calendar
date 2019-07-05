import {Injectable} from '@angular/core'

@Injectable()
export default class ServiceDate{
       date:Date
      
      next(){
        //TODO:
        return this._calculateDays;
      }

      previous(){
        //TODO:
        return this._calculateDays;
      }

      _calculateDays(){
        //TODO:
        return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
      }
}
