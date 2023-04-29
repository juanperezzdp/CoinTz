import { useEffect, useState } from 'react';
import SpinnerDavidhu from '../../Spiner/SpinnerDavidhu';
import ModalDatail from '../../Modal/ModalDatail';

const titles = ['#', '', 'Coin', 'Precio', 'Cambio de precio', '24h Volumen'];

function AppTableCrypto() {
	const [coinMarkets, setCoinMarkets] = useState([]);
	const [search, setSearch] = useState('');
	const [outTime, setOutTime] = useState(true);
	const [openModal, setOpenModal] = useState(false);
	const [dataC, setDataC] = useState(null);

	const searcher = e => {
		setSearch(e.target.value);
	};

	const results = !search
		? coinMarkets
		: coinMarkets.filter(data =>
				data.name.toLowerCase().includes(search.toLocaleLowerCase())
		  );

	useEffect(() => {
		const getMarkets = () => {
			fetch(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=1000&page=1&sparkline=false'
			)
				.then(res => res.json())
				.then(data => {
					setCoinMarkets(data);
					setOutTime(false);
				})
				.catch(err => {
					throw err;
				});
		};

		getMarkets();
	}, []);

	const handledetail = data => {
		handleOpenModal();
		setDataC(data);
	};

	const handleOpenModal = () => {
		setOpenModal(!openModal);
	};

	return (
		<div className='container'>
			<input
				id='table'
				type='text'
				placeholder='Busqueda Coins'
				className='form-control bg-dark text-light border-0 mt-4 text-center'
				value={search}
				onChange={searcher}
			/>

			{outTime ? (
				<SpinnerDavidhu />
			) : (
				<div className='table-responsive'>
					<ModalDatail
						openModal={openModal}
						handleOpenModal={handleOpenModal}
						dataC={dataC}
					/>

					<table className='table table-brand mt-4 table-hover mg-3'>
						<thead>
							<tr>
								{titles.map((title, index) => (
									<td key={index}>{title}</td>
								))}
							</tr>
						</thead>

						<tbody>
							{results &&
								results.map((data, index) => (
									<tr
										style={{ cursor: 'pointer' }}
										key={index}
										onClick={() => {
											handledetail(data);
										}}
									>
										<td>{index + 1}</td>

										<td>
											<img
												s
												src={data.image}
												alt={data.name}
												style={{ width: '1.5rem', borderRadius: '50%' }}
											/>
										</td>

										<td>{data.name}</td>

										<td>{data.current_price}</td>

										<td
											className={
												data.price_change_percentage_24h > 0
													? 'text-success'
													: 'text-danger'
											}
										>
											{data.price_change_percentage_24h}
										</td>
										<td>{data.total_volume}</td>
									</tr>
								))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
export default AppTableCrypto;
