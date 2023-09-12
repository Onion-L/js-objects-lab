//nested object
const aCar = {
    owner : "Joe Bloggs",
    type : {
        make:'Toyota',
        model: 'Corolla',
        cc:'1.8'
    },
    registration: { year: 201, county: "WD", number: 1058 },
    mileage: 10000,
    colour:{
        exterior:'red',
        interior: {
            texture:'leather',
            shade:'cream'
        }
    }
  };
  
  console.log(aCar.owner);
  console.log(aCar.owner + ' drives a ' + aCar.type.make);
  
  //Reg. = 201-WD-1058.
  console.log(`Reg. = ${aCar.registration.year}-${aCar.registration.county}-${aCar.registration.number}`);
  //It is a red car, 10000 mileage, with leather interior..
  console.log(`It is a ${aCar.colour.exterior} car, ${aCar.mileage} mileage, with ${aCar.colour.interior.texture} interior.`);
