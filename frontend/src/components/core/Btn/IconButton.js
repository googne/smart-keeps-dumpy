import React from 'react'

const IconButton = () => {
  return <div>IconButton</div>
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
