import { data } from '../../assets/ebike_data'

export const filterEbikes = (category, spec, setStateFunc) => {
  // eslint-disable-next-line array-callback-return
  // const result = data.ebikes.filter((ebike) => { ebike[category] = spec })
  console.log('category', category)
  console.log('spec', spec)
  console.log('setStateFunc', setStateFunc)
  const result = []
  data.ebikes.forEach((ebike) => {
    if (ebike[category].toString() === spec) {
      result.push(ebike)
    }
  }
  )
  setStateFunc(result)
}
