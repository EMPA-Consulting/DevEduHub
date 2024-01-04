# Next.js Full Course Demo

This repo contains the project code for the [Full Next.js App Router Course](https://fireship.io/courses/nextjs)

## 1. 🛠️ Project Setup and Organization

### 📁 Pages Directory

The most straightforward way to create routes in Next.js is by using the `pages` directory. Each file in this directory becomes a route based on its file name. This is the standard method and is widely used in many Next.js projects.

Example: `pages/about.tsx` becomes the `/about` route.

### 🗂️ Separate Directories

For larger projects, you might prefer to create separate directories for each route. Inside each directory, include a `page.tsx` file. This method helps to keep the project organized and maintainable, especially when each page has associated components or modules.

Example: `pages/blog/index.tsx` becomes the `/blog` route.

### 🧩 Components

Components are reusable pieces of your website. You can create a component once (like `NavMenu`), and then use it in multiple places across your site.

Example: `<NavMenu />`

### 🖼️ Layouts

Layout components (like `RootLayout`) are a way to share common structure across multiple pages (like a navigation bar and footer). The `children` prop is used to display the unique content of each page.

Example: `<RootLayout><HomePage /></RootLayout>`

### 🔗 Link

The `Link` component from Next.js is used to create links to other pages in your app. It helps with performance by preloading the linked page when the link is visible in the viewport.

Example: `<Link href="/about">About Us</Link>`

### 🖥️ Server-Side Rendering (SSR)

By default, Next.js pre-renders every page on the server. This means it generates the HTML for each page in advance, instead of making everything happen in the browser. This is great for performance and SEO.

### 📄 Static Generation (SG)

For pages with infrequent data changes, Next.js can generate the HTML at build time, serving the same HTML to every visitor. This is even more performance-efficient. You can force static generation by exporting `const dynamic = 'force-static'` in your code.

Example: `export const dynamic = 'force-static'`

### 🚀 Dynamic Routes

Dynamic routes in Next.js allow you to create pages that have variable parts. You define a dynamic route by adding square brackets `[]` around a part of the file name in the `pages` directory. 

Example: `pages/blog/[slug].tsx` is a dynamic route where `slug` is a variable part of the URL.

### 📚 Accessing Route Parameters

Inside your page component (like `BlogPostPage`), Next.js provides the value of the route parameter (`slug` in this case) through a `params` object. You can access it with `params.slug`.

Example: `const { slug } = params`

### 🌐 API Routes

Next.js allows you to create API routes by adding `.ts` or `.js` files inside the `pages/api` directory. Each file becomes an API endpoint that you can fetch data from. 

Example: `pages/api/content.ts` becomes the `/api/content` endpoint.

### ⏭️ Incremental Static Regeneration

This is a feature in Next.js where, even after a page is generated statically at build time, it can be regenerated (re-built) in the background as traffic comes in. This is controlled by the `revalidate` option in `getStaticProps`. This is useful for data that changes occasionally, but not frequently.

Example: `revalidate: 1`

### 🖼️ Image Optimization in Next.js

Next.js has a built-in feature for optimizing images. This can make your website faster and use less bandwidth. However, by default, this only works for images that are stored on your own website.

Example: `<Image src="/path/to/image.jpg" alt="Description" width={500} height={300} />`

### 🌐 Remote Images

If you want to optimize images that are stored on a different website (remote images), you need to add a special configuration in your `next.config.js` file. This tells Next.js that it's okay to download and optimize these images.

Example: 
```javascript
module.exports = {
  images: {
    domains: ['example.com'],
  },
}


## 2. 🔐 User Authentication

### 2.1 🛠️ Auth.js setup

NextAuth.js is an open-source authentication library for Next.js applications. It's designed to be easy to implement and supports various authentication methods, including OAuth, email/password, and third-party providers like Google, Facebook, etc. It also supports JWT and database sessions.

NextAuth.js provides a complete solution for Next.js applications to handle user registration, authentication, session management, and supports various databases.

To install NextAuth.js, you can use npm (Node Package Manager). Remember to install it in the same directory where your Next.js application is located.

Example: `npm install next-auth`


### 2.2 🌐 SessionProvider

This is a React context provider from NextAuth.js. It allows you to access session data in any component in your application. However, it's not recommended to use it directly in your layout component because it could lead to unnecessary re-renders and performance issues. Instead, you should use it at a higher level in your component tree (like in AuthProvider.tsx).

Example: 
```jsx
<SessionProvider session={pageProps.session}>
  <Component {...pageProps} />
</SessionProvider> ```


## 3. 📚 Data Fetching Methods

Next.js offers a variety of data fetching methods, each tailored to different use cases:

### 🏗️ getStaticProps

This method fetches data at build time and generates static HTML. It is perfect for pages that can be pre-rendered ahead of a user's request. You can also add revalidation options to rebuild the page at runtime. `getStaticProps` runs at build time in production and inside every request in development.

```jsx
export async function getStaticProps(context) {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}
```
👆 In this example, we're fetching data from an API at build time and passing it as props to our page component.


### 🔄 getServerSideProps

This method fetches data on each request. It's ideal for pages that display frequently updated data, and the page cannot be built ahead of a user's request.

```jsx
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }, // will be passed to the page component as props
  }
}
```
👆 Here, we're fetching data on each request and passing it as props to our page component.

### 🗺️ getStaticPaths

This method specifies dynamic routes to pre-render based on data. If a page has dynamic routes and uses `getStaticProps`, it needs to define a list of paths that have to be rendered to HTML at build time.

```jsx
export async function getStaticPaths() {
  const res = await fetch('https://api.example.com/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  return { paths, fallback: false }
}
```
👆 In this example, we're fetching a list of posts and defining their ids as paths to be pre-rendered at build time.

## 🖥️ Data Fetching with React Server Components

Next.js 13 introduces support for React Server Components. Server Components allow you to write components that render on the server and send HTML to the client. The client then hydrates these components into fully interactive React components. In the Next.js 13.4 update, Server Components are not included in the JavaScript bundle for the browser. Client components are automatically code split by default.

```jsx
// This is an async Server Component
export default async function Page() {
  const data = await fetch('https://api.example.com/data').then(res => res.json());

  return <main>{/* ... */}</main>;
}
```
👆 This is an example of an asynchronous Server Component that fetches data and returns a React component.

## 🌐 Extended Fetch API

The native fetch Web API has been extended in React and Next.js. It automatically dedupes fetch requests and provides one flexible way to fetch, cache, and revalidate data at the component level. This is part of the new features introduced in Next.js 13.4.

```jsx
// This request should be cached until manually invalidated.
fetch(URL, { cache: 'force-cache' });

// This request should be refetched on every request.
fetch(URL, { cache: 'no-store' });

// This request should be cached with a lifetime of 10 seconds.
fetch(URL, { next: { revalidate: 10 } });
```
👆 These examples demonstrate different caching strategies with the extended fetch API.

4. ## 🚀 Advanced

### 🎛️ Server Actions in Next.js

Next.js has introduced a feature called server actions. This simplifies server-side coding by allowing you to write server-side functions alongside your server components. This eliminates the need for creating individual API routes for data mutation. It integrates seamlessly with the React front-end without needing to completely reload the page like traditional PHP apps. Please note that the Server Actions feature is still in alpha stage, meaning it's being tested and may not be fully stable or feature-complete.

### 📝 Handling Form Submissions and Database Updates

Server actions in Next.js can be used to handle form submissions and update data in your database. This simplifies the process of creating an API route and a client component.

### 📨 Passing Form Data to Server-side Functions

Next.js allows you to pass form data to server-side functions using the "action" property. You can define async functions with the "use server" directive.

### 🔄 Updating Form Data

You can update the database with form data through a mutation in Next.js. This can be done using the revalidate path to automatically update the UI. You can also add a loading component for a skeleton UI.

### 🎯 Performing Multiple Actions on the Same Form

You can perform multiple actions on the same form in Next.js. For example, one button can update the database and redirect to the main profile page, while another button can perform any other desired action.

### 🌐 Defining Server Actions Outside of Server Component

Server actions can be defined outside of the server component and reused in any component. However, they can only be triggered from elements inside a form.

### 🪝 Use Transition Hook

The client component uses the use transition hook to execute server actions and update state without blocking the UI.

### 🔄 Using Server Components and Actions with Optimistic Updates

Server components simplify the process of running mutations and refetching data. Actions can support optimistic updates to reduce latency. The Hook combines use transition and use reducer to update the UI instantly and sync up the True Value when the server responds. You can define a reducer function to update the latest value and use server actions to update a value that we think the light count will be, making the server look extremely fast.