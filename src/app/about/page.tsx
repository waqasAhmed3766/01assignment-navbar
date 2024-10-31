import Image from "next/image"

 async function About() {
  await new Promise((resolve) => setTimeout(resolve,3000))

  return (
    <div className='bg-red-200 h-[400px] w-full'>
    <h1 className='flex justify-center items-center text-8xl font-bold '>
          About Page
    </h1>
    <div className='text-lg font-semibold pt-10 pl-5'>
       <h1>
        Welcome to our Website! </h1>
  
            <p className='pl-4'>  Discover amazing products and services tailored just for you.
          Your satisfaction is our priority, and we're here to help 24/7.
          Explore our latest collections and find what suits you best.
          Join us today and become part of our community!</p>

          <Image src={""} alt={""}/>


    </div>
  </div>
  )
}

export default About