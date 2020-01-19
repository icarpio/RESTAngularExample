import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, delay} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';
import { CharacterModel } from './models/character.model';


@Injectable({
  providedIn: 'root'
})
export class ToonService {

  private urlCharacters = "https://rickandmortyapi.com/api/character";


  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',

  });



  constructor(private _http: HttpClient) { }



  getCustomersList() {
    return this._http.get(`${this.urlCharacters}/`).pipe(map(this.createArray), delay(3000));
    
  }

  createArray(charObj:object){

    const characters: CharacterModel = charObj['results'];

    if(charObj === null) {return [];}

    return characters;
    
  }
  getCharacter(id: number): Observable<CharacterModel> {
    const url = `${this.urlCharacters}/${id}`;
    return this._http.get<CharacterModel>(url).pipe();
  }
}
