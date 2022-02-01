import { JSX } from 'preact'
import { useLayoutEffect, useMemo, useReducer, useState } from 'preact/hooks'
import { filterReplies, getReplies, orderRepliesByUpvotes } from './dom'
import usePrevious from './usePrevious'

const labelStyle = {
  padding: '12px 0px',
  marginLeft: '1rem',
  cursor: 'pointer'
}

const inputStyle = {
  marginLeft: '0.5rem',
  verticalAlign: 'middle'
}

export type EmbedType = 'image' | 'video'
export type Reply = {
  message: string
  hasUrl: boolean
  node: HTMLElement
  upvotes: number
  embedType?: EmbedType
  isOP: boolean
}

export type ReplyFilterState = {
  embedTypeFilter: EmbedType | null
  sortByUpvotesOrder: 'desc' | null
  onlyRepliesFromOp: boolean
  onlyUrls: boolean
}

type Action =
  | { type: 'RESET_EMBED_TYPE_FILTER' }
  | { type: 'FILTER_BY_EMBED_TYPE'; value: EmbedType }
  | { type: 'TOGGLE_OP_ONLY' }
  | { type: 'TOGGLE_URLS_ONLY' }
  | { type: 'NEXT_SORT_ORDER' }

const INITIAL_STATE = {
  embedTypeFilter: null,
  sortByUpvotesOrder: null,
  onlyRepliesFromOp: false,
  onlyUrls: false
}

function Separator() {
  return (
    <div
      style={{
        borderRight:
          '1px solid hsl(var(--c-pri-h), calc(var(--c-pri-s) - 20% * var(--l-multi)), calc(var(--c-pri-l) + 5% * var(--l-multi)))',
        height: '26px',
        width: '1px',
        display: 'inline-block',
        margin: '0 1rem',
        verticalAlign: 'middle'
      }}
    ></div>
  )
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
        case 'TOGGLE_URLS_ONLY':
          return {
            ...prevState,
            onlyUrls: !prevState.onlyUrls
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
        Urlit
        <input
          style={inputStyle}
          name="onlyUrls"
          type="checkbox"
          onChange={(event) => {
            dispatch({ type: 'TOGGLE_URLS_ONLY' })
          }}
          checked={state.onlyUrls === true}
        />
      </label>
      <Separator />
      <label style={{ ...labelStyle, marginLeft: 0 }}>
        Vain AP
        <input
          style={inputStyle}
          name="onlyRepliesFromOp"
          type="checkbox"
          onChange={(event) => {
            dispatch({ type: 'TOGGLE_OP_ONLY' })
          }}
          checked={state.onlyRepliesFromOp === true}
        />
      </label>
      <Separator />
      <label style={{ ...labelStyle, marginLeft: 0 }}>
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
      <Separator />
      <button
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
