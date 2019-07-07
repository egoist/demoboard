import React from 'react'

export const useMedia = (query, defaultState = false) => {
  const [state, setState] = React.useState(defaultState)

  React.useEffect(() => {
    const mql = window.matchMedia(query)
    setState(mql.matches)

    const onChange = () => setState(mql.matches)
    mql.addListener(onChange)

    return () => mql.removeListener(onChange)
  }, [query])

  return [state, setState]
}
