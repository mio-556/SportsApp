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

## Allow port 80 without sudo using setcap

Let’s avoid sudo entirely and still run on port 80 by allowing node to bind to it:

```sh
sudo setcap 'cap_net_bind_service=+ep' $(which node)
```

This command gives the node binary permission to bind to ports <1024 without needing sudo.

Then you can just run:

```sh
npm run dev -- --port 80
```

💡 This is the safest, most convenient method for dev.

🔁 Bonus: Add to your script
If you want to keep port 80 always:

In package.json:

```sh
"scripts": {
"dev": "vite --port 80"
}
```

Then simply:

```sh
npm run dev
```

reverting (where you gave Node permission to bind to privileged ports) is easy and safe!

You just need to remove the capability you previously set with setcap.

🔁 Revert setcap on node
Run this command:

```sh
sudo setcap -r $(which node)
```

This removes all special capabilities from the node binary — including the one that allowed it to bind to ports <1024 like port 80.

✅ To verify it's gone:
You can check whether node still has any capabilities:

```sh
getcap $(which node)
```

If it returns nothing, you're back to default.
