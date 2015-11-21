import {Component, bootstrap, NgFor, NgIf, CORE_DIRECTIVES} from 'angular2/angular2';
import {Hero} from './hero';
import {InnerDirective} from './innerDirective';


// to do : move to separate Class
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is: {{myHero}}</h2>

        <p>Heroes:</p>

        <ul>
            <li *ng-for="#hero of heroes">
                {{ hero.name }}
            </li>
        </ul>

        <p *ng-if="heroes.length > 3">There are many heroes!</p>

        <br><br>
        <inner-dir></inner-dir>
    `,
    directives: [NgFor, NgIf, CORE_DIRECTIVES, InnerDirective]
})
export class AppComponent {

    title = 'Tour of Heroes';

    heroes = [
        new Hero(1, 'Windstorm'),
        new Hero(13, 'Bombasto'),
        new Hero(15, 'Magneta'),
        new Hero(20, 'Tornado')
    ];

    myHero = this.heroes[0].name;
}



bootstrap(AppComponent);
