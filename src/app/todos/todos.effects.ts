import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class TodosEffects {
  constructor(private firestore: AngularFirestore) {}
}
