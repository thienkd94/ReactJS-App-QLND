import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import UserListPage from './pages/UserListPage/UserListPage';
import UserActionPage from './pages/UserActionPage/UserActionPage';
import UserDetailPage from './pages/UserDetailPage/UserDetailPage';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/user-list',
        exact: false,
        main: () => <UserListPage />
    },
    {
        path: '/user/add',
        exact: false,
        main: ({ history }) => <UserActionPage history={history} />
    },
    {
        path: '/user/:id/edit',
        exact: false,
        main: ({match, history}) => <UserActionPage match={match} history={history} />
    },
    {
        path: '/user/:id/name=:name',
        exact: false,
        main: ({match}) => <UserDetailPage match={match} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
];

export default routes;