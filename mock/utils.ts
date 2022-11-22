export function getTimeOut() {
  return Math.round(Math.random() * 100 + 100)
}

export function formatResponse(total, query) {
  const { pageSizes = 10, currentPage = 1 } = query
  const currentData =
    pageSizes * currentPage <= total
      ? pageSizes
      : total < pageSizes
      ? total
      : total.toString().charAt(total.toString().length - 1)

  return {
    currentData,
    pageSizes
  }
}
