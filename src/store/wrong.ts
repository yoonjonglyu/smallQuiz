import { atom } from 'recoil';

export const wrongList = atom<Array<any>>({
    key: 'wrongsList',
    default: []
});