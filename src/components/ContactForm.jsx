import "../styling/components/ContactForm.scss";
import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../../public/email-sent-animation.json";

const ContactForm = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [isEmailValid, setIsEmailValid] = useState(false);

	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleInput = (e) => {
		switch (e.target.name) {
			case "name":
				setName(e.target.value);
				break;
			case "phone":
				setPhone(e.target.value);
				break;
			case "email":
				setEmail(e.target.value);
				break;
			case "message":
				setMessage(e.target.value);
				break;
			default:
				break;
		}
	};

	const validateEmail = (email) => {
		const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailPattern.test(email);
	};

	const [showConfirmation, setShowConfirmation] = useState(false);
	const confirmationRef = useRef();

	const handleSubmit = (e) => {
		if (!validateEmail(email)) {
			e.preventDefault();
			setIsEmailValid(false);
			return;
		}
		setIsEmailValid(true);
		setFormSubmitted(true);
		setShowConfirmation(true);

		setTimeout(() => window.location.reload(), 4000);
	};

	const closeConfirmation = () => {
		setShowConfirmation(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				confirmationRef.current &&
				!confirmationRef.current.contains(event.target)
			) {
				closeConfirmation();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div>
			<form
				className="contact-form"
				action="https://formsubmit.io/send/af89bfd6-5c16-427f-89af-1eb180185406"
				method="POST"
				onSubmit={handleSubmit}
			>
				<input
					name="_redirect"
					type="hidden"
					id="name"
					value="http://localhost:5173/contact"
				></input>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					onChange={handleInput}
					required
				/>
				<label htmlFor="phone">Phone:</label>
				<input type="tel" id="phone" name="phone" onChange={handleInput} />
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					name="email"
					onChange={handleInput}
					required
				/>

				<label htmlFor="message">Message:</label>
				<textarea id="message" name="message" onChange={handleInput} required />

				<input name="_formsubmit_id" type="text" style={{ display: "none" }} />

				<div className="submit-button-container">
					<input
						className="btn--small btn--orange"
						type="submit"
						value="SEND"
					/>
				</div>
			</form>

			{showConfirmation && (
				<div className="confirmation-popup" ref={confirmationRef}>
					<Lottie
						options={defaultOptions}
						height={140}
						width={140}
						speed={0.5}
					/>
					<div className="confirmation-popup__text">
						<h1>Mission accomplished</h1>
						<p>You're all set and the message is on its way!</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContactForm;
