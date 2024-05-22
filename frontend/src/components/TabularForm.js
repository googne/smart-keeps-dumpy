import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

const TabularForm = (props) => {
  // console.log(props)
  const { parent, fields, inputFields, values, errors } = props
  const [isCurrentItemSaved, setCurrentItemSaved] = useState(false)
  const [isCurrentFormValid, setCurrentFormSaved] = useState(false)
  return (
    <></>
    // <>
    //   <Table
    //     striped
    //     bordered
    //     hover
    //     responsive
    //     size="sm"
    //     className="text-center"
    //   >
    //     <thead>
    //       <tr className="text-center text-info">
    //         <th style={{ width: '3%' }}>#</th>
    //         {fields.map((field, idx) => (
    //           <th style={{ width: '27%' }} key={`tr${idx}`}>
    //             {inputFields[field].label}
    //           </th>
    //         ))}
    //         <th style={{ width: '16%' }}>Activity</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {fields.map((field, idx) => (
    //         <td style={{ width: '27%' }} key={`tr${idx}`}>
    //           {inputFields[field].label}
    //         </td>
    //       ))}

    //       {values && values[parent].length > 0
    //         ? values[parent].map(({ field, value }, arrIdx) => (
    //             <tr key={`tr${arrIdx}`}>
    //               <td>{arrIdx + 1}.</td>
    //               {fields.map((field, idx) => (
    //                 <td key={`td${idx}`}>
    //                   {!isCurrentItemSaved ? (
    //                     <Field
    //                       {...inputFields[field]}
    //                       name={`${parent}.${keyName}.${arrIdx}.${field}`}
    //                       component={TableTextInput}
    //                     />
    //                   ) : (
    //                     // <h4>{`${values}.${parent}.${keyName}.${arrIdx}.${field}`}</h4>
    //                     <h4>{values[parent][keyName][arrIdx][field]}</h4>
    //                   )}
    //                   {/* <Field
    //                             {...inputFields[field]}
    //                             name={`${parent}.${keyName}.${arrIdx}.${field}`}
    //                             component={TableTextInput}
    //                           /> */}
    //                 </td>
    //               ))}
    //               <td className="text-center">
    //                 <Button
    //                   icon={CHECK_ICON}
    //                   variant="success"
    //                   title="Save"
    //                   onClick={() => setCurrentItemSaved(true)}
    //                   disabled={isCurrentItemSaved}
    //                 />

    //                 <Button
    //                   icon={EDIT_ICON}
    //                   variant="primary"
    //                   title="Edit"
    //                   onClick={() => setCurrentItemSaved(false)}
    //                   disabled={!isCurrentItemSaved}
    //                 />

    //                 <Button
    //                   icon={TRASH_ICON}
    //                   variant="danger"
    //                   title="Remove"
    //                   onClick={() => arrayHelpers.remove(arrIdx)}
    //                 />
    //               </td>
    //             </tr>
    //           ))
    //         : null}
    //     </tbody>
    //   </Table>
    // </>
  )
}

export default TabularForm
