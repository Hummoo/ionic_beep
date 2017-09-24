import { User } from '../../models/user/user';

const userList: User[] = [
    {
        firstName: 'Paul',
        lastName: 'Halliday',
        avatar: 'assets/img/logo.jpg',
        email: 'paul@paual.com'
    },
    {
        firstName: 'Moo',
        lastName: 'Oood',
        avatar: 'assets/img/logo.jpg',
        email: 'moo@moo.com'
    }
];

export const USER_LIST = userList;