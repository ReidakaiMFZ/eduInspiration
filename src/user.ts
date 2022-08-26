import { signOut } from 'firebase/auth';
import { Store } from 'pullstate';
import { auth } from './firebaseObjs';

type logged = 'nan' | 'student' | 'enterprise';

interface userInterface {
    username: string;
    type: logged;
}

export const userData = new Store({
    username: 'Anonimo',
    type: 'nan',
} as userInterface);

export const signOutWithState = () => {
    userData.update((s) => {
        s.type = 'nan';
        s.username = 'Anonimo';
    });
    signOut(auth);
};
