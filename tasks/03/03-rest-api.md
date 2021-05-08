# REST API ir API pasiekimas dockeryje

## 📝 Uzduotis

Naudojantis OOP principais sukurti klase, kuri inicijuos express serveri su "keliais" i Jusu atskaitos taskus. (routes). Pritaikyti port'a, kuris bus nurodytas Jusu ENV faile, kad butu naudojamas jusu docker'io compose faile ir exposintu Jusu API docker'io isoreje.

Antras uzduoties etapas yra panaudoti middlewares Jusu aplikacijoje. Sie middleware turetu buti suderinti tik su express serveriu kolkas ir turetu naudoti bazines funkcijas dirbant su rest API - json bei urlencoded.

### Saltiniai pasiskaitymui

- https://docs.docker.com/compose/compose-file/compose-file-v3/#expose
- https://stackoverflow.com/a/52664919

### Platesnis paaiskinimas ir reikalavimai

Vienintelis route'as, kuri Jus turite supportinti atlikus sia uzduoti, yra "/" (http://localhost:port/) ir padarius uzklausa i si route'a, turetu buti isprintinta "Hello world!".
