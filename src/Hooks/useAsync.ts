import { useCallback, useReducer } from 'react'

type AsyncInterface<T> =
  | {status: 'idle'}
  | {status: 'pending'}
  | {status: 'success', response: T}
  | {status: 'error', error: string}

export default function useAsync<T>(callback:() => Promise<T>) {
  type AsyncType = AsyncInterface<T>

  function Reducer(_:AsyncType, action:AsyncType):AsyncType {
    return action
  }

  const [value, dispatch] = useReducer(Reducer, {status: 'idle'})

  const execute = useCallback(async () => {
    dispatch({ status: 'pending' })
    try {
      const response = await callback()
      
      dispatch({ status: 'success', response })
    } catch (e) {
      const error = (e as Error).message

      dispatch({ status: 'error', error })
    }
  }, [callback])

  return [ execute, value ] as const
}