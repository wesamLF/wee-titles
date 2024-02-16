
const ErrorMessage = ({ message }: { message?: string }) => {
    return (
        <div>
            <div className="border  border-red-400 rounded bg-red-100 px-4 py-3 text-red-700 my-10 mx-5 md:my-28 md:mx-5">
                {message ? <p>{message}</p> : <p>Sorry something went wrong. Please try again.</p>}

            </div>
        </div>
    )
}

export default ErrorMessage