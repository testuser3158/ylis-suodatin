import { render } from 'preact'
import App from './App'

const rootContainer = document.querySelector('.navigation')
const root = document.createElement('div')

root.id = 'ylis-suodatin'
root.style.flex = '1'
root.style.display = 'flex'
root.style.justifyContent = 'flex-end'

rootContainer?.append(root)
render(<App />, root)
