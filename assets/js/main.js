const team = [
    {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'image': 'wayne-barnett'
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'image': 'angela-caroll'
    },
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'image': 'walter-gordon'
    },
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'image': 'angela-lopez'
    },
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'image': 'scott-estrada'
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'image': 'barbara-ramos'
    }
];


for (i = 0; i < team.length; i++) {
    for ( key in team[i]) {
        console.log(`${key}=>${team[i][key]}`)
    }
}

for(i=0;i<team.length; i++){
    document.getElementById('container').innerHTML +=(`<div class="card col">
        <img src="./assets/img/${team[i]['image']}.jpg" class="card-img-top" alt="portrait"/>
        <div class="card-body">
            <h3 class="card-title text-center">${team[i]['name']}</h3>
            <p class="card-text text-center fw-lighter">${team[i]['role']}</p>
        </div>
    </div>`)
}