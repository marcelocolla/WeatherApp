## Começando

Para conseguir iniciar o projeto é necessário possuir o ambiente configurado para React Native.

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash

WeatherApp
├── assets/
│ ├── fonts/
├── src/
│ ├── components/
│ │ └── atoms/
│ │ └── molecules/
│ │ └── organisms/
│ │ └── templates/
│ ├── helpers/
│ │ └── deviceInfo/
│ │ └── fonts/
│ │ └── storage/
│ │ └── theme/
│ │ └── ui/
│ │ └── waether/
│ │ └── index.js
│ ├── hooks/
│ ├── images/
│ ├── navigations/
│ ├── services/
│ └── App.js
└── ...

```

### Instalação

1. Para instalar e iniciar o app é bem simples, basta criar utilizando o comando:

```sh
# instalando as dependências do projeto
yarn
```

2. Depois das dependências instaladas podemos iniciar o projeto

```sh
# Iniciar app no iphone
yarn ios

# Iniciar app no iPad
yarn ipad

# Iniciar app no Android
yarn android
```

Com isso o projeto será iniciado sendo ele Android ou iOs, podendo ser instalado tanto para Smartphone quanto para Tablets.
