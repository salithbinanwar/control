import { Button } from "../components"

const Register = () => {
return (
<div className="registerForm">
    <h1 className="max-w-sm mx-auto text-4xl mb-5">Admin Sign up</h1>
    <form className="max-w-sm mx-auto">
        <div className="mb-5">
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0  peer"
                    placeholder=" " required />
                <label
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-gray-400 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                    address</label>
            </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="floating_password" id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required />
            <label
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-gray-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <Button label="sign in" />
    </form>
</div>
)}

export default Register