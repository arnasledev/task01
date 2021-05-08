# Middlewares

## 📝 Uzduotis

Implementuoti Jusu API endpoint'u validacijas.

### Platesnis paaiskinimas ir reikalavimai

Angliskai, kadangi lietuviskai tai skamba apgailetinai:
you want to validate the data sent there when you are doing a request to your endpoint and the endpoint is responsible for new object creation. So when you are sending the data you want to make sure it's valid and it fits your requirements - age, height, one of your ENUM values, etc... Use yup package and check if that data is valid. Keep OOP structure and create middlewares that suits your needs at best.
