import PropTypes from 'prop-types'

const ProductType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  size: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  comment: PropTypes.string,
  isArchived: PropTypes.bool,
  isExpirationIgnored: PropTypes.bool,
})

export default ProductType
