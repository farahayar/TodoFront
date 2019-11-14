export class User {
    // lezem export !!
   
// koll attribut andou ? optionel w el ? t3aweth les possibilités mta les constructeurs lkooooool
    constructor( private _nom ?:string, 
        private _prenom ?:string,
        private _tel?:string,
        private _email?: string,
        private _motDePass?:string,
        private _etat?: string,
        private _statut?:string) {}


        get nom(){return this._nom;}
        set nom(nom:string){this._nom=nom;}

        
        get prenom(){return this._prenom;}
        set prenom(prenom:string){this._prenom=prenom;}

        
        get tel(){return this._tel;}
        set tel(tel:string){this._tel=tel;}

        
        get email(){return this._email;}
        set email(email:string){this._email=email;}

        
        get pass(){return this._motDePass;}
        set pass(pass:string){this._motDePass=pass;}

        get etat(){return this._etat;}
        set etat(etat:string){this._etat=etat;}

        get statut(){return this._statut;}
        set statut(statut:string){this._statut=statut;}


}