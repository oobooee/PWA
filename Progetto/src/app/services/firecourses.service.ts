import { Injectable } from '@angular/core';

import { MyCourseDetail } from '../core/mycourses/model/MyCourseDetails';
import { MyCourses } from '../core/mycourses/model/MyCourses';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireCourseServices {
    private dbPath = 'courses';

    courseCollection: AngularFirestoreCollection<MyCourseDetail>;

constructor(private db: AngularFirestore ) {
  
   
    this.courseCollection =   this.db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<MyCourseDetail> {
    return this.courseCollection;
  }

  create(course: MyCourseDetail): any {
  
    return this.courseCollection.add({ ...course });
  }

  update(titolo: string, data: any): Promise<void> {
    return this.courseCollection.doc(titolo).update(data);
  }

  delete(titolo: string): Promise<void> {
    return this.courseCollection.doc(titolo).delete();
  }
}