import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

const Login = () => {
   const navigate = useNavigate()

  return (
    <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
            <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
            >
            <div
                className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
                <img
                src="images/cadt-logo.png"
                className="w-full"
                alt="Sample image"
                />
            </div>
            
            <Card maxWidth="800px">
                    <h5 className="text-xl font-medium text-gray-900 text-dark">Sign in to our platform</h5>
                    <button type="button" className="my-5 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#3b5998]/55 mr-2 mb-2">
                        <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                        Sign in with Facebook
                    </button>
                    <button type="button" className="my-5 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                    </button>
                    <button onClick={() => navigate('/chats')} type="submit" className="my-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline text-blue-500">Create account</a>
                    </div>
            </Card>

            </div>
        </div>
        </section>
  )
}

export default Login