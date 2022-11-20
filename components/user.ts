import browserStore from '@/components/browserStorage';
('use client');
import { Store } from 'pullstate';
import { signOut } from 'firebase/auth';
import { fireStore } from './firebaseObjs';
import { auth } from './firebaseObjs';
import {
    updateDoc,
    collection,
    doc,
    query,
    where,
    getDoc,
    getDocs,
} from 'firebase/firestore';

export type logged = 'nan' | 'student' | 'enterprise';

interface userInterface {
    username: string;
    type: logged;
    projeto: string | null;
    uid: string | null;
}

const userData = new Store({
    username: 'Anonimo',
    type: 'nan',
    projeto: null,
    uid: null,
} as userInterface);

const updateUsername = (username: string) => {
    userData.update((state) => {
        state.username = username;
    });
};
const useUserData = () => userData.useState((s) => s);
const updateTypeUser = (type: logged) => {
    userData.update((s) => {
        s.type = type;
    });
    browserStore('set', 'type', type);
};
const updateProjeto = async (projeto: string, uid?: string) => {
    if (!uid) {
        throw new Error('uid not provided');
    }
    if (projeto === '') {
        userData.update((s) => {
            s.projeto = null;
        });
        browserStore('remove', 'projeto');
        await getDocs(
            query(collection(fireStore, 'students'), where('uid', '==', uid))
        ).then((q) => {
            q.forEach((doc) => {
                updateDoc(doc.ref, { projeto: null });
            });
        });
        return;
    }
    userData.update((s) => {
        s.projeto = projeto;
    });
    browserStore('set', 'projeto', projeto);

    await getDocs(
        query(collection(fireStore, 'students'), where('uid', '==', uid))
    ).then((q) => {
        q.forEach((doc) => {
            updateDoc(doc.ref, { projeto: projeto });
        });
    });
};
const signOutWithState = () => {
    userData.update((s) => {
        s.type = 'nan';
        s.username = 'Anonimo';
    });
    browserStore('remove', 'type');
    signOut(auth);
};
const updateUid = (uid: string) => {
    userData.update((s) => {
        s.uid = uid;
    });
};
export class UserData {
    static updateUsername = updateUsername;
    static useUserData = useUserData;
    static updateTypeUser = updateTypeUser;
    static signOutWithState = signOutWithState;
    static updateUid = updateUid;
    static updateProjeto = updateProjeto;
}
