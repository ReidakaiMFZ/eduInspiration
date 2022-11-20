'use client';

export default function browserStore(
    operation: 'remove' | 'set' | 'get',
    address: 'projeto' | 'type' | 'username' | 'uid',
    value?: string
) {
    if (operation === 'remove' || (operation === 'set' && !value)) {
        localStorage.removeItem(address);
    } else if (operation === 'set') {
        localStorage.setItem(address, value ?? '');
    } else if (operation === 'get') {
        return localStorage.getItem(address);
    }
}
