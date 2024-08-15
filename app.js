

function item(){
     const foodName = document.getElementById('putname').value;

     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
     .then( res => res.json())
     .then( data => {
        const itemName = data.meals;
        

        if(itemName){
            const mainDiv = document.getElementById('main-div');
            const mainDiv1 = document.getElementById('main-div1');
             itemName.forEach(item => {
                const div = document.createElement('div');

                div.style.backgroundColor = "indianred";
                div.style.padding = "16px";
                div.style.margin = "25px";
                div.style.borderRadius = "8px";
                div.style.borderRadius = "14px";
                div.style.textAlign = "center";

                div.innerHTML = `
                   <h1> ${item.strMeal}</h1>
                   <p> ${item.strInstructions}</p>
                   <img src=" ${item.strMealThumb}" width="70%">
                    <p> Watch Here
                          <a href="${item.strYoutube}">Video</a>
                    </p>
                `;
                mainDiv1.appendChild(div);
                mainDiv.appendChild(mainDiv1);
                
             });
             document.getElementById('putname').value = '';
        }
        else{

            const mainDiv = document.getElementById('main-div');
            const div2 = document.createElement('div');
            const h2 = document.createElement('h2');
            h2.innerText = "Your Food Item Doesn't Valid";

            const p = document.createElement('p');
            p.innerText = "Please! Try again .";

            div2.appendChild(h2);
            div2.appendChild(p);
            mainDiv.appendChild(div2);
        }
     })
     foodName.value = '';
      
}