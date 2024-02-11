import React from "react"

function Header(){

    const projects = ['Password Generator', 'Currency Convertor']

    return(
        <>
        <div className='w-full h-12 bg-transparent rounded-3xl flex justify-around'>

            <div className='bg-black text-center rounded-3xl flex items-center'>
                <h1 className='text-white p-4 font-extrabold'>My Portfolio</h1>
            </div>

            <div className='bg-black text-center rounded-3xl flex items-center'>
                <ul className='flex p-4'>
                    {projects.map(project =>
                        <li className='text-white p-4 font-extrabold'>{project}</li>
                    )}
                </ul>
            </div>

            <div className='bg-black text-center rounded-3xl flex items-center'>
                <h1 className='text-white p-4 font-extrabold'>About Me</h1>
            </div>

        </div>
        </>
    )
}

export default Header;