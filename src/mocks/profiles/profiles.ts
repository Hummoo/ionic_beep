import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
    {
        firstName: 'Paul',
        lastName: 'Halliday',
        avatar: 'assets/img/avatar.png',
        email: 'paul@paual.com',
        dateOfBirth: new Date()
    },
    {
        firstName: 'Moo',
        lastName: 'Oood',
        avatar: 'assets/img/avatar.png',
        email: 'moo@moo.com',
        dateOfBirth: new Date()
    }
];

export const USER_LIST = userList;