import { ReplyFilterState, Reply } from './App'
import urlRegexSafe from 'url-regex-safe'
import assertDefined from './assertDefined'

export function getReplies(): Reply[] {
  const posts = document.querySelectorAll('.thread .thread-replies .post')
  return Array.from(posts).map((elem) => parseReplyElement(elem as HTMLElement))
}

export function parseReplyElement(node: HTMLElement): Reply {
  const messageElem = node.querySelector<HTMLElement>('.post .post-message')
  assertDefined(messageElem)
  const message = messageElem.innerText
  const upvotesElem = node.querySelector('.post-upvotes')
  assertDefined(upvotesElem)
  const upvotesStr = upvotesElem.getAttribute('data-count')
  const downvotesElem = node.querySelector('.post-downvotes')
  assertDefined(downvotesElem)
  const downvotesStr = downvotesElem.getAttribute('data-count')
  const upvotes = upvotesStr ? parseInt(upvotesStr) : 0
  const downvotes = downvotesStr ? parseInt(downvotesStr) : 0
  const embedFileAnchorElem = node.querySelector('.post-file > a')
  const embedFileClass = embedFileAnchorElem?.getAttribute('class')
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
  const isOwn = node.classList.contains('own')
  const hasUrl = urlRegexSafe({ strict: true }).test(message)

  return { node, upvotes, downvotes, embedType, isOP, isOwn, message, hasUrl }
}

export function orderRepliesByUpvotes(
  sortByUpvotesOrder: ReplyFilterState['sortByUpvotesOrder'],
  replies: Reply[]
): void {
  const wrapper = document.querySelector('.thread .thread-replies')
  assertDefined(wrapper)
  const items = wrapper.children
  const fragment = document.createDocumentFragment()
  const direction = sortByUpvotesOrder === 'asc' ? 1 : -1
  const newReplies =
    sortByUpvotesOrder !== null
      ? [...replies].sort((a, b) => {
          const aVotes = a.upvotes - a.downvotes
          const bVotes = b.upvotes - b.downvotes
          return direction * (Number(aVotes > bVotes) - Number(bVotes > aVotes))
        })
      : replies

  newReplies.forEach((reply, idx) => {
    fragment.appendChild(reply.node)
  })

  wrapper.replaceChildren()
  wrapper.appendChild(fragment)
}

export function isReplyVisible(
  {
    onlyVideos,
    onlyImages,
    onlyRepliesFromOp,
    onlyRepliesFromMyself,
    onlyUrls
  }: ReplyFilterState,
  reply: Reply
): boolean {
  const embedFilterEnabled = onlyImages || onlyVideos
  const hasImageEmbed = reply.embedType === 'image'
  const hasVideoEmbed = reply.embedType === 'video'
  return (
    (embedFilterEnabled
      ? (onlyImages && hasImageEmbed) || (onlyVideos && hasVideoEmbed)
      : true) &&
    (onlyRepliesFromOp ? reply.isOP : true) &&
    (onlyRepliesFromMyself ? reply.isOwn : true) &&
    (onlyUrls ? reply.hasUrl : true)
  )
}

export function filterReplies(filterState: ReplyFilterState): void {
  const replies = getReplies()
  replies.forEach((reply) => {
    reply.node.style.display = isReplyVisible(filterState, reply) ? '' : 'none'
  })
}
