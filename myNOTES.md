## Project structure tips

Recommended Practices for database handling

- ✅ Use services for database logic.
- ✅ Use controllers for HTTP request handling.
- ✅ Centralize the Prisma client in /config/database.ts for better reusability.
- ✅ Separate business logic from routes and controllers for scalability.

Using generics in store definition

- ✅ Scalable: Easily extend with new types or logic.
- ✅ Organized: Clear separation between types, logic, and data.
- ✅ Reusable: The types can now be used in multiple components, stores, or utilities.
