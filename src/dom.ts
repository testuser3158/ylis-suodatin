import { ReplyFilterState, Reply } from './App'

export function getReplies(): Reply[] {
  return Array.from(document.querySelectorAll('.thread .replies .post')).map(
    (elem) => parseReplyElement(elem as HTMLElement)
  )
}

export function parseReplyElement(node: HTMLElement): Reply {
  const upvotesStr = node
    .querySelector('.post-upvotes')
    ?.getAttribute('data-count')
  const upvotes = upvotesStr ? parseInt(upvotesStr) : 0
  const embedFileClass = node
    .querySelector('.post-file > a')
    ?.getAttribute('class')
  const embedType = (() => {
    switch (embedFileClass) {
      case 'jpg':
        return 'image'
      case 'mp4':
        return 'video'
      default:
        return undefined
    }
  })()
  const isOP = node.classList.contains('op')

  return { node, upvotes, embedType, isOP }
}

export function orderRepliesByUpvotes(
  sortByUpvotesOrder: ReplyFilterState['sortByUpvotesOrder'],
  replies: Reply[]
): void {
  const wrapper = document.querySelector('.thread .replies')!
  const items = wrapper.children
  const fragment = document.createDocumentFragment()
  const newReplies =
    sortByUpvotesOrder === 'desc'
      ? [...replies].sort((a, b) => {
          if (a.upvotes < b.upvotes) return 1
          if (a.upvotes > b.upvotes) return -1
          else return 0
        })
      : replies

  newReplies.forEach((reply, idx) => {
    fragment.appendChild(reply.node)
  })

  wrapper.replaceChildren()
  wrapper.appendChild(fragment)
}

export function isReplyVisible(
  { embedTypeFilter, onlyRepliesFromOp }: ReplyFilterState,
  reply: Reply
): boolean {
  return (
    (embedTypeFilter === null ||
      (embedTypeFilter != null && embedTypeFilter === reply.embedType)) &&
    (onlyRepliesFromOp ? reply.isOP : true)
  )
}

export function filterReplies(filterState: ReplyFilterState): void {
  const replies = getReplies()
  replies.forEach((reply) => {
    reply.node.style.display = isReplyVisible(filterState, reply)
      ? 'block'
      : 'none'
  })
}
