import { Injectable } from '@angular/core';

import { MyCourseDetail } from '../core/mycourses/model/MyCourseDetails';
import { MyCourses } from '../core/mycourses/model/MyCourses';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { CoursesOnCatalog } from '../courses/catalog/model/CoursesOnCatalog';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseCatalogService {
    private dbPath = 'courses';

    courseCollection: AngularFirestoreCollection<CoursesOnCatalog>;
    items: Observable<CoursesOnCatalog[]>;

constructor(private db: AngularFirestore ) {
  
     
    this.courseCollection =   this.db.collection(this.dbPath);
    this.items = this.courseCollection.valueChanges();
  }

  getAll(): AngularFirestoreCollection<CoursesOnCatalog> {
    return this.courseCollection;
  }

 

  create(course: CoursesOnCatalog): any {
  
    return this.courseCollection.add({ ...course });
  }

  update(titolo: string, data: any): Promise<void> {
    return this.courseCollection.doc(titolo).update(data);
  }

  delete(titolo: string): Promise<void> {
    return this.courseCollection.doc(titolo).delete();
  }
}