import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import Video from './Video'
import * as videoService from './VideoService'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const VideoForm = () => {
	const [video, setVideo] = useState<Video>({
		title: '',
		description: '',
		url: '',
	})

	const HandleInputChange = (e: InputChange): void => {
		setVideo({ ...video, [e.target.name]: e.target.value })
	}

	const HandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		await videoService.createVideo(video)
		toast.success('New video added')
	}

	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-body">
						<h3>New Video</h3>

						<form onSubmit={HandleSubmit}>
							<div className="form-group">
								<input
									type="text"
									name="title"
									placeholder="Write a title for this video"
									className="form-control"
									autoFocus
									onChange={HandleInputChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="url"
									placeholder="https://somesite.com"
									className="form-control"
									onChange={HandleInputChange}
								/>
							</div>
							<div className="form-group">
								<textarea
									name="description"
									rows={3}
									placeholder="Write a description"
									className="form-control"
									onChange={HandleInputChange}
								></textarea>
							</div>

							<button className="btn btn-primary">Create Video</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoForm
