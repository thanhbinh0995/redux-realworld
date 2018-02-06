export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return ('Bearer ' + user.token);
    } else {
        return {};
    }
}