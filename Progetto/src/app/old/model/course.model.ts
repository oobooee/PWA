export interface Course{
   id_corso?: number | null | undefined;
   titolo?: string;
   numPosti?: number | null | undefined;
   numPostiDisponibili?: number | null | undefined;
   previstoEsame?: string | null | undefined;
   prezzo:number | null | undefined;
   inizio:Date | null | undefined;
   fine:Date | null | undefined;
   crediti:number | null | undefined;
   ore:number | null | undefined;
   descrizione:string | null | undefined;
   lingua:string | null | undefined;
   categoria:string | null | undefined;

}
