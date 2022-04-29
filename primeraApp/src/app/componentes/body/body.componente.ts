import {Component} from '@angular/core'


@Component({

selector:'app-body',
templateUrl:'./body.component.html'

})

export class BodyComponente{

personaje:any={

        frase:'Un gran poder, una gran responsavilidad.',
        autor:'Ben Parker',

}
mostrar=true;

personajes:string[]=['spider','venon','octupos','Mery Jen','Tia May'];
}