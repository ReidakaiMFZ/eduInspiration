import { Store } from 'pullstate';

type logged = 'nan' | 'student' | 'company';

interface userInterface {
    username: string;
    type: logged;
}

export const userData = new Store({
    username: 'Anonimo',
    type: 'nan',
} as userInterface);
