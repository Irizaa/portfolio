import { useState, useEffect, React} from 'react'
import './Loading.css'


const Loading = ({onLoadingComplete}) => {

    const [showContent, setShowContent] = useState(false)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowContent(true)
            setTimeout(() => {
                document.getElementById('title-container').style.display = 'flex'
                document.getElementById('project-container').style.display = 'flex'
                setFadeOut(true)
                setTimeout(() => {
                    onLoadingComplete()
                }, 500)
            }, 1000)
        }, 4500)
        return () => clearTimeout(timerId)
    }, [onLoadingComplete])
    
    return (
        <div className = 'loading'>
            {!showContent && 

            <div className = 'loading-container'>
                <div className = 'circle'><div className = 'square, square1'>s</div></div>
                <div className = 'circle'><div className = 'square, square2'>s</div></div>
                <div className = 'circle'><div className = 'square, square3'>s</div></div>
                <div className = 'circle'><div className = 'square, square4'>s</div></div>
                <div className = 'circle'><div className = 'square, square5'>s</div></div>
            </div>
            } 
            {showContent && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 0.5s ease-out",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              position: "absolute",
              top: fadeOut ? "-50%" : 0,
              backgroundColor: "rgba(0,0,0,0.96)",
              transition: "top 0.5s ease-out",
            }}
          />
          <div
            style={{
              width: "100%",
              height: "50%",
              position: "absolute",
              bottom: fadeOut ? "-50%" : 0,
              backgroundColor: "rgba(0,0,0,0.96)",
              transition: "bottom 0.5s ease-out",
            }}
          />
        </div>
      )}
        </div>
    )
}

export default Loading