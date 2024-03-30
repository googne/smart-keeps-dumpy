import asyncHandler from 'express-async-handler'
import { BANKS_PAGE_SIZE } from '../constants.js'
import Bank from '../models/bankModel.js'

/**
 * @desc get all bank details
 * @route GET /api/banks
 * @access Public
 */
const getAllBanks = asyncHandler(async (req, res) => {
  const pageSize = BANKS_PAGE_SIZE
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Bank.countDocuments({ ...keyword })
  const banks = await Bank.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ banks, count, page, pages: Math.ceil(count / pageSize) })
})

/**
 * @desc get bank byId
 * @route GET /api/banks/:id
 * @access Public
 */
const getBankById = asyncHandler(async (req, res) => {
  const bank = await Bank.findById(req.params.id)
  if (bank) {
    res.json(bank)
  } else {
    res.status(404)
    throw new Error('Bank not found')
  }
})

/**
 * @desc Delete bank byId
 * @route DELETE /api/banks/:id
 * @access Private/Admin
 */
const deleteBank = asyncHandler(async (req, res) => {
  const bank = await Bank.findById(req.params.id)
  if (bank) {
    await bank.remove()
    res.json({ message: 'Bank Removed' })
  } else {
    res.status(404)
    throw new Error('Bank not found')
  }
})

/**
 * @desc Create a bank
 * @route POST /api/banks
 * @access Private/Admin
 */
const createBank = asyncHandler(async (req, res) => {
  const bank = new Bank({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdBank = await bank.save()
  res.status(201).json(createdBank)
})

/**
 * @desc Update bank byId
 * @route PUT /api/banks/:id
 * @access Private/Admin
 */
const updateBank = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body

  const bank = await Bank.findById(req.params.id)
  if (bank) {
    bank.name = name
    bank.price = price
    bank.description = description
    bank.image = image
    bank.brand = brand
    bank.category = category
    bank.countInStock = countInStock

    const updatedBank = await bank.save()
    res.json(updatedBank)
  } else {
    res.status(404)
    throw new Error('Bank not found')
  }
})

/**
 * @desc Create new Review
 * @route POST /api/banks/:id/reviews
 * @access Private
 */
const createBankReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const bank = await Bank.findById(req.params.id)
  if (bank) {
    const alreadyReviewed = bank.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Bank already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    bank.reviews.push(review)
    bank.numReviews = bank.reviews.length

    bank.rating =
      bank.reviews.reduce((acc, item) => item.rating + acc, 0) /
      bank.reviews.length

    await bank.save()

    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Bank not found')
  }
})

/**
 * @desc get top rated banks
 * @route POST /api/banks/top
 * @access Public
 */
const getTopBanks = asyncHandler(async (req, res) => {
  const banks = await Bank.find({}).sort({ rating: -1 }).limit(3)
  res.json(banks)
})

export { getAllBanks, getBankById, deleteBank, updateBank, createBank }
