
import './style.scss'

window.onload = function() {
  var switcher = false

  document.querySelector('.switch').addEventListener('click', function () {
    if (!switcher) {
      switcher = true
      document.querySelector('.switch').classList.add('switch-on')
      document.querySelector('.monitor .light').classList.add('light-on')
      document.querySelector('.monitor .center').classList.add('center-on')
      document.querySelector('.nintendoPixel').classList.add('nintendoPixel-on')
      setTimeout(() => {
        document.querySelector('.sound').play()
      }, 2500)
    } else {
      switcher = false
      document.querySelector('.switch').classList.remove('switch-on')
      document.querySelector('.monitor .light').classList.remove('light-on')
      document.querySelector('.monitor .center').classList.remove('center-on')
      document.querySelector('.nintendoPixel').classList.remove('nintendoPixel-on')
      document.querySelector('.sound').pause()
    }
  })
}
