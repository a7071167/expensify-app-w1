// HOC

import React from 'react'
import ReactDom from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthrnticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Plaese login to view the detail</p>
            )}  
        </div>
    )
}



const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)


// ReactDom.render(<AdminInfo isAdmin={true} info="this is are the details" />, document.getElementById('app'))
ReactDom.render(<AuthInfo isAuthrnticated={true} info="this is are the details" />, document.getElementById('app'))