Node.js backend

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Database operations

### Prisma Studio - database view and edit

```sh
npx prisma studio --schema=./src/db/prisma/schema.prisma
```

### Schema changes - updating the database

```sh
npx prisma migrate dev --schema=./src/db/prisma/schema.prisma
```
