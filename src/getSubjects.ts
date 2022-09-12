import { fireStore } from './firebaseObjs';
import { collection, query, getDocs, getDoc, doc } from 'firebase/firestore';

export async function getSubjects(filter: string) {
    if (filter === "all"){
        const querySubjects = query(collection(fireStore, 'subjects'));
        const querySnapshot = await getDocs(querySubjects);
    
        const subjects = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
        return subjects;
    }
    else{
        const querySubjects = doc(fireStore, 'subjects',  filter);
        const querySnapshot = await getDoc(querySubjects);

        return querySnapshot.data();
        
    }
}