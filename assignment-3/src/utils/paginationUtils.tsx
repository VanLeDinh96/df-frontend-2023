const limit = 10

export const calculatePages = (data, searchKey) => {
  const filteredData = filterData(data, searchKey)
  const numberOfPages = Math.ceil(filteredData.length / limit)
  return numberOfPages
}

export const filterData = (data, searchKey) => {
  return data.filter((i) =>
    i.name.toLowerCase().includes(searchKey.toLowerCase()),
  )
}
