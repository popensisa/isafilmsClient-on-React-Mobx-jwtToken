import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Context } from ".."
import AccountWrapper from "../components/account/AccountWrapper"
import { ShowCom } from "../components/comments/ShowCom"
import { REACT_APP_API_URL } from "../env"

const Account = observer(() => {
    const {account} = useContext(Context)
    return (
        <div className="acc-flex">
            <div className="dark-mode">
                <AccountWrapper account={account}/>
            </div>
        </div>
    )
})
export {Account}