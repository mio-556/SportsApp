const fetchJsonData = async (fileName: String) => {
  try {
    const response = await fetch(`./data/${fileName}`)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

export { fetchJsonData }
