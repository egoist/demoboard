export const findItems = (boards, query) => {
  let board
  let item

  // Find matched board
  for (let i = 0; i < boards.length; i++) {
    if (query.board && query.board === boards[i].title) {
      board = boards[i]
    } else if (!query.board) {
      board = boards[0]
    }
  }

  for (let i = 0; i < board.sections.length; i++) {
    const section = board.sections[i]
    if (section.title === query.section) {
      for (let i = 0; i < section.items.length; i++) {
        if (section.items[i].title === query.item) {
          item = section.items[i]
          break
        }
      }
    }
  }

  return item && board.applyDecorators(item)
}
