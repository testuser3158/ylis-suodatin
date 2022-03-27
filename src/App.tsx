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

function sortOrderSymbol(order: 'asc' | 'desc') {
  if (order === 'desc') return '↓'
  if (order === 'asc') return '↑'
}

export type EmbedType = 'image' | 'video'
export type Reply = {
  message: string
  hasUrl: boolean
  node: HTMLElement
  upvotes: number
  downvotes: number
  embedType?: EmbedType
  isOP: boolean
  isOwn: boolean
}

export type SortOrder = 'desc' | 'asc' | null

export type ReplyFilterState = {
  onlyVideos: boolean
  onlyImages: boolean
  sortByUpvotesOrder: SortOrder
  onlyRepliesFromOp: boolean
  onlyRepliesFromMyself: boolean
  onlyUrls: boolean
}

type Action =
  | { type: 'TOGGLE_IMAGES_ONLY' }
  | { type: 'TOGGLE_VIDEOS_ONLY' }
  | { type: 'TOGGLE_OP_ONLY' }
  | { type: 'TOGGLE_OWN_ONLY' }
  | { type: 'TOGGLE_URLS_ONLY' }
  | { type: 'NEXT_SORT_ORDER' }

const INITIAL_STATE: ReplyFilterState = {
  onlyVideos: false,
  onlyImages: false,
  sortByUpvotesOrder: null,
  onlyRepliesFromOp: false,
  onlyRepliesFromMyself: false,
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
        case 'TOGGLE_IMAGES_ONLY':
          return { ...prevState, onlyImages: !prevState.onlyImages }
        case 'TOGGLE_VIDEOS_ONLY':
          return { ...prevState, onlyVideos: !prevState.onlyVideos }
        case 'TOGGLE_OP_ONLY':
          return {
            ...prevState,
            onlyRepliesFromOp: !prevState.onlyRepliesFromOp
          }
        case 'TOGGLE_OWN_ONLY':
          return {
            ...prevState,
            onlyRepliesFromMyself: !prevState.onlyRepliesFromMyself
          }
        case 'TOGGLE_URLS_ONLY':
          return {
            ...prevState,
            onlyUrls: !prevState.onlyUrls
          }
        case 'NEXT_SORT_ORDER':
          return (() => {
            const nextSortOrder =
              prevState.sortByUpvotesOrder === null
                ? 'desc'
                : prevState.sortByUpvotesOrder === 'desc'
                ? 'asc'
                : null

            return {
              ...prevState,
              sortByUpvotesOrder: nextSortOrder
            }
          })()
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
          checked={state.onlyUrls}
        />
      </label>
      <Separator />
      <label style={{ ...labelStyle, marginLeft: 0 }}>
        Omat
        <input
          style={inputStyle}
          name="onlyRepliesFromMyself"
          type="checkbox"
          onChange={(event) => {
            dispatch({ type: 'TOGGLE_OWN_ONLY' })
          }}
          checked={state.onlyRepliesFromMyself}
        />
      </label>
      <Separator />
      <label style={{ ...labelStyle, marginLeft: 0 }}>
        AP
        <input
          style={inputStyle}
          name="onlyRepliesFromOp"
          type="checkbox"
          onChange={(event) => {
            dispatch({ type: 'TOGGLE_OP_ONLY' })
          }}
          checked={state.onlyRepliesFromOp}
        />
      </label>
      <Separator />
      <label style={{ ...labelStyle, marginLeft: 0 }}>
        Kuvat
        <input
          style={inputStyle}
          name="onlyImages"
          type="checkbox"
          checked={state.onlyImages}
          onChange={(event) => {
            dispatch({ type: 'TOGGLE_IMAGES_ONLY' })
          }}
        />
      </label>
      <label style={labelStyle}>
        Videot
        <input
          style={inputStyle}
          name="onlyVideos"
          type="checkbox"
          checked={state.onlyVideos}
          onChange={(event) => {
            dispatch({ type: 'TOGGLE_VIDEOS_ONLY' })
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
        Tää
        {state.sortByUpvotesOrder !== null
          ? ` ${sortOrderSymbol(state.sortByUpvotesOrder)}`
          : null}
      </button>
    </form>
  )
}

export default App
