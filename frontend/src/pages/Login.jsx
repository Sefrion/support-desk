import { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const dispatch = useDispatch();

	const { user, isLoading, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	const handleSubmit = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password
		};

		dispatch(login(userData));
	};

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaSignInAlt /> Login
				</h1>
				<p>Please login to get support</p>
			</section>

			<section className='form'>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<input
							type='email'
							className='form-control'
							id='email'
							value={email}
							name='email'
							onChange={handleChange}
							placeholder='Enter your email'
							required
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							className='form-control'
							id='password'
							value={password}
							name='password'
							onChange={handleChange}
							placeholder='Enter password'
							required
						/>
					</div>
					<div className='form-group'>
						<button className='btn btn-block'>Submit</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
