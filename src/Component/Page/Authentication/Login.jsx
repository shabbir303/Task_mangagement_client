import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const { logIn } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        console.log(data);
        logIn(data.email, data.password)
            .then(res => {
                console.log(res.user);
                navigate('/');
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message);
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-no-repeat bg-cover bg-center relative"><div className="absolute  to-green-400 opacity-75 inset-0 z-0"></div>
                    <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                            <div className="self-start hidden lg:flex flex-col  text-white">
                                <img src="" className="mb-3" />
                                <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back in Task Management </h1>
                                <p className="pr-3">“To remember our login details, we use the Remember Password Option displayed in Official site or work in an email account or any social / login to your sites.

                                    Don't forget to turn it off. Otherwise It also leaks data risk of being stolen.”</p>
                            </div>
                        </div>
                        <div className="flex justify-center self-center  z-10">
                            <div className="p-12 bg-white bg-opacity-20 mx-auto rounded-2xl w-100 ">
                                <div className="mb-4">
                                    <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                                    <p className="text-gray-400">Please sign in to your account.</p>
                                </div>
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-cyan-500 tracking-wide">Email</label>
                                        <input className="bg-sky-950 w-full text-gray-500 text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type="text"
                                            {...register('email', { required: true })}
                                            placeholder="" />
                                        {errors.email?.type === 'required' && <span className='text-lime-500'>Email field is required</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="mb-5 text-sm font-medium text-cyan-500 tracking-wide">
                                            Password
                                        </label>
                                        <input className="bg-sky-950 w-full text-gray-500  content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type="text"
                                            {...register('password', { required: true })}
                                            placeholder="" />
                                        {errors.password?.type === 'required' && <span className='text-lime-500'>Email field is required</span>}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                            <label for="remember_me" className="ml-2 block text-sm text-gray-800">
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="text-sm">
                                            <a href="#" className="text-cyan-500 hover:text-cyan-600">
                                                Forgot your password?
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex justify-center bg-cyan-500  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                            Sign in
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-5 text-center text-gray-400 text-xs">
                                    <span>
                                        Copyright © 2023-2024
                                        <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Ajimon" className="text-green hover:text-green-500 ">TASK MANAGEMENT</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Login;