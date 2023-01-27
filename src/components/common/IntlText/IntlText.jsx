import React from 'react'
import { useIntl } from '../../../hooks/useIntl.js'

export const IntlText = ({ translateKey }) => {
  const { translate } = useIntl()

  return <>{translate(translateKey)}</>
}
