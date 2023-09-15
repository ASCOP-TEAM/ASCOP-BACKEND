module.exports = {
  myJob: {
    task: async ({ env }) => {

      const backendUrl = process.env.BACKEND_URL || undefined;
      const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/2023.5.8' } };


      try {

        if (!backendUrl) {
          console.error("failed backend url was not assigned to environment variable")
        }

        const res = await fetch(backendUrl, options)

        if (res.status === 200) {
          console.log("server restardted 🚀")
        } else {
          console.error(`failed to restart server code 🦖: ${res.status}`)
        }

      } catch (err) {
        console.error(err.message);
      }
    },
    options: {
      // Every minute
      rule: "*/1 * * * *",
    },
  },
};
