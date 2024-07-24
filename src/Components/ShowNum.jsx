import React, {useContext} from 'react'
import { NumContext } from '../Context/NumContext'

const ShowNum = () => {
  const {numberInput} = useContext(NumContext)


  return (
    <div>
      <p>{numberInput}</p>
    </div>
  )
}

export default ShowNum
