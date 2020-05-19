const getOptions = ({ hasLandscape, hasLargeDevice }) => {
  if (hasLandscape && hasLargeDevice) {
    return {
      numColumns: 3,
      columnWrapperStyle: {
        marginBottom: 16,
      },
    }
  }

  return {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
  }
}

export default getOptions
