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
  const upvotes = upvotesStr ? parseInt(upvotesStr) : 0
  const figure = node.querySelector('figure')
  const figureDataMediaType = figure?.getAttribute('data-media-type')
  const embedType = (() => {
    switch (figureDataMediaType) {
      case 'image':
        return 'image'
      case 'video':
        return 'video'
      default:
        return undefined
    }
  })()
  const isOP = node.classList.contains('op')
  const isOwn = node.classList.contains('own')
  const hasUrl = urlRegexSafe({ strict: true }).test(message)

  return { node, upvotes, embedType, isOP, isOwn, message, hasUrl }
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
          return (
            direction *
            (Number(a.upvotes > b.upvotes) - Number(b.upvotes > a.upvotes))
          )
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
