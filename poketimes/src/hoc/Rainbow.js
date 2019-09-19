import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colors = ['red', 'pink', 'orange', 'blue', 'gray', 'brown', 'lime', 'teal', 'purple']
    const randomColor = colors[Math.floor(Math.random() * 8)]
    const className = randomColor + '-text'
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow
