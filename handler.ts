export const hello = async (event) => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: "Hello, World!",
      input: event,
    },
    null,
    2
  ),
});
