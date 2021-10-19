import { JSX } from 'preact'
import { useLayoutEffect, useMemo, useReducer, useState } from 'preact/hooks'
import { filterReplies, getReplies, orderRepliesByUpvotes } from './dom'
import usePrevious from './usePrevious'

const labelStyle = {
  padding: '12px 0px',
  marginLeft: '1rem'
}

const inputStyle = {
  marginLeft: '0.5rem',
  verticalAlign: 'middle'
}

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

type Action =
  | { type: 'RESET_EMBED_TYPE_FILTER' }
  | { type: 'FILTER_BY_EMBED_TYPE'; value: EmbedType }
  | { type: 'TOGGLE_OP_ONLY' }
  | { type: 'NEXT_SORT_ORDER' }

const INITIAL_STATE = {
  embedTypeFilter: null,
  sortByUpvotesOrder: null,
  onlyRepliesFromOp: false
}

function App() {
  const [state, dispatch] = useReducer<ReplyFilterState, Action>(
    (prevState, action) => {
      switch (action.type) {
        case 'RESET_EMBED_TYPE_FILTER':
          return { ...prevState, embedTypeFilter: null }
        case 'FILTER_BY_EMBED_TYPE':
          return { ...prevState, embedTypeFilter: action.value }
        case 'TOGGLE_OP_ONLY':
          return {
            ...prevState,
            onlyRepliesFromOp: !prevState.onlyRepliesFromOp
          }
        case 'NEXT_SORT_ORDER':
          return {
            ...prevState,
            sortByUpvotesOrder:
              prevState.sortByUpvotesOrder === null ? 'desc' : null
          }
      }
    },
    INITIAL_STATE
  )

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

  return (
    <form>
      <label style={labelStyle}>
        Vain AP
        <input
          style={inputStyle}
          name="opOnly"
          type="checkbox"
          onChange={(event) => {
            dispatch({ type: 'TOGGLE_OP_ONLY' })
          }}
          checked={state.onlyRepliesFromOp === true}
        />
      </label>
      <label style={labelStyle}>
        Kuvat
        <input
          style={inputStyle}
          name="embedType"
          type="radio"
          value="image"
          checked={state.embedTypeFilter === 'image'}
          onChange={(event) => {
            dispatch({ type: 'FILTER_BY_EMBED_TYPE', value: 'image' })
          }}
          onClick={() => {
            if (state.embedTypeFilter === 'image')
              dispatch({ type: 'RESET_EMBED_TYPE_FILTER' })
          }}
        />
      </label>
      <label style={labelStyle}>
        Videot
        <input
          style={inputStyle}
          name="embedType"
          type="radio"
          value="video"
          checked={state.embedTypeFilter === 'video'}
          onChange={(event) => {
            dispatch({ type: 'FILTER_BY_EMBED_TYPE', value: 'video' })
          }}
          onClick={() => {
            if (state.embedTypeFilter === 'video')
              dispatch({ type: 'RESET_EMBED_TYPE_FILTER' })
          }}
        />
      </label>
      <button
        style={{ marginLeft: '1rem' }}
        onClick={(event) => {
          dispatch({ type: 'NEXT_SORT_ORDER' })
          event.preventDefault()
        }}
      >
        Tää {state.sortByUpvotesOrder === null ? '–' : '↓'}
      </button>
    </form>
  )
}

export default App
