

export const selectUsers = state => state.users.users;
export const selectUsersLoading = state => state.users.loading;
export const selectUsersError = state => state.users.error;

export const selectFilteredUsers = state => state.users.filters
