import {Component, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is: {{myHero}}</h2>
        <br><br>

        Testing!
    `
})
export class AppComponent {
    title : string;
    myHero : string;
    constructor() {
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstorm';
    }

}

bootstrap(AppComponent);
