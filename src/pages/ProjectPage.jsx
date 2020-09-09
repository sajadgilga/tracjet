import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Project from '../features/project/Project';
import { projectSelect } from '../redux/slices/projectSlice';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddProjectForm from '../features/project/addProjectForm';

const ProjectPage = () => {
	const projects = useSelector(projectSelect);
	const [ open, setOpen ] = useState(false);
	const addNewProject = () => {};

	return (
		<div className="bg-white min-h-screen ">
			<div className="flex justify-between mx-10 mt-20">
				<div className="text-black font-bold text-xl p-3">Projects</div>
				<div
					className="text-black font-bold text-xl cursor-pointer hover:bg-grey-white p-3 rounded-lg"
					onClick={() => {
						setOpen(true);
					}}
				>
					add project
				</div>
			</div>
			{Object.keys(projects).map((pkey, idx) => {
				const p = projects[pkey];
				return (
					<Project
						key={idx}
						title={p.title}
						description={p.description}
						deadline={p.deadline}
						state={p.state}
						phases={p.phases}
					/>
				);
			})}

			<Dialog open={open} maxWidth="md" fullWidth="md" onClose={() => {}} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Create new project</DialogTitle>
				<DialogContent>
					<AddProjectForm />
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							setOpen(false);
						}}
						color="secondary"
					>
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ProjectPage;
