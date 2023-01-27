import { useContext } from 'react'
import { IntlContext } from '../context'

export const useIntl = () => {
  const intl = useContext(IntlContext)

  const translate = (translateKey) => {
    return translateKey in intl.messagesList
      ? intl.messagesList[translateKey]
      : translateKey
  }

  return { ...intl, translate }
}
