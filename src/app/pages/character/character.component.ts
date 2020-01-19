import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { ToonService } from 'src/app/toon.service';
import { CharacterModel } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})

export class CharacterComponent implements OnInit {

  character = new CharacterModel();
  constructor(private route: ActivatedRoute, private api: ToonService, private router: Router) { }

  getcharacterDetails(id) {
    this.api.getCharacter(id)
      .subscribe(data => {
        this.character = data;
        console.log(this.character);
      });
  }

  ngOnInit() {
    this.getcharacterDetails(this.route.snapshot.params['id']);
  }
 
}
