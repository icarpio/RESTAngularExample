import { Component, OnInit } from '@angular/core';
import { ToonService } from '../../toon.service';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters;
  loading = false;
  constructor(private _charService:ToonService,private router:Router) { }

  ngOnInit() {
    this.loading = true;

    this._charService.getCustomersList().subscribe((data)=>{
      console.log(data);
      this.characters = data;
      this.loading = false;
      console.log(this.characters[1]);
    });
  
    
}

}

