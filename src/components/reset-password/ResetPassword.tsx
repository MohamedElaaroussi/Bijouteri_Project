import Link from "next/link"
import { Dispatch, SetStateAction, useRef } from "react"

const ResetPassword = ({ setShowResetPasswordInput }: { setShowResetPasswordInput: Dispatch<SetStateAction<boolean>> }) => {

    const emailRef = useRef<HTMLInputElement | null>(null);
    const sendEmail = () => {

        // TODO: check if the email valid then send
        setShowResetPasswordInput(prev => false)
    }

    return (
        <div>
            <div className="flex gap-5 flex-col mt-10 items-center">
                <p className="text-sm text-neutral-700">Taper votre email pour reçevoir un nouveau mot de passe</p>
                <input ref={emailRef} type="email" placeholder="email" className="text-neutral-600 border-none outline-none p-3 placeholder:text-xs" />
                <button onClick={sendEmail} className="p-3 hover:bg-[color:var(--softGoldColor)] bg-[color:var(--goldColor)] text-sm text-white w-max rounded-[10px]">
                    Submit
                </button>
            </div>
            <p className="text-center mt-10" onClick={() => setShowResetPasswordInput(prev => false)}>
                <Link
                    href=""
                    className="hover:text-[color:var(--goldColor)] text-xs text-neutral-500">
                    Go to login page ?
                </Link>
            </p>
        </div>
    )
}

export default ResetPassword