import { memo } from "react";
import LoadingIcon from "./images/loading.png";
const Loading = () => {
    return (
        <div className="loadingFrame--flex">
            <img src={LoadingIcon} alt="loading" className="loadingFrame--try" />
        </div>
    )
}
export default memo(Loading)
