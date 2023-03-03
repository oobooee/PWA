import { Reviews } from "./Reviews";


export interface CoursesOnCatalog{
    
    id_corso?: number;
    titolo?: string;
    numPosti?: number;
    numPostiDisponibili?: number
    previstoEsame?: string
    prezzo?: number
    inizio?: Date
    fine?: Date
    crediti?: number
    ore?: number
    descrizione?: string
    lingua?: string
    categoria?: string
    image?: string
    longdescr?: string
    recensioni?: Reviews[];
   
 }
 