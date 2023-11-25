import Posts from './Posts/Posts'
import Suggestions from './Suggestions/Suggestions'
import './TimeLine.css'

const TimeLine = () => {
  return (
    <div className='timeline'>
      <div className="timeline-left">
      <div className="timeline-posts">
        <Posts/>
      </div>
      </div>
      <div className="timeline-right">
        <Suggestions/>
      </div>
    </div>
  )
}

export default TimeLine