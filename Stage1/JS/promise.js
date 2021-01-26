function getLastNames(firstName, people) {
    
    return new Promise((resolve, reject) => {
        let lastNames = [];
        for(names of people){
            if (names.firstName == firstName){
                lastNames.push(names.lastName);
            }
        }
        if (lastNames.length > 0){
            lastNames.sort();
            resolve(lastNames);
        }
        else{
            reject("Invalid");
        }
    })

    
}

module.exports = getLastNames;
people = [

        {

            firstName: 'David',

            lastName: 'Dobrick'

        },

        {

            firstName: 'David',

            lastName: 'Beckham'

        },

        {

            firstName: 'Chris',

            lastName: 'Lee'

        },

        {

            firstName: 'James',

            lastName: 'Bond'

        },

    ]
console.log(getLastNames('David1', people));