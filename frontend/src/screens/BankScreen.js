import React, { useEffect } from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/core/Message'
import Loader from '../components/core/Loader'
import { BANK_CREATE_RESET } from '../constants/bankConstants'
import CreateButton from '../components/core/Button/CreateButton'
import IconButton from '../components/core/Button/IconButton'
import Price from '../components/core/Price/Price'
import { createBank, listBanks, deleteBank } from '../action/bankActions'
import Paginate from '../components/Paginate'
import Count from '../components/Count'

const BankScreen = ({ history, match }) => {
  // const dispatch = useDispatch()
  // const pageNumber = match.params.pageNumber || 1

  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  // const bankList = useSelector((state) => state.bankList)
  // const { loading, error, banks, count, pages, page } = bankList

  // const bankDelete = useSelector((state) => state.bankDelete)
  // const {
  //   loading: loadingDelete,
  //   error: errorDelete,
  //   success: successDelete,
  // } = bankDelete

  // const bankCreate = useSelector((state) => state.bankCreate)
  // const {
  //   loading: loadingCreate,
  //   error: errorCreate,
  //   success: successCreate,
  //   bank: createdBank,
  // } = bankCreate

  // useEffect(() => {
  //   dispatch({ type: BANK_CREATE_RESET })

  //   if (!userInfo.isAdmin) {
  //     history.push('/login')
  //   }

  //   if (successCreate) {
  //     history.push(`/admin/bank/${createdBank._id}/edit`)
  //   } else {
  //     dispatch(listBanks('', pageNumber))
  //   }
  // }, [
  //   dispatch,
  //   history,
  //   userInfo,
  //   successDelete,
  //   successCreate,
  //   createdBank,
  //   pageNumber,
  // ])

  // const deleteHandler = (id) => {
  //   if (window.confirm('Are you sure?')) {
  //     dispatch(deleteBank(id))
  //   }
  // }

  // const createBankHandler = () => {
  //   dispatch(createBank())
  // }

  return (
    <>BankScreen</>
    // <>
    //   <Row className="align-items-center">
    //     <Col>
    //       <h1>
    //         Banks
    //         <Count type="short" current={banks && banks.length} total={count} />
    //       </h1>
    //     </Col>
    //     <Col className="text-right">
    //       <CreateButton
    //         name="Bank"
    //         onClick={createBankHandler}
    //         loader={loadingCreate}
    //       />
    //     </Col>
    //   </Row>
    //   {loading ? (
    //     <Loader />
    //   ) : error ? (
    //     <Message variant="danger">{error}</Message>
    //   ) : (
    //     <>
    //       {loadingDelete && <Loader />}
    //       {errorDelete && <Message variant="danger">{errorDelete}</Message>}
    //       {errorCreate && <Message variant="danger">{errorCreate}</Message>}

    //       <Table striped bordered hover responsive className="table-sm">
    //         <thead>
    //           <tr>
    //             <th>ID</th>
    //             <th>NAME</th>
    //             <th>PRICE</th>
    //             <th>CATEGORY</th>
    //             <th>BRAND</th>
    //             <th>ACTIVITY</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {banks.map((bank) => (
    //             <tr key={bank._id}>
    //               <td>{bank._id}</td>
    //               <td>{bank.name}</td>
    //               <td>
    //                 <Price value={bank.price} />
    //               </td>
    //               <td>{bank.category}</td>
    //               <td>{bank.brand}</td>
    //               <td>
    //                 <IconButton
    //                   type="edit"
    //                   link={`/admin/bank/${bank._id}/edit`}
    //                 />
    //                 <IconButton
    //                   type="delete"
    //                   onClick={() => deleteHandler(bank._id)}
    //                 />
    //                 <IconButton type="detail" link={`/bank/${bank._id}`} />
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </Table>
    //       <Count current={banks.length} total={count} />
    //       <Paginate pages={pages} page={page} history={history} />
    //     </>
    //   )}
    // </>
  )
}

export default BankScreen
