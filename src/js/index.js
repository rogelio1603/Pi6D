import navigationOffCanvas from './components/navigation_off_canvas'
import transparentHeader from './components/transparent_header'
import headerVideo from './components/header_video'

navigationOffCanvas()
transparentHeader()


if ( location.pathname.includes('inicio') ) {
    headerVideo()
  }
  