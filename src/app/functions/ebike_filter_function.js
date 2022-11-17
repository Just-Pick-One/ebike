import { data } from '../../assets/ebike_data'

export const filterEbikes = (category, spec, setStateFunc) => {
  // eslint-disable-next-line array-callback-return
  // const result = data.ebikes.filter((ebike) => { ebike[category] = spec })

  if (spec === 'show_all') setStateFunc(data.ebikes)
  else {
    const result = []
    data.ebikes.forEach((ebike) => {
      if (ebike[category].toString() === spec) {
        result.push(ebike)
      }
    }
    )
    setStateFunc(result)
  }
}
