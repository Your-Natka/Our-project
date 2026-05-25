const BASE_URL =
  'https://your-energy.b.goit.study/api';

export async function addRating(
  exerciseId,
  body
) {
  const response = await fetch(
    `${BASE_URL}/exercises/${exerciseId}/rating`,
    {
      method: 'PATCH',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const errorData =
      await response.json();

    throw {
      status: response.status,
      message: errorData.message,
    };
  }

  return response.json();
}