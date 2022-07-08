import { lazy } from 'react';

export const CreateLazyChunk = pageName => {
  return lazy(() =>
    import(`../pages/${pageName}`).then(module => ({
      default: module[pageName],
    })),
  );
};
