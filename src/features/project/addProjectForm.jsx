import React, { useState } from 'react';

import { Formik, Form, useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import AddPhaseForm from './addPhaseForm';
import { useDispatch } from 'react-redux';
import { addProject } from '../../redux/slices/projectSlice';

const MyTextInput = ({ label, type, ...props }) => {
	const [ field, meta ] = useField(props);
	return (
		<div>
			<TextField margin="dense" label={label} fullWidth className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
		</div>
	);
};

const MyDatePicker = ({ label, ...props }) => {
	const [ field, meta ] = useField(props);
	const [ selectedDate, setSelectedDate ] = useState(null);
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				disableToolbar
				variant="inline"
				format="MM/dd/yyyy"
				id={label}
				KeyboardButtonProps={{
					'aria-label': 'change date'
				}}
				margin="dense"
				label={label}
				fullWidth
				className="text-input"
				{...field}
				{...props}
				value={selectedDate}
				onChange={(e) => {
					try {
						field.onChange(props.name)(e.toISOString());
					} catch (err) {}
					setSelectedDate(e);
				}}
			/>
			{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
		</MuiPickersUtilsProvider>
	);
};

const AddProjectForm = ({ close }) => {
	const [ open, setOpen ] = useState(false);
	const dispatch = useDispatch();
	const [ , update ] = useState(0);

	return (
		<Formik
			initialValues={{ title: '', description: '', deadline: '', notificationOffset: 7, phases: [] }}
			// validationSchema={}
			onSubmit={(values, { setSubmitting }) => {
				values.startDate = new Date().toISOString();
				dispatch(addProject(values));
				close();
			}}
		>
			{(props) => {
				const { values } = props;
				return (
					<Form>
						<MyTextInput label="title" name="title" type="text" />
						<MyTextInput label="description" name="description" type="text" />
						<MyDatePicker label="deadline" name="deadline" type="text" />
						<MyTextInput label="notificationOffset" name="notificationOffset" type="text" />
						{values.phases.map((phase, idx) => (
							<div className="w-full my-2 flex flex-row justify-center" key={idx}>
								<div className="font-bold text-center">{phase.title}</div>
								<div
									className="text-extreme ml-5"
									style={{ cursor: 'pointer' }}
									onClick={() => {
										values.phases.splice(values.phases.indexOf(phase));
										update(values.length);
									}}
								>
									remove
								</div>
							</div>
						))}
						<Button
							fullWidth
							onClick={() => {
								setOpen(true);
							}}
						>
							add new phase
						</Button>
						<Button type="submit" color="primary" variant="contained" fullWidth>
							Submit
						</Button>

						<Dialog
							open={open}
							maxWidth="sm"
							fullWidth="sm"
							onClose={() => {}}
							aria-labelledby="form-dialog-title"
						>
							<DialogTitle id="form-dialog-title">Create new phase</DialogTitle>
							<DialogContent>
								<AddPhaseForm
									submit={(phase) => {
										values.phases.push(phase);
										setOpen(false);
									}}
								/>
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
					</Form>
				);
			}}
		</Formik>
	);
};

export default AddProjectForm;
