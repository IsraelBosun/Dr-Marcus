import React from 'react'
import about from "../../assets/About.jpeg"

const Specialty = () => {
  return (
    <section className='section flex flex-col justify-between gap-[5rem] '>
        <div className='flex flex-col md:flex-row flex-start gap-9 justify-between '>
        <div className='flex-1'>
            <img src={about} alt="" className='shadowing'/>
        </div>
        <div className='flex gap-2 flex-col flex-1 '>
            <p className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 '>Combat hypertension with my expertise</p>
            <p className='text- font-bold text-green-700'>I have decode its answers and it lies in the palm of my hands, follow me</p>
            <p  className='text-sm'>As an expert in the field of hypertension management, I am dismayed by the preventable deaths caused by this disease. With my wealth of experience, I know that ignorance often plays a role. Let me enlighten you and help you take control of your health.</p>
            <div className='text-white flex items-center gap-12  text-sm '>
                <button className='bg-Blue shadowing px-3 py-2 '>Consult Me</button>
                <button className='bg-Blue shadowing px-3 py-2 '>Get Books </button>
            </div>
        </div>
        </div>

        
<div className=' flex flex-col p-3 gap-3 capitalize text-white rounded-xl bg-gradient-to-r from-blue-500 to-red-500'>
  <p className=''>With my over 20 years of experience, I've become a renowned entrepreneur, author. </p>
  <p className='font-bold text-lg'>I have written over 20 best-selling books, helping readers secure funding and navigate even the toughest business environments. Invest in your success today  </p>
  <div className='flex items-center justify-center'>
    <button className='bg-black py-4 px-7 rounded-3xl w-auto mt-3 text-lg font-bold capitalize hover:text-black hover:border-transparent  hover:bg-white'> get my books</button>
  </div>
</div>
    </section>
  )
}

export default Specialty


// import React from 'react'
// import about from "../../assets/About.jpeg"

// const Specialty = () => {
//   return (
//     <section className='section flex flex-col md:flex-row flex-start gap-9 justify-between '>
//         <div className='flex flex-col md:flex-row flex-start gap-9 justify-between '>
//         <div className='flex-1'>
//             <img src={about} alt="" className='shadowing'/>
//         </div>
//         <div className='flex gap-2 flex-col flex-1 '>
//             <p className='text-3xl font-bold  '>Hypertension is the problem of old age</p>
//             <p className='text-xl font-bold text-green-700'>I have decode its answers and it lies in the palm of my hands, follow me</p>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vero ad, ipsum id dolorem in unde. Asperiores at ratione totam pariatur impedit quibusdam animi quidem?</p>
//             <div className='text-white flex items-center gap-12  text-sm '>
//                 <button className='bg-Blue shadowing px-3 py-2 '>Consult Me</button>
//                 <button className='bg-Blue shadowing px-3 py-2 '>Get Books </button>
//             </div>
//         </div>
//         </div>

//         <div className='flex flex-col p-3 gap-1 capitalize text-white rounded-xl bg-gradient-to-r from-blue-500 to-red-500'>
//             <p className=' '>As an enterpreneur of oveer 20 years of experience</p>
//             <p className='font-bold text-lg'>I have written over 20 books on entreperneurship ranging from getting funded, navigating bad business enviroments</p>
//             <div className='flex items-center justify-center'>
//             <button className='bg-black py-4 px-7  rounded-3xl w-auto mt-3 text-lg '>Get books</button>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Specialty