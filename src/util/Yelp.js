const apiKey = "o-GQ-kG_P3G6khwqsGowdjRaWhyoUS2XQGc3hGmRmr5dccWibO5v-IDRgcgPJ0VYmuZYzq7Agsplbkcemfrq6lGraEn7LDQYskZ4VwVU_UkAkhmmChMz8NTVeortW3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {Authorization: `Bearer ${apiKey}`}
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].alias,
            rating: business.rating,
            reviewCount: business.review_count
          }
        });
      } else {
        console.log("Handle error!");
      }
    });
  }
};

export default Yelp;
