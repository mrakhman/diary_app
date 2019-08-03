export const login = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
            .then(() => {
                dispatch({type: 'LOGIN_SUCCESS'})
            })
            .catch((err) => {
                dispatch({type: 'LOGIN_ERROR', err})
            })
    }
};

export const logout = () => {
    return (dispatch, setState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
            .then(() => {
                dispatch({type: 'LOGOUT_SUCCESS'})
            })
    }
};

export const register = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
            .then((response) => {
                return firestore.collection('users').doc(response.user.uid).set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName
                })
            })
            .then(() => {
                dispatch({type: 'REGISTER_SUCCESS'})
            })
            .catch((err) => {
                dispatch({type: 'REGISTER_ERROR', err})
            })
    }
};