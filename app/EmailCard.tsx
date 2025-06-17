import React from 'react';

const EmailCard = ({ imgUrl, name }: { imgUrl: string; name: string }) => {
  return (
    <div className='flex flex-col gap-1 justify-center items-center group'>
      <div className='relative'>
        <img 
          src={imgUrl} 
          alt='profile' 
          className='size-28 rounded-full object-cover transition-all 
                    group-hover:ring-5 group-hover:ring-[#3D8EFE]
                    focus:ring-5 focus:ring-[#3D8EFE] focus:outline-none' 
          tabIndex={0} // Makes the image focusable
        />
      </div>
      <div className='font-medium text-xl font-serif'>
        {name}
      </div>
    </div>
  );
};

export default EmailCard;