const formatDate = date => {
	const options = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	};
	return new Intl.DateTimeFormat('ru-RU', options).format(new Date(date));
};

export default formatDate;
