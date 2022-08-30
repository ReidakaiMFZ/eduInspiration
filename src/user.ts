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
    localStorage.setItem('type', type);
};

const signOutWithState = () => {
    userData.update((s) => {
        s.type = 'nan';
        s.username = 'Anonimo';
    });
    localStorage.removeItem('type');
    signOut(auth);
};

export class UserData {
    static updateUsername = updateUsername;
    static useUserData = useUserData;
    static updateTypeUser = updateTypeUser;
    static signOutWithState = signOutWithState;
}
