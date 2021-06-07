const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components"),
      '@api': path.resolve(__dirname, "src/api"),
      '@hooks': path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@mocks": path.resolve(__dirname, "src/mooks"),
      "@state": path.resolve(__dirname, "src/state"),
      "@assets": path.resolve(__dirname, "src/assets"),
    }
  }
}