import {toast} from "react-toastify";

const DEFAULT_OPTIONS = {
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
}

export const notify = (message, type) => {
    toast(
        <div>
            <p>{message}</p>
        </div>,
        {...DEFAULT_OPTIONS, type: type}
    )
};


export default notify;