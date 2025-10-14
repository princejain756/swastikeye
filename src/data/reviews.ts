// Parse Google reviews from the markdown file at repo root.
// The file structure is simple, with repeated blocks like:
// ## Name\nStars: 5.0\nDate: ...\nReview: ...

import raw from '../../reviews.md?raw'

export type Review = {
  name: string
  stars: number
  date?: string
  text: string
}

function parseMarkdown(md: string): Review[] {
  const lines = md.split(/\r?\n/)
  const out: Review[] = []
  let current: Partial<Review> | null = null

  const push = () => {
    if (!current) return
    const name = (current.name || '').trim()
    const text = (current.text || '').trim()
    const stars = Number(current.stars || 0)
    if (name) {
      out.push({ name, text, stars, date: current.date })
    }
    current = null
  }

  for (const line of lines) {
    if (line.startsWith('## ')) {
      push()
      current = { name: line.replace(/^##\s+/, '') }
      continue
    }
    if (!current) continue
    const mStars = line.match(/^Stars:\s*([0-9.]+)/i)
    if (mStars) { current.stars = Math.max(0, Math.min(5, parseFloat(mStars[1]))) ; continue }
    const mDate = line.match(/^Date:\s*(.*)$/i)
    if (mDate) { current.date = mDate[1].trim() ; continue }
    const mRev = line.match(/^Review:\s*(.*)$/i)
    if (mRev) { current.text = mRev[1] ; continue }
  }
  push()
  return out
}

export const reviews: Review[] = parseMarkdown(raw)

export const averageRating = reviews.length
  ? Math.round((reviews.reduce((s, r) => s + (r.stars || 0), 0) / reviews.length) * 10) / 10
  : 0
