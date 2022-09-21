import { Row,Col } from 'react-bootstrap';

export default function StoryItem ({story}) {
    return (
    <Row>
        <Col className='timeline-col'>
        <div className='timeline-item'>
            <div className='timeline-item-content'>
            <span>{story.title}</span>
            <p>{story.text}</p>
            <span className="circle" />
            </div>
        </div>
        </Col>
        <Col className='timeline-image-col'>
        <div className='timeline-image'>
            {/* Can't get file path when `images` is in `./src/data` for some reason */}
            {/* Might need to check if image exist */}
            {/* TOOD: Expand Image onClick */}
            <img src={story.image} className='story-image'/>
        </div>
        </Col>
    </Row>
    )
}