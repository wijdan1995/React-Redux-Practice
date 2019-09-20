const initState = {
    posts: [
        { id: 1, title: 'One', body: 'One 1' },
        { id: 2, title: 'Two', body: 'Two 2' },
        { id: 3, title: 'Three', body: 'Three 3' },
    ]
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer