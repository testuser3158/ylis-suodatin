import { useLayoutEffect, useMemo, useReducer } from 'preact/hooks'
import { Group, Input, Separator } from './components'
import { filterReplies, getReplies, orderRepliesByUpvotes } from './dom'
import usePrevious from './usePrevious'

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
      <Input
        label="Urlit"
        name="onlyUrls"
        type="checkbox"
        checked={state.onlyUrls}
        onChange={(event) => dispatch({ type: 'TOGGLE_URLS_ONLY' })}
      />
      <Separator />
      <Input
        label="Omat"
        name="onlyRepliesFromMyself"
        type="checkbox"
        checked={state.onlyRepliesFromMyself}
        onChange={(event) => dispatch({ type: 'TOGGLE_OWN_ONLY' })}
      />
      <Separator />
      <Input
        label="AP"
        name="onlyRepliesFromOp"
        type="checkbox"
        checked={state.onlyRepliesFromOp}
        onChange={(event) => dispatch({ type: 'TOGGLE_OP_ONLY' })}
      />
      <Separator />
      <Group>
        <Input
          label="Kuvat"
          name="onlyImages"
          type="checkbox"
          checked={state.onlyImages}
          onChange={(event) => dispatch({ type: 'TOGGLE_IMAGES_ONLY' })}
        />
        <Input
          label="Videot"
          name="onlyVideos"
          type="checkbox"
          checked={state.onlyVideos}
          onChange={(event) => dispatch({ type: 'TOGGLE_VIDEOS_ONLY' })}
        />
      </Group>
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
