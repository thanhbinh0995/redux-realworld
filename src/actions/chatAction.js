import {chatConstants} from "../constants";
import {userService} from "../services";

export const chatAction = {
    getGroupsByUser,
    getMessagesByGroup
};

export function getGroupsByUser() {
    return dispatch => {
        userService.getGroupsByUser()
            .then(request => {
                console.log(request);
                dispatch(success(request.data));
            })
            .catch(error => {
                dispatch(failure(error));
            });
    };

    function success(groups) {
        return {type: chatConstants.GET_GROUP_BY_USER_SUCCESS, groups}
    }

    function failure(error) {
        return {type: chatConstants.GET_GROUP_BY_USER_FAILURE, error}
    }
}

export function getMessagesByGroup(groupId) {
    return dispatch => {
        userService.getMessagesByGroup(groupId)
            .then(request => {
                dispatch(success(request.data));
            })
            .catch(error => {
                dispatch(failure(error));
            });
    };

    function success(message) {
        return {type: chatConstants.GET_MESSAGE_BY_GROUP_SUCCESS, message}
    }

    function failure(error) {
        return {type: chatConstants.GET_MESSAGE_BY_GROUP_FAILURE, error}
    }
}