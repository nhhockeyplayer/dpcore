import {ISite} from './ISite'
import {Site} from './Site'

export class ChuckNorris extends Site {
  public static incrementId = 0

  constructor(public id: number = ChuckNorris.incrementId++,
              public content: string = '',
              public url: string = '') {
    super()

    this.id = id
    this.url = url
    this.content = content
  }

  getMarkup() {
    return this.content
  }

  assemble(site: ISite): string {
    const result = ''
    return result
  }
}

export default ChuckNorris
