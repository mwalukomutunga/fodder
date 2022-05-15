import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
let user ={ id: 1, name: "J Smith", email: "jsmith@example.com" };
export default NextAuth({
providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "username", type: "text", placeholder: "Phone number" },
      password: {  label: "password", type: "password" }
    },
    async authorize(credentials, req) {
      // Add logic here to look up the user from the credentials supplied
      return await fetch("http://localhost:7065/api/token", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      }).then(async res => await res.json()).then(usr =>{
       return usr;
      })
    }
  })
],
})