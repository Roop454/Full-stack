import React, { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setSubmitted(true);
		// Reset after 2 seconds
		setTimeout(() => {
			setFormData({ name: "", email: "", message: "" });
			setSubmitted(false);
		}, 2000);
	};

	return (
		<div>
			<h2>Contact</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name</label>
					<input name="name" value={formData.name} onChange={handleChange} />
				</div>
				<div>
					<label>Email</label>
					<input name="email" value={formData.email} onChange={handleChange} />
				</div>
				<div>
					<label>Message</label>
					<textarea name="message" value={formData.message} onChange={handleChange} />
				</div>
				<button type="submit">Send</button>
			</form>
			{submitted && <p>Form submitted!</p>}
		</div>
	);
}
