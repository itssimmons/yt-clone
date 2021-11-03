import Video from './Video'

const VideoItem = ({ video }: Props): JSX.Element => {
	return (
		<div className="card border-secondary mb-3" style={{ maxWidth: '20rem' }}>
			<div className="card-header">{video.title}</div>
			<div className="card-body">
				<h4 className="card-title">Video</h4>
				<p className="card-text">{video.description}</p>
			</div>
		</div>
	)
}

export default VideoItem

interface Props {
	video: Video
}
