import { Component, ViewChild } from '@angular/core';
import { CourseCatalogService } from '../shared/services/coursecatalog.service';
import { map } from 'rxjs';
import { CoursesOnCatalog } from './model/CoursesOnCatalog';
import { CarouselComponent } from '../commons/carousel/carousel.component';
import { AuthService } from '../shared/services/auth.service';





@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  

  coursesCatalogFromFire?: CoursesOnCatalog[];
  display = "";
  constructor(private courseCatalogService: CourseCatalogService, private auth: AuthService){

 

  }

  ngOnInit(): void {
    // this.init();
     this.getAllCourses();
  
   }
 
   
 
   getAllCourses(): void {
     this.courseCatalogService.getAll().snapshotChanges().pipe(
       map(changes =>
         changes.map(c =>
           ({ id: c.payload.doc.id, ...c.payload.doc.data() })
         )
       )
     ).subscribe(data => {
       this.coursesCatalogFromFire = data;
     });
     //this.store.dispatch(new FireShowAllAction());
   }

   getnextfromserver() {
    let max: number = 10000;
    return Math.floor(Math.random() * max);
  }

  getCoursebyID(): void {
   this.courseCatalogService.getAll().snapshotChanges().pipe(
     map(changes =>
       changes.map(c =>
         ({ id: c.payload.doc.id, ...c.payload.doc.data() })
       )
     )
   ).subscribe(data => {
     this.coursesCatalogFromFire = data;
   });
   //this.store.dispatch(new FireShowAllAction());
 }

 islogged(): boolean{
  return this.auth.isLoggedIn

 }
   
   init() {
     let da = new Date(1683621000000);
     let dae = new Date(1683653400000);
     let db = new Date(1683964800000);
     let dbe = new Date(1684083600000);
     let dc = new Date(1683885600000);
     let dce = new Date(1683914400000);
     let dd = new Date(1683799200000);
     let dde = new Date(1683826200000);
     let de = new Date(1684479600000); let dee = new Date(1684515600000);
     let df = new Date(1684839600000); let dfe = new Date(1684859400000);
     let dg = new Date(1685176200000); let dge = new Date(1685215800000);
     let dh = new Date(1686040200000); let dhe = new Date(1686067200000);
     let di = new Date(1687075200000); let die = new Date(1687111200000);
     let dl = new Date(1687503600000); let dle = new Date(1687539600000);
     let dm = new Date(1687600800000); let dme = new Date(1687617000000);
     let dn = new Date(1688214600000); let dne = new Date(1688239800000);
     let d_o = new Date(1688549400000); let d_oee = new Date(1688576400000);
     let d_p = new Date(1688549400000); let d_pee = new Date(1688576400000);
 
     
    
     let a: CoursesOnCatalog = { id_corso: this.getnextfromserver(), titolo:"Il mio java" , descrizione:"corso per principianti di java",categoria: "Software Engineering", numPosti: 100, numPostiDisponibili: 0, prezzo: 120.00,inizio:da, fine:dae, lingua:"it", longdescr: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, tversions of Lorem Ipsum" , image: "https://www.begear.it/wp-content/uploads/2015/11/java-logo.jpg",  recensioni:[{id_recensione:this.getnextfromserver(),titolo:"Ottimo corso", testo:"Un corso davvero fantastico. Il docente bravissimo", voto:4, autore:"muros"},{id_recensione:this.getnextfromserver(),titolo:"buon corso", testo:"Buon corso ", voto:7, autore:"fabpao"} ]};
     let b: CoursesOnCatalog = { id_corso: this.getnextfromserver(), titolo:"Programming in cobol" , descrizione: "corso di cobol", categoria: "Software Development", numPosti: 20, numPostiDisponibili: 0, prezzo: 120.00,inizio:db, fine:dbe, lingua:"it", longdescr: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, tversions of Lorem Ipsum" , image: "https://www.lffl.org/wp-content/uploads/2021/03/cobol-1.jpg",  recensioni:[{id_recensione:this.getnextfromserver(),titolo:"Ottimo corso", testo:" buon corso", voto:8, autore:"lucmar"},{id_recensione:this.getnextfromserver(),titolo:"Buon corso", testo:"Il corso buono ", voto:6, autore:"magiar"} ]};    
     let c: CoursesOnCatalog = { id_corso: this.getnextfromserver(), titolo:"Programming in javascript " , descrizione:"corso avanzato di javascript", categoria: "Software Engineering", numPosti: 40, numPostiDisponibili: 30, prezzo: 80.00,inizio:dc, fine:dce, lingua:"en", longdescr: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, tversions of Lorem Ipsum" , image: "https://static.javatpoint.com/images/javascript/javascript_logo.png", recensioni:[{id_recensione:this.getnextfromserver(),titolo:"Pessimo corso", testo:"Un corso davvero brutto.", voto:3,autore:"fradic"}]};
     let d: CoursesOnCatalog = { id_corso: this.getnextfromserver(), titolo:"Windows 11 per tutti" , descrizione:"Corso base di windows 10", categoria: "Software", numPosti: 25, numPostiDisponibili: 10, prezzo: 60.00,inizio:dd, fine:dde, lingua:"en", longdescr: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, tversions of Lorem Ipsum" , image: "https://www.punto-informatico.it/app/uploads/2021/06/Windows-11.jpg", recensioni:[{id_recensione:this.getnextfromserver(),titolo:"Bel corso, Il docente bravo.", testo:"Tutto sommato buono", voto:9, autore:"giudis"},{id_recensione:this.getnextfromserver(),titolo:"buon corso", testo:"Buon corso ", voto:7,autore:"giuber"} ]};
     
     this.courseCatalogService.create(a)
     this.courseCatalogService.create(b)
     this.courseCatalogService.create(c)
     this.courseCatalogService.create(d)
     // a ?: CourseCata = Course.createdummycourse(1, "Il mio java", "corso per principianti di java", "Software Engineering", "22/01/2023", 100, 0, R.drawable.ic_java_ar21, "it", da, dae, 42.353325854573775, 13.342134042031025, 69, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, tversions of Lorem Ipsum");
     // Course b = Course.createdummycourse(3, "Programming in cobol", "corso di cobol", "Software Development", "21/01/2023", 20, 0, R.drawable.b, "it", db, dbe, 45.4017448, 8.0177566, 35, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknnto electg versions of Lorem Ipsum");
     // Course c = Course.createdummycourse(4, "Programming in javascript ", "corso avanzato di javascript", "Software Development", "24/01/2023", 20, 2, R.drawable.b, "eng", dc, dce, 45.8636004, 9.95367839999999, 39, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sie leap iluding versions of Lorem Ipsum");
     // Course d = Course.createdummycourse(2, "Windows 10 per tutti", "Corso base di windows 10", "Software", "21/01/2023", 25, 10, R.drawable.windows_logo___2012_svg, "eng", dd, dde, 46.3618121, 11.2732922, 65, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceldus PageMaker including versions of Lorem Ipsum");
     // Course e = Course.createdummycourse(2, "New economy", "teorie economiche", "Business", "22/01/2023", 20, 18, R.drawable.a, "it", de, dee, 44.4971642, 11.4370366, 45, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ns of Lorem Ipsum");
     // Course f = Course.createdummycourse(3, "Master in BI", "corso di cobol", "Business", "21/02/2023", 60, 40, R.drawable.b, "it", df, dfe, 40.4185467, 17.8209518, 60, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unversions of Lorem Ipsum");
     // Course g = Course.createdummycourse(4, "Another course  ", "", "Business, Finance", "24/01/2023", 50, 50, R.drawable.b, "fr", dg, dge, 38.1618398, 15.7464075, 40, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ang software like Aldus PageMaker including versions of Lorem Ipsum");
     // Course h = Course.createdummycourse(5, "Another course 2", "", "Business", "27/01/2023", 30, 30, R.drawable.b, "fr", dh, dhe, 42.5024013, 14.1675842, 40, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley oremversions of Lorem Ipsum");
     // Course i = Course.createdummycourse(6, "Lezioni di piano ", "lezioni di pianoforte per tutti ", "Music", "22/01/2023", 30, 25, R.drawable.ic_mozart, "esp", di, die, 37.1008848999999, 14.7657782, 40, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tonaker including versions of Lorem Ipsum");
     // Course l = Course.createdummycourse(5, "Diventa allenatore", "guida e schemi di gioco", "Sport outdoor", "31/01/2023", 20, 18, R.drawable.b, "it", dl, dle, 42.3598910999999, 14.1635042, 30, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wt oker including versions of Lorem Ipsum");
     // Course m = Course.createdummycourse(4, "Mozart dalla a lal z ", "lezioni di musica", "Music", "22/01/2023", 20, 20, R.drawable.ic_mozart, "esp", dm, dme, 41.9787742999999, 13.5997669, 50, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 15ersions of Lorem Ipsum");
     // Course n = Course.createdummycourse(1, "Investire in btp ", "corso di base su finanaza e affari", "Finance, Business", "21/01/2023", 15, 15, R.drawable.b, "it", d_p, d_pee, 42.2337910999999, 13.4161245, 49, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinceok. It h etware like Aldus PageMaker including versions of Lorem Ipsum");
     // Course o = Course.createdummycourse(7, "Pallavolo", "", "Sport", "20/01/2023", 20, 20, R.drawable.a, "it", d_o, d_oee, 42.3369711, 13.4681234, 30, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleys of Lorem Ipsum");
     // Course p = Course.createdummycourse(1, "Il mio java", "corso per principianti di java", "Software Engineering", "", 100, 100, R.drawable.ic_java_ar21, "it", dm, dme, 42.353325854573775, 13.342134042031025, 99, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumLorem Ipsum");
     // Course q = Course.createdummycourse(3, "Programming in cobol", "corso di cobol", "Software", "", 20, 20, R.drawable.b, "it", d_p, d_pee, 42.0425872, 13.4111045, 35, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookbutpsuions of Lorem Ipsum");
     // Course r = Course.createdummycourse(3, "English for you", "corso di lingua inglese", "Education", "", 20, 20, R.drawable.ic_united_kingdom, "en", dn, dne, 42.364234739398285, 13.387366815866994, 60, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ware like Aldus PageMaker including versions of Lorem Ipsum");
 
 
   }
 



  }