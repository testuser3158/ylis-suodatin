import { JSX } from 'preact'
import { useLayoutEffect, useMemo, useState } from 'preact/hooks'
import { filterReplies, getReplies, orderRepliesByUpvotes } from './dom'
import usePrevious from './usePrevious'

export type EmbedType = 'image' | 'video'
export type Reply = {
  node: HTMLElement
  upvotes: number
  embedType?: EmbedType
  isOP: boolean
}

export type ReplyFilterState = {
  embedTypeFilter: EmbedType | null
  sortByUpvotesOrder: 'desc' | null
  onlyRepliesFromOp: boolean
}

const labelStyle = {
  padding: '12px 0px',
  marginLeft: '1rem'
}

const radioInputStyle = {
  marginLeft: '0.5rem',
  verticalAlign: 'middle'
}

const INITIAL_STATE = {
  embedTypeFilter: null,
  sortByUpvotesOrder: null,
  onlyRepliesFromOp: false
}

function App() {
  const [state, setState] = useState<ReplyFilterState>(INITIAL_STATE)
  const prevState = usePrevious(state)
  const replies = useMemo(() => getReplies(), [])

  useLayoutEffect(() => {
    if (prevState === undefined) return

    requestIdleCallback(() => {
      if (state.sortByUpvotesOrder !== prevState?.sortByUpvotesOrder) {
        orderRepliesByUpvotes(state.sortByUpvotesOrder, replies)
      }

      filterReplies(state)
    })
  }, [state, prevState])

  const resetEmbedTypeFilter = () =>
    setState({ ...state, embedTypeFilter: null })

  const onChange = (event: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    setState({
      ...state,
      embedTypeFilter: event.currentTarget.value as EmbedType
    })
  }

  return (
    <form>
      <label style={labelStyle}>
        Vain AP
        <input
          style={radioInputStyle}
          name="opOnly"
          type="checkbox"
          onChange={(event) => {
            setState({
              ...state,
              onlyRepliesFromOp: !state.onlyRepliesFromOp
            })
          }}
          checked={state.onlyRepliesFromOp === true}
        />
      </label>
      <label style={labelStyle}>
        Kuvat
        <input
          style={radioInputStyle}
          name="embedType"
          type="radio"
          value="image"
          checked={state.embedTypeFilter === 'image'}
          onChange={onChange}
          onClick={() => {
            if (state.embedTypeFilter === 'image') resetEmbedTypeFilter()
          }}
        />
      </label>
      <label style={labelStyle}>
        Videot
        <input
          style={radioInputStyle}
          name="embedType"
          type="radio"
          value="video"
          checked={state.embedTypeFilter === 'video'}
          onChange={onChange}
          onClick={() => {
            if (state.embedTypeFilter === 'video') resetEmbedTypeFilter()
          }}
        />
      </label>
      <button
        style={{ marginLeft: '1rem' }}
        onClick={(event) => {
          setState({
            ...state,
            sortByUpvotesOrder:
              state.sortByUpvotesOrder === null ? 'desc' : null
          })

          event.preventDefault()
        }}
      >
        Tää {state.sortByUpvotesOrder === null ? '–' : '↓'}
      </button>
    </form>
  )
}

export default App
