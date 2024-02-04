import { FC } from "react";

const Error: FC<IError> = ({ message }) => {
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}

export default Error;
