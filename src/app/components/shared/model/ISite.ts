
export interface ISite {
  id: number,
  url: string,
  content: string

  getMarkup()
  assemble(details: ISite)
}

export default ISite
