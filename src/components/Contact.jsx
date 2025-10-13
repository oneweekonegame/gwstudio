import about from "../assets/about.png"
const Contact = () => {
  return (
   <section id='contact' className='relative overflow-hidden bg-gradient-to-br
    from-gray-50 to-green-50 py-12 px-4 sm:py-20 md:px-12 lg:px-20
     flex flex-col lg:flex-row items-center justify-between'>
        <div className='flex-1 w-full lg:mr-8 xl:mr-12
         relative order-2 lg:order-1 mt-10 lg:mt-0'>
            <div className='w-full max-w-md mx-auto lg:max-w-lg xl:max-w-xl
             has-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]
              overflow-hidden shadow-lg md:shadow-xl rounded-[40%_60%_70%/40%_50%_60%_60%]
               relative z-10 -rotate-2 hover:rotate-0 transition-transform duration-700'
             
               >
                    <img src={about} alt='About'
                    className="object-cover w-full h-full transform hover:scale-110
                    transition-transform duration-700
                    "
                    />
            </div>
            <div className="">

            </div>
        </div>
   </section>
  )
}

export default Contact
