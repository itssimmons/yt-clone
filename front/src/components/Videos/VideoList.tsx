import { useEffect, useState } from 'react'
import Video from './Video'
import VideoItem from './VideoItem'
import * as VideoService from './VideoService'

const VideoList = (): JSX.Element => {
	const [videos, setVideos] = useState<Video[]>([])

	const loadVideos = async () => {
		const res = await VideoService.getVideos()
		setVideos(res.data)
	}

	useEffect(() => {
		loadVideos()
	}, [])

	return (
		<div>
			{videos.map(video => {
				return (
					<VideoItem video={video} />
				)
			})}
		</div>
	)
}

export default VideoList
