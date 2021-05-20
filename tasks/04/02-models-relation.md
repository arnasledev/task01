# Daugiau modeliu

## 📝 Uzduotis

Susikurkite dar 2-3 modelius, kurie butu susije su Jusu dabartiniu modeliu. Pridekite i savo modelius id, created at, updated at, deleted at atributus.
Padarykite duomenu agregavima istraukiant parent ir child elementus per rest api requestus

### Platesnis paaiskinimas ir reikalavimai

Pavyzdys, kaip turetu atrodyti grazinamas objektas:

```typescript
{
    owner: {
        id,
        name,
        phone,
        streetAddress,
        animalsOwned: [
            {
                id,
                breed,
                name,
                age,
                diseaseHistory: [
                    {
                        id,
                        type,
                        description
                    }
                ]
            }
        ],
        createdAt,
        updatedAt,
        deletedAt
    }
}
```

Turetumete tureti endpoint'us, kuriuose galima issitraukti nurodyta koki duomenu juos agreguojant su stary, limit, order atributais.
