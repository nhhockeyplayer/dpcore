import {ISite} from './ISite'

export abstract class Site implements ISite {
  id: number
  url: string
  content: string

  getMarkup() {
    return this.content
  }

  assemble(details: ISite): string {
    const result = ''
    return result
  }

}

export default Site
