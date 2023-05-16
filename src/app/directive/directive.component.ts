import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  

  title: string = 'Bonjour!';

  isAdmin: boolean = false;

  iAmAdmin(){
    if (this.isAdmin){
    return this.isAdmin = false;
  }
  else {
   return this.isAdmin = true;
  }
 }
 };
 
 
 