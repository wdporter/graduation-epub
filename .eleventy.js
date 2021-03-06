module.exports = config => {

  config.addPassthroughCopy("src/META-INF")
  config.addPassthroughCopy("src/acim.css")
  config.addPassthroughCopy("src/metadata.opf")
  config.addPassthroughCopy("src/mimetype")
  config.addPassthroughCopy("src/toc.ncx")
  config.addPassthroughCopy("src/endnotes.xhtml")

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}