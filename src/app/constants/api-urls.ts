export const host = 'http://localhost:3000';

export const skillBaseUrl = () => `${host}/skills`;
export const skillByIdUrl = (id: string) => `${host}/skills/${id}`;
export const getCategoriesUrl = () => `${host}/skills/categories`;

export const loginUrl = () => `${host}/auth/login`;
export const logoutUrl = () => `${host}/auth/logout`;
export const sighupUrl = () => `${host}/auth/register`;
export const authStatusCheckUrl = () => `${host}/auth/status`;
export const restorePasswordUrl = () => `${host}/auth/restore-password`;
export const changePasswordUrl = () => `${host}/auth/change-password`;
