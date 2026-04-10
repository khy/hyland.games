import { useState } from 'react'
import { nodes } from './data/nodes'

const STORAGE_KEY = 'tbg_state'
const INITIAL_STATE = { currentNode: 'start', visited: [] }

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return INITIAL_STATE
    const parsed = JSON.parse(saved)
    // guard against saved state referencing a node that no longer exists
    if (!nodes[parsed.currentNode]) return INITIAL_STATE
    return parsed
  } catch {
    return INITIAL_STATE
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export default function App() {
  const [state, setState] = useState(loadState)

  const node = nodes[state.currentNode]
  const isEnding = !node.options || node.options.length === 0

  function navigate(nextId) {
    const next = {
      currentNode: nextId,
      visited: [...state.visited, state.currentNode],
    }
    setState(next)
    saveState(next)
  }

  function restart() {
    setState(INITIAL_STATE)
    saveState(INITIAL_STATE)
  }

  return (
    <div className="shell">
      <div className="scene">
        <div className="text">
          {node.text.split('\n').map((line, i) =>
            line === '' ? <br key={i} /> : <p key={i}>{line}</p>
          )}
        </div>

        <div className="options">
          {isEnding ? (
            <button className="option restart" onClick={restart}>
              — Start over
            </button>
          ) : (
            node.options.map((opt, i) => (
              <button key={i} className="option" onClick={() => navigate(opt.next)}>
                › {opt.label}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
