import { memo } from "react";
import LoadingIcon from "./images/loading.png";
const Loading = ({ lessWidth }) => {
    return (
        <div className={lessWidth ? "order__flex-loading" : "loadingFrame--flex"}>
            <img src={LoadingIcon} alt="loading" className="loadingFrame--try" />
        </div>
    )
}
export default memo(Loading)
