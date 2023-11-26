// netlify/functions/sendEmail.js
import sendEmail from "../../src/utils/query/utils";

exports.handler = async function (event, context) {
  // Your function logic here, e.g., parsing event.body
  const emailData = JSON.parse(event.body);

  try {
    const result = await sendEmail(emailData);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Internal Server Error",
      }),
    };
  }
};
