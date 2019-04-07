export const UPDATE_USER = 'users:UpdateUsers';

export function updateUser (newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        } 
    }
}