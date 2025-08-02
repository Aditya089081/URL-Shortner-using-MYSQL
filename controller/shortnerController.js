import { nanoid } from 'nanoid';
import {
  loadLinks,
  saveLinks,
  getLinkByShortCode
} from '../model/modelController.js';

export const renderHome = async (req, res) => {
  res.render('index', { shortUrl: null });
};

export const handleShortner = async (req, res) => {
  const { url, shorten } = req.body;
  const shortId = shorten || nanoid(4);

  const host = req.headers.host;
  const shortUrl = `http://${host}/${shortId}`;

  try {
    await saveLinks({ shortcode: shortId, url });
    res.render('index', { shortUrl });
  } catch (err) {
    console.error('Error saving link:', err);
    res.status(500).send('Internal Server Error');
  }
};

export const handleRedirect = async (req, res) => {
  const shortId = req.params.shortId;

  try {
    const result = await getLinkByShortCode(shortId);

    if (result) {
      res.redirect(result.url);
    } else {
      res.status(404).send("Short URL not found");
    }
  } catch (err) {
    console.error('Error retrieving link:', err);
    res.status(500).send('Internal Server Error');
  }
};
