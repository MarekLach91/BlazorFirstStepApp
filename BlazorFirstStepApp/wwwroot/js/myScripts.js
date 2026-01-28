window.myScripts = {
    getTransactions: function () {
        return [
            {
                "id": 1,
                "firstName": "Mateusz",
                "lastName": "Kowalski",
                "date": "2026-01-27T14:30:00",
                "amount": 250.50
            },
            {
                "id": 2,
                "firstName": "Anna",
                "lastName": "Nowak",
                "date": "2026-01-27T12:15:00",
                "amount": 1200.00
            },
            {
                "id": 3,
                "firstName": "Piotr",
                "lastName": "Wiśniewski",
                "date": "2026-01-26T18:45:00",
                "amount": 45.99
            },
            {
                "id": 4,
                "firstName": "Zofia",
                "lastName": "Wójcik",
                "date": "2026-01-26T10:20:00",
                "amount": 890.00
            },
            {
                "id": 5,
                "firstName": "Jakub",
                "lastName": "Kowalczyk",
                "date": "2026-01-25T16:10:00",
                "amount": 150.25
            },
            {
                "id": 6,
                "firstName": "Magdalena",
                "lastName": "Kamińska",
                "date": "2026-01-25T09:05:00",
                "amount": 320.00
            },
            {
                "id": 7,
                "firstName": "Michał",
                "lastName": "Lewandowski",
                "date": "2026-01-24T21:30:00",
                "amount": 55.00
            },
            {
                "id": 8,
                "firstName": "Katarzyna",
                "lastName": "Zielińska",
                "date": "2026-01-24T15:55:00",
                "amount": 2100.50
            },
            {
                "id": 9,
                "firstName": "Tomasz",
                "lastName": "Szymański",
                "date": "2026-01-23T11:12:00",
                "amount": 120.00
            },
            {
                "id": 10,
                "firstName": "Agnieszka",
                "lastName": "Woźniak",
                "date": "2026-01-23T08:40:00",
                "amount": 99.99
            },
            {
                "id": 11,
                "firstName": "Paweł",
                "lastName": "Dąbrowski",
                "date": "2026-01-22T19:20:00",
                "amount": 430.00
            },
            {
                "id": 12,
                "firstName": "Barbara",
                "lastName": "Kozłowska",
                "date": "2026-01-22T14:15:00",
                "amount": 15.50
            },
            {
                "id": 13,
                "firstName": "Krzysztof",
                "lastName": "Jankowski",
                "date": "2026-01-21T17:30:00",
                "amount": 670.00
            },
            {
                "id": 14,
                "firstName": "Ewa",
                "lastName": "Mazur",
                "date": "2026-01-21T10:05:00",
                "amount": 88.00
            },
            {
                "id": 15,
                "firstName": "Jan",
                "lastName": "Wojciechowski",
                "date": "2026-01-20T13:45:00",
                "amount": 1250.00
            },
            {
                "id": 16,
                "firstName": "Małgorzata",
                "lastName": "Kwiatkowska",
                "date": "2026-01-20T09:20:00",
                "amount": 340.75
            },
            {
                "id": 17,
                "firstName": "Łukasz",
                "lastName": "Krawczyk",
                "date": "2026-01-19T20:10:00",
                "amount": 520.00
            },
            {
                "id": 18,
                "firstName": "Maria",
                "lastName": "Kaczmarek",
                "date": "2026-01-19T15:30:00",
                "amount": 210.00
            },
            {
                "id": 19,
                "firstName": "Marcin",
                "lastName": "Piotrowski",
                "date": "2026-01-18T12:00:00",
                "amount": 18.00
            },
            {
                "id": 20,
                "firstName": "Monika",
                "lastName": "Grabowska",
                "date": "2026-01-18T10:15:00",
                "amount": 460.00
            },
            {
                "id": 21,
                "firstName": "Adam",
                "lastName": "Zając",
                "date": "2026-01-17T18:40:00",
                "amount": 730.20
            },
            {
                "id": 22,
                "firstName": "Marta",
                "lastName": "Pawlak",
                "date": "2026-01-17T14:50:00",
                "amount": 95.00
            },
            {
                "id": 23,
                "firstName": "Robert",
                "lastName": "Michalski",
                "date": "2026-01-16T16:20:00",
                "amount": 110.00
            },
            {
                "id": 24,
                "firstName": "Natalia",
                "lastName": "Nowakowska",
                "date": "2026-01-16T11:30:00",
                "amount": 2500.00
            },
            {
                "id": 25,
                "firstName": "Grzegorz",
                "lastName": "Wieczorek",
                "date": "2026-01-15T09:10:00",
                "amount": 34.50
            },
            {
                "id": 26,
                "firstName": "Joanna",
                "lastName": "Jabłońska",
                "date": "2026-01-15T19:00:00",
                "amount": 145.00
            },
            {
                "id": 27,
                "firstName": "Szymon",
                "lastName": "Majewski",
                "date": "2026-01-14T13:25:00",
                "amount": 820.00
            },
            {
                "id": 28,
                "firstName": "Aleksandra",
                "lastName": "Adamczyk",
                "date": "2026-01-14T10:45:00",
                "amount": 59.90
            },
            {
                "id": 29,
                "firstName": "Rafał",
                "lastName": "Dudek",
                "date": "2026-01-13T17:15:00",
                "amount": 1100.00
            },
            {
                "id": 30,
                "firstName": "Karolina",
                "lastName": "Nowicka",
                "date": "2026-01-13T08:55:00",
                "amount": 215.30
            }
        ]
    },
    logMessage: function (msg) {
        console.log(msg);
    },

    showModal: (dialogId) => {
        document.getElementById(dialogId).showModal();
    },

    closeModal: (dialogId) => {
        document.getElementById(dialogId).close();
    }


};