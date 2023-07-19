import React, { ButtonHTMLAttributes } from 'react'

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function RedBtn({ children, className, ...attributes }: CustomButtonProps) {
  return (
    <button
      style={{
        backgroundImage: 'url(/images/red-btn-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
      {...attributes}
      className={`${className} py-[10px] px-10 outline-none`}
      type="button"
    >
      {children}
    </button>
  )
}

export default RedBtn
