import { createSelector } from 'reselect';


const selectDirectory = state => state.directory;

export const selectDirectorySelectons = createSelector(
    [selectDirectory],
    directory => directory.sections
);