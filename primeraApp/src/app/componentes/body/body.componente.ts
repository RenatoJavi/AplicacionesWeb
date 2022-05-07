import {Component} from '@angular/core'


@Component({

selector:'app-body',
templateUrl:'./body.componente.html'

})

export class BodyComponente{

personaje:any={

        frase:'Un gran poder, una gran responsabilidad.',
        autor:'Ben Parker',
        frase2:'A luchar por la justicia',
        autor2:'Superman'

}
mostrar=true;

personajes:string[]=['spider','venon','octupos','Mery Jen','Tia May'];
villanos:String[]=['octupus','dr frio','pinguino','duende verde','arena'];
}