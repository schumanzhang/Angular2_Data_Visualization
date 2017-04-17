import { TestBed, async } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {

    //make component available, first is async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NavbarComponent ], 
        })
        .compileComponents();  
    }));

    /* then a second synchronous beforeEach
    beforeEach(() => {
        const fixture = TestBed.createComponent(NavbarComponent);
        const comp = fixture.componentInstance;
        // query for the title <h1> by CSS element selector
        //const de = fixture.debugElement.query(By.css('h1'));
        //const el = de.nativeElement;
    });
    */

    describe('checkActiveLink', () => {
        it('it active link is list then set the properties correctly', () => {
            const fixture = TestBed.createComponent(NavbarComponent);
            const comp = fixture.componentInstance;
            comp.checkActiveLink('list');

        });

    });


});