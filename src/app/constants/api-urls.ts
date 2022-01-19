const host = 'http://localhost:3000';

export const skillBaseUrl = () => `${host}/skills`;
export const skillByIdUrl = (id: string) => `${host}/skills/${id}`;

export const loginUrl = () => `${host}/auth/login`;
