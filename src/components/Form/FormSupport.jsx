import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Envelope, X } from 'react-bootstrap-icons';
import Exito from '../../img/exito.png';
import './Form.scss';

function FormSupport() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [alert, setAlert] = useState(false);
	const [, setFormData] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = data => {
		setIsSubmitting(true);
		fetch('https://formsubmit.co/ajax/juanperezzdp@gmail.com', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(response => response.json())
			.then(data => {
				setFormData(data);
				setAlert(true);
				reset();
			})
			.catch(err => {
				throw err;
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<div className='header-form'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='title-container'>
					<div className='title'>
						<h4>Formulario de soporte tecnico</h4>
						<p>
							Este formulario busca solucionar tu problema en un plazo de 24 a
							48 horas hábiles. Respuesta rápida y eficiente.
						</p>
					</div>
					<Envelope className='Envelope' />
				</div>

				<div className='container-input'>
					<label htmlFor='name'>Nombre</label>
					<input
						type='text'
						id='name'
						{...register('name', { required: true })}
					/>
					{errors.name && <span>Por favor, ingrese su nombre.</span>}
				</div>

				<div className='container-input'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						{...register('email', {
							required: true,
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						})}
					/>
					{errors.email && errors.email.type === 'required' && (
						<span>Por favor, ingrese su email.</span>
					)}
					{errors.email && errors.email.type === 'pattern' && (
						<span>Por favor, ingrese un email válido.</span>
					)}
				</div>

				<div className='container-input'>
					<label htmlFor='subject'>Comenta el problema</label>
					<textarea
						type='text'
						id='subject'
						{...register('subject', { required: true })}
					/>
					{errors.subject && <span>Por favor, ingrese un asunto.</span>}
				</div>
				<div className='btn-container'>
					<button type='submit' disabled={isSubmitting}>
						{isSubmitting ? 'Enviando...' : 'Enviar'}
					</button>
				</div>
			</form>

			{alert && (
				<div className='modal-alert'>
					<div className='modal'>
						<div className='x-container'>
							<X className='x' onClick={() => setAlert(false)}>
								Cerrar
							</X>
						</div>

						<img className='shieldcheck' src={Exito} alt='exito' />
						<p style={{ color: 'black' }}>Enviado con éxito</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default FormSupport;
