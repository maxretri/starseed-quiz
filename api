// api/save-starseed.js
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

export default async function handler(req, res) {
  // Enable CORS for your domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const {
      name,
      age,
      email,
      instagram,
      language,
      starseedType,
      scores
    } = req.body;

    // Validate required fields
    if (!name || !age || !email || !instagram) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    console.log('Saving to Notion:', { name, starseedType });

    // Create page in Notion database
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        'Name': {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        'Age': {
          number: parseInt(age),
        },
        'Email': {
          email: email,
        },
        'Instagram': {
          rich_text: [
            {
              text: {
                content: instagram,
              },
            },
          ],
        },
        'Language': {
          select: {
            name: language.toUpperCase(),
          },
        },
        'Starseed Type': {
          rich_text: [
            {
              text: {
                content: starseedType,
              },
            },
          ],
        },
        'Date': {
          date: {
            start: new Date().toISOString().split('T')[0],
          },
        },
        'Pleiadian': {
          number: scores.pleiadian || 0,
        },
        'Andromedan': {
          number: scores.andromedan || 0,
        },
        'Arcturian': {
          number: scores.arcturian || 0,
        },
        'Sirian': {
          number: scores.sirian || 0,
        },
        'Lyran': {
          number: scores.lyran || 0,
        },
        'Mintaka': {
          number: scores.mintaka || 0,
        },
        'Blue Ray': {
          number: scores.blueray || 0,
        },
        'Orion': {
          number: scores.orion || 0,
        },
        'Lemurian': {
          number: scores.lemurian || 0,
        },
        'Avian': {
          number: scores.avian || 0,
        },
        'Human': {
          number: scores.human || 0,
        },
      },
    });

    console.log('Successfully saved to Notion:', response.id);

    res.status(200).json({ 
      success: true, 
      message: 'Results saved successfully',
      pageId: response.id 
    });

  } catch (error) {
    console.error('Error saving to Notion:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to save results',
      error: error.message 
    });
  }
}
