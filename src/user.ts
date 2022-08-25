import { Store } from 'pullstate';

type logged = 'nan' | 'student' | 'company';

interface userInterface {
    username: string;
    type: logged;
}

export const user = new Store({
    username: 'anon',
    type: 'nan',
} as userInterface);
