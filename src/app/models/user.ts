export class User {
    constructor(
        public id: number,
        public email: string,
       /*  public apellidos: string, */
        public token: string,
        public rol: number
    ) { }
}
