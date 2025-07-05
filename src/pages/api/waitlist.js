import mailjet from 'node-mailjet';

export const prerender = false;

// Use the recommended Client class for node-mailjet v6+
const mj = new mailjet.Client({
  apiKey: import.meta.env.MAILJET_API_KEY,
  apiSecret: import.meta.env.MAILJET_SECRET_KEY,
});

export async function POST({ request }) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== 'string') {
      return new Response(JSON.stringify({ success: false, error: 'Invalid email.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const listId = import.meta.env.MAILJET_LIST_ID;

    await mj
      .post('contactslist', { version: 'v3' })
      .id(listId)
      .action('managecontact')
      .request({
        Email: email,
        Action: 'addnoforce',
      });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: err.message || 'Failed to add to waitlist.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
} 