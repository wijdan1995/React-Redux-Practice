const initState = {
    posts: [
        { id: '1', title: 'One', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti tempore vitae totam, voluptatum dolor ab iste dolorem, in sapiente possimus eveniet numquam? Possimus quaerat id, reiciendis asperiores nulla eum.' },
        { id: '2', title: 'Two', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti tempore vitae totam, voluptatum dolor ab iste dolorem, in sapiente possimus eveniet numquam? Possimus quaerat id, reiciendis asperiores nulla eum.' },
        { id: '3', title: 'Three', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti tempore vitae totam, voluptatum dolor ab iste dolorem, in sapiente possimus eveniet numquam? Possimus quaerat id, reiciendis asperiores nulla eum.' },
    ]
}

const rootReducer = (state = initState, action) => {
    return state
}

export default rootReducer