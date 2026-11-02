const TIMEOUT_MS = 10000;

interface OutgoingMessage {
  senderEmail: string;
  subject: string;
  message: string;
}

/* Firebase loads only when someone actually sends a message.
   Rejects unless Firestore confirms it, so a lost message never looks sent. */
export async function sendMessage(message: OutgoingMessage) {
  if (!import.meta.env.VITE_FIREBASE_API_KEY) {
    throw new Error('Firebase settings are missing');
  }

  const [{ addDoc, collection, serverTimestamp }, { db }] = await Promise.all([
    import('firebase/firestore'),
    import('../../config/firebase'),
  ]);

  const write = addDoc(collection(db, 'messages'), {
    ...message,
    timestamp: serverTimestamp(),
    status: 'unread',
  });

  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error('Firestore did not respond')), TIMEOUT_MS);
  });

  await Promise.race([write, timeout]);
}
