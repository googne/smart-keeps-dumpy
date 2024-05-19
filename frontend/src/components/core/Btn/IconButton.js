import React from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

// It will show only icon as button: starIcon, deleteIcon
const IconButton = ({ size, icon, variant, title, onClick }) => {
  const btnProps = { size, icon, variant }
  return (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id={`tooltip-${variant}`}>{title}</Tooltip>}
      >
        {/* {icon && (
          <i
            className={`${icon} text-${variant} fa-${size}`}
            onClick={onClick}
          ></i>
        )} */}
        {/* <Button {...btnProps}></Button> */}
        <Button {...btnProps}>{icon && <i className={icon}></i>}</Button>
      </OverlayTrigger>
    </>
  )
}

export default IconButton

// import React from 'react'
// import SmButton from './SmButton'

// const ContainerButton = (props) => {
//   const { link } = props
//   return (
//     <LinkContainer to={`${link}`}>
//       <SmButton {...props} />
//     </LinkContainer>
//   )
// }

// const IconButton = ({ type, link, variant, onClick }) => {
//   const title = type.slice(0, 1).toUpperCase() + type.slice(1, type.length)

//   return (
//     <span className='mr-1'>
//       {type === 'edit' && (
//         <ContainerButton
//           icon='edit'
//           variant='success'
//           title={title}
//           link={link}
//         />
//       )}
//       {type === 'detail' && (
//         <ContainerButton
//           icon='info-circle'
//           variant='info'
//           title={title}
//           link={link}
//         />
//       )}
//       {type === 'delete' && (
//         <SmButton
//           icon='trash'
//           variant='danger'
//           title={title}
//           onClick={onClick}
//         />
//       )}
//     </span>
//   )
// }

// export default IconButton
