const countriesEndpoint = 'https://restcountries.eu/rest/v2/all'
const container = document.querySelector('.countries-container')

fetch(countriesEndpoint)
	.then(function(request) {
		return request.json()
	})
	.then(function(data) {
		console.log(data[0])
		data.forEach(function(country) {
			const countryCard = document.createElement('div')
			countryCard.classList.add('country-card')

			const cardImage = document.createElement('img')
			cardImage.classList.add('card-image')
			cardImage.src = country.flag

			const cardTitle = document.createElement('h3')
			cardTitle.classList.add('card-title')
			cardTitle.textContent = country.name

			const cardContent = document.createElement('p')
			cardContent.classList.add('card-content')
			cardContent.textContent = 'Native Name: ' + country.nativeName

			countryCard.appendChild(cardImage)
			countryCard.appendChild(cardTitle)
			countryCard.appendChild(cardContent)

			container.appendChild(countryCard)
		})
	})
