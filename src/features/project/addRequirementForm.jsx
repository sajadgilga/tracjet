import React, { useState } from 'react';

import { Formik, Form, useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ProjectPriorities } from './../../redux/slices/projectSlice';

const MyTextInput = ({ label, type, ...props }) => {
	const [ field, meta ] = useField(props);
	return (
		<div>
			<TextField margin="dense" label={label} fullWidth className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
		</div>
	);
};

const AddRequirementForm = () => {
	return (
		<Formik
			initialValues={{
				name: '',
				point: 0,
				priority: ProjectPriorities.MEDIUM
			}}
			// validationSchema={}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
			}}
		>
			<Form>
				<MyTextInput label="name" name="name" type="text" />
				<MyTextInput label="point" name="point" type="text" />
				<MyTextInput label="priority" name="priority" type="text" />
				<Button type="submit" color="primary" variant="contained" fullWidth>
					Submit
				</Button>
			</Form>
		</Formik>
	);
};

export default AddRequirementForm;
