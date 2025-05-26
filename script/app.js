async function getAPIData(url) {
    const response = await fetch(url);
    const data = await response.json();  
    return data;
}

const resetPage = () => {
    setHTMLNullById('meals');
    setHTMLNullById('meal-details');
    hideTagById('meal-details');

    setHTMLNullById('errors');
    hideTagById('errors');
}

const setHTMLNullById = id => {
    document.getElementById(id).innerHTML = null;
}

const hideTagById = id => {
    document.getElementById(id).style.display = 'none';
}

const setErrorText = searchText => {
    const errorText = `
        <p>Somida no disponible '${searchText}'.</P>
    `;
    const errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = errorText;
    errorDiv.style.display = 'block';
}


const searchMeal = () => {
    const searchText = document.getElementById('search-input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    const data = getAPIData(url);

        data.then(allMeals => {

        resetPage();

        if(allMeals.meals === null || allMeals.meals === undefined){
            setErrorText(searchText);
        }
        else{
            const mealsDiv = document.getElementById('meals'); 
            const mealsObject = allMeals.meals; 

            mealsObject.forEach(meal => {
                const perMealDiv = document.createElement('div');
                perMealDiv.className = 'per-meal-div';
                perMealDiv.innerHTML = `
                        <img src="${meal.strMealThumb}">
                        <p>${meal.strMeal}</p>
                        <input id="meal-id" type="hidden" value="${meal.idMeal}">
                        <p> Categoría: ${meal.strCategory}</p>
                        <p> Tipo de Comida:  ${meal.strArea}</p>
                    
                        
                        
                `;
                mealsDiv.appendChild(perMealDiv);
            });
        }
    });
}

document.getElementById('meals').addEventListener('click', event => {
    const clickedMeal = event.target.parentNode.children;
    const clickedMealId = clickedMeal[2].value;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedMealId}`;
    const data = getAPIData(url);

    data.then(allMeals => {
        const singleMealObject = allMeals.meals[0];
        const mealDetailsDiv = document.getElementById('meal-details');

        mealDetailsDiv.innerHTML = `
            <img src="${singleMealObject.strMealThumb}">
            <h2>${singleMealObject.strMeal}</h2>
            <h4>Ingredients</h4>
            <a href="${singleMealObject.strYoutube}"target="_blank">Ver video en YouTube</a>

        `;

        const ul = document.createElement('ul');
        let i = 1;
        for( let property in singleMealObject){
            const propertyName = property.slice(0, property.length - 1);
            if(propertyName === 'strIngredient' && singleMealObject[property].length > 0) {
                const li = document.createElement('li');
                li.innerText = `${singleMealObject['strMeasure'+i]} ${singleMealObject[property]}`;
                ul.appendChild(li);
                i++;
            }
        };

        mealDetailsDiv.appendChild(ul);
        mealDetailsDiv.style.display = 'block';
        mealDetailsDiv.scrollIntoView();
    });
});