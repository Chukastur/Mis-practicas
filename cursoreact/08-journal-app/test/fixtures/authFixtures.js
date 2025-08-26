export const initialState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null  
};

export const authenticatedState = {
  status: 'authenticated',
  uid: '123ABC',
  email: 'test@example.com',
  displayName: 'Test User',
  photoURL: 'https://example.com/photo.jpg',
  errorMessage: null
};

export const notAuthenticatedState = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
};

export const demoUser = {
  status: 'authenticated',
  uid: 'ABC123',
  email: 'demo@example.com',
  displayName: 'Demo User',
  photoURL: 'https://example.com/photo2.jpg',
  errorMessage: null
};

