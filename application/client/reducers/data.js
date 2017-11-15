module.exports = (state = {}, action) => {
    if (action.type === 'DATA') {
        return Object.assign(state, {
            stuff: 'huh?',
        });
    }
    return state;
};
