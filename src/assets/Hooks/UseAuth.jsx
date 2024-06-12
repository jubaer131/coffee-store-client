import React, { useContext } from 'react';
import { authContest } from '../provider/Authprovider';

const UseAuth = () => {

    const auth = useContext(authContest)

    return auth
};

export default UseAuth;