import { Component, Input, OnInit } from '@angular/core';
import { RichPerson } from '../../../model/rich.person';

@Component({
    selector: 'card',
    templateUrl: './card.component.html'
})
export class CardComponent {

    @Input() richObject: RichPerson;

    
}