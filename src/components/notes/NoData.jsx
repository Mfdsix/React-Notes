import React from "react"

import '../../styles/error.css'

function NoData({
    message = 'No Data'
}) {

    return <div className="no__data">
        <img src="https://cdn-icons-png.flaticon.com/512/2599/2599636.png" alt="No Dat" />
        <div>{message}</div>
    </div>
}

export default NoData