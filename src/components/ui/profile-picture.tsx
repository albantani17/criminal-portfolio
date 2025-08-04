const ProfilePicture = () => {
  return (
    <div className='relative max-w-[400px] mx-auto lg:mx-0 border-8 border-b-100 border-neutral-300 shadow-lg p-4 bg-[#f9f6f1]'>
      {/* Gaya judul WANTED */}
      <div className='absolute border-4 border-red-500 left-1/2 -rotate-6 -translate-x-1/2 rounded-md shadow-md flex justify-center px-4 max-w-[90%]'>
        <p className='text-5xl lg:text-6xl p-2 text-red-500 font-special tracking-widest text-center break-words'>
          WANTED!!
        </p>
      </div>

      {/* Gambar */}
      <img
        src='pp.jpeg'
        alt='profile'
        className='w-full mt-12 outline-4 outline-neutral-700 p-1 '
      />

      {/* REWARD Section */}
      <div className='absolute left-1/2 -bottom-20 -translate-x-1/2 w-full px-4'>
        <div className='border-4 border-black rounded-md shadow-md bg-white'>
          <p className='text-5xl text-center text-black font-special tracking-wider p-2'>
            REWARD
          </p>
          <div className='border-t-2 border-black px-4 py-2 text-center font-montserrat text-lg font-semibold text-neutral-800'>
            A junior fullstack dev armed with clean code and curiosity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
