//console.log(`TESTING`)
//console.log(OL)

//console.log(LI);

//create an async function 
const partyData = async () => {
   //fetch the API
     const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-FTB-ET-WEB-FT/events`);
     //make the API data usable with .json()
     const eventData = await response.json();
     console.log(eventData)
     
        //   //map through the data array to pull the object key values
        const partyName = eventData.data.map((party) =>{
          return party.name
        });
        const partyLocation = eventData.data.map((party) =>{
          return party.location
        });
     
        const partyDate = eventData.data.map((party) =>{
          return party.date
        });
        const partyDescription = eventData.data.map((party) =>{
          return party.description 
        })
        console.log(partyLocation)
        console.log(partyName)
        console.log(partyDate)
        console.log(partyDescription)
        
        //grab the ul
        const ul = document.querySelector(`ul`);
        
        for (let i=0; i < Array.length; i++){
          
          //create a li 
          const LI = document.createElement(`li`);
          
            LI.innerHTML =`
            <h2>${partyName[i]}</h2>
            <p>The date is ${partyDate[i]}</p>
            <p>The location is ${partyLocation[i]}</p>
            <p>${partyDescription[i]}</p>
          `
          //append the LI to the ol to display on the page 
          ul.append(LI);
        };
           };
    partyData();
     


  

