describe("DeepClone", function() {

    describe("Deep clone the first simple object", function() {
        const obj = {
            name: "Paddy",
            address: {
                town: "Lerum",
                country: "Sweden"
            }
        };
        const clonedObj = DeepClone(obj);

        it("Clone the first object", function () {
            assert.deepEqual(obj, clonedObj);
        });

        it("Modify the fisrt objet and eqal it with cloned. Should not be equal.", function () {
            obj.name = "User";
            assert.notDeepEqual(obj, clonedObj);
        });
    });


    describe("Deep clone the second object with sub objects", function() {
        const obj = {
            name: "Paddy",
            address: {
                town: "Lerum",
                country: "Sweden"
            },
            contacts: {
                phone: "8 999 999 99 99",
                social: {
                    twitter: "http://twitter",
                    linkedin: "https://linkedin/"
                }
            }
        };
        const clonedObj = DeepClone(obj);

        it("Clone the second object with sub objects", function () {
            assert.deepEqual(obj, clonedObj);
        });

        it("Modify the fisrt objet and eqal it with cloned. Should not be equal.", function () {
            obj.name = "User2";
            assert.notDeepEqual(obj, clonedObj);
        });
    });


    describe("Deep clone the third object with sub array", function() {
        const obj = {
            name: "Paddy",
            address: {
                town: "Lerum",
                country: "Sweden"
            },
            objectWithArray:{
                name: "just string",
                anArray: [1,2,3,4,5]
            }
        };
        const clonedObj = DeepClone(obj);

        it("Clone the third object with sub array", function () {
            assert.deepEqual(obj, clonedObj);
        });

        it("Modify the fisrt objet and eqal it with cloned. Should not be equal.", function () {
            obj.name = "User3";
            assert.notDeepEqual(obj, clonedObj);
        });
    });


    describe("Deep clone the fourth object with crazy data of arrays, function, strings etc.", function() {
        const obj = {
            name: "Paddy",
            address: {
                town: "Lerum",
                country: "Sweden"
            },
            objectWithArray:{
                name: "just string",
                anArray: [
                    1,
                    function f() {  },
                    "string",
                    {
                        name: "name",
                        obj:{
                            key: "value"
                        }
                    },
                    [1,2],
                    5
                ]
            }
        };
        const clonedObj = DeepClone(obj);

        it("Clone the fourth object with crazy data of arrays, function, strings etc.", function () {
            assert.deepEqual(obj, clonedObj);
        });

        it("Modify the fourth crazy objet and eqal it with cloned. Should not be equal.", function () {
            obj.name = "User4";
            assert.notDeepEqual(obj, clonedObj);
        });
    })

});


describe("List of partners", function() {
    const office = { lat: 51.515419, lng: -0.141099 };
    //console.log(jsonData);
    const filteredOffices = ListOfPartners(jsonData, office);
    it("Offices locate in London", function () {
        filteredOffices.forEach(office => {
            assert.ok(office.match(/london/i));
        })
    });
});
