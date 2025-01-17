import type { FC } from 'react'
import { CheckCircle } from '@/app/components/base/icons/src/vender/solid/general'

type InputProps = {
  value?: string
  onChange: (v: string) => void
  onFocus?: () => void
  placeholder?: string
  validated?: boolean
  className?: string
  disabled?: boolean
}
const Input: FC<InputProps> = ({
  value,
  onChange,
  onFocus,
  placeholder,
  validated,
  className,
  disabled,
}) => {
  return (
    <div className='relative'>
      <input
        tabIndex={-1}
        className={`
          block px-3 w-full h-9 bg-gray-100 text-sm rounded-lg border border-transparent
          appearance-none outline-none caret-primary-600
          hover:border-[rgba(0,0,0,0.08)] hover:bg-gray-50
          focus:bg-white focus:border-gray-300 focus:shadow-xs
          placeholder:text-sm placeholder:text-gray-400
          ${validated && 'pr-[30px]'}
          ${className}
        `}
        placeholder={placeholder || ''}
        onChange={e => onChange(e.target.value)}
        onFocus={onFocus}
        value={value || ''}
        disabled={disabled}
      />
      {
        validated && (
          <div className='absolute top-2.5 right-2.5'>
            <CheckCircle className='w-4 h-4 text-[#039855]' />
          </div>
        )
      }
    </div>
  )
}

export default Input
