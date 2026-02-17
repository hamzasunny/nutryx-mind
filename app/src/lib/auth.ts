const AUTH_TOKEN_KEY = 'auth_token';

export function isAuthenticated(): boolean {
  return Boolean(localStorage.getItem(AUTH_TOKEN_KEY));
}

export function signIn(token = 'demo-token'): void {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

export function signOut(): void {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}
