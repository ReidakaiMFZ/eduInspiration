import { Store } from 'pullstate';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseObjs';

export type logged = 'nan' | 'student' | 'enterprise';

interface userInterface {
    username: string;
    type: logged;
}

const userData = new Store({
    username: 'Anonimo',
    type: 'nan',
} as userInterface);

export const updateUsername = (username: string) => {
    userData.update((state) => {
        state.username = username;
    });
};
export const useUserData = userData.useState;
export const updateTypeUser = (type: logged) => {
    userData.update((s) => {
        s.type = type;
    });
    localStorage.setItem('type', type);
};

export const signOutWithState = () => {
    userData.update((s) => {
        s.type = 'nan';
        s.username = 'Anonimo';
    });
    localStorage.removeItem('type');
    signOut(auth);
};
