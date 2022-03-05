import { HTMLProps, ReactElement } from 'react'

export interface CustomCardProps extends HTMLProps<HTMLDivElement> {
  reverse: boolean
  icon: ReactElement
}

const CustomCard: React.FC<CustomCardProps> = ({ reverse, icon, ...props }) => {
  return (
    <div
      className={`
        d-flex flex-nowrap
        flex-row${reverse ? '-reverse' : ''}
        mb-3 p-3
        text-light bg-dark bg-opacity-75
      `}
      {...props}
    >
      <div className="d-flex align-items-center justify-content-center">
        {icon}
      </div>
      <div className={`flex-fill d-flex align-items-center justify-content-${reverse ? 'end me-3' : 'start ms-3'}`}>
        <div className={`fw-light ${reverse ? 'text-end' : ''}`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default CustomCard
