import { atom } from 'recoil';

export const WrongList = atom<Array<any>>({
    key: 'wrongsList',
    default: []
});