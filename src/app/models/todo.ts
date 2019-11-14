export class Todo {
    public title?: string;
    public description?: string;
    public dateAjout?: Date;
    public dateFin?: Date;
    public idUser: string;

    constructor(  titre ?:string, 
        description ?:string,
       dateAjout?:Date,
       dateFin?: Date,
        idUser?:string) {
            this.title = titre;
            this.description = description;
        }

        
}