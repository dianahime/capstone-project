const productUsedUpMessage = (openingDate, usedUpDate) => {
  const differenceInMonths = usedUpDate.diff(openingDate, 'month')
  const differenceInDays = usedUpDate.diff(openingDate, 'day')

  if (differenceInDays < 0) {
    throw new Error('Used up date can not be before opening date')
  }
  if (!differenceInDays) {
    return 'Used up on the same day'
  }
  if (differenceInDays === 1) {
    return `Used up after 1 day`
  }
  if (differenceInMonths <= 1) {
    return `Used up after ${usedUpDate.diff(openingDate, 'day')} days`
  }
  return `Used up after ${usedUpDate.diff(openingDate, 'month')} months`
}

export default productUsedUpMessage
