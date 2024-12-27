import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateAcountPage() {
    return (
        <div className='w-full flex justify-center items-center text-white dark:bg-[#3b3b3b]'>
            <div className='w-5/6'>

                <div className='mt-6'>
                    <h1 className='w-full text-center text-2xl'>
                        Solo necesitamos un par de datos maesto/a Pokemon
                    </h1>

                    <div className='text-xs mt-2 w-full flex justify-center'>
                        <h1 className=''>
                            ¿Ya tienes una cuenta?
                        </h1>
                        <Link to={'/login '}>
                            <p className='ml-2 font-extrabold underline'>
                                Ingresa
                            </p>
                        </Link>

                    </div>
                </div>


                <div className='w-full mt-4 lg:flex lg:items-center lg:justify-center'>
                    <form className='w-full max-w-md flex flex-col items-center gap-y-4' action="">

                        <label className='w-full' htmlFor="">
                            <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Nombre(s)' type="text" />
                        </label>

                        <label className='w-full' htmlFor="">
                            <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Apellido(s)' type="text" />
                        </label>

                        <label className='w-full' htmlFor="fecha-nacimiento">
                            <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Fecha de nacimiento' type="date" />
                        </label>    

                        <label className='w-full' htmlFor="">
                            <select className='text-black h-8 w-full rounded-lg pl-2 pr-2' name="" id="genero">
                                <option className='text-gray-500' value="">Género</option>
                                <option value="">Hombre</option>
                                <option value="">Mujer</option>
                                <option value="">Otro</option>
                                <option value="">Prefiero no decirlo</option>
                            </select>
                        </label>

                        <label className='w-full' htmlFor="">
                            <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Correo electronico' type="text" />
                        </label>

                        <label className='w-full' htmlFor="">
                            <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Confirmar correo electronico' type="text" />
                        </label>

                        <label className='w-full' htmlFor="">
                            <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Numero de telefono' type="text" />
                        </label>

                        <label className='w-full' htmlFor="">
                            <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Usuario' type="text" />
                        </label>

                        <label className='w-full' htmlFor="">
                            <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Contraseña' type="password" />
                        </label>

                        <label className='w-full' htmlFor="">
                            <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Repetir contraseña' type="password" />
                        </label>

                        <button className='font-semibold w-36 h-10 mr-4 rounded-xl flex justify-center items-center bg-[#3b5ca8] lg:w-36 lg:h-14'>
                            <p className='text-[#ffcb05] lg:text-'>Resgistrarse</p>
                        </button>

                    </form>
                </div>

                <div className='w-full mt-4 mb-10 flex flex-col items-center'>
                    <h1 className='w-full text-center'>
                        O registrate con alguna de estas redes
                    </h1>

                    <div className='flex m-4 space-x-4'>
                        <figure className='border-2 border-white w-10 h-10 flex items-center justify-center rounded-full'>
                            <svg width="25px" height="25px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>google</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M24.7,20.5v7.6H35.6a10.9,10.9,0,0,1-10.9,8,12.1,12.1,0,1,1,7.9-21.3l5.6-5.6A20,20,0,1,0,24.7,44c16.8,0,20.5-15.7,18.9-23.5Z"></path> </g> </g> </g></svg>
                        </figure>

                        <figure className='border-2 border-white w-10 h-10 flex items-center justify-center rounded-full'>
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" sstrokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#ffffff"></path> </g></svg>
                        </figure>

                    </div>

                </div>



            </div>
        </div>
    )
}
