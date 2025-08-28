import React from 'react';

interface EmailCardProps {
  imgUrl: string;
  name: string;
  selected: boolean;
  onClick: () => void;
}

const EmailCard = ({ imgUrl, name, selected, onClick }: EmailCardProps) => {
  return (
    <div 
      className='flex flex-col gap-2 justify-center items-center cursor-pointer z-10'
      onClick={onClick}
    >
      <div className='relative'>
        <img 
          src={imgUrl} 
          alt='profile' 
          className={`size-28 rounded-full object-cover transition-all border-4
                    ${selected ? 'border-[#3D8EFE]' : 'border-transparent'}
                    group-hover:border-[#3D8EFE]`}
          tabIndex={0}
        />
        {/* {selected && (
          <div className="absolute -top-2 -right-2 bg-[#3D8EFE] text-white rounded-full size-6 flex items-center justify-center text-sm font-bold">
            ✓
          </div>
        )} */}
      </div>
      <div className={`font-medium text-xl font-serif ${selected ? '' : ''}`}>
        {name}
      </div>
    </div>
  );
};

export default EmailCard;