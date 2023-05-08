import { FC, HTMLAttributes, ReactNode} from 'react'

interface InfoGroupProps extends HTMLAttributes<HTMLDivElement> {
 children:ReactNode
}

const InfoGroup: FC<InfoGroupProps> = ({style,children})=>{
 return <div style={{display:'flex',flexDirection:'column',alignItems:'center',...style}}>
  {children}
 </div>
}

export default InfoGroup
