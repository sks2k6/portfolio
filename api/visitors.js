export default async function handler(req, res) {
  const SUPABASE_URL = "https://sekwkutjnpxjfyydingf.supabase.co";
  const SUPABASE_KEY = "sb_publishable_vB-0YmSAQx2f-h2n3DFLvQ_XS-iHby3";

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/visitors?select=*&order=created_at.desc`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      }
    );

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
