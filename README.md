

## Demo
https://product-curd-portal.vercel.app

## Getting Started Development

  

fully cusomize prodction ready proudct CURD

  
create .env based on .env.example   
  

```bash

npm run dev

# or

yarn dev

# or

pnpm dev

```

  

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

  

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

  

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

  

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

  
  
  

## tecnology

 - [ ]  Reactjs
 - [ ]  Nextjs
 - [ ]  Tailwindcss
 - [ ]  React-query
 - [ ]  Apollo Server
 - [ ]  Graphql
 - [ ]  Postgresql
 - [ ]  Prisma
 - [ ]  react hook form


  


## Learn More

  

To learn more about Next.js, take a look at the following resources:

  

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

  

## Deploy on Vercel

  

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

  

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


  
  
  

## Using Docker

  

[Install Docker](https://docs.docker.com/get-docker/) on your machine.

Build your container: `docker build -t nextjs-docker .`.

Run your container: `docker run -p 3000:3000 nextjs-docker`.

  

You can view your images created with `docker images`.

  

### In existing projects

  

To add support for Docker to an existing project, just copy the `Dockerfile` into the root of the project and add the following to the `next.config.js` file:

  

```js

// next.config.js

module.exports = {

// ... rest of the configuration.

output: 'standalone',

}

```

  

This will build the project as a standalone app inside the Docker image.

  

## Deploying to Google Cloud Run

  

Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use `gcloud` on the command line.

Run `gcloud auth login` to log in to your account.

[Create a new project](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) in Google Cloud Run (e.g. `nextjs-docker`). Ensure billing is turned on.

Build your container image using Cloud Build: `gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld --project PROJECT-ID`. This will also enable Cloud Build for your project.

Deploy to Cloud Run: `gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --project PROJECT-ID --platform managed`. Choose a region of your choice.

  

- You will be prompted for the service name: press Enter to accept the default name, `helloworld`.

- You will be prompted for [region](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#follow-cloud-run): select the region of your choice, for example `us-central1`.

- You will be prompted to **allow unauthenticated invocations**: respond `y`.

  

Or click the button below, authorize the script, and select the project and region when prompted:

  

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run/?git_repo=https://github.com/ahmedelkordy409/product-curd-portal)