const data = {
  colorPrimary: '#fff'
}
export const themeColorObject = {
  token: {
    colorPrimary: data.colorPrimary,
    borderRadius: data.borderRadius
  },
  components: {
    Button: {
      colorPrimary: data.Button?.colorPrimary,
      algorithm: data.Button?.algorithm
    }
  }
}
